import React from 'react';
import {AbsoluteFill, interpolate, random, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {wipeClipIn, wipeClipOut} from '../components/Eras';
import {clamp, EASE, useAbsoluteFrame} from '../components/SceneKit';
import {flat} from '../fonts';
import {FLAT} from '../theme';
import {SCENES} from '../timeline';

const SIZE = 760;
const PAD = 54;
const LINES = 9;
const STEP = (SIZE - PAD * 2) / (LINES - 1);
const BOARD_LEFT = 540 - SIZE / 2;
const BOARD_TOP = 650;
const STONE = STEP * 0.92;

// Séquence de coups déterministe sur des intersections distinctes.
const MOVES = (() => {
	const all: {x: number; y: number}[] = [];
	for (let y = 0; y < LINES; y++) {
		for (let x = 0; x < LINES; x++) {
			all.push({x, y});
		}
	}
	const sorted = all
		.map((p, i) => ({p, k: random(`go-${i}`)}))
		.sort((a, b) => a.k - b.k)
		.map((e) => e.p);
	return sorted.slice(0, 40);
})();

// Les poses s'accélèrent : rafale.
const placeTime = (k: number) => 8 + 46 * (1 - Math.pow(1 - k / MOVES.length, 0.55));

// 705-795 : AlphaGo bat Lee Sedol. Plateau de go, pierres posées en rafale.
export const AlphaGo: React.FC = () => {
	const frame = useCurrentFrame();
	const abs = useAbsoluteFrame();
	const {fps} = useVideoConfig();
	const title = spring({frame: frame - 1, fps, config: {damping: 18, stiffness: 170}});
	const board = spring({frame: frame - 3, fps, config: {damping: 15, stiffness: 150}});
	const body = spring({frame: frame - 10, fps, config: {damping: 18, stiffness: 170}});
	const placed = MOVES.filter((_, k) => frame >= placeTime(k)).length;
	return (
		<AbsoluteFill style={{clipPath: wipeClipIn(abs, SCENES.alphaGo.from)}}>
		<AbsoluteFill style={{clipPath: wipeClipOut(abs, SCENES.attention.from)}}>
			<div
				style={{
					position: 'absolute',
					left: 90,
					right: 90,
					top: 410,
					fontFamily: flat,
					fontWeight: 800,
					fontSize: 92,
					lineHeight: 1.08,
					color: FLAT.white,
					translate: `${interpolate(title, [0, 1], [-160, 0])}px 0`,
					opacity: title > 0.02 ? 1 : 0,
				}}
			>
				<span style={{color: FLAT.yellow}}>2016</span> · AlphaGo
				<br />
				bat Lee Sedol
			</div>
			<div
				style={{
					position: 'absolute',
					left: BOARD_LEFT,
					top: BOARD_TOP,
					width: SIZE,
					height: SIZE,
					scale: String(interpolate(board, [0, 1], [0.6, 1])),
					opacity: board > 0.02 ? 1 : 0,
				}}
			>
				{/* Ombre longue à 45°. */}
				<div
					style={{
						position: 'absolute',
						inset: 0,
						borderRadius: 24,
						background: 'linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0) 75%)',
						translate: '30px 30px',
					}}
				/>
				<svg width={SIZE} height={SIZE} style={{position: 'absolute', left: 0, top: 0}}>
					<rect width={SIZE} height={SIZE} rx={24} fill={FLAT.goWood} />
					{new Array(LINES).fill(0).map((_, i) => (
						<React.Fragment key={i}>
							<line x1={PAD} x2={SIZE - PAD} y1={PAD + i * STEP} y2={PAD + i * STEP} stroke={FLAT.goLine} strokeWidth={4} />
							<line y1={PAD} y2={SIZE - PAD} x1={PAD + i * STEP} x2={PAD + i * STEP} stroke={FLAT.goLine} strokeWidth={4} />
						</React.Fragment>
					))}
					{[
						[2, 2],
						[6, 2],
						[4, 4],
						[2, 6],
						[6, 6],
					].map(([x, y]) => (
						<circle key={`${x}-${y}`} cx={PAD + x * STEP} cy={PAD + y * STEP} r={9} fill={FLAT.goLine} />
					))}
				</svg>
				{MOVES.map((m, k) => {
					const t = placeTime(k);
					if (frame < t) {
						return null;
					}
					const pop = spring({frame: frame - t, fps, config: {damping: 12, stiffness: 320}});
					const black = k % 2 === 0;
					const last = k === placed - 1;
					const ripple = interpolate(frame - t, [0, 10], [0, 1], {...clamp, easing: EASE.out});
					const cx = PAD + m.x * STEP;
					const cy = PAD + m.y * STEP;
					return (
						<React.Fragment key={k}>
							<div
								style={{
									position: 'absolute',
									left: cx - STONE / 2,
									top: cy - STONE / 2,
									width: STONE,
									height: STONE,
									borderRadius: STONE,
									border: `5px solid ${black ? FLAT.ink : FLAT.white}`,
									boxSizing: 'border-box',
									scale: String(interpolate(ripple, [0, 1], [1, 1.7])),
									opacity: interpolate(ripple, [0, 1], [0.6, 0]),
								}}
							/>
							<div
								style={{
									position: 'absolute',
									left: cx - STONE / 2,
									top: cy - STONE / 2,
									width: STONE,
									height: STONE,
									borderRadius: STONE,
									background: black ? FLAT.ink : '#F8FAFC',
									boxShadow: `5px 6px 0 rgba(91,58,18,0.45)`,
									scale: String(interpolate(pop, [0, 1], [1.5, 1])),
									opacity: Math.min(1, pop * 2),
								}}
							>
								{/* Reflet plat. */}
								<div
									style={{
										position: 'absolute',
										left: STONE * 0.22,
										top: STONE * 0.16,
										width: STONE * 0.26,
										height: STONE * 0.16,
										borderRadius: STONE,
										background: black ? 'rgba(255,255,255,0.18)' : 'rgba(17,24,39,0.06)',
										rotate: '-30deg',
									}}
								/>
							</div>
							{last ? (
								<div
									style={{
										position: 'absolute',
										left: cx - 13,
										top: cy - 13,
										width: 26,
										height: 26,
										borderRadius: 13,
										background: FLAT.coral,
									}}
								/>
							) : null}
						</React.Fragment>
					);
				})}
			</div>
			<div
				style={{
					position: 'absolute',
					left: 90,
					right: 90,
					top: 1452,
					fontFamily: flat,
					fontWeight: 800,
					fontSize: 76,
					color: FLAT.white,
					translate: `${interpolate(body, [0, 1], [-160, 0])}px 0`,
					opacity: body > 0.02 ? 1 : 0,
				}}
			>
				légende du go
			</div>
		</AbsoluteFill>
		</AbsoluteFill>
	);
};
