import {Easing, interpolate} from 'remotion';

// Storyboard (frames à 30 fps). Les débuts et fins sont ceux du brief.
export const SCENES = {
	intro: {from: 0, to: 90},
	seventy: {from: 90, to: 150},
	dartmouth: {from: 150, to: 270},
	eliza: {from: 270, to: 390},
	winter: {from: 390, to: 510},
	deepBlue: {from: 510, to: 615},
	alexNet: {from: 615, to: 705},
	alphaGo: {from: 705, to: 795},
	attention: {from: 795, to: 885},
	chatGpt: {from: 885, to: 1035},
	thisVideo: {from: 1035, to: 1140},
	end: {from: 1140, to: 1200},
} as const;

export const TOTAL_FRAMES = 1200;

// Époques visuelles. `intro` = durée de la transition d'entrée (en frames),
// de plus en plus courte : le rythme accélère vers la fin.
export const ERAS = {
	teletype: {from: 0, to: 390, intro: 0},
	crt: {from: 390, to: 510, intro: 16},
	pixel: {from: 510, to: 615, intro: 14},
	flat: {from: 615, to: 885, intro: 10},
	glass: {from: 885, to: 1200, intro: 12},
} as const;

export type EraName = keyof typeof ERAS;

// Compteur d'années : keyframes [frame, année]. Chaque segment roule pendant
// la transition d'entrée de la scène, puis se fige sur l'année de la scène.
// Les écarts se resserrent : le compteur accélère, sauf pendant l'hiver
// où il ralentit presque jusqu'à l'arrêt.
type Key = {f: number; y: number; ease: (t: number) => number};

const inOut = Easing.bezier(0.65, 0, 0.35, 1);
const out = Easing.bezier(0.16, 1, 0.3, 1);
// Décélération continue : chaque année met plus longtemps que la précédente,
// le mécanisme gèle jusqu'à presque s'arrêter.
const freeze = (t: number) => 1 - Math.pow(1 - t, 2.4);

const YEAR_KEYS: Key[] = [
	{f: 0, y: 1956, ease: inOut},
	{f: 272, y: 1956, ease: inOut},
	{f: 290, y: 1966, ease: inOut},
	{f: 392, y: 1966, ease: inOut},
	{f: 404, y: 1974, ease: out},
	{f: 408, y: 1974, ease: out},
	{f: 500, y: 1993, ease: freeze},
	{f: 512, y: 1993, ease: inOut},
	{f: 520, y: 1997, ease: out},
	{f: 617, y: 1997, ease: inOut},
	{f: 626, y: 2012, ease: out},
	{f: 707, y: 2012, ease: inOut},
	{f: 713, y: 2016, ease: out},
	{f: 797, y: 2016, ease: inOut},
	{f: 800, y: 2017, ease: out},
	{f: 887, y: 2017, ease: inOut},
	{f: 893, y: 2022, ease: out},
	{f: 1037, y: 2022, ease: inOut},
	{f: 1042, y: 2026, ease: out},
	{f: 1200, y: 2026, ease: out},
];

// Année continue (pour la barre de progression).
export const yearAt = (frame: number): number => {
	if (frame <= YEAR_KEYS[0].f) {
		return YEAR_KEYS[0].y;
	}
	for (let i = 1; i < YEAR_KEYS.length; i++) {
		const a = YEAR_KEYS[i - 1];
		const b = YEAR_KEYS[i];
		if (frame <= b.f) {
			return interpolate(frame, [a.f, b.f], [a.y, b.y], {
				easing: b.ease,
				extrapolateLeft: 'clamp',
				extrapolateRight: 'clamp',
			});
		}
	}
	return YEAR_KEYS[YEAR_KEYS.length - 1].y;
};

// Valeur affichée par l'odomètre : chaque année tient, puis roule vite vers
// la suivante. Le chiffre reste donc lisible même quand le compteur rampe.
export const odometerValue = (frame: number): number => {
	const y = yearAt(frame);
	const base = Math.floor(y + 1e-6);
	const frac = y - base;
	const roll = interpolate(frac, [0.55, 1], [0, 1], {
		easing: inOut,
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return base + roll;
};

// Vitesse (années par frame), utilisée pour le flou de mouvement des chiffres.
export const yearSpeed = (frame: number): number =>
	Math.abs(odometerValue(frame + 0.5) - odometerValue(frame - 0.5));

export const progressAt = (frame: number): number =>
	(yearAt(frame) - 1956) / (2026 - 1956);

export const eraAt = (frame: number): EraName => {
	if (frame >= ERAS.glass.from) return 'glass';
	if (frame >= ERAS.flat.from) return 'flat';
	if (frame >= ERAS.pixel.from) return 'pixel';
	if (frame >= ERAS.crt.from) return 'crt';
	return 'teletype';
};
