// Boîte à outils commune aux scènes.
import {interpolate} from 'remotion';
export {clamp, EASE, enter, exitProgress, useAbsoluteFrame} from './Timing';

// Sortie zoom + flou des scènes "verre" : l'opacité chute dès la coupe,
// pour que deux textes ne se superposent jamais.
export const glassExit = (frame: number, dur: number, tail: number) => {
	const t = interpolate(frame, [dur, dur + tail], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	return {
		scale: String(1 + t * 0.12),
		filter: t > 0 ? `blur(${t * 24}px)` : undefined,
		opacity: Math.max(0, 1 - t * 2.2),
	};
};

// Durée des sorties de scène à l'intérieur d'une même époque (frames).
export const SCENE_TAIL_TELETYPE = 6;
// En flat, la scène sortante reste montée le temps que le volet la recouvre.
export const FLAT_WIPE_TAIL = 8;
export const SCENE_TAIL_GLASS = 6;

// Sortie télétype : le papier avance d'un cran (la page monte) et l'encre s'efface vite.
export const paperFeedExit = (frame: number, dur: number) => {
	const t = interpolate(frame, [dur, dur + SCENE_TAIL_TELETYPE], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	return {
		translate: `0 ${-260 * t * t}px`,
		opacity: Math.max(0, 1 - t * 2),
	};
};

// Espaces typographiques français.
export const NBSP = ' ';
export const NNBSP = ' ';
