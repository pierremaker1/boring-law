import React from 'react';

// Flocon de neige à 6 branches, tracé en SVG.
export const Snowflake: React.FC<{readonly size: number; readonly color: string; readonly strokeWidth?: number}> = ({
	size,
	color,
	strokeWidth = 6,
}) => (
	<svg width={size} height={size} viewBox="-50 -50 100 100">
		<g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" fill="none">
			{[0, 60, 120, 180, 240, 300].map((a) => (
				<g key={a} transform={`rotate(${a})`}>
					<line x1={0} y1={0} x2={0} y2={-44} />
					<line x1={0} y1={-26} x2={-12} y2={-36} />
					<line x1={0} y1={-26} x2={12} y2={-36} />
					<line x1={0} y1={-12} x2={-9} y2={-19} />
					<line x1={0} y1={-12} x2={9} y2={-19} />
				</g>
			))}
		</g>
	</svg>
);

// Étincelle à 4 branches (pictogramme générique "IA", aucune marque).
export const Sparkle: React.FC<{readonly size: number; readonly fill: string}> = ({size, fill}) => (
	<svg width={size} height={size} viewBox="-50 -50 100 100">
		<path d="M0 -48 C6 -14 14 -6 48 0 C14 6 6 14 0 48 C-6 14 -14 6 -48 0 C-14 -6 -6 -14 0 -48 Z" fill={fill} />
	</svg>
);

// Bitmaps pixel-art des pièces d'échecs (1 = pixel plein).
const KING = [
	'.....##.....',
	'....####....',
	'.....##.....',
	'...######...',
	'..##.##.##..',
	'..##.##.##..',
	'...######...',
	'....####....',
	'....####....',
	'...######...',
	'..########..',
	'.##########.',
];

const ROOK = [
	'............',
	'.##.##.##.#.',
	'.#########..',
	'..#######...',
	'...#####....',
	'...#####....',
	'...#####....',
	'...#####....',
	'..#######...',
	'.#########..',
	'.#########..',
	'............',
];

const PAWN = [
	'............',
	'............',
	'.....##.....',
	'....####....',
	'....####....',
	'.....##.....',
	'....####....',
	'.....##.....',
	'....####....',
	'...######...',
	'..########..',
	'............',
];

const QUEEN = [
	'.....##.....',
	'.#...##...#.',
	'.#..####..#.',
	'.##.####.##.',
	'.##########.',
	'..########..',
	'...######...',
	'....####....',
	'...######...',
	'..########..',
	'.##########.',
	'............',
];

const BITMAPS = {king: KING, rook: ROOK, pawn: PAWN, queen: QUEEN};
export type PieceKind = keyof typeof BITMAPS;

export const PixelPiece: React.FC<{
	readonly kind: PieceKind;
	readonly size: number;
	readonly fill: string;
	readonly outline: string;
}> = ({kind, size, fill, outline}) => {
	const rows = BITMAPS[kind];
	const px = size / 12;
	const filled = (r: number, c: number) => rows[r]?.[c] === '#';
	const rects: React.ReactNode[] = [];
	// Contour d'un pixel autour de la silhouette, comme un sprite 16 couleurs.
	for (let r = -1; r <= 12; r++) {
		for (let c = -1; c <= 12; c++) {
			if (filled(r, c)) {
				rects.push(<rect key={`f${r}-${c}`} x={c * px} y={r * px} width={px + 0.5} height={px + 0.5} fill={fill} />);
			} else if (filled(r - 1, c) || filled(r + 1, c) || filled(r, c - 1) || filled(r, c + 1)) {
				rects.push(<rect key={`o${r}-${c}`} x={c * px} y={r * px} width={px + 0.5} height={px + 0.5} fill={outline} />);
			}
		}
	}
	return (
		<svg width={size + px * 2} height={size + px * 2} viewBox={`${-px} ${-px} ${size + px * 2} ${size + px * 2}`} shapeRendering="crispEdges">
			{rects}
		</svg>
	);
};
