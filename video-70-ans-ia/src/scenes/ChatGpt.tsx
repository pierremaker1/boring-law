import React from 'react';
import {AbsoluteFill, Easing, interpolate, random, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {clamp, EASE, glassExit, NNBSP, SCENE_TAIL_GLASS} from '../components/SceneKit';
import {modern} from '../fonts';
import {GLASS} from '../theme';

const COUNT_START = 28;
const COUNT_END = 80;

const formatFr = (n: number) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, NNBSP);

// 0 -> 100 000 000 : croissance exponentielle, le compteur s'emballe.
const usersAt = (frame: number) => {
	const t = interpolate(frame, [COUNT_START, COUNT_END], [0, 1], {...clamp, easing: Easing.bezier(0.4, 0, 0.9, 0.7)});
	return ((Math.pow(10, 8 * t) - 1) / (Math.pow(10, 8) - 1)) * 1e8;
};

// Mini-bulles : chaque bulle = une vague d'utilisateurs qui arrive.
const MINI = new Array(46).fill(0).map((_, i) => ({
	x: 110 + random(`mb-x-${i}`) * 720,
	y: 660 + random(`mb-y-${i}`) * 200,
	w: 60 + random(`mb-w-${i}`) * 70,
	hue: [GLASS.violet, GLASS.pink, GLASS.cyan, GLASS.amber][i % 4],
	at: COUNT_START + Math.pow(i / 46, 0.45) * (COUNT_END - COUNT_START),
	right: random(`mb-r-${i}`) > 0.5,
}));

const SkeletonLine: React.FC<{readonly width: number | string; readonly color: string; readonly reveal: number}> = ({width, color, reveal}) => (
	<div style={{height: 22, borderRadius: 11, background: color, width, clipPath: `inset(0 ${(1 - reveal) * 100}% 0 0 round 11px)`}} />
);

// 885-1035 : ChatGPT, 100 millions d'utilisateurs en 2 mois.
export const ChatGpt: React.FC<{readonly dur: number}> = ({dur}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const title = spring({frame: frame - 3, fps, config: {damping: 18, stiffness: 160}});
	const panel = spring({frame: frame - 6, fps, config: {damping: 16, stiffness: 140}});
	const user = spring({frame: frame - 14, fps, config: {damping: 14, stiffness: 180}});
	const bot = spring({frame: frame - 22, fps, config: {damping: 14, stiffness: 180}});
	const answer = interpolate(frame, [34, 46], [0, 1], {...clamp, easing: EASE.out});
	const users = usersAt(frame);
	const landed = spring({frame: frame - COUNT_END, fps, config: {damping: 9, stiffness: 200}});
	const counting = frame >= COUNT_START - 4;
	const body = spring({frame: frame - 82, fps, config: {damping: 18, stiffness: 160}});
	return (
		<AbsoluteFill style={glassExit(frame, dur, SCENE_TAIL_GLASS)}>
			<div
				style={{
					position: 'absolute',
					left: 90,
					right: 90,
					top: 404,
					fontFamily: modern,
					fontWeight: 800,
					fontSize: 100,
					letterSpacing: '-0.03em',
					color: GLASS.white,
					opacity: title,
					translate: `0 ${interpolate(title, [0, 1], [40, 0])}px`,
				}}
			>
				<span
					style={{
						backgroundImage: `linear-gradient(90deg, ${GLASS.cyan}, ${GLASS.violet} 60%, ${GLASS.pink})`,
						WebkitBackgroundClip: 'text',
						backgroundClip: 'text',
						color: 'transparent',
					}}
				>
					2022
				</span>{' '}
				· ChatGPT
			</div>
			{/* Rafale de mini-bulles derrière le verre. */}
			{MINI.map((m, i) => {
				const s = spring({frame: frame - m.at, fps, config: {damping: 12, stiffness: 220}});
				if (frame < m.at) {
					return null;
				}
				return (
					<div
						key={i}
						style={{
							position: 'absolute',
							left: m.x,
							top: m.y - Math.min(40, (frame - m.at) * 0.5),
							width: m.w,
							height: m.w * 0.62,
							borderRadius: m.w * 0.3,
							borderBottomRightRadius: m.right ? 6 : m.w * 0.3,
							borderBottomLeftRadius: m.right ? m.w * 0.3 : 6,
							background: m.hue,
							opacity: 0.85,
							scale: String(s),
						}}
					/>
				);
			})}
			<div
				style={{
					position: 'absolute',
					left: 90,
					top: 560,
					width: 900,
					height: 400,
					borderRadius: 44,
					background: 'linear-gradient(160deg, rgba(255,255,255,0.20), rgba(255,255,255,0.06))',
					backdropFilter: 'blur(28px) saturate(170%)',
					border: '2px solid rgba(255,255,255,0.32)',
					boxShadow: '0 40px 80px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.4)',
					opacity: panel,
					scale: String(interpolate(panel, [0, 1], [0.9, 1])),
					padding: 40,
					boxSizing: 'border-box',
					display: 'flex',
					flexDirection: 'column',
					gap: 28,
				}}
			>
				<div
					style={{
						alignSelf: 'flex-end',
						width: 470,
						padding: '28px 34px',
						borderRadius: 34,
						borderBottomRightRadius: 10,
						background: `linear-gradient(135deg, ${GLASS.violet}, ${GLASS.pink})`,
						display: 'flex',
						flexDirection: 'column',
						gap: 16,
						scale: String(user),
						transformOrigin: 'right bottom',
						boxShadow: '0 16px 40px rgba(236,72,153,0.35)',
					}}
				>
					<SkeletonLine width="100%" color="rgba(255,255,255,0.75)" reveal={1} />
					<SkeletonLine width="62%" color="rgba(255,255,255,0.75)" reveal={1} />
				</div>
				<div
					style={{
						alignSelf: 'flex-start',
						width: 600,
						minHeight: 150,
						padding: '28px 34px',
						borderRadius: 34,
						borderBottomLeftRadius: 10,
						background: 'rgba(255,255,255,0.14)',
						border: '1.5px solid rgba(255,255,255,0.28)',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						gap: 16,
						scale: String(bot),
						transformOrigin: 'left bottom',
						boxSizing: 'border-box',
					}}
				>
					{answer <= 0 ? (
						<div style={{display: 'flex', gap: 14}}>
							{[0, 1, 2].map((d) => (
								<div
									key={d}
									style={{
										width: 22,
										height: 22,
										borderRadius: 11,
										background: GLASS.white,
										opacity: 0.35 + 0.65 * Math.max(0, Math.sin((frame - d * 3) * 0.45)),
										translate: `0 ${-Math.max(0, Math.sin((frame - d * 3) * 0.45)) * 8}px`,
									}}
								/>
							))}
						</div>
					) : (
						<>
							<SkeletonLine width="100%" color="rgba(255,255,255,0.6)" reveal={answer} />
							<SkeletonLine width="88%" color="rgba(255,255,255,0.6)" reveal={interpolate(answer, [0.2, 1], [0, 1], clamp)} />
							<SkeletonLine width="54%" color="rgba(255,255,255,0.6)" reveal={interpolate(answer, [0.4, 1], [0, 1], clamp)} />
						</>
					)}
				</div>
			</div>
			<div
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					top: 1004,
					textAlign: 'center',
					fontFamily: modern,
					fontWeight: 900,
					fontSize: 136,
					letterSpacing: '-0.03em',
					fontVariantNumeric: 'tabular-nums',
					backgroundImage: `linear-gradient(90deg, #FFFFFF, ${GLASS.soft} 40%, #FFD3EC)`,
					WebkitBackgroundClip: 'text',
					backgroundClip: 'text',
					color: 'transparent',
					filter: `drop-shadow(0 0 ${interpolate(landed, [0, 1], [0, 26])}px rgba(236,72,153,0.8))`,
					scale: String(1 + (frame >= COUNT_END ? Math.sin(Math.min(1, landed) * Math.PI) * 0.08 : 0)),
					opacity: counting ? 1 : 0,
				}}
			>
				{formatFr(users)}
			</div>
			<div
				style={{
					position: 'absolute',
					left: 90,
					right: 90,
					top: 1196,
					textAlign: 'center',
					fontFamily: modern,
					color: GLASS.white,
					opacity: body,
					translate: `0 ${interpolate(body, [0, 1], [36, 0])}px`,
				}}
			>
				<div style={{fontSize: 88, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1}}>100 millions</div>
				<div style={{fontSize: 62, fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.3, color: GLASS.soft}}>
					d’utilisateurs en 2 mois
				</div>
			</div>
		</AbsoluteFill>
	);
};
