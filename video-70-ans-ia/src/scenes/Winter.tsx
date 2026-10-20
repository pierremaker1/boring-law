import React from 'react';
import {AbsoluteFill, interpolate, interpolateColors, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {frostAt} from '../components/Eras';
import {Snowflake} from '../components/Icons';
import {clamp, EASE, useAbsoluteFrame} from '../components/SceneKit';
import {phosphor} from '../fonts';
import {CRT} from '../theme';

const CHART_W = 900;
const CHART_H = 400;

// Courbe illustrative du financement : deux creux = deux hivers. Aucune valeur.
const POINTS: [number, number][] = [
	[0, 0.3],
	[0.1, 0.72],
	[0.22, 0.8],
	[0.34, 0.16],
	[0.46, 0.22],
	[0.6, 0.9],
	[0.7, 0.82],
	[0.82, 0.12],
	[0.92, 0.18],
	[1, 0.42],
];
const VALLEYS = [POINTS[3], POINTS[7]];
// Bornes horizontales des deux "lacs" (entre les crêtes qui encadrent chaque creux).
const LAKES: [number, number][] = [
	[0.2, 0.62],
	[0.68, 1],
];

const toXY = ([x, y]: [number, number]) => [x * CHART_W, CHART_H - y * CHART_H] as const;

// Catmull-Rom -> Bézier : une courbe douce qui passe par tous les points.
const smoothPath = (pts: [number, number][]) => {
	const p = pts.map(toXY);
	let d = `M${p[0][0]} ${p[0][1]}`;
	for (let i = 0; i < p.length - 1; i++) {
		const p0 = p[i - 1] ?? p[i];
		const p1 = p[i];
		const p2 = p[i + 1];
		const p3 = p[i + 2] ?? p2;
		const c1x = p1[0] + (p2[0] - p0[0]) / 6;
		const c1y = p1[1] + (p2[1] - p0[1]) / 6;
		const c2x = p2[0] - (p3[0] - p1[0]) / 6;
		const c2y = p2[1] - (p3[1] - p1[1]) / 6;
		d += ` C${c1x} ${c1y} ${c2x} ${c2y} ${p2[0]} ${p2[1]}`;
	}
	return d;
};

const CURVE = smoothPath(POINTS);

// 390-510 : deux hivers de l'IA. Écran CRT qui gèle.
export const Winter: React.FC = () => {
	const frame = useCurrentFrame();
	const abs = useAbsoluteFrame();
	const {fps} = useVideoConfig();
	const ice = frostAt(abs);
	const color = interpolateColors(ice, [0, 1], [CRT.green, CRT.ice]);
	const glow = interpolateColors(ice, [0, 1], [CRT.glow, CRT.iceGlow]);
	const draw = interpolate(frame, [12, 50], [0, 1], {...clamp, easing: EASE.inOut});
	const title = interpolate(frame, [4, 12], [0, 1], clamp);
	const body = interpolate(frame, [30, 38], [0, 1], clamp);
	const textShadow = `0 0 12px ${glow}, 0 0 34px ${glow}`;
	return (
		<AbsoluteFill>
			<div
				style={{
					position: 'absolute',
					left: 90,
					right: 90,
					top: 392,
					fontFamily: phosphor,
					fontSize: 112,
					lineHeight: 0.98,
					color,
					textShadow,
					// Apparition en "allumage" de tube : quelques frames hachées.
					opacity: title < 1 ? (Math.floor(frame) % 2 === 0 ? title : title * 0.4) : 1,
				}}
			>
				<span style={{color: interpolateColors(ice, [0, 1], ['#B9FFCB', '#FFFFFF'])}}>1974-1993</span> ·
				<br />
				Deux hivers de l'IA
			</div>
			<div
				style={{
					position: 'absolute',
					left: 90,
					top: 690,
					width: CHART_W,
					height: CHART_H,
				}}
			>
				<svg width={CHART_W} height={CHART_H + 20} style={{overflow: 'visible'}}>
					<defs>
						<linearGradient id="ice-fill" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor={CRT.ice} stopOpacity={0.7} />
							<stop offset="100%" stopColor={CRT.iceDeep} stopOpacity={0.25} />
						</linearGradient>
					</defs>
					{/* Grille d'oscilloscope. */}
					{new Array(5).fill(0).map((_, i) => (
						<line key={`h${i}`} x1={0} x2={CHART_W} y1={(i / 4) * CHART_H} y2={(i / 4) * CHART_H} stroke={color} strokeOpacity={0.16} strokeWidth={2} />
					))}
					{new Array(10).fill(0).map((_, i) => (
						<line key={`v${i}`} y1={0} y2={CHART_H} x1={(i / 9) * CHART_W} x2={(i / 9) * CHART_W} stroke={color} strokeOpacity={0.12} strokeWidth={2} />
					))}
					<line x1={0} x2={CHART_W} y1={CHART_H} y2={CHART_H} stroke={color} strokeWidth={4} />
					<line x1={0} x2={0} y1={0} y2={CHART_H} stroke={color} strokeWidth={4} />
					{/* Le froid monte dans les deux creux, comme un lac qui gèle. */}
					{LAKES.map(([x0, x1], i) => {
						const level = interpolate(frame, [42 + i * 8, 84 + i * 8], [0, 0.38], {...clamp, easing: EASE.out});
						return (
							<clipPath id={`valley-${i}`} key={`cp${i}`}>
								<rect x={x0 * CHART_W} y={CHART_H - level * CHART_H} width={(x1 - x0) * CHART_W} height={CHART_H} />
							</clipPath>
						);
					})}
					{LAKES.map((_, i) => (
						<path
							key={`vf${i}`}
							d={`${CURVE} L${CHART_W} 0 L0 0 Z`}
							fill="url(#ice-fill)"
							clipPath={`url(#valley-${i})`}
						/>
					))}
					<path
						d={CURVE}
						fill="none"
						stroke={color}
						strokeWidth={8}
						strokeLinecap="round"
						pathLength={1}
						strokeDasharray="1 1"
						strokeDashoffset={1 - draw}
						style={{filter: `drop-shadow(0 0 10px ${glow})`}}
					/>
				</svg>
				{VALLEYS.map((v, i) => {
					const [x, y] = toXY(v);
					const pop = spring({frame: frame - (40 + i * 10), fps, config: {damping: 11, stiffness: 180}});
					return (
						<div
							key={i}
							style={{
								position: 'absolute',
								left: x - 60,
								top: y - 170,
								scale: String(pop),
								rotate: `${(1 - pop) * -90 + frame * 0.6}deg`,
								filter: `drop-shadow(0 0 14px ${CRT.iceGlow})`,
							}}
						>
							<Snowflake size={120} color={CRT.ice} strokeWidth={6} />
						</div>
					);
				})}
			</div>
			<div
				style={{
					position: 'absolute',
					left: 90,
					right: 90,
					top: 1200,
					fontFamily: phosphor,
					fontSize: 104,
					lineHeight: 1,
					color,
					textShadow,
					opacity: body < 1 ? (Math.floor(frame) % 2 === 0 ? body : body * 0.4) : 1,
				}}
			>
				Les financements
				<br />
				gèlent.
			</div>
		</AbsoluteFill>
	);
};
