// Copie le vrai code source de la composition dans src/generated/sourceCode.ts,
// pour l'afficher (flouté) en fond de la scène "C'est une IA qui l'a codée."
import {readdirSync, readFileSync, statSync, writeFileSync, mkdirSync} from 'node:fs';
import {join, relative} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const src = join(root, 'src');
const outDir = join(src, 'generated');

const walk = (dir) =>
	readdirSync(dir).flatMap((name) => {
		const full = join(dir, name);
		if (statSync(full).isDirectory()) {
			return full === outDir ? [] : walk(full);
		}
		return /\.(ts|tsx)$/.test(name) ? [full] : [];
	});

// Ordre de lecture : composition principale d'abord, puis le reste.
const files = walk(src).sort((a, b) => {
	const rank = (f) => (f.endsWith('SeventyYearsAI.tsx') ? 0 : f.includes('/scenes/') ? 1 : f.includes('/components/') ? 2 : 3);
	return rank(a) - rank(b) || a.localeCompare(b);
});

const code = files
	.map((f) => `// ${relative(root, f)}\n${readFileSync(f, 'utf8').replace(/\t/g, '  ')}`)
	.join('\n\n');

mkdirSync(outDir, {recursive: true});
writeFileSync(
	join(outDir, 'sourceCode.ts'),
	`// Fichier généré par scripts/embed-source.mjs : ne pas modifier à la main.\nexport const SOURCE_CODE = ${JSON.stringify(code)};\n`,
);
console.log(`sourceCode.ts : ${files.length} fichiers, ${code.split('\n').length} lignes.`);
