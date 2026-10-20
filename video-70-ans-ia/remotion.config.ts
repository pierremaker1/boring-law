import {Config} from '@remotion/cli/config';

// Images intermédiaires en JPEG haute qualité : texte net, rendu rapide.
Config.setVideoImageFormat('jpeg');
Config.setJpegQuality(95);
Config.setOverwriteOutput(true);
Config.setPixelFormat('yuv420p');

// Mode "Chrome for Testing" (headless=new) : contrairement au headless shell,
// il respecte le magasin de certificats du système (proxy TLS de l'environnement
// de build), ce qui permet de charger les Google Fonts pendant le rendu.
Config.setChromeMode('chrome-for-testing');

// Un seul onglet de rendu. Sous Linux, Remotion lance Chrome en --single-process :
// avec plusieurs onglets en parallèle, environ 6 % des frames sortaient en mosaïque
// (une bande de l'image répétée). Banc d'essai sur les frames 380-519 :
// concurrence 2 = 12 frames corrompues, concurrence 1 = 0.
// Contrôle : `npm run check:frames` analyse chaque frame du MP4.
Config.setConcurrency(1);

// Captures d'écran classiques plutôt que le pipeline récent par mémoire partagée
// (Remotion >= 4.0.534), écarté par prudence pendant l'enquête.
Config.setDisableSharedMemoryCapture(true);

// BT.709 plage limitée : le standard attendu par TikTok, Reels et les lecteurs mobiles.
Config.setColorSpace('bt709');
