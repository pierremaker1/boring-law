import React from 'react';
import {AbsoluteFill, interpolate, random, useCurrentFrame} from 'remotion';
import {clamp, EASE} from './Timing';

export type TransitionKind = 'none' | 'scan' | 'pixel' | 'glitch' | 'morph';

const W = 1080;
const H = 1920;

// Filtre SVG de séparation RVB (aberration chromatique) pour le glitch.
const RgbSplit: React.FC<{readonly id: string; readonly dx: number}> = ({id, dx}) => (
	<svg width={0} height={0} style={{position: 'absolute'}}>
		<filter id={id} x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
			<feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="r" />
			<feOffset in="r" dx={dx} dy={0} result="r2" />
			<feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="g" />
			<feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="b" />
			<feOffset in="b" dx={-dx} dy={0} result="b2" />
			<feBlend in="r2" in2="g" mode="screen" result="rg" />
			<feBlend in="rg" in2="b2" mode="screen" />
		</filter>
	</svg>
);

const pixelCells = (progress: number, cell: number, seed: string) => {
	const cols = Math.ceil(W / cell);
	const rows = Math.ceil(H / cell);
	const shown: string[] = [];
	const edge: {x: number; y: number}[] = [];
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			// Front diagonal bruité : les pixels basculent du haut-gauche vers le bas-droite.
			const diag = (c / cols) * 0.35 + (r / rows) * 0.65;
			const t = diag * 0.72 + random(`${seed}-${r}-${c}`) * 0.28;
			const x = c * cell;
			const y = r * cell;
			if (progress >= t) {
				shown.push(`M${x} ${y}h${cell}v${cell}h${-cell}Z`);
			} else if (progress >= t - 0.07) {
				edge.push({x, y});
			}
		}
	}
	return {path: shown.join(''), edge};
};

const glitchBands = (frame: number, coverage: number) => {
	const bands: {y: number; h: number; dx: number}[] = [];
	let y = 0;
	let i = 0;
	while (y < H) {
		const h = 24 + Math.floor(random(`gh-${frame}-${i}`) * 150);
		const on = random(`go-${frame}-${i}`) < coverage;
		if (on) {
			bands.push({y, h, dx: (random(`gx-${frame}-${i}`) - 0.5) * 120 * (1 - coverage)});
		}
		y += h;
		i++;
	}
	return bands;
};

// Entrée d'une époque : révèle la nouvelle par-dessus l'ancienne.
export const EraIn: React.FC<{
	readonly kind: TransitionKind;
	readonly duration: number;
	readonly accent: string;
	readonly children: React.ReactNode;
}> = ({kind, duration, accent, children}) => {
	const frame = useCurrentFrame();
	if (kind === 'none' || frame >= duration) {
		return <AbsoluteFill>{children}</AbsoluteFill>;
	}
	const p = interpolate(frame, [0, duration], [0, 1], clamp);

	if (kind === 'scan') {
		// Balayage de scanline : la nouvelle image s'écrit ligne à ligne, de haut en bas.
		const e = EASE.inOut(p);
		const y = e * H;
		return (
			<>
				<AbsoluteFill style={{clipPath: `inset(0 0 ${(1 - e) * 100}% 0)`}}>{children}</AbsoluteFill>
				<AbsoluteFill style={{pointerEvents: 'none'}}>
					<div
						style={{
							position: 'absolute',
							left: 0,
							right: 0,
							top: y - 160,
							height: 160,
							background: `linear-gradient(180deg, rgba(0,0,0,0), ${accent}55)`,
							mixBlendMode: 'screen',
						}}
					/>
					<div
						style={{
							position: 'absolute',
							left: 0,
							right: 0,
							top: y - 5,
							height: 10,
							background: '#F4FFF6',
							boxShadow: `0 0 30px 10px ${accent}, 0 0 90px 30px ${accent}88`,
						}}
					/>
				</AbsoluteFill>
			</>
		);
	}

	if (kind === 'pixel') {
		const {path, edge} = pixelCells(p * 1.08, 60, 'px');
		return (
			<>
				<AbsoluteFill style={{clipPath: path ? `path('${path}')` : 'inset(100% 0 0 0)'}}>{children}</AbsoluteFill>
				<AbsoluteFill style={{pointerEvents: 'none'}}>
					{edge.map((c, i) => (
						<div
							key={i}
							style={{
								position: 'absolute',
								left: c.x,
								top: c.y,
								width: 60,
								height: 60,
								background: i % 3 === 0 ? accent : i % 3 === 1 ? '#FFFFFF' : '#000000',
								opacity: 0.9,
							}}
						/>
					))}
				</AbsoluteFill>
			</>
		);
	}

	if (kind === 'glitch') {
		const coverage = interpolate(p, [0, 0.85], [0.15, 1], clamp);
		const bands = glitchBands(Math.floor(frame / 1), coverage);
		const path = bands.map((b) => `M0 ${b.y}h${W}v${b.h}h${-W}Z`).join('');
		const shift = (random(`gs-${frame}`) - 0.5) * 70 * (1 - p);
		const id = `rgb-${frame}`;
		return (
			<>
				<RgbSplit id={id} dx={18 * (1 - p) + 4} />
				<AbsoluteFill
					style={{
						clipPath: p > 0.92 ? undefined : `path('${path}')`,
						translate: `${shift}px 0`,
						filter: `url(#${id})`,
					}}
				>
					{children}
				</AbsoluteFill>
				<AbsoluteFill style={{pointerEvents: 'none'}}>
					{new Array(6).fill(0).map((_, i) => {
						const by = random(`gb-${frame}-${i}`) * H;
						const bh = 6 + random(`gbh-${frame}-${i}`) * 40;
						return (
							<div
								key={i}
								style={{
									position: 'absolute',
									left: 0,
									right: 0,
									top: by,
									height: bh,
									background: i % 2 ? '#00F0FF' : '#FF2BD6',
									mixBlendMode: 'screen',
									opacity: 0.55 * (1 - p),
								}}
							/>
						);
					})}
					{p > 0.15 && p < 0.4 ? (
						<div
							style={{
								position: 'absolute',
								left: 0,
								right: 0,
								top: random(`gi-${frame}`) * (H - 300),
								height: 300,
								backdropFilter: 'invert(1) hue-rotate(90deg)',
							}}
						/>
					) : null}
				</AbsoluteFill>
			</>
		);
	}

	// Morphing : un carré plat se transforme en cercle, puis en écran entier.
	const e = EASE.inOut(p);
	const cx = W / 2;
	const cy = H * 0.5;
	let w: number;
	let h: number;
	let radius: number;
	if (e < 0.55) {
		const k = e / 0.55;
		w = interpolate(k, [0, 1], [140, 1000]);
		h = w;
		radius = interpolate(k, [0, 1], [0, w / 2]);
	} else {
		const k = (e - 0.55) / 0.45;
		w = interpolate(k, [0, 1], [1000, W + 200]);
		h = interpolate(k, [0, 1], [1000, H + 200]);
		radius = interpolate(k, [0, 1], [500, 0]);
	}
	const top = cy - h / 2;
	const left = cx - w / 2;
	const blur = interpolate(p, [0, 1], [18, 0], clamp);
	return (
		<>
			<AbsoluteFill
				style={{
					clipPath: `inset(${top}px ${W - left - w}px ${H - top - h}px ${left}px round ${radius}px)`,
					filter: blur > 0.5 ? `blur(${blur}px)` : undefined,
					scale: String(interpolate(p, [0, 1], [1.12, 1])),
				}}
			>
				{children}
			</AbsoluteFill>
			<AbsoluteFill style={{pointerEvents: 'none'}}>
				<div
					style={{
						position: 'absolute',
						left,
						top,
						width: w,
						height: h,
						borderRadius: radius,
						border: `6px solid ${accent}`,
						boxShadow: `0 0 50px ${accent}, inset 0 0 50px ${accent}`,
						opacity: interpolate(p, [0, 0.1, 0.8, 1], [0, 1, 1, 0], clamp),
					}}
				/>
			</AbsoluteFill>
		</>
	);
};

// Sortie d'une époque : l'ancienne image réagit pendant qu'elle est recouverte.
export const EraOut: React.FC<{
	readonly kind: TransitionKind;
	readonly start: number;
	readonly duration: number;
	readonly children: React.ReactNode;
}> = ({kind, start, duration, children}) => {
	const frame = useCurrentFrame();
	if (kind === 'none' || frame < start) {
		return <AbsoluteFill>{children}</AbsoluteFill>;
	}
	const p = interpolate(frame, [start, start + duration], [0, 1], clamp);
	if (kind === 'scan') {
		return (
			<AbsoluteFill style={{filter: `brightness(${1 - p * 0.5})`, translate: `${Math.sin(frame * 3.1) * 6 * p}px 0`}}>
				{children}
			</AbsoluteFill>
		);
	}
	if (kind === 'glitch') {
		return (
			<AbsoluteFill style={{translate: `${(random(`go-${frame}`) - 0.5) * 50}px 0`}}>{children}</AbsoluteFill>
		);
	}
	if (kind === 'morph') {
		return (
			<AbsoluteFill style={{scale: String(1 - p * 0.06), filter: `brightness(${1 - p * 0.45})`}}>{children}</AbsoluteFill>
		);
	}
	return <AbsoluteFill style={{filter: `contrast(${1 + p * 0.4})`}}>{children}</AbsoluteFill>;
};
