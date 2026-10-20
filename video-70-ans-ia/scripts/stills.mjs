// Génère un still au milieu de chaque scène (contrôle qualité visuel).
// Usage : node scripts/stills.mjs [dossier=out/previews] [--guides] [--frames=12,345]
import {bundle} from '@remotion/bundler';
import {ensureBrowser, openBrowser, renderStill, selectComposition} from '@remotion/renderer';
import {mkdirSync} from 'node:fs';
import {join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const args = process.argv.slice(2);
const outDir = resolve(root, args.find((a) => !a.startsWith('--')) ?? 'out/previews');
const guides = args.includes('--guides');
const framesArg = args.find((a) => a.startsWith('--frames='));

// Milieu de chaque scène du storyboard.
const SCENES = [
	['01-intro', 0, 90],
	['02-il-en-faudra-70', 90, 150],
	['03-1956-dartmouth', 150, 270],
	['04-1966-eliza', 270, 390],
	['05-1974-1993-hivers', 390, 510],
	['06-1997-deep-blue', 510, 615],
	['07-2012-alexnet', 615, 705],
	['08-2016-alphago', 705, 795],
	['09-2017-attention', 795, 885],
	['10-2022-chatgpt', 885, 1035],
	['11-cette-video', 1035, 1140],
	['12-fin', 1140, 1200],
];

const targets = framesArg
	? framesArg
			.slice('--frames='.length)
			.split(',')
			.map((f) => [`frame-${f.padStart(4, '0')}`, Number(f)])
	: SCENES.map(([name, from, to]) => [name, Math.floor((from + to) / 2)]);

mkdirSync(outDir, {recursive: true});
const serveUrl = await bundle({entryPoint: join(root, 'src/index.ts')});
// Même navigateur que le rendu CLI (voir remotion.config.ts).
const chromeMode = 'chrome-for-testing';
await ensureBrowser({chromeMode});
const browser = await openBrowser('chrome', {chromeMode});
const inputProps = {showSafeZones: guides};
const composition = await selectComposition({serveUrl, id: 'SeventyYearsAI', inputProps, puppeteerInstance: browser, chromeMode});

for (const [name, frame] of targets) {
	const output = join(outDir, `${name}-f${String(frame).padStart(4, '0')}.png`);
	await renderStill({composition, serveUrl, frame, output, inputProps, puppeteerInstance: browser, imageFormat: 'png', chromeMode});
	console.log(`✓ ${output}`);
}
await browser.close({silent: true});
