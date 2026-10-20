import React from 'react';

// Afficheur 7 segments dessiné en SVG (compteur LED des années 90).
const SEGMENTS: Record<number, string> = {
	0: 'abcdef',
	1: 'bc',
	2: 'abged',
	3: 'abgcd',
	4: 'fgbc',
	5: 'afgcd',
	6: 'afgedc',
	7: 'abc',
	8: 'abcdefg',
	9: 'abcdfg',
};

const W = 60;
const H = 104;
const T = 11;

// Segments biseautés : hexagones allongés.
const horizontal = (y: number) =>
	`M${T},${y} L${T + 5},${y - T / 2} L${W - T - 5},${y - T / 2} L${W - T},${y} L${W - T - 5},${y + T / 2} L${T + 5},${y + T / 2} Z`;
const vertical = (x: number, y0: number, y1: number) =>
	`M${x},${y0} L${x + T / 2},${y0 + 5} L${x + T / 2},${y1 - 5} L${x},${y1} L${x - T / 2},${y1 - 5} L${x - T / 2},${y0 + 5} Z`;

const PATHS: Record<string, string> = {
	a: horizontal(T / 2 + 1),
	g: horizontal(H / 2),
	d: horizontal(H - T / 2 - 1),
	f: vertical(T / 2 + 1, T, H / 2 - 2),
	b: vertical(W - T / 2 - 1, T, H / 2 - 2),
	e: vertical(T / 2 + 1, H / 2 + 2, H - T),
	c: vertical(W - T / 2 - 1, H / 2 + 2, H - T),
};

export const SevenSegDigit: React.FC<{
	readonly digit: number;
	readonly scale: number;
	readonly on: string;
	readonly off: string;
}> = ({digit, scale, on, off}) => {
	const lit = SEGMENTS[digit] ?? '';
	return (
		<svg width={W * scale} height={H * scale} viewBox={`0 0 ${W} ${H}`} style={{transform: 'skewX(-6deg)'}}>
			{Object.entries(PATHS).map(([seg, d]) => (
				<path
					key={seg}
					d={d}
					fill={lit.includes(seg) ? on : off}
					style={lit.includes(seg) ? {filter: `drop-shadow(0 0 3px ${on})`} : undefined}
				/>
			))}
		</svg>
	);
};

export const SevenSegNumber: React.FC<{
	readonly value: number;
	readonly scale: number;
	readonly on: string;
	readonly off: string;
}> = ({value, scale, on, off}) => {
	const digits = String(Math.round(value)).padStart(4, '0').split('').map(Number);
	return (
		<div style={{display: 'flex', gap: 10 * scale}}>
			{digits.map((d, i) => (
				<SevenSegDigit key={i} digit={d} scale={scale} on={on} off={off} />
			))}
		</div>
	);
};
