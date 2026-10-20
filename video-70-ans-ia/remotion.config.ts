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
