# Journal des versions — Boring Law

Ce journal retrace l'évolution du projet, de la V1 « Boring Geo » (quiz de géographie à 2 joueurs) jusqu'à
« Boring Law » (révision d'un cours, de 1 à 10 joueurs). Il est reconstruit depuis l'historique git et les
migrations SQL, pas de mémoire : chaque entrée cite les fichiers, fonctions et colonnes tels qu'ils existent dans le
dépôt.

Quelques conventions :

- **Pas de numéros de version.** `package.json` reste en `0.0.0` et le dépôt n'a aucun tag : les étapes sont
  identifiées par leur hash de commit. Les étapes 1 à 7 tiennent sur une journée, le **11 septembre 2026** ; l'heure
  (Europe/Paris) sert donc à les ordonner. Les étapes 8 et 9 (droit fiscal) arrivent onze jours plus tard.
- **Ordre chronologique** (la plus ancienne en premier), comme `git log --reverse` : le journal se lit comme
  l'histoire du projet.
- Chaque entrée sépare **ce qui change pour le joueur**, **ce qui change techniquement** et **les migrations SQL**
  associées. Les migrations vivent dans `supabase/migrations/` ; l'ordre réel d'application est détaillé en
  [annexe A](#annexe-a--migrations--ordre-dapplication-et-dépendances).
- Le journal a d'abord été écrit avant le commit `e4cb0d0` (11 septembre, 20:40), qui a livré d'un bloc le front 1 à
  10 joueurs, `0007` et le dossier `docs/` : les mentions « arbre de travail » des étapes 6 et 7 datent de ce
  moment-là. L'étape 8 a été commitée depuis (`b037247`) ; seule l'**étape 9 est encore non commitée**.

Pour l'architecture actuelle (tables, RPC, hooks, flux Realtime), voir [architecture](architecture.md) ; pour le design
system, voir la [spec Globe Pop!](design-spec.md) ; pour l'installation, le [README](../README.md).

## Vue d'ensemble

| # | Étape | Commit(s) | Quand | Migrations SQL |
|---|---|---|---|---|
| 1 | V1 « Boring Geo » : quiz géo en course à 2 joueurs | `fb44b34`, `431fcf7` | 14:20, 14:24 | `0001_schema.sql`, `0002_functions.sql`, `0003_seed_geo.sql` |
| 2 | Miroir GitHub Pages | `13cfa63` | 14:30 | — |
| 3 | Modes Drapeaux / Histoire, fin de partie quand tout le monde a fini | `998c559` | 14:51 | `0004_modes_and_end_rule.sql`, `0003_seed_histoire.sql` |
| 4 | Refonte UI/UX « Globe Pop! » + sélecteur de modes | `e23d3ce`, `18dc51c` | 16:38, 16:40 | — |
| 5 | Pivot « Boring Law » : cours CEDH, modes en base, révision | `e7421be` | 18:47 | `0005_courses_modes_review.sql`, `0003_seed_echr-anglais-s7.sql` (+ seeds géo/histoire régénérés) |
| 6 | Parties de 1 à 10 joueurs (backend puis front) | `923ef17`, `e4cb0d0` | 18:58, 20:40 | `0006_multiplayer.sql`, `0007_rank_by_score.sql` |
| 7 | Documentation (`docs/`) | `e4cb0d0` | 20:40 | — |
| 8 | Troisième cours : Droit fiscal · S7 (examen oral, tags, 11 modes) | `b037247` | 21-23 sept. | `0008_fiscal_tags_oral.sql` |
| 9 | La banque de droit fiscal passe au droit en vigueur (vérification web) | arbre de travail | 23-24 sept. | `0003_seed_droit-fiscal-s7.sql` régénéré |

## 1. V1 « Boring Geo » — quiz géo en course à 2 joueurs

**Commit** `fb44b34` (14:20) — *Boring Geo : quiz géo en course à 2 joueurs (Vite/React + Supabase)*, complété par
`431fcf7` (14:24) — *Ignore l'auto-répétition clavier, ignore .vercel* (seul `.gitignore` change dans ce second commit ;
la garde `if (e.repeat) return` du handler clavier de `src/pages/Game.tsx` est déjà présente dans le premier).

### Pour le joueur

- Un joueur crée une partie et obtient un **code de 5 lettres** (alphabet sans caractères ambigus, généré par
  `_gen_code()`), l'autre le rejoint. Exactement 2 joueurs : le salon refuse le troisième (`game_full`) et l'hôte ne
  peut pas démarrer seul (`need_two_players`).
- Réglages de l'hôte : nombre de questions (chips `COUNTS = [10, 20, 30, 50]`) et durée (`DURATIONS = [60, 120, 180,
  300]` secondes), thème unique « Géographie » (constante `THEMES` de `src/types.ts`).
- Course contre la montre : même set de questions et même ordre pour les deux, chacun avance à son rythme. Bonne
  réponse = +1, mauvaise = 0 et on avance, « Passer » remet la question **en fin de file**.
- Raccourcis clavier : `1`-`4` pour répondre, `Espace` ou `P` pour passer.
- **Règle de fin V1** : la partie s'arrête à la fin du timer **ou dès qu'un joueur a fini toutes ses questions**
  (cette règle change à l'étape 3).
- Écran de résultats minimaliste : « Tu as gagné ! 🏆 » / « Perdu… » / « Égalité ! » et un bouton « Nouvelle partie ».
- 406 questions de géographie en 8 sous-types (`capitale`, `drapeau`, `continent`, `fleuve`, `montagne`, `ocean`,
  `frontiere`, `superficie`) ; les drapeaux sont servis par `https://flagcdn.com/w320/<iso>.png`.

### Techniquement

- **Stack** : Vite + React 19 + TypeScript + Tailwind v4 (plugin `@tailwindcss/vite`), `react-router-dom` v7,
  `@supabase/supabase-js`, lint `oxlint` (`.oxlintrc.json`). Déploiement Vercel (`vercel.json` réécrit toute URL vers
  `/index.html` pour le routage côté client).
- **Routes** (`src/App.tsx`) : `/`, `/lobby/:code`, `/game/:code`, `/results/:code`, tout le reste redirige vers `/`.
  La navigation entre écrans est pilotée par `game.status` (`lobby` → `playing` → `finished`).
- **Toute la logique de jeu est en SQL** : des RPC `security definer` (`set search_path = public`) exposées par
  Supabase, appelées depuis `src/lib/api.ts` (`api.createGame`, `joinGame`, `updateSettings`, `startGame`,
  `getState`, `submitAnswer`, `passQuestion`, `endGameIfExpired`). Les messages d'erreur SQL (`game_not_found`,
  `game_full`, `stale_question`…) sont traduits par la table `ERRORS` d'`ApiError`.
- **Sécurité par jeton** : `create_game` / `join_game` renvoient un `token` UUID stocké dans `player_tokens` (table
  jamais lisible côté client) ; toutes les autres RPC prennent `p_token` et passent par `_player_from_token()`.
  Le client garde `{ game_id, code, player_id, token }` dans `localStorage` sous la clé `boring-geo:session`
  (`src/lib/session.ts`) ; `useSession()` renvoie à l'accueil si le code de l'URL ne correspond pas.
- **Realtime + poll** (`src/hooks/useGame.ts`) : abonnement `postgres_changes` sur `games` (filtre `id`) et
  `players` (filtre `game_id`), chaque événement déclenche `get_state` ; un poll de 5 s sert de filet. `get_state`
  renvoie aussi `server_now`, dont `useGame` déduit `clockOffset` pour que `useTimer` compte juste malgré l'horloge
  du client.
- **Timer côté serveur** : `games.ends_at` fait foi. `get_state`, `submit_answer` et `pass_question` clôturent
  paresseusement (`_finalize_game`) si `now() >= ends_at` ; le client appelle en plus `end_game_if_expired` quand son
  compteur arrive à zéro.
- **File de questions par joueur** : `players.queue int[]` contient les index (0-based) dans
  `games.question_ids uuid[]` ; répondre dépile la tête, passer la remet en queue (`queue[2:] || queue[1]`). Le
  serveur vérifie que la réponse porte bien sur la question en tête (`stale_question`).
- **Banque de questions** : `data/questions/geo.json` → `node scripts/gen-seed-sql.mjs geo` génère
  `supabase/migrations/0003_seed_geo.sql`. Le script mélange les 4 choix avec un générateur déterministe (graine 42)
  pour supprimer tout biais de position tout en gardant un seed reproductible.
- UI V1 sobre : composants `Card`, `Button`, `Input`, `ErrorMsg`, `Page` dans `src/components/ui.tsx` (classes
  Tailwind `slate`), `PlayerBar` pour la progression.

### Migrations SQL

| Fichier | Contenu |
|---|---|
| `0001_schema.sql` | Extension `pgcrypto` ; tables `questions` (`theme`, `subtype`, `prompt`, `choices jsonb`, `correct_index` 0-3, `image_url`), `games` (`code` unique, `status` ∈ lobby/playing/finished, `theme`, `question_count` 5-100, `duration_seconds` 30-600, `question_ids uuid[]`, `host_player_id`, `winner_player_id`, `started_at`, `ends_at`, `finished_at`), `players` (`nickname` 1-20 caractères, `score`, `queue int[]`, `answered_count`, `finished_at`), `player_tokens`, `answers` (unique par `(player_id, question_id)`). RLS partout ; seules `games` et `players` sont lisibles par `anon` (nécessaire au Realtime). `games` et `players` ajoutées à la publication `supabase_realtime` avec `replica identity full`. |
| `0002_functions.sql` | Helpers internes `_gen_code`, `_player_from_token`, `_pick_questions(p_theme, p_count)`, `_finalize_game` (gagnant = meilleur score s'il est unique, sinon `winner_player_id` null), `_current_question` ; RPC publiques `create_game`, `join_game`, `update_settings`, `start_game`, `get_state`, `submit_answer`, `pass_question`, `end_game_if_expired`, plus `server_now()` (utilitaire `language sql stable`, ni `security definer` ni révoqué, non appelé par le client). Les helpers `_…` sont révoqués pour `public, anon, authenticated`. |
| `0003_seed_geo.sql` | 406 questions géo, format compact : un tableau JSON dépilé par `jsonb_array_elements` (6 colonnes à ce stade). |

La table `answers` n'est pas encore lue par le client à cette étape ; c'est elle qui rendra possible l'écran de
révision de l'étape 5.

## 2. Miroir GitHub Pages

**Commit** `13cfa63` (14:30) — *Miroir GitHub Pages (le DNS univ bloque \*.vercel.app)*.

### Pour le joueur

Rien de visible : une seconde URL d'accès, hébergée sur GitHub Pages, pour les réseaux qui bloquent `*.vercel.app`
(celui de l'université). Vercel reste le déploiement principal.

### Techniquement

- `.github/workflows/pages.yml` : sur `push` vers `main` (ou `workflow_dispatch`), `npm ci` puis
  `npm run build:pages` avec `VITE_BASE`, `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` lus des secrets du dépôt,
  puis `actions/upload-pages-artifact` + `actions/deploy-pages`.
- `vite.config.ts` : `base: process.env.VITE_BASE ?? '/'` — `/` sur Vercel, le sous-chemin du dépôt sur Pages.
- `src/App.tsx` : `<BrowserRouter basename={import.meta.env.BASE_URL}>` pour que le routeur suive ce sous-chemin.
- `package.json` : script `build:pages` = `vite build` puis copie de `dist/index.html` en `dist/404.html`, le seul
  moyen sur GitHub Pages de servir la SPA sur une URL profonde (`/lobby/ABCDE`) au rechargement.
- Conséquence durable pour tout le front : **aucun chemin d'asset absolu** (`/xxx`), sinon il casse sous Pages.

## 3. Modes Drapeaux / Histoire et nouvelle règle de fin

**Commit** `998c559` (14:51) — *Modes Drapeaux et Histoire (252 questions), fin de partie quand les deux ont fini*.

### Pour le joueur

- Deux nouveaux modes : **Drapeaux** (les 150 questions `drapeau` du thème géo, à reconnaître à l'image) et
  **Histoire** (252 questions, 11 périodes de `antiquite` à `contemporain`).
- **Nouvelle règle de fin** : la partie ne s'arrête plus dès que le premier joueur a fini. Elle continue jusqu'à ce
  que **tous** aient répondu à toutes leurs questions, ou que le timer tombe à zéro. Celui qui finit en premier attend
  l'autre (l'écran d'attente dédié arrive à l'étape 4).

### Techniquement

- Notion de **mode** = `theme` entier (`geo`, `histoire`) ou `theme:subtype` (`geo:drapeau`). `games.theme` porte
  désormais cet identifiant ; `_pick_questions` découpe la chaîne avec `split_part(p_theme, ':', n)`.
- `data/questions/histoire.json` + `supabase/migrations/0003_seed_histoire.sql` (généré par `gen-seed-sql.mjs`).
- Nouveau script `scripts/seed-remote.mjs` : pousse une banque en base via une RPC **temporaire**
  `admin_seed_questions(p_secret, p_theme, p_rows)` créée juste avant et supprimée juste après (elle n'est dans
  aucune migration ; usage `SEED_SECRET=... node scripts/seed-remote.mjs geo`). Alternative au collage d'un fichier
  seed de plusieurs centaines de Ko dans l'éditeur SQL.
- Côté front, à cette étape, le sélecteur ne connaît encore que « Géographie » : les chips Drapeaux / Histoire
  arrivent avec l'étape 4.

### Migrations SQL

| Fichier | Contenu |
|---|---|
| `0004_modes_and_end_rule.sql` | `_pick_questions` filtre sur `theme = split_part(p_theme, ':', 1)` et, si la seconde partie est non vide, sur `subtype`. `submit_answer` réécrit : quand un joueur vide sa file, il ne finalise la partie que si `bool_and(finished_at is not null)` sur tous les joueurs (`everyone_done`). |
| `0003_seed_histoire.sql` | 252 questions histoire, même format que le seed géo. |

## 4. Refonte UI/UX « Globe Pop! » et sélecteur de modes

**Commits** `e23d3ce` (16:38) — *Refonte UI/UX gamifiée « Globe Pop! » + sélecteur de modes (Géo / Drapeaux /
Histoire)* et `18dc51c` (16:40) — *Session périmée : retour à l'accueil au lieu de boucler en erreur*.

### Pour le joueur

- Nouvelle identité **cartoon-arcade** : fond bleu pâle à pois, cartes blanches à bord épais, boutons 3D qui
  s'enfoncent, keycaps colorées `1`-`4`, polices Fredoka (titres) et Nunito (texte), mascotte, avatars emoji dérivés
  du pseudo.
- Salon : arène « VS » à deux cases, code en tuiles cliquables (copie + mini confettis), chips de mode
  **Géographie / Drapeaux / Histoire** avec emoji et description.
- Pendant la partie : HUD collant « moi | anneau du timer | adversaire » avec barres de progression segmentées face à
  face, chip de course (« Tu mènes +N » / « −N derrière » / « Égalité »), marqueur ✓/✗ quand l'adversaire répond,
  annonces éphémères (« En tête ! », « Remontée ! », « Il passe devant ! »), série de bonnes réponses avec flamme et
  paliers (3, 5, 10), pop « +1 », jalons (« GO ! », « Mi-parcours ! », « Dernière question ! »), alertes à 30 s et
  10 s, sons synthétisés (aucun fichier audio) avec bouton muet persistant, vibrations sur mobile.
- Écran **« Terminé ! »** quand on a fini avant l'autre, avec sa barre de progression pendant l'attente.
- Résultats : verdict animé, scores qui comptent de 0 au score, étoiles de précision, barre de duel, confettis.
- Raccourcis clavier compatibles **AZERTY** (`e.code` `Digit1…4` et `Numpad1…4` en plus de `e.key`).
- `prefers-reduced-motion` respecté partout (CSS et JS), contrastes vérifiés (texte `ink` sur fonds pastel).
- Si la partie a disparu côté serveur (session périmée), retour propre à l'accueil au lieu d'une boucle d'erreurs.

### Techniquement

- **Spec exécutable** : `docs/design-spec.md` (861 lignes à ce commit) décrit tokens, motion, sons, composants et
  pages ; elle fixe la règle « aucune logique de jeu ne change » et la liste des fichiers interdits de modification
  (`api.ts`, `session.ts`, `supabase.ts`, `useGame.ts`, `useSession.ts`, `useTimer.ts`, `App.tsx`, `main.tsx`).
- **Design system Tailwind v4** : tokens `@theme` dans `src/index.css` (`--color-canvas`, `--color-ink`,
  `--color-green` / `-dark` / `-soft`, `--font-display`, `--text-question`…), keyframes `--animate-*`, classes
  `.btn-3d` et utilitaires dans `@layer components`. Pas de `tailwind.config`.
- **Dépendances ajoutées** : `motion` (springs et transitions, réservé aux fondations : `Page` dans `ui.tsx`,
  `StreakBadge`, hooks `useCountUp` / `useReducedMotion`, constante `SPRING` de `src/lib/spring.ts` ; `Toast` et
  `RaceStatus` n'en importent pas — `Leaderboard` s'y ajoute à l'étape 6), `canvas-confetti` + `@types/canvas-confetti`. Google Fonts par `<link>` dans
  `index.html`.
- **Composants créés** (`src/components/`) : `AnimatedNumber`, `AnswerButton`, `Avatar`, `Blobs`, `CodeTiles`,
  `FlagFrame`, `Hud`, `Mascot` (humeurs `idle | party | sleep | sad | think`), `MuteToggle`, `PlayerCard`, `PopText`,
  `RaceStatus`, `ScoreCompare`, `Stars`, `StreakBadge`, `TimerRing`, `Toast` ; `ui.tsx` passe de 43 à ~250 lignes
  (`Page`, `Card`, `Button`, `Input`, `ErrorMsg`, `Chip`, `Keycap`, `Divider`, `Dots`, `Skeleton`) ; `PlayerBar`
  gagne `SegmentBar`, `ScoreBump`, `LeadTag`.
- **Hooks et libs** : `useCountUp`, `useMinWidth`, `useOpponentPulse` (marqueur ✓/✗ + son `oppHit` discret),
  `usePrevious`, `useRaceEvents` (annonces sur changement de signe de l'écart), `useReducedMotion` (réexport de
  `motion/react`) ; `src/lib/sound.ts` (synthèse WebAudio : `sfx.correct(streak)`, `wrong`, `pass`, `tick`, `warn`,
  `timeUp`, `go`, `join`, `copy`, `win`, `lose`, `tie`, `finished`, `leadTaken`, `leadLost`, `comeback`, `oppHit`,
  `vibrate`…), `toast.ts` (file à priorités, `showToast` / `clearToasts` / `useToast`), `confetti.ts`
  (`celebrate('mini' | 'burst' | 'cannon')`), `streak.ts` (série persistée par code de partie), `avatar.ts`,
  `spring.ts`, `subtype.ts` (libellés FR des sous-types).
- `THEMES` (`src/types.ts`) s'enrichit d'`emoji` et `description` et liste `geo`, `geo:drapeau`, `histoire`.
- `18dc51c` : dans `useGame.refresh`, une `ApiError` de code `invalid_token` déclenche `clearSession()` puis
  `window.location.assign(import.meta.env.BASE_URL)`.
- Le score reste **exclusivement serveur** : série, pops, annonces et confettis sont dérivés côté client de l'état
  reçu, jamais l'inverse.

### Migrations SQL

Aucune : la refonte est purement front.

## 5. Pivot « Boring Law » — cours CEDH, modes en base, révision

**Commit** `e7421be` (18:47) — *Boring Geo devient Boring Law : apprentissage gamifié*.

### Pour le joueur

- Le jeu change d'objet : **réviser un cours**. Premier cours : « Anglais CEDH · S7 » (anglais juridique, Convention
  et Cour européennes des droits de l'homme), **250 questions en anglais** ; l'interface reste en français.
- Les modes sont regroupés **par cours** dans le salon : « Anglais CEDH · S7 » (Tout le programme 250, Annales 20,
  Procédure 53, Article par article 84, Théorie et principes 43, Vocabulaire 20, Pièges 30) et « Culture G »
  (Géographie, Drapeaux, Histoire). Mode proposé par défaut : « Tout le programme ».
- Chaque question a une **explication**, une **difficulté** (1 à 3) et, pour 22 d'entre elles, un **flag** signalant
  un écart entre le cours et le droit positif (la bonne réponse reste celle du cours, référence de vérité de
  l'examen).
- Nouvel écran de **révision** après la partie : toutes les questions dans l'ordre, avec la réponse donnée, la bonne
  réponse, l'explication et le flag éventuel ; filtres « toutes / fautes / sans réponse / à surveiller ». Le filtre
  s'ouvre sur les fautes s'il y en a.
- Nouveau nom, nouvelle mascotte (⚖️), nouveau favicon, accroche « Révise ton cours à deux, contre la montre. Zéro
  ennui garanti. ».

### Techniquement

- **Données du cours** : `data/courses/echr-anglais-s7.json` (`meta`, `topics`, `modes`, `questions[]` avec `id`,
  `topic`, `type`, `difficulty`, `question`, `choices`, `answer`, `explanation`, `source`, `flag?`, `disputed?` ;
  32 topics, 6 types de question) et son compagnon lisible `data/courses/echr-anglais-s7.md` (principe de vérité,
  table des modes, corrigé des 20 annales).
- **Chargeur commun** `scripts/lib/load-questions.mjs` : `loadQuestions(theme)` accepte les deux formats
  (`data/questions/<theme>.json` simple, `data/courses/<theme>.json` structuré) et normalise chaque question en une
  ligne `[subtype, prompt, choices, correct, iso, explanation, difficulty, flag, disputed, source, external_id,
  qtype]`, avec le même mélange déterministe qu'avant. `gen-seed-sql.mjs` et `seed-remote.mjs` l'utilisent tous les
  deux ; les seeds géo et histoire sont **régénérés** au nouveau format (13 colonnes).
- **Modes pilotés par la base** : la constante `THEMES` disparaît ; `api.listModes()` lit la table `modes` triée par
  `sort`, `useModes()` (`src/hooks/useModes.ts`) met en cache et groupe par cours (`groupByCourse`), `ModePicker`
  (`src/components/ModePicker.tsx`) affiche les chips par cours dans le salon. Types `Mode`, `ReviewItem` et
  constante `DEFAULT_MODE = 'echr:full'` dans `src/types.ts`.
- **Révision** : `api.getReview(token)` → RPC `get_review` ; composant `ReviewList` (`src/components/ReviewList.tsx`,
  `reviewStatus`, `isFlagged`, type `ReviewFilter`) rendu en bas de `Results`. Un `game_not_finished` est retenté au
  prochain rafraîchissement d'état.
- `src/lib/subtype.ts` : libellés FR pour les 32 sous-types du cours (`ART. 6 · PROCÈS ÉQUITABLE`, `SUBSIDIARITÉ`…).
- **Renommage** : `package.json` → `boring-law`, `<title>` → « Boring Law », `VITE_BASE: /boring-law/` dans
  `pages.yml`, README. Détails conservés de l'époque « Geo » : la clé `localStorage` `boring-geo:session`
  (`src/lib/session.ts`) et le commentaire de `vite.config.ts` (`VITE_BASE=/boring-geo/`) — sans effet fonctionnel,
  mais à savoir avant de les chercher.

### Migrations SQL

| Fichier | Contenu |
|---|---|
| `0005_courses_modes_review.sql` | 1) `questions` gagne `explanation`, `difficulty` (check 1-3), `flag`, `disputed`, `source`, `external_id`, `qtype` + index `(theme, subtype)`. 2) Table `modes` (`id`, `course`, `theme`, `label`, `description`, `emoji`, `subtypes text[]` — null = tout le thème —, `sort`), lisible par `anon`, peuplée par un `insert … on conflict (id) do update` (7 modes CEDH + 3 Culture G). `_pick_questions` est **recréée** (`drop function` puis `create function`, en plpgsql) : elle cherche `p_mode` dans `modes` et, à défaut, retombe sur l'ancienne syntaxe `theme` / `theme:subtype`. 3) RPC `get_review(p_token)` : refuse tant que `status <> 'finished'`, puis renvoie les questions de `games.question_ids` (avec `ordinality`) jointes à la réponse du joueur dans `answers`. |
| `0003_seed_echr-anglais-s7.sql` | 250 questions, 13 colonnes. |
| `0003_seed_geo.sql`, `0003_seed_histoire.sql` | Régénérés au format 13 colonnes (mêmes questions). |

**Attention à l'ordre** : les trois seeds `0003_*` insèrent dans des colonnes créées par `0005`. Sur une base vierge,
ils ne passent qu'après `0005` (voir [annexe A](#annexe-a--migrations--ordre-dapplication-et-dépendances)).

## 6. Parties de 1 à 10 joueurs

**Commit** `923ef17` (18:58) — *Backend 1 à 10 joueurs (solo autorisé), get_state renvoie le classement complet* —
puis travail front **dans l'arbre de travail (non commité)** : 11 fichiers modifiés, 6 créés, plus `0007`.

### Pour le joueur

- Une partie accueille **de 1 à 10 joueurs** : l'hôte peut « Jouer en solo 🏃 » dès qu'il est seul, ou « Lancer la
  course 🏁 » avec autant de joueurs qu'il veut. Le compteur du salon affiche `n/10`, chaque arrivée déclenche un
  toast « 🎉 X a rejoint ! » et un son ; le salon se dit « complet » à 10.
- **Trois modes de course**, déduits du nombre de joueurs :
  - **solo** — pas d'adversaire à l'écran, la chip du HUD donne l'avancement et la précision (`3/10 · 100 %`), les
    résultats titrent « Terminé ! » et jugent la précision (≥ 80 % : mascotte en fête, confettis et son de
    victoire ; ≥ 50 % : mascotte neutre ; en dessous : mascotte pensive) ;
  - **duel** (2) — l'expérience de l'étape 4, inchangée ;
  - **groupe** (3 à 10) — le salon passe en liste dense de pastilles (« Course à N »), le HUD montre à droite le
    mieux classé des autres et une chip de **rang** (« 🥇 1er », « 🥈 2e ex æquo sur 7 », « 5e sur 7 »), un
    **classement** de 5 lignes maximum (top 4 + « … » + ma ligne si je suis plus bas) est affiché sous le HUD sur
    grand écran ou s'ouvre depuis la chip sur petit écran, les annonces deviennent « En tête ! », « Égalité en tête »,
    « On te passe devant ! », « Remontée ! » (gain d'au moins 2 places). Résultats : **podium** des 3 premiers
    (révélé 3 → 2 → 1) puis liste des suivants, titre selon mon rang (« Victoire ! », « Égalité en tête ! », « Sur
    le podium ! », « Ne lâche rien ! »).
- Les **ex æquo** sont assumés : le rang est un rang « compétition » (1, 1, 3) calculé sur le seul score, cohérent
  avec `winner_player_id` (null dès que le meilleur score est partagé).
- Écran « Terminé ! » adapté : en groupe il embarque le classement et « k/N joueurs ont fini… ».
- Accueil : « Révise ton cours seul ou jusqu'à 10 joueurs, contre la montre. » — le solo se lance depuis le salon,
  pas de bouton dédié.

### Techniquement — backend (commité)

- `games.max_players int not null default 10` (check 1-10) ; `join_game` compare le nombre de joueurs à
  `g.max_players` ; `start_game` **ne lève plus** `need_two_players` (l'entrée subsiste dans `ERRORS` de `api.ts`,
  désormais inerte).
- `get_state` renvoie en plus `game.max_players`, `game.player_count`, `me.rank`, et un tableau **`players`** (tous
  les joueurs, moi compris, construits par le nouvel helper `_player_json(p players, p_rank int)`). `opponent` est
  conservé pour le duel : c'est le mieux classé des **autres** joueurs (null en solo).
- `src/types.ts` : `GameInfo.max_players`, `GameInfo.player_count`, `PlayerInfo.rank`, `GameState.players`,
  constante `MAX_PLAYERS = 10`.
- La fin de partie ne change pas : timer à zéro ou tous les joueurs ont fini (règle de l'étape 3) ; en solo,
  `_finalize_game` désigne trivialement le seul joueur.

### Techniquement — front (arbre de travail)

- **Nouveaux fichiers** : `src/lib/race.ts` (`RaceMode = 'solo' | 'duel' | 'group'`, `raceModeOf(playerCount)`,
  `ordinalFr`, `rankLabel`), `src/lib/ranking.ts` (`rankOf`, `sharedRank`, `scoreless`, `precisionOf`, réexport
  `ordinal` — **seule source de vérité du rang affiché**), `src/hooks/useMediaQuery.ts` (`matchMedia` réactif via
  `useSyncExternalStore`), `src/components/PlayerGrid.tsx` (grille du salon : cartes `md` jusqu'à 2, pastilles denses
  à partir de 3, case fantôme « Invite tes potes » qui copie le code), `src/components/Leaderboard.tsx` (`MAX_ROWS =
  5`, `ROOMY_QUERY = '(min-width: 640px) and (min-height: 760px)'` décide inline vs overlay), `src/components/Podium.tsx`
  (`Podium`, `RankList`, `PODIUM_SIZE = 3`, `PODIUM_STEP_MS = 150`).
- **Modifiés** : `Hud` (trois layouts, la chip devient un bouton `aria-expanded` sur petit écran), `RaceStatus`
  (texte et couleur par mode : vert 1er, jaune podium / moitié haute, rouge dernier tiers), `useRaceEvents`
  (signature `(me, opp, players, active, mode)` ; branche duel inchangée, branche groupe sur le changement de rang
  compétition), `useOpponentPulse` (ne compare que deux observations du **même** joueur : en groupe, `opponent` change
  d'identité au fil de la course), `PlayerCard` (taille `sm`), `Stars` (légende paramétrable), `Lobby`, `Game`,
  `Results` (fonction `summarize()` → verdicts `win | tie | lose | podium | keep | soloParty | soloHappy | soloThink`),
  `Home`, README.
- Règle de conception : l'UI ne lit **jamais** `rank` renvoyé par le serveur pour l'affichage ; elle recalcule un rang
  compétition avec `rankOf(me, players)` sur le tableau `players` (dont elle respecte l'ordre). Le solo est traité à
  part partout (pas de « Victoire ! » contre personne).

### Migrations SQL

| Fichier | Contenu |
|---|---|
| `0006_multiplayer.sql` (commité) | Colonne `games.max_players` ; `join_game` et `start_game` réécrites ; helper `_player_json` (révoqué pour `anon`) ; `get_state` renvoie `players` trié par `rank() over (order by score desc, answered_count desc, created_at asc)` — un rang **unique** par construction — plus `max_players`, `player_count`, `me.rank`. |
| `0007_rank_by_score.sql` (arbre de travail) | `get_state` recréée : le rang devient `rank() over (order by score desc)` (ex æquo partagés, aligné sur `winner_player_id`) tandis que l'**ordre** du tableau reste `score desc, answered_count desc, created_at asc`. Aucun changement de schéma. |

## 7. Documentation

**Arbre de travail (non commité)** : création du dossier `docs/` au-delà de la spec de design — ce journal
(`docs/CHANGELOG.md`) et les documents compagnons, dont l'[architecture](architecture.md). Objectif : qu'un
développeur qui découvre le projet retrouve sans lire tout le code où vit chaque règle (SQL, hooks, composants) et
pourquoi elle est là. Aucun fichier de code n'est modifié par cette étape.

## 8. Troisième cours — Droit fiscal · S7, un examen oral

**Commit** `b037247` (23 septembre) — *Cours Droit fiscal · S7 : 188 QCM pensés pour un oral de 3 questions de cours*.
La banque est datée `built: 2026-09-21` (`meta` du JSON) et les deux migrations distantes portent les horodatages
`20260921181347` puis `20260923074504`. 3 fichiers créés (`data/courses/droit-fiscal-s7.json`,
`data/courses/droit-fiscal-s7.md`, `supabase/migrations/0008_fiscal_tags_oral.sql`), 5 fichiers de code modifiés
(les deux scripts de seed, `src/types.ts`, `src/components/ReviewList.tsx`, `src/lib/subtype.ts`), plus la
documentation.

### Pour le joueur

- Troisième cours : **« Droit fiscal · S7 »** (droit fiscal général, M1 Droit des affaires, IDAI Montpellier),
  **188 questions en français**, thème `droit-fiscal-s7`, 13 sous-types (`intro`, `ir-champ`, `patrimoine`,
  `salaires`, les quatre `bic-*`, `liquidation`, les quatre `tva-*`).
- **L'examen n'est pas un QCM : c'est un oral de 3 questions de cours tirées au sort.** Chaque QCM est donc une brique
  d'une réponse d'oral : il est rattaché à l'une des **50 questions de cours** (`or-01` à `or-50`) et son explication
  commence par « À l'oral : » — ce qu'il faut réciter, articles et chiffres compris (les 188 questions ont les deux).
- En **révision**, un encart violet « 🎤 Question de cours à l'oral » rappelle la question d'oral préparée par le QCM.
  Il s'affiche **avant** l'écart cours / droit positif et avant l'explication : c'est lui que le prof demandera. Une
  chip « 🎯 TD » marque les questions martelées en TD.
- **11 modes** (`sort` 20 à 30), quatre d'entre eux filtrant par tag et non par sous-type (Oral blanc, Spécial TD,
  Chiffres & articles, Pièges ; Tout le programme ne filtre ni par sous-type ni par tag) : Tout le programme (188),
  Oral blanc (50, une question par question de cours), Spécial TD (66), Chiffres & articles (105), Pièges (94),
  Introduction (16), IR : champ (14), Revenus catégoriels (23), BIC (73), Liquidation (13), TVA (49).
- Le mode **proposé par défaut devient « Tout le programme » du droit fiscal** (`DEFAULT_MODE` passe de `echr:full` à
  `fiscal:full`, utilisé par `api.createGame(nick, 20, 120, DEFAULT_MODE)` dans `src/pages/Home.tsx`).
- Même principe de vérité qu'à l'étape 5 : **42 questions flaggées** (le cours contre le droit positif) et
  **55 champs `disputed`** (divergences entre prises de notes, le CM de référence l'emporte).

### Comment la banque a été construite

Le pipeline est décrit en fin de fiche (`data/courses/droit-fiscal-s7.md`, section « Contrôles passés ») :

| Étape | Ce qu'elle produit |
|---|---|
| Corpus | le dossier `S7/Droit fiscal` : le CM de référence (prise de notes Sibylle), les fiches d'examen, le corrigé du partiel de TD, trois prises de notes de recoupement, le plan de cours — listés dans `meta.sources` |
| Génération thème par thème | chaque question adossée à des **lignes précises** d'un fichier du corpus (champ `source`, ex. `01-cm-sibylle.txt l. 4376-4453`) |
| Relecture adversariale par thème | 13 relecteurs indépendants (réponses fausses, double réponse défendable, distracteur accidentellement vrai, erreur d'article ou de chiffre), puis 13 correcteurs qui appliquent thème par thème |
| Critique transversale | doublons entre thèmes, cohérence des chiffres et des articles, homogénéité du ton des explications, équilibre des types et des difficultés |
| Contrôles de schéma | IDs uniques, 4 propositions distinctes, index de réponse valide, aucun énoncé dupliqué, `oral` renseigné et pointant vers une question existante, **aucune des 50 questions de cours orpheline**, aucune référence positionnelle (« la proposition b »), aucune ligature héritée des PDF (« dé nit », « béné ce ») |

### Techniquement

- **Données du cours** : `data/courses/droit-fiscal-s7.json` = `meta`, `topics` (13), `modes` (11), **`oral`** et
  `questions`. Une question porte `id`, `topic`, `type`, `difficulty`, `question`, `choices`, `answer`,
  `explanation`, **`oral`** (id `or-NN`), **`tags`**, `source`, `flag?`, `disputed?`. Une entrée de la clé `oral`
  porte `id`, `question`, `topic`, `td`, `probability`, `plan` et `sources`. La fiche compagnon
  `data/courses/droit-fiscal-s7.md` (791 lignes) reprend le principe de vérité, le tableau des 42 flags, les modes,
  les **50 questions de cours avec leur plan de réponse**, le format et les contrôles.
- **Tags** : `td` (66), `chiffres` (105), `piege` (94), `oral-blanc` (50) — transversaux aux sous-types, c'est ce qui
  permet un mode « Oral blanc » d'exactement une question par question de cours.
- `scripts/lib/load-questions.mjs` : la ligne normalisée gagne deux colonnes en fin (**14 au lieu de 12**) :
  `[…, qtype, tags, oral]`. `tags` est null si la liste est vide ; **`oral` est résolu de l'id vers le TEXTE** de la
  question de cours (`Map` construite sur la clé `oral` du JSON, repli sur l'id si l'entrée manque) — c'est ce texte
  qui s'affiche en révision, sans jointure supplémentaire.
- `scripts/gen-seed-sql.mjs` : insère les deux colonnes, `tags` via
  `array(select jsonb_array_elements_text(x->12))` quand l'élément est un tableau, `oral` en `x->>13`.
- `src/types.ts` : `ReviewItem` gagne `oral: string | null` et `tags: string[]` ; `DEFAULT_MODE = 'fiscal:full'`.
- `src/components/ReviewList.tsx` : entrée `oral` dans `NOTE` (bord et fond violets) ; l'ordre des encarts devient
  **oral → flag → explication → disputed** ; chip `🎯 TD` dans l'en-tête quand `item.tags.includes('td')`.
- `src/lib/subtype.ts` : 13 libellés FR de plus (`INTRO · SOURCES`, `BIC · PRINCIPES`, `TVA · DÉDUCTION`…).
- **Seed** : la banque a d'abord été poussée à distance, puis `0003_seed_droit-fiscal-s7.sql` a été généré pour le dépôt (à appliquer après `0008`) ; la
  banque a été poussée à distance par `SEED_SECRET=… node scripts/seed-remote.mjs droit-fiscal-s7` → 188 lignes. La
  RPC temporaire `admin_seed_questions` a dû être **recréée** avec les colonnes `tags` / `oral` avant le seed, puis
  supprimée (elle n'est toujours dans aucune migration).
- Aucun changement dans `src/lib/api.ts`, les RPC ni les hooks : un cours de plus, c'est des données plus des lignes
  dans `modes`.

### Migrations SQL

| Fichier | Contenu |
|---|---|
| `0008_fiscal_tags_oral.sql` | 1) `questions` gagne `tags text[]` (index GIN `questions_tags_idx`) et `oral text` (le **texte** de la question de cours, résolu au seed) ; `modes` gagne `tags text[]`. 2) `_pick_questions` recréée : elle lit `subtypes` **et** `tags` du mode et filtre `(v_subtypes is null or subtype = any(v_subtypes)) and (v_tags is null or tags && v_tags)` ; le repli `theme` / `theme:subtype` reste, sans tags. 3) `get_review` recréée : elle renvoie en plus `oral` et `tags` (`coalesce(to_json(q.tags), '[]')`, jamais null côté client). 4) `insert … on conflict (id) do update` des **11 modes** du cours (`sort` 20 à 30). |

Appliquée sur la base de production en **deux migrations distantes** : `fiscal_tags_oral_schema` (colonnes, index,
`_pick_questions`, `get_review`) puis `fiscal_modes` (les 11 lignes de `modes`).

## 9. La banque de droit fiscal passe au droit en vigueur

**Arbre de travail** (23-24 septembre). L'étape 8 avait construit la banque sur le cours ; celle-ci la confronte aux
textes. Le déclencheur est le format de l'examen : en droit fiscal il est **oral**, et un examinateur ne sanctionne
pas un candidat qui cite le bon article et le bon chiffre. Le principe de vérité s'inverse donc pour ce cours — la
banque suit le **droit en vigueur**, et le `flag` garde la trace de ce que le cours affirmait. Le cours CEDH, lui,
garde l'ancienne règle : son examen est un QCM noté sur la conformité au cours (voir
[content §4](content.md#4-principe-de-vérité-dun-cours)).

### Pour le joueur

- **131 questions sur 188 retouchées**, dont **40 où une proposition ou la bonne réponse change**. Exemples : le taux
  minimum d'imposition des non-résidents (art. 197 A) passe de 26 070 € à **29 579 €** pour les revenus 2025, la
  valeur périmée devenant un distracteur ; le nombre de conventions fiscales bilatérales tombe de « plus de 140 » à
  **124 en vigueur** ; le PFU est ramené partout à **31,4 %** (CSG sur les revenus du capital à 10,6 %).
- **Les `flag` passent de 42 à 110** : chaque écart avec le cours est désormais tracé, et aucun ne dit plus
  « réponds comme le cours ». **Les `disputed` tombent de 55 à 44** : treize divergences entre prises de notes ont
  été tranchées par le texte lui-même.
- Les **50 plans de réponse d'oral** sont mis à jour : 105 puces réécrites, 38 puces « ⚠️ ton cours disait… »
  ajoutées, une contradiction interne entre deux plans levée (le taux de TVA d'un plat à emporter : 10 % en
  consommation immédiate, 5,5 % s'il est conservable).
- Les effectifs des modes ne bougent pas (aucune question ajoutée ni supprimée) : Tout le programme 188, Oral blanc
  50, Spécial TD 66, Chiffres & articles 105, Pièges 94.

### Comment

Trois passes, décrites en détail dans [content §4.1](content.md#41-la-vérification-web-de-la-banque-de-droit-fiscal) :
un agent par thème confronte chaque élément vérifiable à Légifrance **et** à une seconde source officielle (BOFiP,
impots.gouv.fr, service-public.fr, sites des juridictions) → **906 éléments, 176 constats** ; chaque constat repasse
devant un agent chargé de le **réfuter** → **16 écartés, 160 confirmés** ; un agent par thème les applique, puis un
dernier relit les 13 thèmes ensemble pour rattraper ce qu'aucun ne pouvait voir seul (un même chiffre à deux valeurs
dans deux thèmes, une note de provenance logée dans `flag` au lieu de `disputed`).

### Techniquement

- `data/courses/droit-fiscal-s7.json` régénéré (`meta.truth` réécrit, `meta.built` au 24 septembre) et la fiche
  `data/courses/droit-fiscal-s7.md` refaite — **902 lignes**, dont un tableau des 110 flags « ce que disait ton
  cours → ce qui est exact aujourd'hui ».
- `src/components/ReviewList.tsx` : la note jaune devient « ⚠️ Ton cours et le droit en vigueur divergent » et
  **perd son accroche fixe**. L'ancienne (« Pour l'examen, retiens la version du cours. ») serait fausse en droit
  fiscal : c'est maintenant le texte du `flag` lui-même qui dit laquelle des deux versions la question suit.
- `supabase/migrations/0003_seed_droit-fiscal-s7.sql` régénéré (188 lignes, 420 Ko).
- **Seed de production appliqué en place** : la RPC temporaire `admin_seed_questions` a été réécrite en
  `update … from jsonb_array_elements(p_rows) where external_id = x->>10` (+ `insert` des nouveautés) au lieu d'un
  `delete` suivi d'un `insert`. Motif : des parties avaient déjà été jouées sur ce thème et `answers.question_id`
  référence `questions.id` — le `delete` échouait sur la contrainte de clé étrangère. La mise à jour par
  `external_id` garde les ids, donc les parties passées restent lisibles en révision. La RPC a été supprimée après
  le seed.
- Aucun changement de schéma : cette étape ne touche que des données et un libellé d'interface.

## Annexe A — Migrations : ordre d'application et dépendances

Les fichiers sont numérotés par étape fonctionnelle, pas par ordre d'exécution : les seeds `0003_*` ont été
régénérés à l'étape 5 avec des colonnes que seule `0005` crée. Sur une base **vierge**, l'ordre qui passe est :

```text
0001_schema.sql
0002_functions.sql
0004_modes_and_end_rule.sql
0005_courses_modes_review.sql        -- colonnes explanation, difficulty… + table modes + get_review
0003_seed_echr-anglais-s7.sql        -- ou : SEED_SECRET=... node scripts/seed-remote.mjs echr-anglais-s7
0003_seed_geo.sql
0003_seed_histoire.sql
0006_multiplayer.sql
0007_rank_by_score.sql
0008_fiscal_tags_oral.sql            -- colonnes tags / oral, modes.tags, 11 modes fiscaux
SEED_SECRET=... node scripts/seed-remote.mjs droit-fiscal-s7   -- 188 questions (seed versionné ensuite par gen-seed-sql.mjs)
```

Sur la base de production, les migrations ont été appliquées au fil des étapes (les seeds géo / histoire d'abord au
format 6 colonnes, puis rejoués au format 13 colonnes après `0005` : chaque seed commence par
`delete from questions where theme = '<theme>'`, il est donc rejouable). `0008` y a été appliquée en deux morceaux :
`fiscal_tags_oral_schema` (21 septembre) puis `fiscal_modes` (23 septembre).

**Attention à l'ordre, bis** : la banque de droit fiscal remplit `tags` et `oral`, deux colonnes que seule `0008`
crée. Elle ne se seede donc qu'après `0008` — et `0008` elle-même exige la table `modes` de `0005`.

| Fichier | Étape | Schéma | Fonctions (re)définies |
|---|---|---|---|
| `0001_schema.sql` | 1 | `questions`, `games`, `players`, `player_tokens`, `answers`, RLS, Realtime | — |
| `0002_functions.sql` | 1 | — | `server_now`, `_gen_code`, `_player_from_token`, `_pick_questions`, `_finalize_game`, `_current_question`, `create_game`, `join_game`, `update_settings`, `start_game`, `get_state`, `submit_answer`, `pass_question`, `end_game_if_expired` |
| `0003_seed_*.sql` | 1, 3, 5 | données `questions` | — |
| `0004_modes_and_end_rule.sql` | 3 | — | `_pick_questions` (theme:subtype), `submit_answer` (fin quand tous ont fini) |
| `0005_courses_modes_review.sql` | 5 | +7 colonnes sur `questions`, index, table `modes` | `_pick_questions` (table `modes`, recréée), `get_review` |
| `0006_multiplayer.sql` | 6 | `games.max_players` | `join_game`, `start_game`, `_player_json`, `get_state` |
| `0007_rank_by_score.sql` | 6 | — | `get_state` (rang sur le score seul) |
| `0008_fiscal_tags_oral.sql` | 8 | `questions.tags` (+ index GIN) et `questions.oral`, `modes.tags`, 11 modes fiscaux | `_pick_questions` (filtre par tags), `get_review` (+ `oral`, `tags`) |
| `0003_seed_droit-fiscal-s7.sql` | 8 | 188 lignes de `questions` (poussées d'abord par `seed-remote.mjs`, puis versionnées) — après `0008` | — |

## Annexe B — Évolution des RPC publiques

| RPC | Étape 1 (`0002`) | Étape 3 (`0004`) | Étape 5 (`0005`) | Étape 6 (`0006` / `0007`) |
|---|---|---|---|---|
| `create_game(p_nickname, p_question_count, p_duration_seconds, p_theme)` | créée | — | `p_theme` = id de mode (`echr:full`…) via `_pick_questions` | — |
| `join_game(p_code, p_nickname)` | refuse au-delà de 2 | — | — | refuse au-delà de `max_players` |
| `update_settings(p_token, …, p_theme)` | créée | accepte `theme:subtype` | accepte un id de `modes` | — |
| `start_game(p_token)` | exige 2 joueurs | — | — | l'hôte lance seul ou à N |
| `get_state(p_token)` | `game`, `me`, `opponent`, `question`, `server_now` | — | — | + `players[]`, `me.rank`, `game.max_players`, `game.player_count` ; `0007` : rang = score seul |
| `submit_answer(p_token, p_question_id, p_choice_index)` | finalise dès qu'un joueur a fini | finalise quand **tous** ont fini | — | — |
| `pass_question(p_token)` | créée | — | — | — |
| `end_game_if_expired(p_game_id)` | créée | — | — | — |
| `get_review(p_token)` | — | — | créée | — |

À l'**étape 8** (`0008`), aucune signature ne bouge : `_pick_questions` (interne) gagne un filtre par tags et
`get_review` renvoie deux champs de plus, `oral` et `tags`.

Le client (`src/lib/api.ts`) n'a changé qu'à l'étape 5 (`getReview`, `listModes`) : les évolutions de `get_state`
sont absorbées par les types de `src/types.ts` et par les composants.

## Annexe C — Ce que reçoit le client (`GameState`)

```ts
// src/types.ts — état actuel (étape 6)
interface GameState {
  game: GameInfo        // + max_players, player_count depuis 0006
  me: PlayerInfo        // + rank
  opponent: PlayerInfo | null   // le mieux classé des AUTRES (null en solo) — affichage duel
  players: PlayerInfo[]         // tous, moi compris, triés score desc / answered_count desc / arrivée
  question: Question | null     // question en tête de ma file, sans la réponse
  server_now: string            // horloge serveur → clockOffset (useGame) → useTimer
}
```

## Annexe D — Reconstruire ce journal

```bash
# Historique complet, du plus ancien au plus récent
git log --reverse --pretty=format:"%h %ad %s" --date=short

# Fichiers touchés par étape
git log --reverse --stat --pretty=format:"=== %h %ad %s ===" --date=iso

# Ce qui n'est pas encore commité (étape 9)
git status --short
git diff --stat HEAD
```

Sortie de la première commande au moment de l'écriture :

```text
fb44b34 2026-09-11 Boring Geo : quiz géo en course à 2 joueurs (Vite/React + Supabase)
431fcf7 2026-09-11 Ignore l'auto-répétition clavier, ignore .vercel
13cfa63 2026-09-11 Miroir GitHub Pages (le DNS univ bloque *.vercel.app)
998c559 2026-09-11 Modes Drapeaux et Histoire (252 questions), fin de partie quand les deux ont fini
e23d3ce 2026-09-11 Refonte UI/UX gamifiée « Globe Pop! » + sélecteur de modes (Géo / Drapeaux / Histoire)
18dc51c 2026-09-11 Session périmée : retour à l'accueil au lieu de boucler en erreur
e7421be 2026-09-11 Boring Geo devient Boring Law : apprentissage gamifié
923ef17 2026-09-11 Backend 1 à 10 joueurs (solo autorisé), get_state renvoie le classement complet
e4cb0d0 2026-09-11 Parties de 1 à 10 joueurs (solo, duel, groupe) + documentation complète
```

L'étape 9 (vérification web de la banque fiscale) n'apparaît pas encore : elle est dans l'arbre de travail. Une fois
commitée, remplacer « arbre de travail » par le hash dans le tableau de la vue d'ensemble et en tête de la section 9.
