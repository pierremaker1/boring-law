# 70 ans d'IA en 40 secondes

Vidéo verticale TikTok / Reels réalisée avec **Remotion 4** (React + TypeScript).

- **Fichier final :** [`out/70-ans-ia.mp4`](out/70-ans-ia.mp4)
- **Format :** 1080 x 1920, 30 fps, 1200 frames (40 s), H.264, muette
- **Composition :** `SeventyYearsAI`
- **Contrôle visuel :** un still au milieu de chaque scène dans [`out/previews/`](out/previews)

Concept : *le design traverse les époques*. Un compteur d'années permanent défile de 1956 à 2026 en haut de l'écran, et tout change de style avec lui : télétype ambre, écran CRT vert qui gèle, interface grise et pixels des années 90, flat design, puis dégradés et verre dépoli.

---

## Prévisualiser

Prérequis : Node 18 ou plus (testé avec Node 22). Au premier rendu, Remotion télécharge seul son Chrome for Testing (environ 190 Mo, voir « Navigateur de rendu »).

```bash
cd video-70-ans-ia
npm install
npm run dev          # Remotion Studio sur http://localhost:3000, composition "SeventyYearsAI"
```

## Rendre

```bash
npm run render       # = npx remotion render SeventyYearsAI out/70-ans-ia.mp4 --codec=h264 --crf=18
npm run stills       # régénère les 12 stills de contrôle dans out/previews/
npm run typecheck    # tsc --noEmit
npm run check:frames # vérifie qu'aucune frame du MP4 n'est corrompue (Python 3 + numpy)
```

Les scripts `render`, `stills`, `dev` et `typecheck` lancent d'abord `npm run embed` (voir « Le vrai code en fond » plus bas).

Options utiles du script de stills :

```bash
node scripts/stills.mjs out/qa --guides            # affiche les zones de sécurité en rouge
node scripts/stills.mjs out/qa --frames=99,399,620  # frames précises
```

## Modifier le @ de fin (HANDLE)

Tout en haut de [`src/SeventyYearsAI.tsx`](src/SeventyYearsAI.tsx) :

```ts
export const HANDLE = "";          // vide : l'écran de fin n'affiche aucun @
export const HANDLE = "mon_compte"; // affiche "@mon_compte" sous "Et ça ne fait que commencer."
```

Le `@` initial est ajouté automatiquement (et retiré s'il est déjà tapé).

## Modifier un texte

Chaque scène est un fichier de [`src/scenes/`](src/scenes). Les textes y sont écrits en clair.

| Frames | Scène | Fichier |
| --- | --- | --- |
| 0-90 | « En 1956, 10 chercheurs... » | `Intro.tsx` (segments du `Typewriter`) |
| 90-150 | « Il en faudra 70. » | `Seventy.tsx` |
| 150-270 | 1956 · Dartmouth | `Dartmouth.tsx` |
| 270-390 | 1966 · ELIZA | `Eliza.tsx` |
| 390-510 | 1974-1993 · Deux hivers de l'IA | `Winter.tsx` |
| 510-615 | 1997 · Deep Blue | `DeepBlue.tsx` |
| 615-705 | 2012 · AlexNet | `AlexNet.tsx` |
| 705-795 | 2016 · AlphaGo | `AlphaGo.tsx` |
| 795-885 | 2017 · "Attention Is All You Need" | `Attention.tsx` (mots dans `TOKENS`) |
| 885-1035 | 2022 · ChatGPT | `ChatGpt.tsx` |
| 1035-1140 | « Et cette vidéo ? » | `ThisVideo.tsx` |
| 1140-1200 | « 70 ans. Et ça ne fait que commencer. » | `End.tsx` |

Les retours à la ligne sont posés à la main (`\n` dans les segments tapés, `<br />` ailleurs) pour que chaque ligne tienne entre les marges. Après une modification, relancer `npm run stills` et vérifier l'image.

- Timings des scènes, des époques et du compteur : [`src/timeline.ts`](src/timeline.ts)
- Couleurs et zones de sécurité : [`src/theme.ts`](src/theme.ts)
- Polices : [`src/fonts.ts`](src/fonts.ts)

## Structure

```
src/
  SeventyYearsAI.tsx     composition principale (HANDLE en haut), une <Sequence> par époque
  Root.tsx               enregistrement de la composition
  timeline.ts            frames du storyboard, époques, keyframes du compteur d'années
  theme.ts / fonts.ts    palettes par époque, Google Fonts
  components/
    Eras.tsx             fond + compteur de chaque époque (télétype, CRT + givre, pixels, flat + volets, verre)
    YearCounter.tsx      compteur d'années, 5 styles
    Odometer.tsx         chiffres qui roulent (retenues mécaniques, flou de vitesse)
    SevenSeg.tsx         afficheur LED 7 segments en SVG (1997)
    Transitions.tsx      transitions entre époques : scanline, pixels, glitch RVB, morphing
    Typewriter.tsx       frappe lettre par lettre (mise en page figée dès la frame 0)
    Icons.tsx            flocon, étincelle, pièces d'échecs en pixel art (SVG)
    Textures.tsx         grain, scanlines, vignette
  scenes/                une scène par fichier
  generated/sourceCode.ts  copie du code source (générée, voir ci-dessous)
scripts/
  embed-source.mjs       génère src/generated/sourceCode.ts
  stills.mjs             stills de contrôle (un bundle, un navigateur, N images)
```

### Le vrai code en fond

La scène « C'est une IA qui l'a codée. » fait défiler, flouté, le vrai code de cette composition. `scripts/embed-source.mjs` copie tous les fichiers de `src/` dans `src/generated/sourceCode.ts` avant chaque rendu : si le code change, le fond change aussi.

---

## Décisions prises (en autonomie)

**Narration et compteur**

- Le compteur est visible dès la frame 0 et affiche 1956 (le texte d'accroche dit « En 1956 »). « Le compteur démarre » à l'impact de « 70. » (frame 99) : sa barre de progression 1956 → 2026 se dessine, les chiffres flashent.
- Le compteur roule pendant la transition d'entrée de chaque scène, puis se fige sur l'année de la scène. Les écarts se resserrent (10 ans en 18 frames, puis 15 ans en 9, 5 ans en 6, 4 ans en 5...) : il accélère.
- Pendant les hivers (1974-1993), il rampe année par année et chaque année dure plus longtemps que la précédente, jusqu'à presque s'arrêter sur 1993. Chaque année « tient » puis roule vite : les chiffres restent lisibles même au ralenti.
- 2022 → 2026 pour « Et cette vidéo ? » et la fin : 2026 est l'année de réalisation de la vidéo (70 ans après 1956).
- Sous les chiffres, une barre de progression dont le style suit aussi l'époque : trous de bande perforée, réglette d'oscilloscope, barre de progression 90s, curseur flat, rail en dégradé.

**Design par époque**

- 1956-1966 : Courier Prime ambre sur fond sombre, papier listing à perforations latérales qui avance d'un cran à chaque scène, lettres qui flashent « à chaud » à la frappe, cartes perforées 80 colonnes perforées en direct.
- 1974-1993 : VT323 vert phosphore, scanlines, scintillement, bande de rafraîchissement, coins de tube cathodique. Le givre (texture `feTurbulence` + cristaux en fougère) envahit l'écran depuis les bords et le vert refroidit vers un bleu glacier. Le givre reste volontairement sur les bords : le texte n'est jamais recouvert.
- Courbe des financements : illustrative, sans aucun chiffre ni date sur les axes. Deux creux = deux hivers, la glace y monte comme dans un lac.
- 1997 : bureau tramé, fenêtres grises en relief, info-bulle jaune pâle, compteur LED rouge 7 segments, animation volontairement saccadée (`posterize`). Aucune vraie marque : la barre de titre n'a pas de texte. Sur l'échiquier, la dame noire met le roi en échec puis le roi bascule (position illustrative, pas la vraie partie).
- 2012-2017 : Montserrat, aplats francs (bleu, sarcelle, violet) avec ombres longues. AlexNet : une grille de pixels bruités est « lue » par une bande de balayage, se nettoie en silhouette de chat (sans visage), puis se compresse pour devenir l'icône de l'étiquette « chat 98 % ». AlphaGo : 40 pierres posées en rafale qui accélère. Transformer : les mots du titre deviennent des jetons reliés par des arcs d'attention, puis les lignes convergent vers le T de « ChatGPT », qui s'illumine.
- 2022-2026 : Inter, halos colorés, verre dépoli (`backdrop-filter`), bulles de chat sans texte (lignes de squelette), compteur 0 → 100 000 000 en croissance exponentielle qui s'emballe.

**Transitions (le rythme s'accélère)**

- 390 : balayage de scanline (16 frames), 510 : dissolution en pixels (14), 615 : glitch avec séparation RVB par filtre SVG (10), 885 : morphing carré plat → cercle → plein écran (12). Les scènes raccourcissent en parallèle (120 frames au début, 90 en flat) et les dernières coupes ne durent que 6 frames.
- À l'intérieur d'une époque : avance papier (télétype, 6 frames), volet diagonal jaune puis couleur qui emporte le contenu (flat), zoom + flou (verre, 6 frames).

**Lisibilité et zones de sécurité**

- Marges latérales de 90 px, compteur à partir de y = 172 (sous les 150 px du haut), aucun texte sous y = 1600 (320 px du bas libres).
- Titres de 84 à 236 px, textes de 56 px minimum (le plus petit : 58 px).
- Chaque texte reste au moins 1,5 s (45 frames) à pleine opacité, vérifié frame par frame avec la fonction `spring()` de Remotion pour les entrées à ressort. Les plus courts : « @HANDLE » (47 frames, si renseigné), « Et ça ne fait que commencer. » (49), « chat 98 % » (au moins 49), « 70. » (51), « 70 ans. » (53).
- Les sorties de scène commencent à la coupe : aucune durée de lecture n'est mangée par une transition, et l'ancienne scène s'efface en 3 frames pour que deux textes ne se superposent jamais.

**Textes**

- Textes du storyboard repris mot pour mot, aucun fait ni chiffre ajouté. Aucun tiret cadratin (y compris dans le code source affiché en fond).
- Typographie française : espace insécable avant `:`, `?` et `%`, espaces fines dans 100 000 000.
- Guillemets et apostrophes : droits (`"`, `'`) dans les polices à chasse fixe des années 50-90 (authentiques sur un terminal), typographiques (`“ ”`, `’`) dans les polices modernes.
- Les titres longs sont coupés en deux lignes après « · » (ex. « 1966 · ELIZA, / premier chatbot »).

**Technique**

- Toutes les animations passent par `useCurrentFrame()`, `interpolate()`, `spring()` et des courbes `Easing.bezier` maison : aucune animation CSS.
- Aucune image, aucun logo, aucun visage : uniquement typo, formes CSS et SVG.
- Les éléments ne sont pas enveloppés dans `Interactive.*` (édition dans le Studio) : le code reste plus lisible et la vidéo est pilotée par le code.
- `HtmlInCanvas` et `@remotion/effects` (WebGL) ont été écartés : ils demandent un drapeau Chrome et un GPU. Les effets (glitch RVB, givre, grain) sont faits en SVG/CSS et rendent partout.
- Le Studio n'a pas été ouvert pendant la réalisation (session sans navigateur) : le contrôle s'est fait sur des stills.

**Navigateur de rendu**

- `npx remotion browser ensure` installe Chrome Headless Shell 157 sans problème, mais dans l'environnement de build le trafic HTTPS passe par un proxy dont le certificat n'est connu que du magasin système (NSS). Le headless shell l'ignore et les Google Fonts échouaient (`ERR_CERT_AUTHORITY_INVALID`).
- Solution retenue : `Config.setChromeMode('chrome-for-testing')` dans `remotion.config.ts`. Remotion télécharge alors son Chrome for Testing épinglé, qui respecte le magasin système. Aucune vérification TLS n'a été désactivée. Sur une machine sans proxy, le headless shell par défaut devrait aussi convenir (non testé ici).
- Images intermédiaires en JPEG qualité 95 pour un texte net.
- **Rendu sur un seul onglet** (`Config.setConcurrency(1)`). Le premier rendu complet contenait 68 frames corrompues sur 1200 : une bande de l'image répétée en mosaïque, surtout pendant l'hiver CRT, alors que les stills des mêmes frames étaient propres. Sous Linux, Remotion lance Chrome en `--single-process`, et plusieurs onglets qui rendent en parallèle se perturbent. Banc d'essai sur les frames 380-519 : concurrence 2 = 12 frames corrompues, `--disable-gpu-rasterization` = 11, `--gl=swangle` = 119, concurrence 1 = 0. Le rendu prend quelques minutes de plus, sans défaut.
- La capture par mémoire partagée (pipeline récent de Remotion 4.0.534+) est aussi désactivée par prudence : `Config.setDisableSharedMemoryCapture(true)`.
- `npm run check:frames` (`scripts/check-tiling.py`) décode chaque frame du MP4 et signale toute image qui se répète à l'identique par bandes. À relancer après chaque rendu.
- Espace couleur BT.709 en plage limitée (`Config.setColorSpace('bt709')`) : par défaut Remotion sortait du `yuvj420p` plage complète non étiqueté, que certains lecteurs mobiles affichent avec des noirs délavés.

## Contrôle qualité effectué

- `npx tsc --noEmit` : 0 erreur.
- Stills au milieu de chaque scène (`out/previews/`), plus des stills de travail sur chaque transition et à la fin de chaque scène. Corrigé au fil des passes : halo du compteur coupé en rectangles, dernière lettre tapée qui restait « chaude », cartes perforées qui touchaient le titre, cristaux de givre sur le texte, remplissage des creux trop « graphique en barres », mini-bulles qui dépassaient du verre, flash avant l'impact du « 70 », textes qui se chevauchaient pendant les volets et les fondus.
- Planche contact du MP4 final (une frame sur 15) relue, et `npm run check:frames` sur les 1200 frames.
- `npx remotion ffprobe out/70-ans-ia.mp4` : voir ci-dessous.

## Rendu final

Commande : `npx remotion render SeventyYearsAI out/70-ans-ia.mp4 --codec=h264 --crf=18` (réglages de `remotion.config.ts`), environ 10 minutes sur 4 cœurs.

Résultat de `npx remotion ffprobe out/70-ans-ia.mp4` :

| Propriété | Valeur |
| --- | --- |
| Durée | 40,000 s |
| Frames | 1200 |
| Dimensions | 1080 x 1920 |
| Cadence | 30 fps |
| Codec | H.264 High, `yuv420p` |
| Couleur | BT.709, plage limitée (tv) |
| Audio | aucun (vidéo muette) |
| Poids | 13,3 Mo (sous la limite de 50 Mo, CRF 18 conservé) |

`npm run check:frames` : 1200 frames analysées, 0 suspecte.
