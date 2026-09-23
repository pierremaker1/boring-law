-- Droit fiscal · S7 : tags sur les questions (filtre de mode transversal), question de cours
-- rattachée (oral), modes du cours.

-- 1. Une question peut porter des tags (td, chiffres, oral-blanc, piege…) et se rattacher à une
--    question de cours d'oral (texte affiché dans la révision).
alter table questions
  add column if not exists tags text[],
  add column if not exists oral text;
create index if not exists questions_tags_idx on questions using gin (tags);

-- 2. Un mode peut filtrer par sous-types ET/OU par tags (null = pas de filtre).
alter table modes add column if not exists tags text[];

create or replace function _pick_questions(p_mode text, p_count int)
returns uuid[] language plpgsql as $$
declare
  m modes;
  v_theme text;
  v_subtypes text[];
  v_tags text[];
begin
  select * into m from modes where id = p_mode;
  if m.id is not null then
    v_theme := m.theme;
    v_subtypes := m.subtypes;
    v_tags := m.tags;
  else
    v_theme := split_part(p_mode, ':', 1);
    v_subtypes := case when split_part(p_mode, ':', 2) = '' then null else array[split_part(p_mode, ':', 2)] end;
    v_tags := null;
  end if;
  return (
    select coalesce(array_agg(id), '{}')
    from (
      select id from questions
      where theme = v_theme
        and (v_subtypes is null or subtype = any(v_subtypes))
        and (v_tags is null or tags && v_tags)
      order by random() limit p_count
    ) q
  );
end $$;
revoke execute on function _pick_questions(text, int) from public, anon, authenticated;

-- 3. La révision renvoie aussi la question de cours et les tags.
create or replace function get_review(p_token uuid)
returns json language plpgsql security definer set search_path = public as $$
declare
  pl players;
  g games;
begin
  pl := _player_from_token(p_token);
  select * into g from games where id = pl.game_id;
  if g.status = 'playing' and now() >= g.ends_at then
    perform _finalize_game(g.id);
    select * into g from games where id = g.id;
  end if;
  if g.status <> 'finished' then raise exception 'game_not_finished'; end if;

  return coalesce((
    select json_agg(json_build_object(
      'position', i.ord,
      'id', q.id,
      'external_id', q.external_id,
      'subtype', q.subtype,
      'difficulty', q.difficulty,
      'prompt', q.prompt,
      'choices', q.choices,
      'image_url', q.image_url,
      'correct_index', q.correct_index,
      'chosen_index', a.choice_index,
      'is_correct', a.is_correct,
      'explanation', q.explanation,
      'flag', q.flag,
      'disputed', q.disputed,
      'source', q.source,
      'oral', q.oral,
      'tags', coalesce(to_json(q.tags), '[]'::json)
    ) order by i.ord)
    from unnest(g.question_ids) with ordinality as i(qid, ord)
    join questions q on q.id = i.qid
    left join answers a on a.question_id = q.id and a.player_id = pl.id
  ), '[]'::json);
end $$;

-- 4. Modes du cours (les descriptions portent les effectifs de la banque au moment du seed).
insert into modes (id, course, theme, label, description, emoji, subtypes, tags, sort) values
  ('fiscal:full',        'Droit fiscal · S7', 'droit-fiscal-s7', 'Tout le programme',   '188 questions, tout le cours',                                            '📚', null, null, 20),
  ('fiscal:oral',        'Droit fiscal · S7', 'droit-fiscal-s7', 'Oral blanc',          'Une question par question de cours : le stock de l''oral en 50 QCM',   '🎤', null, array['oral-blanc'], 21),
  ('fiscal:td',          'Droit fiscal · S7', 'droit-fiscal-s7', 'Spécial TD',          'Ce que le chargé de TD a martelé : 66 questions',                        '🎯', null, array['td'], 22),
  ('fiscal:chiffres',    'Droit fiscal · S7', 'droit-fiscal-s7', 'Chiffres & articles', 'Articles, seuils, taux, durées : 105 questions',                    '🔢', null, array['chiffres'], 23),
  ('fiscal:pieges',      'Droit fiscal · S7', 'droit-fiscal-s7', 'Pièges',              'Deux notions voisines, une seule bonne : 94 questions',               '🪤', null, array['piege'], 24),
  ('fiscal:intro',       'Droit fiscal · S7', 'droit-fiscal-s7', 'Introduction',        'Définition de l''impôt, sources, abus de droit et fraude',                     '🏛️', array['intro'], null, 25),
  ('fiscal:ir-champ',    'Droit fiscal · S7', 'droit-fiscal-s7', 'IR : champ',          'Territorialité, domicile fiscal, foyer fiscal, caractères de l''IR',           '🗺️', array['ir-champ'], null, 26),
  ('fiscal:categories',  'Droit fiscal · S7', 'droit-fiscal-s7', 'Revenus catégoriels', 'Fonciers, RCM, plus-values immobilières, traitements et salaires, dirigeants', '💶', array['patrimoine','salaires'], null, 27),
  ('fiscal:bic',         'Droit fiscal · S7', 'droit-fiscal-s7', 'BIC',                 'Définition, principes, produits, charges, plus-values pro, régimes, BNC',      '🏭', array['bic-principes','bic-charges','bic-plus-values','bic-regimes'], null, 28),
  ('fiscal:liquidation', 'Droit fiscal · S7', 'droit-fiscal-s7', 'Liquidation',         'Les six étapes, quotient familial, réductions et crédits, paiement',           '🧮', array['liquidation'], null, 29),
  ('fiscal:tva',         'Droit fiscal · S7', 'droit-fiscal-s7', 'TVA',                 'Champ, territorialité, exigibilité et taux, déduction, déclaration',           '🧾', array['tva-champ','tva-territorialite','tva-exigible','tva-deductible'], null, 30)
on conflict (id) do update set course = excluded.course, theme = excluded.theme, label = excluded.label,
  description = excluded.description, emoji = excluded.emoji, subtypes = excluded.subtypes, tags = excluded.tags, sort = excluded.sort;
