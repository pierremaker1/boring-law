import React from 'react';
import {AbsoluteFill, interpolate, interpolateColors, random, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {wipeClipOut} from '../components/Eras';
import {clamp, EASE, NNBSP, useAbsoluteFrame} from '../components/SceneKit';
import {flat} from '../fonts';
import {FLAT} from '../theme';
import {SCENES} from '../timeline';

const N = 12;
const CELL = 56;
const GAP = 4;
const GRID = N * (CELL + GAP) - GAP;
const GRID_TOP = 560;

// Silhouette de tête de chat (oreilles + tête), sans trait de visage.
const CAT = [
	'............',
	'.#........#.',
	'.##......##.',
	'.###....###.',
	'.##########.',
	'############',
	'############',
	'############',
	'.##########.',
	'..########..',
	'...######...',
	'............',
];

const NOISE = [FLAT.yellow, FLAT.coral, FLAT.mint, '#60A5FA', FLAT.white, FLAT.ink];

const PILL_W = 740;
const PILL_H = 176;
const PILL_LEFT = 540 - PILL_W / 2;
const PILL_TOP = 832;
const ICON = 132;

// 615-705 : AlexNet. Une grille de pixels devient une étiquette "chat 98 %".
export const AlexNet: React.FC = () => {
	const frame = useCurrentFrame();
	const abs = useAbsoluteFrame();
	const {fps} = useVideoConfig();
	// Bande de lecture (3 rangées) qui balaie l'image : le réseau "regarde".
	const scanRow = interpolate(frame, [8, 23], [-3, N + 2], clamp);
	const shrink = spring({frame: frame - 24, fps, config: {damping: 16, stiffness: 150}});
	const pill = interpolate(frame, [30, 38], [0, 1], {...clamp, easing: EASE.out});
	const percent = Math.round(interpolate(frame, [31, 38], [0, 98], {...clamp, easing: EASE.out}));
	const title = spring({frame: frame - 1, fps, config: {damping: 18, stiffness: 170}});
	const body = spring({frame: frame - 12, fps, config: {damping: 18, stiffness: 170}});
	const scale = interpolate(shrink, [0, 1], [1, ICON / GRID]);
	const iconCenterX = PILL_LEFT + 20 + ICON / 2;
	const gridCenterY = GRID_TOP + GRID / 2;
	return (
		<AbsoluteFill style={{clipPath: wipeClipOut(abs, SCENES.alphaGo.from)}}>
			<div
				style={{
					position: 'absolute',
					left: 90,
					right: 90,
					top: 410,
					fontFamily: flat,
					fontWeight: 800,
					fontSize: 96,
					color: FLAT.white,
					translate: `${interpolate(title, [0, 1], [-140, 0])}px 0`,
					opacity: title > 0.02 ? 1 : 0,
				}}
			>
				<span style={{color: FLAT.yellow}}>2012</span> · AlexNet
			</div>
			{/* Étiquette : le fond s'étire depuis l'icône. */}
			<div
				style={{
					position: 'absolute',
					left: PILL_LEFT + 22,
					top: PILL_TOP + 22,
					width: PILL_W,
					height: PILL_H,
					borderRadius: PILL_H / 2,
					background: 'rgba(0,0,0,0.22)',
					clipPath: `inset(0 ${(1 - pill) * 100}% 0 0 round ${PILL_H / 2}px)`,
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: PILL_LEFT,
					top: PILL_TOP,
					width: PILL_W,
					height: PILL_H,
					borderRadius: PILL_H / 2,
					background: FLAT.yellow,
					clipPath: `inset(0 ${(1 - pill) * 100}% 0 0 round ${PILL_H / 2}px)`,
					display: 'flex',
					alignItems: 'center',
					paddingLeft: 20 + ICON + 34,
					boxSizing: 'border-box',
				}}
			>
				<div
					style={{
						fontFamily: flat,
						fontWeight: 800,
						fontSize: 104,
						color: FLAT.ink,
						whiteSpace: 'nowrap',
						opacity: interpolate(pill, [0.4, 1], [0, 1], clamp),
						translate: `${interpolate(pill, [0.4, 1], [-30, 0], clamp)}px 0`,
					}}
				>
					chat {percent}
					{NNBSP}%
				</div>
			</div>
			{/* Trace de la grille : la "carte" que le réseau vient de lire. */}
			<div
				style={{
					position: 'absolute',
					left: 540 - GRID / 2,
					top: GRID_TOP,
					width: GRID,
					height: GRID,
					opacity: interpolate(shrink, [0.2, 0.8], [0, 1], clamp),
				}}
			>
				{new Array(N * N).fill(0).map((_, i) => (
					<div
						key={i}
						style={{
							position: 'absolute',
							left: (i % N) * (CELL + GAP),
							top: Math.floor(i / N) * (CELL + GAP),
							width: CELL,
							height: CELL,
							borderRadius: 8,
							border: '3px solid rgba(255,255,255,0.13)',
							boxSizing: 'border-box',
						}}
					/>
				))}
			</div>
			{/* Pastille blanche qui accueille la grille miniaturisée. */}
			<div
				style={{
					position: 'absolute',
					left: iconCenterX - ICON / 2 - 8,
					top: PILL_TOP + PILL_H / 2 - ICON / 2 - 8,
					width: ICON + 16,
					height: ICON + 16,
					borderRadius: 28,
					background: FLAT.white,
					scale: String(interpolate(shrink, [0.6, 1], [0, 1], clamp)),
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: 540 - GRID / 2,
					top: GRID_TOP,
					width: GRID,
					height: GRID,
					translate: `${interpolate(shrink, [0, 1], [0, iconCenterX - 540])}px ${interpolate(shrink, [0, 1], [0, PILL_TOP + PILL_H / 2 - gridCenterY])}px`,
					scale: String(scale),
				}}
			>
				{new Array(N * N).fill(0).map((_, i) => {
					const r = Math.floor(i / N);
					const c = i % N;
					const target = CAT[r][c] === '#' ? FLAT.ink : FLAT.white;
					const noise = NOISE[Math.floor(random(`ax-${i}`) * NOISE.length)];
					const clean = interpolate(scanRow - r, [0, 2], [0, 1], clamp);
					const d = Math.hypot(r - 5.5, c - 5.5);
					const pop = spring({frame: frame - 1 - d * 0.9, fps, config: {damping: 14, stiffness: 220}});
					return (
						<div
							key={i}
							style={{
								position: 'absolute',
								left: c * (CELL + GAP),
								top: r * (CELL + GAP),
								width: CELL,
								height: CELL,
								borderRadius: 8,
								background: interpolateColors(clean, [0, 1], [noise, target]),
								scale: String(pop),
							}}
						/>
					);
				})}
				{scanRow > -3 && scanRow < N ? (
					<div
						style={{
							position: 'absolute',
							left: -12,
							right: -12,
							top: scanRow * (CELL + GAP) - 8,
							height: 3 * (CELL + GAP) + 12,
							border: `8px solid ${FLAT.yellow}`,
							borderRadius: 16,
							boxSizing: 'border-box',
						}}
					/>
				) : null}
			</div>
			<div
				style={{
					position: 'absolute',
					left: 90,
					right: 90,
					top: 1330,
					fontFamily: flat,
					fontWeight: 800,
					fontSize: 72,
					lineHeight: 1.15,
					color: FLAT.white,
					translate: `${interpolate(body, [0, 1], [-140, 0])}px 0`,
					opacity: body > 0.02 ? 1 : 0,
				}}
			>
				Les machines
				<br />
				apprennent à voir.
			</div>
		</AbsoluteFill>
	);
};
