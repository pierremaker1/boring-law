import React from 'react';
import {interpolate, interpolateColors, spring, useVideoConfig} from 'remotion';
import {flat, modern, phosphor, teletype} from '../fonts';
import {COUNTER_TOP, CRT, FLAT, GLASS, PIXEL, TELETYPE} from '../theme';
import {EraName, odometerValue, progressAt, yearSpeed} from '../timeline';
import {Odometer} from './Odometer';
import {SevenSegNumber} from './SevenSeg';
import {clamp, EASE, useAbsoluteFrame} from './Timing';

const RAIL_W = 820;

// "Il en faudra 70." : c'est là que le compteur démarre.
const START_FRAME = 99;

const Wrapper: React.FC<{readonly children: React.ReactNode; readonly gap?: number}> = ({
	children,
	gap = 22,
}) => (
	<div
		style={{
			position: 'absolute',
			top: COUNTER_TOP,
			left: 0,
			right: 0,
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			gap,
		}}
	>
		{children}
	</div>
);

const TeletypeCounter: React.FC<{readonly frame: number}> = ({frame}) => {
	const {fps} = useVideoConfig();
	const value = odometerValue(frame);
	const kick = spring({frame: frame - START_FRAME, fps, config: {damping: 9, stiffness: 220}});
	const flash = interpolate(frame, [START_FRAME - 1, START_FRAME, START_FRAME + 10], [0, 1, 0], clamp);
	const holes = 36;
	const filled = progressAt(frame) * (holes - 1);
	const bracket = (side: 'left' | 'right'): React.CSSProperties => ({
		position: 'absolute',
		top: 6,
		bottom: 6,
		width: 22,
		[side]: 0,
		borderTop: `5px solid ${TELETYPE.amber}`,
		borderBottom: `5px solid ${TELETYPE.amber}`,
		[side === 'left' ? 'borderLeft' : 'borderRight']: `5px solid ${TELETYPE.amber}`,
		opacity: 0.85,
	});
	return (
		<Wrapper>
			<div
				style={{
					position: 'relative',
					padding: '0 46px',
					scale: String(1 + (kick > 0 ? Math.sin(Math.min(kick, 1) * Math.PI) * 0.12 : 0)),
				}}
			>
				<div style={bracket('left')} />
				<div style={bracket('right')} />
				<Odometer
					value={value}
					height={128}
					speed={yearSpeed(frame)}
					digitStyle={{
						fontFamily: teletype,
						fontWeight: 700,
						fontSize: 124,
						color: interpolateColors(flash, [0, 1], [TELETYPE.amber, '#FFF4D6']),
					}}
					glow={`drop-shadow(0 0 ${10 + flash * 20}px ${TELETYPE.glow})`}
				/>
			</div>
			<div style={{display: 'flex', gap: 0, width: RAIL_W, justifyContent: 'space-between'}}>
				{new Array(holes).fill(0).map((_, i) => {
					const appear = interpolate(frame, [START_FRAME + i * 0.4, START_FRAME + 4 + i * 0.4], [0, 1], clamp);
					const on = i <= filled + 0.001;
					return (
						<div
							key={i}
							style={{
								width: 14,
								height: 24,
								borderRadius: 3,
								opacity: appear,
								background: on ? TELETYPE.amber : 'transparent',
								border: `3px solid ${on ? TELETYPE.amber : TELETYPE.dim}`,
								boxShadow: on ? `0 0 10px ${TELETYPE.glow}` : undefined,
							}}
						/>
					);
				})}
			</div>
		</Wrapper>
	);
};

const CrtCounter: React.FC<{readonly frame: number}> = ({frame}) => {
	const value = odometerValue(frame);
	// Le phosphore vert refroidit vers un bleu glacier à mesure que le givre gagne.
	const ice = interpolate(frame, [410, 500], [0, 1], {...clamp, easing: EASE.inOut});
	const color = interpolateColors(ice, [0, 1], [CRT.green, CRT.ice]);
	const glow = interpolateColors(ice, [0, 1], [CRT.glow, CRT.iceGlow]);
	const jitter = ice > 0.5 ? Math.sin(frame * 2.3) * ice * 1.5 : 0;
	const p = progressAt(frame);
	return (
		<Wrapper gap={18}>
			<div
				style={{
					position: 'relative',
					padding: '4px 40px',
					border: `4px solid ${color}`,
					boxShadow: `0 0 24px ${glow}, inset 0 0 24px ${glow}`,
					translate: `${jitter}px 0`,
				}}
			>
				<Odometer
					value={value}
					height={132}
					speed={yearSpeed(frame)}
					gap={4}
					digitStyle={{
						fontFamily: phosphor,
						fontSize: 168,
						color,
					}}
					glow={`drop-shadow(0 0 8px ${glow}) drop-shadow(0 0 22px ${glow})`}
				/>
			</div>
			<div style={{position: 'relative', width: RAIL_W, height: 34}}>
				<div style={{position: 'absolute', left: 0, right: 0, top: 16, height: 3, background: color, opacity: 0.6}} />
				{new Array(8).fill(0).map((_, i) => (
					<div
						key={i}
						style={{
							position: 'absolute',
							left: (i / 7) * RAIL_W - 2,
							top: 8,
							width: 4,
							height: 18,
							background: color,
							opacity: 0.7,
						}}
					/>
				))}
				<div
					style={{
						position: 'absolute',
						left: p * RAIL_W - 9,
						top: 0,
						width: 18,
						height: 34,
						background: color,
						boxShadow: `0 0 16px ${glow}`,
					}}
				/>
			</div>
		</Wrapper>
	);
};

const bevelOut: React.CSSProperties = {
	borderTop: `4px solid ${PIXEL.light}`,
	borderLeft: `4px solid ${PIXEL.light}`,
	borderBottom: `4px solid ${PIXEL.dark}`,
	borderRight: `4px solid ${PIXEL.dark}`,
	background: PIXEL.gray,
	boxShadow: `inset -4px -4px 0 ${PIXEL.shadow}`,
};

const bevelIn: React.CSSProperties = {
	borderTop: `4px solid ${PIXEL.shadow}`,
	borderLeft: `4px solid ${PIXEL.shadow}`,
	borderBottom: `4px solid ${PIXEL.light}`,
	borderRight: `4px solid ${PIXEL.light}`,
};

const PixelCounter: React.FC<{readonly frame: number}> = ({frame}) => {
	const value = Math.round(odometerValue(frame));
	const blocks = 30;
	const filled = Math.round(progressAt(frame) * blocks);
	return (
		<Wrapper gap={14}>
			<div style={{...bevelOut, padding: 10}}>
				<div style={{...bevelIn, background: '#000', padding: '12px 22px'}}>
					<SevenSegNumber value={value} scale={1.12} on={PIXEL.led} off={PIXEL.ledOff} />
				</div>
			</div>
			<div style={{...bevelIn, width: RAIL_W, height: 42, background: PIXEL.light, padding: 4, display: 'flex', gap: 3}}>
				{new Array(blocks).fill(0).map((_, i) => (
					<div
						key={i}
						style={{
							flex: 1,
							background: i < filled ? PIXEL.titleBar : 'transparent',
						}}
					/>
				))}
			</div>
		</Wrapper>
	);
};

const FlatCounter: React.FC<{readonly frame: number}> = ({frame}) => {
	const value = odometerValue(frame);
	const p = progressAt(frame);
	return (
		<Wrapper gap={26}>
			<div style={{position: 'relative'}}>
				{/* Ombre portée longue, signature du flat design. */}
				<div
					style={{
						position: 'absolute',
						inset: 0,
						borderRadius: 26,
						background: 'linear-gradient(135deg, rgba(0,0,0,0.28), rgba(0,0,0,0) 70%)',
						translate: '22px 22px',
					}}
				/>
				<div
					style={{
						position: 'relative',
						borderRadius: 26,
						background: FLAT.yellow,
						padding: '0 44px',
					}}
				>
					<Odometer
						value={value}
						height={136}
						speed={yearSpeed(frame)}
						digitStyle={{
							fontFamily: flat,
							fontWeight: 800,
							fontSize: 118,
							color: FLAT.ink,
							fontVariantNumeric: 'tabular-nums',
						}}
					/>
				</div>
			</div>
			<div style={{position: 'relative', width: RAIL_W, height: 18, borderRadius: 9, background: 'rgba(255,255,255,0.28)'}}>
				<div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: p * RAIL_W, borderRadius: 9, background: FLAT.white}} />
				<div
					style={{
						position: 'absolute',
						left: p * RAIL_W - 18,
						top: -9,
						width: 36,
						height: 36,
						borderRadius: 18,
						background: FLAT.yellow,
						border: `6px solid ${FLAT.white}`,
					}}
				/>
			</div>
		</Wrapper>
	);
};

const GlassCounter: React.FC<{readonly frame: number}> = ({frame}) => {
	const value = odometerValue(frame);
	const p = progressAt(frame);
	return (
		<Wrapper gap={26}>
			<div
				style={{
					borderRadius: 999,
					padding: '4px 56px',
					background: 'linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.06))',
					backdropFilter: 'blur(26px) saturate(160%)',
					border: '2px solid rgba(255,255,255,0.38)',
					boxShadow: '0 24px 60px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.45)',
				}}
			>
				<Odometer
					value={value}
					height={136}
					speed={yearSpeed(frame)}
					digitStyle={{
						fontFamily: modern,
						fontWeight: 800,
						fontSize: 112,
						letterSpacing: '-0.02em',
						fontVariantNumeric: 'tabular-nums',
						backgroundImage: 'linear-gradient(180deg, #FFFFFF 20%, #D9CCFF 100%)',
						WebkitBackgroundClip: 'text',
						backgroundClip: 'text',
						color: 'transparent',
					}}
				/>
			</div>
			<div
				style={{
					position: 'relative',
					width: RAIL_W,
					height: 12,
					borderRadius: 6,
					background: 'rgba(255,255,255,0.16)',
					border: '1px solid rgba(255,255,255,0.25)',
				}}
			>
				<div
					style={{
						position: 'absolute',
						left: 0,
						top: 0,
						bottom: 0,
						width: p * RAIL_W,
						borderRadius: 6,
						background: `linear-gradient(90deg, ${GLASS.cyan}, ${GLASS.violet}, ${GLASS.pink})`,
						boxShadow: `0 0 18px ${GLASS.violet}`,
					}}
				/>
				<div
					style={{
						position: 'absolute',
						left: p * RAIL_W - 14,
						top: -8,
						width: 28,
						height: 28,
						borderRadius: 14,
						background: GLASS.white,
						boxShadow: `0 0 22px ${GLASS.pink}, 0 0 6px #fff`,
					}}
				/>
			</div>
		</Wrapper>
	);
};

export const YearCounter: React.FC<{readonly era: EraName}> = ({era}) => {
	const frame = useAbsoluteFrame();
	switch (era) {
		case 'teletype':
			return <TeletypeCounter frame={frame} />;
		case 'crt':
			return <CrtCounter frame={frame} />;
		case 'pixel':
			return <PixelCounter frame={frame} />;
		case 'flat':
			return <FlatCounter frame={frame} />;
		case 'glass':
			return <GlassCounter frame={frame} />;
	}
};
