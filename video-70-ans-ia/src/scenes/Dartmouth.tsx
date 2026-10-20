import React from 'react';
import {AbsoluteFill, interpolate, random, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {clamp, paperFeedExit} from '../components/SceneKit';
import {Typewriter} from '../components/Typewriter';
import {teletype} from '../fonts';
import {TELETYPE} from '../theme';

const CARD_W = 820;
const CARD_H = 370;
const COLS = 80;
const ROWS = 12;

// Motif de perforations déterministe : 1 à 3 trous par colonne.
const holesFor = (seed: string) =>
	new Array(COLS).fill(0).map((_, c) => {
		const n = 1 + Math.floor(random(`${seed}-n-${c}`) * 3);
		const rows = new Set<number>();
		for (let k = 0; k < n; k++) {
			rows.add(Math.floor(random(`${seed}-r-${c}-${k}`) * ROWS));
		}
		return [...rows];
	});

const PunchCard: React.FC<{readonly seed: string; readonly punched: number; readonly headVisible: boolean}> = ({
	seed,
	punched,
	headVisible,
}) => {
	const holes = holesFor(seed);
	const colX = (c: number) => 46 + c * ((CARD_W - 92) / (COLS - 1));
	const rowY = (r: number) => 58 + r * ((CARD_H - 96) / (ROWS - 1));
	return (
		<svg width={CARD_W} height={CARD_H} viewBox={`0 0 ${CARD_W} ${CARD_H}`} style={{overflow: 'visible'}}>
			<path
				d={`M34 0 H${CARD_W - 14} Q${CARD_W} 0 ${CARD_W} 14 V${CARD_H - 14} Q${CARD_W} ${CARD_H} ${CARD_W - 14} ${CARD_H} H14 Q0 ${CARD_H} 0 ${CARD_H - 14} V34 Z`}
				fill={TELETYPE.paper}
				stroke="#B88A3A"
				strokeWidth={2}
			/>
			{/* Repères de lignes imprimés sur la carte. */}
			{new Array(ROWS).fill(0).map((_, r) => (
				<line key={r} x1={30} x2={CARD_W - 24} y1={rowY(r)} y2={rowY(r)} stroke="#D9B776" strokeWidth={1.2} strokeDasharray="2 7" />
			))}
			<rect x={30} y={18} width={CARD_W - 60} height={16} rx={3} fill="#E5C27E" />
			{holes.map((rows, c) =>
				c < punched
					? rows.map((r) => <rect key={`${c}-${r}`} x={colX(c) - 3.5} y={rowY(r) - 8} width={7} height={16} rx={1} fill={TELETYPE.bg} />)
					: null,
			)}
			{headVisible && punched < COLS ? (
				<rect x={colX(Math.max(0, punched)) - 7} y={-14} width={14} height={CARD_H + 28} rx={4} fill={TELETYPE.amber} opacity={0.85} />
			) : null}
		</svg>
	);
};

// 150-270 : Dartmouth, le nom est lancé.
export const Dartmouth: React.FC<{readonly dur: number}> = ({dur}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const punched = Math.floor(interpolate(frame, [16, 70], [0, COLS], clamp));
	const cards = [
		{seed: 'c3', rot: -9, dx: -34, dy: -64, delay: 2},
		{seed: 'c2', rot: -4.5, dx: -16, dy: -32, delay: 5},
		{seed: 'c1', rot: 0, dx: 0, dy: 0, delay: 8},
	];
	return (
		<AbsoluteFill
			style={{
				...paperFeedExit(frame, dur),
			}}
		>
			<div
				style={{
					position: 'absolute',
					left: 90,
					right: 90,
					top: 410,
					fontFamily: teletype,
					fontWeight: 700,
					fontSize: 84,
				}}
			>
				<Typewriter
					frame={frame}
					start={3}
					charsPerFrame={1.8}
					color={TELETYPE.amber}
					hotColor="#FFF6E0"
					glow={TELETYPE.glow}
					showCursor={false}
					segments={[{text: '1956', color: TELETYPE.hot}, {text: ' · Dartmouth'}]}
				/>
			</div>
			{cards.map((c, i) => {
				const s = spring({frame: frame - c.delay, fps, config: {damping: 16, stiffness: 140}});
				return (
					<div
						key={c.seed}
						style={{
							position: 'absolute',
							left: 540 - CARD_W / 2 + c.dx,
							top: 870 - CARD_H / 2 + c.dy,
							rotate: `${c.rot + (1 - s) * 14}deg`,
							translate: `${(1 - s) * 1100}px ${(1 - s) * -80}px`,
							filter: `drop-shadow(0 18px 30px rgba(0,0,0,0.55)) brightness(${0.62 + i * 0.19})`,
						}}
					>
						<PunchCard seed={c.seed} punched={i === 2 ? punched : COLS} headVisible={i === 2 && frame > 14} />
					</div>
				);
			})}
			<div
				style={{
					position: 'absolute',
					left: 90,
					right: 90,
					top: 1176,
					fontFamily: teletype,
					fontWeight: 700,
					fontSize: 64,
					lineHeight: 1.3,
				}}
			>
				<Typewriter
					frame={frame}
					start={22}
					charsPerFrame={1.7}
					color={TELETYPE.amber}
					hotColor="#FFF6E0"
					glow={TELETYPE.glow}
					segments={[
						{text: '"Intelligence\nartificielle"', color: TELETYPE.hot, glow: 'rgba(255, 217, 138, 0.6)'},
						{text: ' :\nle nom est lancé.'},
					]}
				/>
			</div>
		</AbsoluteFill>
	);
};
