# Contenu pédagogique

Comment les questions sont organisées, stockées, mélangées et affichées, et comment on ajoute un cours, un mode ou une correction. Pour le moteur de jeu (RPC, Realtime, fin de partie), voir [architecture](architecture.md) ; pour l'UI, voir [design-spec](design-spec.md) ; pour l'installation, le [README](../README.md).

Tout ce qui suit est vérifié dans le code au 2026-09-23 : `scripts/lib/load-questions.mjs`, `scripts/gen-seed-sql.mjs`, `scripts/seed-remote.mjs`, `supabase/migrations/0001_schema.sql`, `0002_functions.sql`, `0004_modes_and_end_rule.sql`, `0005_courses_modes_review.sql`, `0008_fiscal_tags_oral.sql`, `src/lib/subtype.ts`, `src/types.ts`, `src/hooks/useModes.ts`, `src/components/ReviewList.tsx`.

## 1. Inventaire actuel

| Thème (`questions.theme`) | Fichier source | Format | Questions | Sous-types | Modes en base |
|---|---|---|---:|---:|---|
| `geo` | `data/questions/geo.json` | simple | 406 | 8 (`capitale` 131, `drapeau` 150, `superficie` 40, `continent` 20, `fleuve` 20, `montagne` 15, `ocean` 15, `frontiere` 15) | `geo`, `geo:drapeau` |
| `histoire` | `data/questions/histoire.json` | simple | 252 | 11 (`antiquite`, `moyen-age`, `renaissance`, `xvii-xviii`, `revolution`, `empire-xix`, `ww1`, `entre-deux-guerres`, `ww2`, `guerre-froide`, `contemporain`) | `histoire` |
| `echr-anglais-s7` | `data/courses/echr-anglais-s7.json` (+ `.md`) | riche | 250 | 32 topics (voir §2.3) | `echr:full`, `echr:annales`, `echr:procedure`, `echr:articles`, `echr:theorie`, `echr:vocabulaire`, `echr:pieges` |
| `droit-fiscal-s7` | `data/courses/droit-fiscal-s7.json` (+ `.md`) | riche | 188 | 13 topics (voir §2.3) | `fiscal:full`, `fiscal:oral`, `fiscal:td`, `fiscal:chiffres`, `fiscal:pieges`, `fiscal:intro`, `fiscal:ir-champ`, `fiscal:categories`, `fiscal:bic`, `fiscal:liquidation`, `fiscal:tva` |

Soit 1 096 questions. Les seeds SQL de `geo`, `histoire` et `echr-anglais-s7` sont versionnés dans `supabase/migrations/0003_seed_<theme>.sql` (générés, ne pas éditer à la main). `0003_seed_droit-fiscal-s7.sql` doit s'appliquer **après** `0008_fiscal_tags_oral.sql`, qui crée les colonnes `tags` et `oral` qu'il insère (la banque elle-même a d'abord été poussée à distance par `scripts/seed-remote.mjs`, §6.1 étape 3).

Particularité du cours de droit fiscal : l'examen est un **oral** de trois questions de cours, pas un QCM. La banque porte donc un stock de 50 questions de cours et des tags transversaux (§3.4).

Pour recompter :

```bash
node --input-type=module -e "
import { loadQuestions } from './scripts/lib/load-questions.mjs'
for (const t of ['geo', 'histoire', 'echr-anglais-s7', 'droit-fiscal-s7']) console.log(t, loadQuestions(t).rows.length)
"
```

## 2. Organisation : thème → sous-type / tag → mode

### 2.1 Les quatre niveaux

| Niveau | Où | Rôle |
|---|---|---|
| **Thème** | `questions.theme` (text) | Une banque entière = un fichier JSON = un seed. C'est aussi le nom du fichier (`data/…/<theme>.json`). |
| **Sous-type** | `questions.subtype` (text) | Catégorie fine à l'intérieur du thème (`capitale`, `article-3`, `annales`…). Dans le format riche, c'est le `topic` de la question. Affiché en chip pendant la partie et dans la révision via `subtypeLabel()` (`src/lib/subtype.ts`). |
| **Tag** | `questions.tags` (`text[]`) | Étiquette transversale, indépendante du sous-type (`td`, `chiffres`, `oral-blanc`, `piege`). Une question en porte zéro, un ou plusieurs. Ajouté en `0008`. |
| **Mode** | table `modes` | Ce que le joueur choisit dans le salon : soit un thème entier (`subtypes` et `tags` à `null`), soit un sous-ensemble filtré par sous-types (`subtypes`) et/ou par tags (`tags`). Les modes sont regroupés par `course` à l'affichage. |

Une question appartient à exactement un thème et un sous-type, et porte zéro à n tags ; un mode est une vue (filtre) sur un thème. Rien n'empêche deux modes de se recouvrir (`echr:full` contient `echr:annales` ; une même question fiscale est souvent dans `fiscal:td` et `fiscal:chiffres`).

### 2.2 Table `modes` (`0005_courses_modes_review.sql`, `0008_fiscal_tags_oral.sql`)

| Colonne | Type | Rôle |
|---|---|---|
| `id` | `text` PK | Identifiant stocké dans `games.theme` (le nom de colonne est historique). Convention : `<préfixe>:<mode>` (`echr:annales`) ou le thème nu (`geo`, `histoire`). |
| `course` | `text` | Libellé du groupe affiché dans le salon (`Anglais CEDH · S7`, `Culture G`). Le regroupement est fait côté client par `groupByCourse()` sur l'égalité stricte de cette chaîne. |
| `theme` | `text` | Le `questions.theme` filtré. |
| `label` | `text` | Nom du mode (`Annales`, `Drapeaux`). |
| `description` | `text` | Une ligne affichée sous le groupe quand le mode est actif (et en `title` au survol). |
| `emoji` | `text` | Préfixe du chip (`modeTitle()` dans `src/components/ModePicker.tsx`). |
| `subtypes` | `text[]` | `null` = pas de filtre de sous-type ; sinon liste de `questions.subtype` acceptés. |
| `tags` | `text[]` | `null` = pas de filtre de tag ; sinon la question doit porter **au moins un** des tags listés (`tags && v_tags`). Ajouté en `0008`. |
| `sort` | `int` | Ordre d'affichage global (`api.listModes()` fait `.order('sort')`). Convention actuelle : 10-16 pour le cours CEDH, 20-30 pour le cours de droit fiscal, 50-52 pour Culture G. |

RLS : lecture publique (`modes readable` pour `anon` et `authenticated`), aucune écriture par l'API : on insère en SQL.

### 2.3 Modes actuellement en base

| `id` | `course` | `theme` | `label` | `emoji` | `subtypes` | `tags` | `sort` |
|---|---|---|---|---|---|---|---:|
| `echr:full` | Anglais CEDH · S7 | `echr-anglais-s7` | Tout le programme | 📚 | `null` | `null` | 10 |
| `echr:annales` | Anglais CEDH · S7 | `echr-anglais-s7` | Annales | 🎓 | `{annales}` | `null` | 11 |
| `echr:procedure` | Anglais CEDH · S7 | `echr-anglais-s7` | Procédure | ⚖️ | `{subsidiarity, admissibility, time-limit, filing, interim-measures, just-satisfaction, enforcement, court}` | `null` | 12 |
| `echr:articles` | Anglais CEDH · S7 | `echr-anglais-s7` | Article par article | 📜 | `{articles, protocols, protocol-1-1, article-2 … article-14}` | `null` | 13 |
| `echr:theorie` | Anglais CEDH · S7 | `echr-anglais-s7` | Théorie et principes | 🧠 | `{foundations, systems, convention, nature-of-rights, principles}` | `null` | 14 |
| `echr:vocabulaire` | Anglais CEDH · S7 | `echr-anglais-s7` | Vocabulaire | 🔤 | `{vocabulary}` | `null` | 15 |
| `echr:pieges` | Anglais CEDH · S7 | `echr-anglais-s7` | Pièges | 🪤 | `{traps}` | `null` | 16 |
| `fiscal:full` | Droit fiscal · S7 | `droit-fiscal-s7` | Tout le programme | 📚 | `null` | `null` | 20 |
| `fiscal:oral` | Droit fiscal · S7 | `droit-fiscal-s7` | Oral blanc | 🎤 | `null` | `{oral-blanc}` | 21 |
| `fiscal:td` | Droit fiscal · S7 | `droit-fiscal-s7` | Spécial TD | 🎯 | `null` | `{td}` | 22 |
| `fiscal:chiffres` | Droit fiscal · S7 | `droit-fiscal-s7` | Chiffres & articles | 🔢 | `null` | `{chiffres}` | 23 |
| `fiscal:pieges` | Droit fiscal · S7 | `droit-fiscal-s7` | Pièges | 🪤 | `null` | `{piege}` | 24 |
| `fiscal:intro` | Droit fiscal · S7 | `droit-fiscal-s7` | Introduction | 🏛️ | `{intro}` | `null` | 25 |
| `fiscal:ir-champ` | Droit fiscal · S7 | `droit-fiscal-s7` | IR : champ | 🗺️ | `{ir-champ}` | `null` | 26 |
| `fiscal:categories` | Droit fiscal · S7 | `droit-fiscal-s7` | Revenus catégoriels | 💶 | `{patrimoine, salaires}` | `null` | 27 |
| `fiscal:bic` | Droit fiscal · S7 | `droit-fiscal-s7` | BIC | 🏭 | `{bic-principes, bic-charges, bic-plus-values, bic-regimes}` | `null` | 28 |
| `fiscal:liquidation` | Droit fiscal · S7 | `droit-fiscal-s7` | Liquidation | 🧮 | `{liquidation}` | `null` | 29 |
| `fiscal:tva` | Droit fiscal · S7 | `droit-fiscal-s7` | TVA | 🧾 | `{tva-champ, tva-territorialite, tva-exigible, tva-deductible}` | `null` | 30 |
| `geo` | Culture G | `geo` | Géographie | 🌍 | `null` | `null` | 50 |
| `geo:drapeau` | Culture G | `geo` | Drapeaux | 🏁 | `{drapeau}` | `null` | 51 |
| `histoire` | Culture G | `histoire` | Histoire | 🏛️ | `null` | `null` | 52 |

Effectifs des modes à tags du cours de droit fiscal : `oral-blanc` 50, `td` 66, `chiffres` 105, `piege` 94 (pour 188 questions ; 10 questions ne portent aucun tag).

Le mode proposé à la création d'une partie est `DEFAULT_MODE = 'fiscal:full'` (`src/types.ts`).

### 2.4 Comment un mode devient une liste de questions

`create_game` et `update_settings` appellent `_pick_questions(p_mode, p_count)` (version de `0008`) :

1. Si `p_mode` est un `modes.id` connu → `theme = modes.theme`, `subtypes = modes.subtypes`, `tags = modes.tags`.
2. Sinon, rétro-compatibilité : `p_mode` est lu comme `theme` ou `theme:subtype` (`geo:drapeau` marche même sans ligne dans `modes`) ; `tags` reste `null`.
3. `select id from questions where theme = v_theme and (v_subtypes is null or subtype = any(v_subtypes)) and (v_tags is null or tags && v_tags) order by random() limit p_count`.

Conséquences :

- Les deux filtres se **cumulent** (ET). À l'intérieur de chacun, c'est un OU : `subtype = any(...)` et `tags && v_tags` (intersection non vide). Un mode peut donc croiser les deux axes, par exemple les questions de TVA venant du TD : `subtypes = {tva-champ, tva-territorialite, tva-exigible, tva-deductible}` **et** `tags = {td}`. Aucun mode en base ne le fait aujourd'hui : les modes fiscaux sont soit par topics (`fiscal:tva`), soit par tag (`fiscal:td`).
- Une question sans tags (`tags is null`) n'est **jamais** tirée par un mode à tags : les 10 questions fiscales sans tag ne sortent que dans `fiscal:full` ou dans leur mode de topic.
- Si le mode contient moins de questions que demandé, `question_count` est ramené au nombre réel (le salon affiche « Ce mode ne contient que N questions »). Le tirage est aléatoire mais **identique pour tous les joueurs** (stocké dans `games.question_ids`).
- Zéro question → exception `no_questions_for_theme` (« Pas de questions pour ce mode. » dans `src/lib/api.ts`). Un mode dont les `subtypes` ne correspondent à aucun `questions.subtype` est donc visible mais injouable : vérifier l'orthographe exacte.

### 2.5 Côté client

- `useModes()` (`src/hooks/useModes.ts`) lit la table une fois par session (cache module) via `api.listModes()`, et fournit `courses = groupByCourse(modes)`.
- `ModePicker` (`src/components/ModePicker.tsx`) affiche un groupe par `course` avec ses chips ; un `games.theme` absent de la table est affiché par son id brut, sans planter.
- Aucun libellé de mode n'est codé en dur dans le front : ajouter une ligne dans `modes` suffit pour qu'elle apparaisse.

## 3. Les deux formats de banque

Le chargeur `loadQuestions(theme)` (`scripts/lib/load-questions.mjs`) cherche d'abord `data/courses/<theme>.json`, puis `data/questions/<theme>.json`. Il accepte un tableau nu (format simple) ou un objet avec une clé `questions` (format riche), et normalise chaque question en une **ligne de 14 éléments** :

```
[subtype, prompt, choices, correct, iso, explanation, difficulty, flag, disputed, source, external_id, qtype, tags, oral]
```

Les deux derniers datent de `0008` : `tags` est un `string[]` (ou `null` si la question n'en porte pas), `oral` est le **texte** de la question de cours rattachée, résolu depuis son id (§3.4).

C'est cette ligne que consomment `gen-seed-sql.mjs` et `seed-remote.mjs`.

### 3.1 Format simple : `data/questions/<theme>.json`

Tableau JSON d'objets :

| Champ | Type | Obligatoire | Devient |
|---|---|---|---|
| `subtype` | string | oui | `questions.subtype` |
| `prompt` | string | oui | `questions.prompt` |
| `choices` | string[4] | oui (exactement 4) | `questions.choices` (jsonb), **réordonnés** (§5) |
| `answer` | 0..3 | oui | `questions.correct_index`, recalculé après mélange |
| `iso` | string | non | `questions.image_url = 'https://flagcdn.com/w320/' || iso || '.png'` |

Exemple complet (extraits réels de `geo.json`) :

```json
[
  {
    "subtype": "capitale",
    "prompt": "Quelle est la capitale de l'Australie ?",
    "choices": ["Sydney", "Canberra", "Melbourne", "Perth"],
    "answer": 1
  },
  {
    "subtype": "drapeau",
    "prompt": "À quel pays appartient ce drapeau ?",
    "choices": ["Italie", "Irlande", "Mexique", "Hongrie"],
    "answer": 1,
    "iso": "ie"
  }
]
```

Notes :

- `iso` est un code pays à deux lettres minuscules (norme flagcdn). L'image est servie par un CDN externe, ce n'est pas un asset du dépôt ; le composant `FlagFrame` gère le chargement et l'erreur.
- Les 150 questions `drapeau` ont **le même prompt** ; la détection de doublons du chargeur utilise `prompt + iso`, c'est ce qui les distingue.
- Pas d'explication possible dans ce format : la révision affiche la bonne réponse sans note « Pourquoi ».

### 3.2 Format riche : `data/courses/<theme>.json`

Objet à quatre ou cinq clés : `meta`, `topics`, `modes`, `questions`, et `oral` pour un cours évalué à l'oral (§3.4). **Le chargeur ne lit que `questions` et `oral`** (ce dernier uniquement pour résoudre l'id en texte) ; `meta`, `topics` et `modes` documentent la banque et servent de base pour écrire les lignes de `modes` et les libellés de `subtype.ts`.

```json
{
  "meta": {
    "id": "echr-anglais-s7",
    "title": "Anglais juridique - Convention et Cour europeennes des droits de l'homme",
    "course": "M1 Droit des affaires, IDAI, Universite de Montpellier, S7",
    "lecturer": "…",
    "exam_format": "QCM portant sur le fond du cours, en anglais, 4 propositions, une seule correcte",
    "language": "en",
    "built": "2026-09-11",
    "count": 250,
    "sources": ["S7/Anglais/CM Anglais.pdf (prise de notes du CM, 16 p.)", "…"],
    "warning": "Reference de verite = le cours. …"
  },
  "topics": [
    { "id": "article-3", "label": "Art. 3 - Torture", "description": "Severity test, Ireland v UK, Z v UK", "count": 6 }
  ],
  "modes": [
    { "id": "annales", "label": "Annales", "topics": ["annales"], "count": 20 },
    { "id": "procedure", "label": "Procedure", "topics": ["subsidiarity", "admissibility", "time-limit", "filing", "interim-measures", "just-satisfaction", "enforcement", "court"], "count": 53 }
  ],
  "questions": [
    {
      "id": "fnd-009",
      "topic": "systems",
      "type": "figure",
      "difficulty": 2,
      "question": "How many Member States does the Council of Europe currently have, according to the course?",
      "choices": ["27", "46", "28", "47"],
      "answer": 1,
      "explanation": "46 since Russia ceased to be a member in 2022. Careful: the printed course handout (an older Irish document) still says 47, but the lecture notes and the course plan say 46. 27 and 28 are European Union figures.",
      "source": "CM Anglais, Section 1 ; Plan I.B",
      "flag": "The handout 'Guide for the Civil & Public Service' still says 47. The correct current figure is 46."
    }
  ]
}
```

Champs d'une question et correspondance en base :

| Champ JSON | Type | Obligatoire | Colonne `questions` | Remarques |
|---|---|---|---|---|
| `id` | string | recommandé | `external_id` | Identifiant stable (`a3-003`, `ann-02`) ; renvoyé par `get_review`. C'est la clé à utiliser pour corriger une question en base. |
| `topic` | string | oui | `subtype` | Doit être un `topics[].id`. Le chargeur lit `q.subtype ?? q.topic`. |
| `type` | string libre | non | `qtype` | Vocabulaire propre au cours (CEDH : `article`, `case`, `concept`, `figure`, `vocab`, `exam` ; droit fiscal : `definition`, `figure`, `distinction`, `statement`, `enumeration`, `order`). Aucune contrainte en base, stocké mais pas exploité par l'UI aujourd'hui. |
| `difficulty` | 1..3 | non | `difficulty` | Contrainte `check (difficulty between 1 and 3)` en base ; affiché en étoiles dans la révision. |
| `question` | string | oui | `prompt` | Le chargeur lit `q.prompt ?? q.question`. |
| `choices` | string[4] | oui | `choices` | Réordonnés au seed (§5). |
| `answer` | 0..3 | oui | `correct_index` | Recalculé après mélange. |
| `explanation` | string | recommandé | `explanation` | Note « 💡 Pourquoi » de la révision. |
| `source` | string | non | `source` | Ligne « Source : … » de la révision. |
| `flag` | string | non | `flag` | Écart cours / droit positif (§4). |
| `disputed` | string | non | `disputed` | Corrigé discutable (§4). |
| `tags` | string[] | non | `tags` | Étiquettes transversales filtrables par un mode (§2.4). Un tableau vide est stocké `null`. Aujourd'hui seule la banque fiscale en porte : `oral-blanc` 50, `chiffres` 105, `piege` 94, `td` 66. |
| `oral` | string | non | `oral` | **Id** d'une entrée de la clé `oral` (`or-12`) ; le chargeur stocke en base le **texte** de cette question de cours (§3.4). Si l'id est introuvable, il stocke l'id tel quel. |
| `exam` | boolean | non | — | **Non stocké.** Dans la banque CEDH il marque 18 questions hors `annales` qui reprennent une question tombée ; les 20 `ann-*` ne le portent pas. |
| `iso` | string | non | `image_url` | Accepté aussi dans ce format (même transformation qu'en simple). |

**La clé `oral`** (facultative) porte le stock des questions de cours d'un examen oral. Structure exacte, telle que dans `droit-fiscal-s7.json` (50 entrées, `or-01` à `or-50`) :

```json
"oral": [
  {
    "id": "or-01",
    "question": "Définissez l'impôt (Gaston Jèze), distinguez-le de la taxe, de la redevance et des cotisations sociales, et donnez les chiffres du cours.",
    "topic": "intro",
    "td": false,
    "probability": 3,
    "plan": [
      "Le droit fiscal est un droit de superposition : il se greffe sur les qualifications du droit civil…",
      "Jèze : l'impôt est la prestation pécuniaire requise des particuliers, par voie d'autorité…"
    ],
    "sources": ["01-cm-sibylle.txt l. 23-41", "01-cm-sibylle.txt l. 45-116"]
  }
]
```

| Champ | Type | Rôle | Lu par le code |
|---|---|---|---|
| `id` | string | Clé citée par `questions[].oral` (`or-01`… `or-50`). | **oui** |
| `question` | string | L'intitulé que le prof posera : c'est ce texte qui part en base dans `questions.oral`. | **oui** |
| `topic` | string | Un `topics[].id`, pour ranger la question de cours dans le plan. | non |
| `td` | boolean | La question est adossée au corrigé du partiel de TD (23 sur 50). | non |
| `probability` | int, en étoiles | Probabilité que la question tombe, rendue en ★ dans la fiche `.md`. Seules les valeurs 3 (37 questions) et 2 (13) sont utilisées aujourd'hui. | non |
| `plan` | string[] | Le plan de réponse à dérouler à l'oral, un élément par point. | non |
| `sources` | string[] | Les passages du cours dont le plan est tiré. | non |

Le chargeur construit une `Map` `id → question` depuis cette clé et n'en utilise rien d'autre : `topic`, `td`, `probability`, `plan` et `sources` alimentent la fiche `.md`, pas la base.

Le fichier compagnon `data/courses/<theme>.md` n'est pas lu par le code : c'est la fiche de la banque (principe de vérité, tableau des modes, corrigé des annales, liste des écarts, contrôles passés). Il évoque un `echr-anglais-s7.flat.json` qui n'est pas dans le dépôt : inutile, le chargeur lit directement `raw.questions`.

### 3.3 Colonnes de `questions` (`0001_schema.sql` + `0005` + `0008`)

`id uuid`, `theme`, `subtype`, `prompt`, `choices jsonb`, `correct_index int check (between 0 and 3)`, `image_url`, `created_at`, puis (0005) `explanation`, `difficulty int check (between 1 and 3)`, `flag`, `disputed`, `source`, `external_id`, `qtype`, puis (0008) `tags text[]` et `oral text`. Index : `(theme)`, `(theme, subtype)` et `questions_tags_idx` (GIN sur `tags`, pour l'opérateur `&&` de `_pick_questions`).

Ce que le joueur voit pendant la partie (`_current_question`) : `id, subtype, prompt, choices, image_url` — jamais `correct_index`. Ce que la révision reçoit (`get_review`, seulement une fois la partie `finished`) : tout, y compris `correct_index`, `explanation`, `flag`, `disputed`, `source`, `external_id`, `difficulty`, `oral` et `tags` (`coalesce(to_json(q.tags), '[]')` : toujours un tableau côté client, jamais `null`). Côté TypeScript, `ReviewItem` (`src/types.ts`) déclare `oral: string | null` et `tags: string[]`.

### 3.4 Un cours évalué à l'oral

Le moteur ne sait faire que du QCM. Quand l'examen est un oral — droit fiscal : **trois questions de cours tirées au sort**, aucun QCM — la banque reste du QCM, mais chaque question devient la brique d'une réponse d'oral. La convention, telle qu'appliquée dans `droit-fiscal-s7` :

| Convention | Où | Contrôle sur la banque fiscale |
|---|---|---|
| Le format d'examen est annoncé dans `meta.exam_format`. | JSON, clé `meta` | « Oral : 3 questions de cours tirées au sort. » |
| Un **stock de questions de cours** dans la clé `oral` : id, intitulé, plan de réponse, sources (§3.2). | JSON, clé `oral` | 50 entrées, `or-01` à `or-50`. |
| Chaque QCM cite la question de cours qu'il prépare, par son id : `"oral": "or-12"`. Le chargeur remplace l'id par le texte avant le seed. | `questions[].oral` | 188 QCM sur 188 en portent un. |
| Le tag **`oral-blanc`** marque **une seule** question par question de cours : le mode `fiscal:oral` fait ainsi le tour complet du programme en 50 QCM, sans répéter deux fois le même plan. | `questions[].tags` | 50 questions taguées, 50 ids `or-*` distincts. |
| L'explication commence par **« À l'oral : »** puis donne ce qu'il faut *réciter* (définition, articles, chiffres), pas seulement pourquoi la bonne réponse est bonne. | `questions[].explanation` | 188 sur 188. |
| La fiche `data/courses/<theme>.md` déroule les 50 plans de réponse, avec leur probabilité en étoiles et la liste des QCM rattachés. | fiche à côté de la banque | section « FICHE ORAL — les 50 questions de cours ». |

Rendu dans la révision (`ReviewList.tsx`) : la question de cours s'affiche dans une note violette « 🎤 Question de cours à l'oral », **avant** la note jaune `flag` et avant l'explication — c'est elle que le prof posera, l'explication n'est que la matière de la réponse. Les questions taguées `td` portent en plus un chip « 🎯 TD » dans l'en-tête de la carte, visible carte repliée.

## 4. Principe de vérité d'un cours

**Le principe de vérité dépend du format de l'examen**, et il est écrit noir sur blanc dans `meta` de chaque banque (`warning` pour la CEDH, `truth` pour le droit fiscal) :

- **CEDH (`echr-anglais-s7`) — la référence est le cours.** L'examen est un QCM noté sur la conformité au cours : quand le cours est daté ou inexact, la bonne réponse **reste celle du cours** et le `flag` explique l'écart.
- **Droit fiscal (`droit-fiscal-s7`) — la référence est le droit en vigueur.** L'examen est un oral : un examinateur ne sanctionne pas un candidat qui cite le bon article et le bon chiffre. La banque a donc été confrontée à Légifrance, au BOFiP et aux sources officielles ; quand le cours est faux ou périmé, **c'est la question qui change** (la bonne réponse devient le droit positif) et le `flag` garde la trace de ce que le cours affirmait, pour ne pas être pris au dépourvu si l'examinateur récite l'ancienne version.

Dans les deux cas le `flag` dit lui-même quoi retenir : le composant n'affiche plus d'accroche générique.

| Champ | Sens | Rendu dans la révision (`ReviewList.tsx`) |
|---|---|---|
| `explanation` | Pourquoi c'est la bonne réponse, avec le vocabulaire du cours. | Note bleue « 💡 Pourquoi ». |
| `flag` | Ton cours et le droit en vigueur divergent. Le texte du flag dit lequel des deux la question suit (le cours en CEDH, le droit positif en fiscal) et pourquoi. | Chip « ⚠️ Cours ≠ droit positif » dans l'en-tête (visible carte repliée) et note jaune « ⚠️ Ton cours et le droit en vigueur divergent », affichée **avant** l'explication (et après la note 🎤 quand il y en a une, §3.4). |
| `disputed` | Le corrigé retenu est défendable mais discutable (annales sans corrigé officiel, notes ambiguës). | Chip « 🤔 Discutable » et note orange « 🤔 Corrigé discutable », après l'explication. |

`isFlagged(item)` = `flag` ou `disputed` non vide ; c'est le filtre « ⚠️ À surveiller » de la page Résultats, avec le compteur « N à surveiller ». L'idée : un étudiant qui révise sur autre chose que son cours se fait piéger exactement sur ces questions, il doit pouvoir les isoler.

Règles d'écriture qui en découlent :

- Écrire `flag` du point de vue de l'étudiant : ce que dit le support, ce qui est vrai aujourd'hui, et ce qu'il faut répondre.
- Ne jamais s'écarter du cours *silencieusement* : que la question suive le cours (CEDH) ou le droit positif (fiscal), l'écart est toujours écrit dans un `flag`.
- Une simplification pédagogique exacte n'est pas une erreur : un cours plus court que le texte, mais juste, ne justifie ni correction ni `flag`.

### 4.1 La vérification web de la banque de droit fiscal

La banque a été confrontée aux sources officielles avant d'être mise à jour, en trois temps :

1. **Vérification** — un agent par thème relève chaque élément vérifiable (numéro d'article, seuil, taux, plafond, délai, date, décision, dénomination) dans l'énoncé, les quatre propositions, l'explication, le `flag` et le `disputed`, puis le confronte au texte en vigueur sur Légifrance et à une seconde source indépendante (BOFiP, impots.gouv.fr, service-public.fr, sites des juridictions). **906 éléments vérifiés, 176 constats.**
2. **Contre-vérification** — chaque constat repasse devant un agent indépendant dont la consigne est de le **réfuter**, sources à l'appui, avec une exigence renforcée quand le constat touche la bonne réponse (un texte en vigueur explicite est requis ; une source secondaire ne suffit jamais) et la règle « en cas de doute réel après recherche, on réfute ». **16 constats écartés, 160 confirmés.**
3. **Application puis harmonisation** — un agent par thème applique les constats confirmés, puis un dernier agent relit l'ensemble : c'est lui qui rattrape ce que treize agents travaillant chacun sur son thème ne peuvent pas voir — un même chiffre porté à deux valeurs différentes dans deux thèmes, une note de provenance logée dans `flag` au lieu de `disputed`, une formulation de `flag` qui dénote.

Résultat : **131 questions sur 188 retouchées**, dont **40 où une proposition ou la bonne réponse a changé** ; les `flag` passent de 42 à **110** (chaque écart avec le cours est tracé) et les `disputed` de 55 à **44** (treize divergences entre prises de notes tranchées par le texte).

Ce que la passe s'est **interdit** de faire, et qui compte autant : corriger une simplification exacte, réécrire un énoncé d'une manière qui rendrait un distracteur défendable (deux réponses soutenables), ou déplacer une bonne réponse sans texte en vigueur explicite.
- `disputed` n'est pas un `flag` : il signale un doute sur le corrigé lui-même, pas un écart connu avec le droit positif.
- Lister les écarts dans le `.md` du cours (classés du plus important au plus anecdotique) : c'est la seule vue d'ensemble, la base ne les agrège pas.

## 5. Mélange déterministe des choix

Dans le JSON, la bonne réponse peut être à n'importe quelle position (dans la banque CEDH, elle a déjà été mélangée par id). Le chargeur re-mélange **toujours** les 4 choix au seed, pour ne jamais dépendre de l'auteur :

```js
// scripts/lib/load-questions.mjs
let seed = 42
const rand = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 2 ** 32)
// …
const idx = [0, 1, 2, 3]
for (let i = idx.length - 1; i > 0; i--) {
  const j = Math.floor(rand() * (i + 1))
  ;[idx[i], idx[j]] = [idx[j], idx[i]]
}
return [subtype, prompt, idx.map((i) => q.choices[i]), idx.indexOf(q.answer), …]
```

- Générateur congruentiel linéaire, graine fixe `42`, un seul flux pour toute la banque : le résultat ne dépend que de l'**ordre des questions dans le fichier**. Deux exécutions donnent le même seed SQL (diff git lisible) ; insérer une question au milieu change le mélange de toutes les suivantes (diff massif mais sans conséquence fonctionnelle).
- `correct_index` est recalculé (`idx.indexOf(q.answer)`), donc `answer` dans le JSON reste l'index **dans le fichier**, pas en base.
- Répartition obtenue sur la banque CEDH après mélange : position 0 : 54, 1 : 73, 2 : 65, 3 : 58.
- Conséquence pour les explications : **aucune référence positionnelle** (« l'option b », « la première proposition ») n'est admise, puisque l'ordre en base diffère du fichier. Désigner les propositions par leur contenu.

Validations levées par le chargeur (exception, seed interrompu) :

| Message | Condition |
|---|---|
| `format inconnu : <path>` | Ni tableau, ni objet avec `questions` tableau. |
| `4 choix requis : <prompt>` | `choices` absent ou de longueur ≠ 4. |
| `answer invalide : <prompt>` | `answer` hors 0..3. |
| `doublon : <prompt>` | Même `prompt + iso` déjà vu dans la banque. |

Le chargeur ne vérifie pas : les 4 choix distincts, `difficulty` dans 1..3 (la base le refuse), l'unicité des `id`, l'existence du `topic` dans `topics`. Voir §7.

## 6. Procédures

### 6.1 Ajouter un cours

Objectif : un nouveau thème `<theme>` (ex. `droit-ue-s8`) avec ses modes dans le salon.

**1. Écrire la banque** `data/courses/<theme>.json` au format riche (§3.2). Conventions :

- `meta.id` = `<theme>` = nom du fichier = futur `questions.theme` ; en kebab-case.
- `topics[].id` en kebab-case ASCII (ce sont les `subtype`) ; `questions[].topic` doit en faire partie.
- `questions[].id` stable et préfixé (`fnd-001`, `a3-003`) : c'est l'`external_id` qui servira aux corrections.
- Une `explanation` par question, `source` renvoyant au support (page, section, numéro d'annale).
- Facultatif : des `tags` transversaux (kebab-case, un vocabulaire court et stable pour tout le cours) si des modes doivent couper la banque autrement que par topic.
- Si l'examen est un oral : la clé `oral` et ses conventions (§3.4).
- Rédiger aussi `data/courses/<theme>.md` : principe de vérité, tableau des modes, écarts (`flag`), contrôles passés — et la fiche des questions de cours pour un oral.

**2. Valider et générer le seed** (exécute toutes les validations du §5 et écrit le fichier de migration) :

```bash
node scripts/gen-seed-sql.mjs <theme>
# → "N questions -> supabase/migrations/0003_seed_<theme>.sql (… chars)"
```

Le SQL généré fait `delete from questions where theme = '<theme>'` puis un `insert … select` depuis un `jsonb_array_elements` des lignes normalisées. Commiter ce fichier.

**3. Pousser en base.** Deux voies, au choix :

- *Voie migration* : exécuter `supabase/migrations/0003_seed_<theme>.sql` tel quel (SQL editor Supabase ou `apply_migration` du MCP). C'est la voie la plus simple pour une première insertion.
- *Voie script* : `scripts/seed-remote.mjs` envoie les lignes via une RPC **temporaire** `admin_seed_questions(p_secret, p_theme, p_rows)` appelée avec la clé anon lue dans `.env.local`. Cette RPC n'est **pas versionnée** dans le dépôt : on la crée juste avant, on l'appelle, on la supprime juste après (elle donne un droit d'écriture sur `questions` à quiconque connaît le secret). Définition cohérente avec le script et avec le mapping de `gen-seed-sql.mjs` :

```sql
create or replace function admin_seed_questions(p_secret text, p_theme text, p_rows jsonb)
returns int language plpgsql security definer set search_path = public as $$
declare n int;
begin
  if p_secret <> '<un secret long et jetable>' then raise exception 'forbidden'; end if;
  delete from questions where theme = p_theme;
  insert into questions (theme, subtype, prompt, choices, correct_index, image_url,
                         explanation, difficulty, flag, disputed, source, external_id, qtype, tags, oral)
  select p_theme, x->>0, x->>1, x->2, (x->>3)::int,
         case when x->>4 is null then null else 'https://flagcdn.com/w320/' || (x->>4) || '.png' end,
         x->>5, (x->>6)::int, x->>7, x->>8, x->>9, x->>10, x->>11,
         case when jsonb_typeof(x->12) = 'array' then array(select jsonb_array_elements_text(x->12)) else null end,
         x->>13
  from jsonb_array_elements(p_rows) x;
  get diagnostics n = row_count;
  return n;
end $$;
```

Les deux dernières colonnes (`tags`, `oral`) datent de `0008` : une RPC recopiée d'une ancienne session perd silencieusement les tags et la question de cours. Le mapping doit rester **identique** à celui de `gen-seed-sql.mjs` (`x->12` est un tableau JSON, pas un scalaire : d'où le `jsonb_array_elements_text`).

```bash
# Git Bash
SEED_SECRET='<le même secret>' node scripts/seed-remote.mjs <theme>
# PowerShell : $env:SEED_SECRET = '<le même secret>'; node scripts/seed-remote.mjs <theme>
# → "N questions insérées (<theme>, source data/courses/<theme>.json)"
```

```sql
drop function admin_seed_questions(text, text, jsonb);
```

Attention dans les deux voies : le `delete from questions where theme = …` échoue avec une violation de clé étrangère si des parties ont déjà été jouées sur ce thème, car `answers.question_id references questions (id)` **sans** `on delete cascade` (`0001_schema.sql`). Pour un thème neuf, aucun problème ; pour un re-seed complet, voir §6.3.

**4. Insérer les modes** dans `modes` (même forme que dans `0005_courses_modes_review.sql` et `0008_fiscal_tags_oral.sql`, idempotent grâce à `on conflict`). Un mode « tout le programme » avec `subtypes` et `tags` à `null`, puis un mode par regroupement de `topics`, et un mode par tag transversal :

```sql
insert into modes (id, course, theme, label, description, emoji, subtypes, tags, sort) values
  ('ue:full',      'Droit de l''UE · S8', 'droit-ue-s8', 'Tout le programme', '180 questions, tout le cours', '📚', null, null, 31),
  ('ue:sources',   'Droit de l''UE · S8', 'droit-ue-s8', 'Sources',           'Traités, droit dérivé, principes', '📜', array['treaties','secondary-law','principles'], null, 32),
  ('ue:td',        'Droit de l''UE · S8', 'droit-ue-s8', 'Spécial TD',        'Ce qui vient des TD', '🎯', null, array['td'], 33)
on conflict (id) do update set course = excluded.course, theme = excluded.theme, label = excluded.label,
  description = excluded.description, emoji = excluded.emoji, subtypes = excluded.subtypes,
  tags = excluded.tags, sort = excluded.sort;
```

Ne pas oublier `tags` dans la liste des colonnes **et** dans le `do update set` : un `on conflict` recopié d'avant `0008` laisse l'ancien `tags` en place. Choisir `sort` pour placer le cours où on veut (10-16 CEDH, 20-30 droit fiscal, 50-52 Culture G aujourd'hui). Le `course` doit être **strictement identique** sur toutes les lignes du même groupe. Versionner ces lignes dans une nouvelle migration `supabase/migrations/000N_modes_<theme>.sql`.

**5. Ajouter les libellés** des sous-types dans `LABELS` de `src/lib/subtype.ts` (majuscules accentuées, courts : ils tiennent dans un chip à 375 px ; le `·` sépare deux idées, `BIC · CHARGES`). Une entrée par `topics[].id`, regroupées par cours avec un commentaire (`// droit fiscal` porte les 13 libellés fiscaux, de `intro: 'INTRO · SOURCES'` à `'tva-deductible': 'TVA · DÉDUCTION'`). Sans entrée, `subtypeLabel()` retombe sur `subtype.toUpperCase()` (`ARTICLE-3` au lieu de `ART. 3 · TORTURE`). Les tags, eux, n'ont pas de libellé : seul `td` est rendu, en dur, par le chip « 🎯 TD » de `ReviewList.tsx`. Si les questions portent des images qui ne sont pas des drapeaux, adapter le texte alternatif dans `ReviewCard` (`ReviewList.tsx`, aujourd'hui `drapeau` → « Drapeau à identifier »).

**6. Tester.**

```bash
npx tsc --noEmit -p tsconfig.app.json
npm run dev
```

Dans le salon : le groupe du cours apparaît avec ses chips, la description du mode actif s'affiche, le compteur de questions se plafonne si le mode est petit. Jouer une partie solo jusqu'au bout (ou laisser le timer expirer) et vérifier sur la page Résultats : chip de sous-type, chip 🎯 TD, étoiles de difficulté, notes 🎤 / ⚠️ / Pourquoi / 🤔 dans cet ordre, filtre « À surveiller », ligne Source. Vérifier enfin que `create_game` ne renvoie pas `no_questions_for_theme` sur chaque mode (un `subtypes` mal orthographié se voit ici).

**7. Finitions** : mettre à jour le README (liste des cours, inventaire) et, si le nouveau cours doit être proposé par défaut, `DEFAULT_MODE` dans `src/types.ts` (aujourd'hui `'fiscal:full'`).

### 6.2 Ajouter un mode à un cours existant

Aucun changement de code ni de seed : une ligne dans `modes`. Par sous-types :

```sql
insert into modes (id, course, theme, label, description, emoji, subtypes, tags, sort) values
  ('echr:articles-2-5', 'Anglais CEDH · S7', 'echr-anglais-s7', 'Articles 2 à 5',
   'Vie, torture, esclavage, liberté', '🛡️', array['article-2','article-3','article-4','article-5'], null, 17)
on conflict (id) do update set course = excluded.course, theme = excluded.theme, label = excluded.label,
  description = excluded.description, emoji = excluded.emoji, subtypes = excluded.subtypes,
  tags = excluded.tags, sort = excluded.sort;
```

Par tag (les questions doivent déjà les porter en base, donc dans la banque et dans le seed) — c'est la forme de `fiscal:td` :

```sql
insert into modes (id, course, theme, label, description, emoji, subtypes, tags, sort) values
  ('fiscal:td', 'Droit fiscal · S7', 'droit-fiscal-s7', 'Spécial TD',
   'Ce que le chargé de TD a martelé : 66 questions', '🎯', null, array['td'], 22)
on conflict (id) do update set course = excluded.course, theme = excluded.theme, label = excluded.label,
  description = excluded.description, emoji = excluded.emoji, subtypes = excluded.subtypes,
  tags = excluded.tags, sort = excluded.sort;
```

Les deux axes se combinent dans la même ligne : `subtypes` **et** `tags` non nuls = intersection (§2.4).

Vérifier que le mode n'est pas vide, en reprenant la condition de `_pick_questions` :

```sql
select count(*) from questions where theme = 'echr-anglais-s7'
  and subtype = any(array['article-2','article-3','article-4','article-5']);
select count(*) from questions where theme = 'droit-fiscal-s7' and tags && array['td'];  -- 66
```

Le client met en cache la liste des modes pour la session (`useModes`) : recharger la page pour voir la nouvelle ligne. Ajouter aussi le mode dans la clé `modes` du JSON du cours et dans le tableau du `.md`, pour que la documentation de la banque reste juste.

Pour retirer un mode : `delete from modes where id = '…'`. Conséquences pour les parties qui portent cet id dans `games.theme` :

- les parties **déjà lancées** continuent (leur `question_ids` est figé au démarrage) ;
- un **salon encore ouvert** sur ce mode échoue au prochain réglage de l'hôte avec `no_questions_for_theme` : `update_settings` renvoie le même `game.theme` à `_pick_questions`, dont le repli découpe l'id sur `:` (`split_part`) et cherche `questions.theme = 'echr'` pour `echr:articles-2-5`, thème qui n'existe pas (`questions.theme` = `echr-anglais-s7`). Le repli ne fonctionne que si l'id est littéralement de la forme `theme` ou `theme:subtype` d'une banque (`geo`, `geo:drapeau`, `histoire`) ; `ModePicker` affiche alors l'id brut.

### 6.3 Corriger une question

**a. Corriger le fichier source** (`data/courses/<theme>.json` ou `data/questions/<theme>.json`) : c'est la référence. Puis régénérer le seed pour garder la migration synchronisée : `node scripts/gen-seed-sql.mjs <theme>`.

**b. Répercuter en base** sans tout re-seeder, par un `update` ciblé :

- Format riche, clé `external_id` :

  ```sql
  update questions
  set explanation = '…', flag = '…'
  where theme = 'echr-anglais-s7' and external_id = 'tim-001';
  ```

- Format simple (pas d'`external_id`), clé `prompt` (+ `image_url` pour les drapeaux) :

  ```sql
  update questions set choices = '["Sydney","Canberra","Melbourne","Perth"]', correct_index = 1
  where theme = 'geo' and prompt = 'Quelle est la capitale de l''Australie ?';
  ```

Si on modifie `choices`, écrire les 4 propositions **dans l'ordre déjà en base** (celui du mélange) et ajuster `correct_index` en conséquence ; sinon les `answers.choice_index` déjà enregistrés pour cette question deviennent faux dans les révisions passées.

**c. Re-seed complet** (nouvelle version d'une banque, beaucoup de changements) : possible uniquement si aucune réponse ne référence le thème, ou après avoir purgé l'historique :

```sql
delete from answers where question_id in (select id from questions where theme = '<theme>');
-- puis exécuter supabase/migrations/0003_seed_<theme>.sql
```

Les `games.question_ids` des anciennes parties pointeront vers des uuid disparus (colonne `uuid[]` sans FK) : leurs révisions renverront des listes tronquées. Acceptable pour un projet de révision, à faire de préférence hors période d'utilisation.

## 7. Contrôles qualité recommandés

Ce que le chargeur impose (4 choix, `answer` valide, pas de doublon `prompt + iso`) est un minimum. Avant de seeder un cours, passer ces contrôles, dans cet ordre :

| Contrôle | Pourquoi | Comment |
|---|---|---|
| 4 choix **distincts** par question | Deux propositions identiques rendent la question ambiguë et faussent le mélange. | `new Set(q.choices).size === 4` sur toute la banque. |
| `id` uniques, `topic` ∈ `topics[].id` | `external_id` sert de clé de correction ; un topic inconnu rend la question invisible dans les modes filtrés. | Script node de 10 lignes ; comparer `topics[].count` et `modes[].count` aux comptes réels. |
| `difficulty` ∈ {1, 2, 3} | Contrainte `check` en base : le seed entier échoue sinon. | Grep ou script. |
| Aucune référence positionnelle dans `explanation`, `flag`, `disputed` | L'ordre des choix change au seed (§5). | Regex sur `option [a-d]`, `answer [a-d]`, `(first\|second\|third\|fourth) (option\|choice\|answer)`, « proposition 1 », « la première »… |
| Pas de doublon sémantique | Le loader ne voit que les prompts strictement identiques ; deux reformulations de la même question font deux fois le même point dans une partie. | Relecture par sous-type, tri alphabétique des prompts. |
| Une seule bonne réponse | Un distracteur accidentellement vrai est la faute la plus fréquente sur du contenu juridique. | Relecture **adversariale** : un second relecteur cherche activement une réponse fausse, une question à deux bonnes réponses, une erreur d'arrêt ou de date. Sur la banque CEDH, cette passe a corrigé 26 questions sur 250. |
| Écarts cours / droit positif | Le principe de vérité (§4) : chaque point où le support est daté doit porter un `flag`, pas une « correction ». | Vérification externe des points sensibles listés dans le `.md` (dates d'arrêts, chiffres, protocoles). |
| Libellés `subtype.ts` présents | Sinon chip en `TOPIC-ID` brut. | Comparer `topics[].id` aux clés de `LABELS`. |
| `tags` dans le vocabulaire du cours | Un tag mal orthographié rend le mode vide (`tags && v_tags`), sans erreur visible avant le salon. | Histogramme des tags de la banque, comparé aux `modes[].tags` du JSON et aux lignes de `modes`. |
| `oral` ∈ `oral[].id`, un `oral-blanc` par question de cours | Un id inconnu part en base tel quel (`or-12` s'affiche à la place de l'intitulé) ; deux `oral-blanc` sur la même question de cours déséquilibrent l'oral blanc. | Vérifier que chaque `questions[].oral` est dans la `Map`, et que les ids des questions taguées `oral-blanc` sont distincts et couvrent tout le stock. |
| Répartition des bonnes réponses après mélange | Détecter un biais résiduel (fichier trié, banque très courte). | `loadQuestions(theme).rows` puis histogramme de `row[3]`. |

Un contrôle rapide qui couvre les quatre premières lignes :

```bash
node -e "
const c = JSON.parse(require('fs').readFileSync('data/courses/echr-anglais-s7.json', 'utf8'))
const topics = new Set(c.topics.map((t) => t.id)), ids = new Set()
for (const q of c.questions) {
  if (ids.has(q.id)) console.log('id dupliqué', q.id); ids.add(q.id)
  if (!topics.has(q.topic)) console.log('topic inconnu', q.id, q.topic)
  if (new Set(q.choices).size !== 4) console.log('choix non distincts', q.id)
  if (q.difficulty && ![1, 2, 3].includes(q.difficulty)) console.log('difficulty', q.id)
  const txt = [q.explanation, q.flag, q.disputed].join(' ')
  if (/option [a-d]\b|answer [a-d]\b|\b(first|second|third|fourth) (option|choice|answer)/i.test(txt)) console.log('positionnel', q.id)
}
console.log(c.questions.length, 'questions vérifiées')
"
```

## 8. Pièges connus

- **`games.theme` contient un id de mode**, pas un thème (nom de colonne conservé pour ne rien casser). Ne pas comparer `games.theme` à `questions.theme`.
- **Le mélange dépend de l'ordre du fichier** : ajouter une question en fin de banque limite le diff du seed SQL ; l'insérer au milieu re-mélange tout ce qui suit.
- **`exam`, `meta`, `topics`, `modes` du JSON riche ne vont pas en base.** La table `modes` est remplie à la main (§6.1 étape 4) ; les deux peuvent diverger si on oublie l'un des deux. De la clé `oral`, seul le couple `id` → `question` part en base : plan et sources ne vivent que dans le JSON et la fiche `.md`.
- **Une question sans tag est invisible des modes à tags** (`tags && v_tags` est faux quand `tags is null`) : 10 questions fiscales sur 188 ne sortent que dans `fiscal:full` ou leur mode de topic.
- **La RPC temporaire `admin_seed_questions` doit lister `tags` et `oral`** (§6.1 étape 3) : une version d'avant `0008` seede sans erreur, mais les modes à tags sont alors vides et la note 🎤 disparaît de la révision.
- **`course` est une chaîne libre** : une apostrophe ou un espace différent crée un second groupe dans le salon.
- **Re-seeder un thème déjà joué échoue** (FK `answers.question_id`) : privilégier les `update` ciblés (§6.3).
- **Le cache client des modes** dure toute la session : après un `insert` dans `modes`, recharger la page.
- **Images** : uniquement via `iso` → flagcdn ; il n'y a pas de mécanisme d'image arbitraire (ni d'asset local) pour les questions.
