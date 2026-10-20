import React from 'react';
import {AbsoluteFill} from 'remotion';

// Grain fin en tuile SVG (feTurbulence) : casse le banding des dégradés
// après compression H.264. Rasterisé une fois par le navigateur, puis répété.
const noiseTile = (seed: number, frequency = 0.9) =>
	`url("data:image/svg+xml;utf8,${encodeURIComponent(
		`<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n' x='0' y='0'><feTurbulence type='fractalNoise' baseFrequency='${frequency}' numOctaves='2' seed='${seed}' stitchTiles='stitch'/><feColorMatrix values='1 0 0 0 0  1 0 0 0 0  1 0 0 0 0  0 0 0 0 1'/></filter><rect width='240' height='240' filter='url(#n)'/></svg>`,
	)}")`;

export const Grain: React.FC<{readonly frame: number; readonly opacity?: number; readonly blend?: React.CSSProperties['mixBlendMode']}> = ({
	frame,
	opacity = 0.08,
	blend = 'overlay',
}) => {
	// Trois tuiles qui alternent : un grain vivant sans recalcul coûteux.
	const seed = Math.floor(frame / 2) % 3;
	return (
		<AbsoluteFill
			style={{
				backgroundImage: noiseTile(seed + 1),
				backgroundSize: '240px 240px',
				backgroundPosition: `${(seed * 97) % 240}px ${(seed * 61) % 240}px`,
				opacity,
				mixBlendMode: blend,
				pointerEvents: 'none',
			}}
		/>
	);
};

// Lignes de balayage CRT.
export const Scanlines: React.FC<{readonly opacity?: number; readonly period?: number}> = ({opacity = 0.3, period = 5}) => (
	<AbsoluteFill
		style={{
			backgroundImage: `repeating-linear-gradient(0deg, rgba(0,0,0,${opacity}) 0px, rgba(0,0,0,${opacity}) ${period / 2}px, transparent ${period / 2}px, transparent ${period}px)`,
			pointerEvents: 'none',
		}}
	/>
);

export const Vignette: React.FC<{readonly strength?: number; readonly color?: string}> = ({strength = 0.6, color = '0,0,0'}) => (
	<AbsoluteFill
		style={{
			background: `radial-gradient(ellipse 75% 60% at 50% 50%, rgba(${color},0) 55%, rgba(${color},${strength}) 100%)`,
			pointerEvents: 'none',
		}}
	/>
);
