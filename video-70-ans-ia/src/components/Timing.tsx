import React, {createContext, useContext} from 'react';
import {Easing, interpolate, Sequence, useCurrentFrame} from 'remotion';

// Les <Sequence> remettent useCurrentFrame() à zéro. Le compteur d'années,
// lui, a besoin de la frame absolue : on propage le décalage par contexte.
const OffsetContext = createContext(0);

export const At: React.FC<{
	readonly name: string;
	readonly from: number;
	readonly durationInFrames: number;
	readonly children: React.ReactNode;
}> = ({name, from, durationInFrames, children}) => {
	const parentOffset = useContext(OffsetContext);
	return (
		<Sequence name={name} from={from} durationInFrames={durationInFrames}>
			<OffsetContext.Provider value={parentOffset + from}>
				{children}
			</OffsetContext.Provider>
		</Sequence>
	);
};

export const useAbsoluteFrame = (): number => {
	const frame = useCurrentFrame();
	const offset = useContext(OffsetContext);
	return frame + offset;
};

export const clamp = {
	extrapolateLeft: 'clamp',
	extrapolateRight: 'clamp',
} as const;

// Courbes maison, réutilisées partout pour un mouvement cohérent.
export const EASE = {
	out: Easing.bezier(0.16, 1, 0.3, 1),
	inOut: Easing.bezier(0.65, 0, 0.35, 1),
	in: Easing.bezier(0.55, 0, 0.9, 0.3),
	snap: Easing.bezier(0.2, 0.9, 0.1, 1),
};

// Progression d'apparition 0 -> 1, réglée sur une durée en frames.
export const enter = (frame: number, start: number, duration: number) =>
	interpolate(frame, [start, start + duration], [0, 1], {
		...clamp,
		easing: EASE.out,
	});

// Progression de sortie d'une scène (pendant sa "traîne" après la coupe).
export const exitProgress = (frame: number, dur: number, tail: number) =>
	interpolate(frame, [dur, dur + tail], [0, 1], {
		...clamp,
		easing: EASE.in,
	});
