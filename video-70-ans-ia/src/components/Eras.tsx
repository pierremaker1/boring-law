import React from 'react';
import {AbsoluteFill, interpolate, interpolateColors, random} from 'remotion';
import {CRT, FLAT, GLASS, PIXEL, TELETYPE} from '../theme';
import {SCENES} from '../timeline';
import {Grain, Scanlines, Vignette} from './Textures';
import {clamp, EASE, useAbsoluteFrame} from './Timing';
import {YearCounter} from './YearCounter';

// ---------------------------------------------------------------------------
// 1956-1966 : télétype. Papier listing à perforations latérales, encre ambre.
// ---------------------------------------------------------------------------

const paperFeed = (f: number) =>
	[SCENES.seventy.from, SCENES.dartmouth.from, SCENES.eliza.from].reduce(
		(acc, cut) => acc + 216 * interpolate(f, [cut, cut + 12], [0, 1], {...clamp, easing: EASE.out}),
		f * 0.8,
	);

const TractorFeed: React.FC<{readonly offset: number}> = ({offset}) => {
	const pitch = 72;
	const shift = offset % pitch;
	const holes = new Array(30).fill(0);
	return (
		<AbsoluteFill style={{pointerEvents: 'none'}}>
			{[40, 1040].map((x) => (
				<React.Fragment key={x}>
					{holes.map((_, i) => (
						<div
							key={i}
							style={{
								position: 'absolute',
								left: x - 12,
								top: i * pitch - shift - pitch,
								width: 24,
								height: 24,
								borderRadius: 12,
								border: `3px solid rgba(255,176,0,0.16)`,
							}}
						/>
					))}
				</React.Fragment>
			))}
			{[80, 1000].map((x) => (
				<div
					key={x}
					style={{
						position: 'absolute',
						left: x,
						top: 0,
						bottom: 0,
						width: 2,
						backgroundImage: 'repeating-linear-gradient(180deg, rgba(255,176,0,0.12) 0 10px, transparent 10px 20px)',
						backgroundPosition: `0 ${-offset}px`,
					}}
				/>
			))}
		</AbsoluteFill>
	);
};

export const TeletypeEra: React.FC<{readonly children: React.ReactNode}> = ({children}) => {
	const f = useAbsoluteFrame();
	const feed = paperFeed(f);
	return (
		<AbsoluteFill style={{background: TELETYPE.bg}}>
			<AbsoluteFill
				style={{
					background: `radial-gradient(ellipse 80% 55% at 50% 52%, ${TELETYPE.bgGlow} 0%, rgba(15,10,5,0) 70%)`,
				}}
			/>
			<AbsoluteFill
				style={{
					backgroundImage: 'repeating-linear-gradient(180deg, rgba(255,176,0,0.035) 0 2px, transparent 2px 72px)',
					backgroundPosition: `0 ${-feed}px`,
				}}
			/>
			<TractorFeed offset={feed} />
			{children}
			<YearCounter era="teletype" />
			<Grain frame={f} opacity={0.07} />
			<Vignette strength={0.55} />
		</AbsoluteFill>
	);
};

// ---------------------------------------------------------------------------
// 1974-1993 : écran CRT vert phosphore, puis le givre envahit tout.
// ---------------------------------------------------------------------------

type Crystal = {x: number; y: number; angle: number; length: number};

const CRYSTALS: Crystal[] = (() => {
	const list: Crystal[] = [];
	const edges = 22;
	for (let i = 0; i < edges; i++) {
		const side = i % 4;
		const t = random(`cr-t-${i}`);
		// Très courts sur les côtés (le texte reste net), plus longs en haut et en bas,
		// là où il n'y a que les zones de sécurité.
		const length = side % 2 === 1 ? 55 + random(`cr-l-${i}`) * 30 : 120 + random(`cr-l-${i}`) * 90;
		let x = 0;
		let y = 0;
		let angle = 0;
		if (side === 0) {
			x = t * 1080;
			y = 0;
			angle = 90;
		} else if (side === 1) {
			x = 1080;
			y = t * 1920;
			angle = 180;
		} else if (side === 2) {
			x = t * 1080;
			y = 1920;
			angle = 270;
		} else {
			x = 0;
			y = t * 1920;
			angle = 0;
		}
		angle += (random(`cr-a-${i}`) - 0.5) * 60;
		list.push({x, y, angle, length});
	}
	// Coins : les cristaux les plus denses.
	[
		[0, 0, 45],
		[1080, 0, 135],
		[1080, 1920, 225],
		[0, 1920, 315],
	].forEach(([x, y, angle], i) => list.push({x, y, angle, length: 330 + i * 10}));
	return list;
})();

const crystalPath = (c: Crystal) => {
	const rad = (c.angle * Math.PI) / 180;
	const dx = Math.cos(rad);
	const dy = Math.sin(rad);
	let d = `M${c.x} ${c.y} L${c.x + dx * c.length} ${c.y + dy * c.length}`;
	const branches = 6;
	for (let b = 1; b <= branches; b++) {
		const k = b / (branches + 1);
		const bx = c.x + dx * c.length * k;
		const by = c.y + dy * c.length * k;
		const bl = c.length * 0.32 * (1 - k * 0.6);
		for (const s of [-1, 1]) {
			const a = rad + s * (Math.PI / 3);
			const ex = bx + Math.cos(a) * bl;
			const ey = by + Math.sin(a) * bl;
			d += ` M${bx} ${by} L${ex} ${ey}`;
			// Petites barbules : motif de fougère de givre.
			const mx = bx + Math.cos(a) * bl * 0.55;
			const my = by + Math.sin(a) * bl * 0.55;
			const a2 = a + s * (Math.PI / 3);
			d += ` M${mx} ${my} L${mx + Math.cos(a2) * bl * 0.3} ${my + Math.sin(a2) * bl * 0.3}`;
		}
	}
	return d;
};

export const frostAt = (f: number) =>
	interpolate(f, [SCENES.winter.from + 6, SCENES.winter.to - 4], [0, 1], {...clamp, easing: EASE.inOut});

const Frost: React.FC<{readonly progress: number}> = ({progress}) => {
	// Le givre progresse des bords vers le centre, sans jamais masquer le texte central.
	const inner = interpolate(progress, [0, 1], [100, 68]);
	return (
		<AbsoluteFill style={{pointerEvents: 'none'}}>
			<svg width={1080} height={1920} style={{position: 'absolute'}}>
				<defs>
					<filter id="frost-tex" x="0" y="0" width="100%" height="100%">
						<feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="4" seed="7" result="n" />
						<feColorMatrix
							in="n"
							type="matrix"
							values="0 0 0 0 0.86  0 0 0 0 0.95  0 0 0 0 1  0 0 0 2.4 -0.9"
						/>
					</filter>
					<radialGradient id="frost-mask-g" cx="50%" cy="50%" r="75%">
						<stop offset={`${inner - 18}%`} stopColor="#000" />
						<stop offset={`${inner}%`} stopColor="#777" />
						<stop offset="100%" stopColor="#fff" />
					</radialGradient>
					<mask id="frost-mask">
						<rect width="1080" height="1920" fill="url(#frost-mask-g)" />
					</mask>
				</defs>
				<rect
					width="1080"
					height="1920"
					filter="url(#frost-tex)"
					mask="url(#frost-mask)"
					opacity={interpolate(progress, [0, 0.2, 1], [0, 0.55, 0.95], clamp)}
				/>
				<g
					stroke="rgba(225,248,255,0.85)"
					strokeWidth={3}
					strokeLinecap="round"
					fill="none"
					style={{filter: 'drop-shadow(0 0 6px rgba(160,235,255,0.9))'}}
				>
					{CRYSTALS.map((c, i) => {
						const delay = (i % 7) * 0.05;
						const grow = interpolate(progress, [delay, delay + 0.6], [0, 1], {...clamp, easing: EASE.out});
						return (
							<path key={i} d={crystalPath(c)} pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - grow} />
						);
					})}
				</g>
			</svg>
		</AbsoluteFill>
	);
};

export const CrtEra: React.FC<{readonly children: React.ReactNode}> = ({children}) => {
	const f = useAbsoluteFrame();
	const frost = frostAt(f);
	const flicker = 0.965 + random(`fl-${f}`) * 0.035;
	const bandY = ((f * 11) % 2300) - 300;
	return (
		<AbsoluteFill style={{background: CRT.bg}}>
			<AbsoluteFill
				style={{
					background: `radial-gradient(ellipse 70% 50% at 50% 50%, ${interpolateColors(frost, [0, 1], ['#0A2E12', '#0B2433'])} 0%, rgba(2,12,4,0) 75%)`,
				}}
			/>
			<AbsoluteFill style={{opacity: flicker}}>
				{children}
				<YearCounter era="crt" />
			</AbsoluteFill>
			<div
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					top: bandY,
					height: 260,
					background: 'linear-gradient(180deg, rgba(120,255,160,0), rgba(120,255,160,0.06), rgba(120,255,160,0))',
				}}
			/>
			<Frost progress={frost} />
			<AbsoluteFill style={{background: `rgba(120, 210, 255, ${frost * 0.1})`, mixBlendMode: 'screen'}} />
			<Scanlines opacity={0.32} period={6} />
			<Grain frame={f} opacity={0.1} />
			{/* Tube cathodique : coins arrondis et vignettage bombé. */}
			<AbsoluteFill
				style={{
					borderRadius: 70,
					boxShadow: 'inset 0 0 180px 40px rgba(0,0,0,0.85), 0 0 0 60px #000',
				}}
			/>
		</AbsoluteFill>
	);
};

// ---------------------------------------------------------------------------
// 1997 : bureau tramé et fenêtres grises en relief des années 90.
// ---------------------------------------------------------------------------

export const PixelEra: React.FC<{readonly children: React.ReactNode}> = ({children}) => (
	<AbsoluteFill
		style={{
			backgroundColor: PIXEL.desktop,
			backgroundImage: `repeating-conic-gradient(${PIXEL.desktopDither} 0% 25%, ${PIXEL.desktop} 0% 50%)`,
			backgroundSize: '8px 8px',
			imageRendering: 'pixelated',
		}}
	>
		{children}
		<YearCounter era="pixel" />
	</AbsoluteFill>
);

// ---------------------------------------------------------------------------
// 2012-2017 : flat design, aplats francs, volets diagonaux entre les scènes.
// ---------------------------------------------------------------------------

// Volet diagonal : le front jaune passe d'abord, l'aplat de couleur suit.
const accentWipe = (f: number, at: number) => interpolate(f, [at - 3, at + 7], [0, 1], {...clamp, easing: EASE.inOut});
const colorWipe = (f: number, at: number) => interpolate(f, [at - 1, at + 9], [0, 1], {...clamp, easing: EASE.inOut});
const frontX = (p: number) => interpolate(p, [0, 1], [-600, 1680]);

// Le contenu est porté par le volet : la scène sortante disparaît sous le front
// jaune, la scène entrante n'existe qu'à gauche du front de couleur.
export const wipeClipOut = (f: number, at: number): string | undefined => {
	const p = accentWipe(f, at);
	if (p <= 0) return undefined;
	const t = frontX(p);
	return `polygon(${t}px 0, 2400px 0, 2400px 1920px, ${t - 600}px 1920px)`;
};

export const wipeClipIn = (f: number, at: number): string | undefined => {
	const p = colorWipe(f, at);
	if (p >= 1) return undefined;
	const t = frontX(p);
	return `polygon(-1300px 0, ${t}px 0, ${t - 600}px 1920px, -1300px 1920px)`;
};

const FLAT_STEPS = [
	{at: SCENES.alexNet.from, color: FLAT.blue},
	{at: SCENES.alphaGo.from, color: FLAT.teal},
	{at: SCENES.attention.from, color: FLAT.violet},
];

const Wipe: React.FC<{readonly color: string; readonly progress: number}> = ({color, progress}) => {
	// Volet diagonal : tout ce qui est à gauche du front prend la nouvelle couleur.
	const top = frontX(progress);
	const bottom = top - 600;
	return (
		<AbsoluteFill
			style={{
				background: color,
				clipPath: `polygon(-1300px 0, ${top}px 0, ${bottom}px 1920px, -1300px 1920px)`,
			}}
		/>
	);
};

export const FlatEra: React.FC<{readonly children: React.ReactNode}> = ({children}) => {
	const f = useAbsoluteFrame();
	const layers = FLAT_STEPS.map((s, i) => {
		const p = i === 0 ? 1 : colorWipe(f, s.at);
		return {color: s.color, p, accentP: i === 0 ? 1 : accentWipe(f, s.at)};
	});
	const spin = f * 0.15;
	return (
		<AbsoluteFill style={{background: FLAT.blue}}>
			{layers.map((l, i) => {
				if (i === 0 || l.p <= 0) {
					return null;
				}
				if (l.p >= 1) {
					return <AbsoluteFill key={i} style={{background: l.color}} />;
				}
				return (
					<React.Fragment key={i}>
						<Wipe color={FLAT.yellow} progress={l.accentP} />
						<Wipe color={l.color} progress={l.p} />
					</React.Fragment>
				);
			})}
			{/* Formes géométriques décoratives en aplat translucide. */}
			<div
				style={{
					position: 'absolute',
					right: -220,
					top: 260,
					width: 640,
					height: 640,
					borderRadius: 320,
					background: 'rgba(255,255,255,0.06)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: -180,
					bottom: 120,
					width: 520,
					height: 520,
					background: 'rgba(0,0,0,0.08)',
					rotate: `${45 + spin}deg`,
				}}
			/>
			{children}
			<YearCounter era="flat" />
		</AbsoluteFill>
	);
};

// ---------------------------------------------------------------------------
// 2022-2026 : dégradés, halos colorés et verre dépoli.
// ---------------------------------------------------------------------------

const Blob: React.FC<{readonly x: number; readonly y: number; readonly r: number; readonly color: string; readonly alpha?: number}> = ({
	x,
	y,
	r,
	color,
	alpha = 0.75,
}) => (
	<div
		style={{
			position: 'absolute',
			left: x - r,
			top: y - r,
			width: r * 2,
			height: r * 2,
			borderRadius: r,
			background: `radial-gradient(circle at 50% 50%, ${color} 0%, ${color}00 68%)`,
			opacity: alpha,
		}}
	/>
);

export const GlassEra: React.FC<{readonly children: React.ReactNode}> = ({children}) => {
	const f = useAbsoluteFrame();
	const t = f / 30;
	return (
		<AbsoluteFill style={{background: GLASS.bg}}>
			<Blob x={260 + Math.sin(t * 0.7) * 120} y={520 + Math.cos(t * 0.5) * 160} r={700} color={GLASS.violet} />
			<Blob x={900 + Math.cos(t * 0.6) * 140} y={1100 + Math.sin(t * 0.8) * 180} r={680} color={GLASS.pink} alpha={0.6} />
			<Blob x={200 + Math.sin(t * 0.9) * 100} y={1560 + Math.cos(t * 0.4) * 120} r={620} color={GLASS.cyan} alpha={0.5} />
			<Blob x={820 + Math.sin(t * 0.5) * 80} y={260 + Math.cos(t * 0.7) * 60} r={420} color={GLASS.amber} alpha={0.32} />
			<AbsoluteFill style={{background: 'rgba(7,6,26,0.38)'}} />
			{children}
			<YearCounter era="glass" />
			<Grain frame={f} opacity={0.09} />
		</AbsoluteFill>
	);
};
