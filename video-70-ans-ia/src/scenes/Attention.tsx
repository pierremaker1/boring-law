import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {wipeClipIn} from '../components/Eras';
import {clamp, EASE, NBSP, useAbsoluteFrame} from '../components/SceneKit';
import {flat} from '../fonts';
import {FLAT} from '../theme';
import {SCENES} from '../timeline';

const TOKENS = [
	{text: '“Attention', width: 540},
	{text: 'Is', width: 150},
	{text: 'All', width: 196},
	{text: 'You', width: 246},
	{text: 'Need”', width: 350},
];
const PILL_H = 118;
const PILL_GAP = 20;
const TOP = 528;
const DOT_X = 664;
const yOf = (i: number) => TOP + i * (PILL_H + PILL_GAP) + PILL_H / 2;

// Liens d'attention : [de, vers, épaisseur, couleur].
const LINKS: [number, number, number, string][] = [
	[0, 4, 12, FLAT.yellow],
	[0, 1, 6, FLAT.mint],
	[1, 3, 8, FLAT.coral],
	[2, 4, 7, FLAT.mint],
	[3, 4, 10, FLAT.yellow],
	[0, 2, 5, FLAT.coral],
	[1, 2, 4, FLAT.yellow],
];

const BODY_TOP = 1300;
const BODY_SIZE = 76;
const BODY_LINE = 1.16;
// Le corps est aligné à droite : le T final de "ChatGPT" tombe à x ~ 990.
const T_X = 990 - BODY_SIZE * 0.31;
const T_Y = BODY_TOP + BODY_SIZE * BODY_LINE + BODY_SIZE * 0.2;

// 795-885 : "Attention Is All You Need". Les lignes d'attention relient les mots,
// puis convergent vers le T de ChatGPT, qui s'illumine.
export const Attention: React.FC = () => {
	const frame = useCurrentFrame();
	const abs = useAbsoluteFrame();
	const {fps} = useVideoConfig();
	const head = spring({frame: frame - 1, fps, config: {damping: 18, stiffness: 170}});
	const body = spring({frame: frame - 12, fps, config: {damping: 18, stiffness: 170}});
	const converge = interpolate(frame, [28, 42], [0, 1], {...clamp, easing: EASE.inOut});
	const lit = spring({frame: frame - 39, fps, config: {damping: 10, stiffness: 200}});
	return (
		<AbsoluteFill style={{clipPath: wipeClipIn(abs, SCENES.attention.from)}}>
			<div
				style={{
					position: 'absolute',
					left: 90,
					top: 404,
					fontFamily: flat,
					fontWeight: 800,
					fontSize: 92,
					color: FLAT.yellow,
					translate: `${interpolate(head, [0, 1], [-160, 0])}px 0`,
					opacity: head > 0.02 ? 1 : 0,
				}}
			>
				2017 ·
			</div>
			<svg width={1080} height={1920} style={{position: 'absolute', left: 0, top: 0}}>
				{TOKENS.map((t, i) => {
					const s = interpolate(frame, [6 + i * 2, 14 + i * 2], [0, 1], {...clamp, easing: EASE.out});
					return (
						<line
							key={`c${i}`}
							x1={90 + t.width}
							x2={90 + t.width + (DOT_X - 90 - t.width) * s}
							y1={yOf(i)}
							y2={yOf(i)}
							stroke="rgba(255,255,255,0.45)"
							strokeWidth={4}
							strokeDasharray="6 10"
						/>
					);
				})}
				{LINKS.map(([a, b, w, color], k) => {
					const draw = interpolate(frame, [10 + k * 2.2, 26 + k * 2.2], [0, 1], {...clamp, easing: EASE.inOut});
					const r = Math.abs(yOf(b) - yOf(a)) / 2;
					return (
						<path
							key={`l${k}`}
							d={`M${DOT_X} ${yOf(a)} A ${r} ${r} 0 0 1 ${DOT_X} ${yOf(b)}`}
							fill="none"
							stroke={color}
							strokeWidth={w}
							strokeLinecap="round"
							pathLength={1}
							strokeDasharray="1 1"
							strokeDashoffset={1 - draw}
							opacity={interpolate(converge, [0, 1], [1, 0.8])}
						/>
					);
				})}
				{/* Convergence vers le T. */}
				{TOKENS.map((_, i) => {
					const y = yOf(i);
					return (
						<path
							key={`v${i}`}
							d={`M${DOT_X} ${y} C${DOT_X + 260} ${y + 60}, ${T_X - 40} ${T_Y - 360}, ${T_X} ${T_Y - 66}`}
							fill="none"
							stroke={FLAT.yellow}
							strokeWidth={5}
							strokeLinecap="round"
							pathLength={1}
							strokeDasharray="1 1"
							strokeDashoffset={1 - interpolate(converge, [i * 0.08, 0.6 + i * 0.08], [0, 1], clamp)}
						/>
					);
				})}
				{TOKENS.map((_, i) => {
					const s = interpolate(frame, [8 + i * 2, 14 + i * 2], [0, 1], {...clamp, easing: EASE.out});
					return <circle key={`d${i}`} cx={DOT_X} cy={yOf(i)} r={14 * s} fill={FLAT.white} />;
				})}
			</svg>
			{TOKENS.map((t, i) => {
				const s = spring({frame: frame - 2 - i * 2, fps, config: {damping: 14, stiffness: 200}});
				return (
					<div
						key={t.text}
						style={{
							position: 'absolute',
							left: 90,
							top: yOf(i) - PILL_H / 2,
							width: t.width,
							height: PILL_H,
							borderRadius: 26,
							background: FLAT.white,
							boxShadow: `10px 10px 0 rgba(0,0,0,0.2)`,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontFamily: flat,
							fontWeight: 800,
							fontSize: 84,
							color: '#3B0764',
							whiteSpace: 'nowrap',
							translate: `${interpolate(s, [0, 1], [-200, 0])}px 0`,
							opacity: s > 0.02 ? 1 : 0,
						}}
					>
						{t.text}
					</div>
				);
			})}
			<div
				style={{
					position: 'absolute',
					left: 90,
					right: 90,
					top: BODY_TOP,
					textAlign: 'right',
					fontFamily: flat,
					fontWeight: 800,
					fontSize: BODY_SIZE,
					lineHeight: BODY_LINE,
					color: FLAT.white,
					translate: `${interpolate(body, [0, 1], [160, 0])}px 0`,
					opacity: body > 0.02 ? 1 : 0,
				}}
			>
				Le <span style={{color: FLAT.yellow}}>T</span>ransformer{NBSP}:
				<br />
				le <span style={{color: FLAT.yellow}}>T</span> de ChatGP
				<span style={{position: 'relative', display: 'inline-block'}}>
					<span
						style={{
							position: 'absolute',
							left: '50%',
							top: '50%',
							width: 240,
							height: 240,
							marginLeft: -120,
							marginTop: -120,
							borderRadius: 120,
							background: `radial-gradient(circle, rgba(250,204,21,0.85) 0%, rgba(250,204,21,0) 65%)`,
							opacity: Math.min(1, lit),
							scale: String(interpolate(lit, [0, 1], [0.3, 1])),
						}}
					/>
					<span
						style={{
							position: 'relative',
							color: lit > 0.05 ? '#FFFBEA' : FLAT.white,
							textShadow: lit > 0.05 ? `0 0 ${24 * Math.min(1, lit)}px ${FLAT.yellow}, 0 0 6px #fff` : undefined,
						}}
					>
						T
					</span>
				</span>
			</div>
		</AbsoluteFill>
	);
};
