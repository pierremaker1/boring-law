import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {PieceKind, PixelPiece} from '../components/Icons';
import {clamp, EASE} from '../components/SceneKit';
import {pixel} from '../fonts';
import {PIXEL} from '../theme';

const CELL = 66;
const BOARD = CELL * 8;

// Animation volontairement saccadée (2 frames par pose) : l'esprit des 90s.
const steps = {posterize: 2} as const;

const bevelOut: React.CSSProperties = {
	borderTop: `4px solid ${PIXEL.light}`,
	borderLeft: `4px solid ${PIXEL.light}`,
	borderBottom: `4px solid ${PIXEL.dark}`,
	borderRight: `4px solid ${PIXEL.dark}`,
	background: PIXEL.gray,
	boxShadow: `inset -4px -4px 0 ${PIXEL.shadow}, inset 4px 4px 0 #DFDFDF`,
};

const bevelIn: React.CSSProperties = {
	borderTop: `4px solid ${PIXEL.shadow}`,
	borderLeft: `4px solid ${PIXEL.shadow}`,
	borderBottom: `4px solid ${PIXEL.light}`,
	borderRight: `4px solid ${PIXEL.light}`,
};

const WinButton: React.FC<{readonly glyph: 'min' | 'max' | 'close'}> = ({glyph}) => (
	<div
		style={{
			...bevelOut,
			width: 38,
			height: 34,
			boxSizing: 'border-box',
			position: 'relative',
			borderWidth: 3,
		}}
	>
		{glyph === 'min' ? <div style={{position: 'absolute', left: 8, bottom: 6, width: 14, height: 4, background: PIXEL.dark}} /> : null}
		{glyph === 'max' ? (
			<div style={{position: 'absolute', left: 7, top: 5, width: 16, height: 14, border: `3px solid ${PIXEL.dark}`, borderTopWidth: 5, boxSizing: 'border-box'}} />
		) : null}
		{glyph === 'close' ? (
			<svg width={32} height={28} style={{position: 'absolute', left: 0, top: 0}} shapeRendering="crispEdges">
				<path d="M9 7 L23 21 M23 7 L9 21" stroke={PIXEL.dark} strokeWidth={4} />
			</svg>
		) : null}
	</div>
);

const TitleBar: React.FC<{readonly height: number}> = ({height}) => (
	<div
		style={{
			height,
			background: `linear-gradient(90deg, ${PIXEL.titleBar}, ${PIXEL.titleBarEnd})`,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			padding: '0 8px 0 12px',
		}}
	>
		<PixelPiece kind="pawn" size={30} fill={PIXEL.light} outline={PIXEL.titleBar} />
		<div style={{display: 'flex', gap: 4}}>
			<WinButton glyph="min" />
			<WinButton glyph="max" />
			<div style={{width: 6}} />
			<WinButton glyph="close" />
		</div>
	</div>
);

type Placed = {kind: PieceKind; row: number; col: number; dark: boolean};

const STATIC_PIECES: Placed[] = [
	{kind: 'pawn', row: 1, col: 1, dark: true},
	{kind: 'pawn', row: 2, col: 5, dark: true},
	{kind: 'rook', row: 0, col: 6, dark: true},
	{kind: 'pawn', row: 5, col: 2, dark: false},
	{kind: 'pawn', row: 5, col: 6, dark: false},
	{kind: 'pawn', row: 6, col: 7, dark: false},
];

const Piece: React.FC<{readonly p: Placed; readonly style?: React.CSSProperties}> = ({p, style}) => (
	<div style={{position: 'absolute', left: p.col * CELL + 1, top: p.row * CELL + 1, ...style}}>
		<PixelPiece kind={p.kind} size={CELL - 10} fill={p.dark ? '#16161A' : '#FAFAFA'} outline={p.dark ? '#F2F2F2' : '#16161A'} />
	</div>
);

// 510-615 : Deep Blue bat Kasparov. Échiquier pixel, le roi tombe.
export const DeepBlue: React.FC = () => {
	const frame = useCurrentFrame();
	const win = interpolate(frame, [6, 12], [0, 1], {...clamp, ...steps});
	const queen = interpolate(frame, [18, 30], [0, 1], {...clamp, ...steps, easing: EASE.inOut});
	const wobble = frame >= 30 && frame < 38 ? Math.sin((frame - 30) * 1.6) * 8 : 0;
	const fall = interpolate(frame, [38, 48], [0, 1], {...clamp, posterize: 1, easing: (t) => t * t});
	const tip = interpolate(frame, [46, 48, 50, 52], [0, 1, 0.4, 0], clamp);
	const tooltip = frame >= 40 ? 1 : 0;
	const titleWords = interpolate(frame, [2, 10], [0, 5], {...clamp, ...steps});
	const words = ['1997', '·', 'Deep Blue', 'bat', 'Kasparov'];
	return (
		<AbsoluteFill>
			<div
				style={{
					position: 'absolute',
					left: 90,
					right: 90,
					top: 430,
					fontFamily: pixel,
					fontWeight: 700,
					fontSize: 92,
					lineHeight: 1.06,
					color: PIXEL.light,
					textShadow: `6px 6px 0 ${PIXEL.dark}`,
				}}
			>
				{words.map((w, i) => (
					<React.Fragment key={w}>
						<span style={{visibility: i < titleWords ? 'visible' : 'hidden', color: i === 0 ? '#FFE45C' : undefined}}>{w}</span>
						{i === 2 ? <br /> : i < words.length - 1 ? ' ' : null}
					</React.Fragment>
				))}
			</div>
			{/* Info-bulle jaune pâle typique des interfaces des années 90. */}
			<div
				style={{
					position: 'absolute',
					left: 90,
					top: 650,
					padding: '10px 22px 14px',
					background: '#FFFFE1',
					border: `3px solid ${PIXEL.dark}`,
					boxShadow: `6px 6px 0 rgba(0,0,0,0.45)`,
					fontFamily: pixel,
					fontWeight: 500,
					fontSize: 58,
					color: PIXEL.dark,
					opacity: tooltip,
					whiteSpace: 'nowrap',
				}}
			>
				champion du monde d'échecs
			</div>
			<div
				style={{
					...bevelOut,
					position: 'absolute',
					left: 90,
					top: 792,
					width: 900,
					boxSizing: 'border-box',
					padding: 6,
					scale: String(interpolate(win, [0, 1], [0.7, 1])),
					opacity: win > 0 ? 1 : 0,
				}}
			>
				<TitleBar height={52} />
				<div style={{display: 'flex', justifyContent: 'center', padding: '22px 0 18px'}}>
					<div style={{...bevelIn, position: 'relative', width: BOARD, height: BOARD}}>
						{new Array(64).fill(0).map((_, i) => {
							const r = Math.floor(i / 8);
							const c = i % 8;
							return (
								<div
									key={i}
									style={{
										position: 'absolute',
										left: c * CELL,
										top: r * CELL,
										width: CELL,
										height: CELL,
										background: (r + c) % 2 === 0 ? PIXEL.boardLight : PIXEL.boardDark,
									}}
								/>
							);
						})}
						{STATIC_PIECES.map((p, i) => (
							<Piece key={i} p={p} />
						))}
						{/* La dame noire glisse en diagonale : échec. */}
						<Piece
							p={{kind: 'queen', row: 7, col: 1, dark: true}}
							style={{translate: `${queen * 3 * CELL}px ${-queen * 3 * CELL}px`}}
						/>
						{/* Le roi vacille, puis bascule sur le flanc. */}
						<Piece
							p={{kind: 'king', row: 2, col: 2, dark: false}}
							style={{
								rotate: `${wobble + fall * 90}deg`,
								transformOrigin: '85% 92%',
								translate: `0 ${fall * 6}px`,
							}}
						/>
						<div
							style={{
								position: 'absolute',
								left: 2 * CELL,
								top: 2 * CELL,
								width: CELL * 2,
								height: CELL,
								background: '#FFFFFF',
								opacity: tip * 0.6,
								mixBlendMode: 'screen',
							}}
						/>
					</div>
				</div>
			</div>
		</AbsoluteFill>
	);
};
