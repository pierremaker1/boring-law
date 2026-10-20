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

// Capture par mémoire partagée (nouveau pipeline, Remotion >= 4.0.534) :
// dans cet environnement, environ 6 % des frames sortaient corrompues (une bande
// de l'image répétée en mosaïque). Retour aux captures d'écran classiques.
// Contrôle : `npm run check:frames` analyse chaque frame du MP4.
Config.setDisableSharedMemoryCapture(true);

// BT.709 plage limitée : le standard attendu par TikTok, Reels et les lecteurs mobiles.
Config.setColorSpace('bt709');
