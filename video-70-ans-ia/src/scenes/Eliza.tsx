import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {clamp, EASE, NBSP} from '../components/SceneKit';
import {Typewriter} from '../components/Typewriter';
import {teletype} from '../fonts';
import {TELETYPE} from '../theme';

// 270-390 : ELIZA, premier chatbot. Mini dialogue sur terminal.
export const Eliza: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const win = spring({frame: frame - 6, fps, config: {damping: 18, stiffness: 160}});
	const body = interpolate(frame, [46, 56], [0, 1], {...clamp, easing: EASE.out});
	return (
		<AbsoluteFill>
			<div
				style={{
					position: 'absolute',
					left: 90,
					right: 90,
					top: 400,
					fontFamily: teletype,
					fontWeight: 700,
					fontSize: 84,
					lineHeight: 1.18,
				}}
			>
				<Typewriter
					frame={frame}
					start={3}
					charsPerFrame={2.4}
					color={TELETYPE.amber}
					hotColor="#FFF6E0"
					glow={TELETYPE.glow}
					showCursor={false}
					segments={[{text: '1966', color: TELETYPE.hot}, {text: ' · ELIZA,\npremier chatbot'}]}
				/>
			</div>
			{/* Terminal : cadre ambre, barre de titre en pointillés. */}
			<div
				style={{
					position: 'absolute',
					left: 90,
					right: 90,
					top: 680,
					height: 410,
					border: `5px solid ${TELETYPE.amber}`,
					borderRadius: 18,
					background: 'rgba(42, 26, 6, 0.55)',
					boxShadow: `0 0 40px rgba(255,176,0,0.18), inset 0 0 60px rgba(255,176,0,0.08)`,
					opacity: win,
					scale: String(interpolate(win, [0, 1], [0.92, 1])),
					overflow: 'hidden',
				}}
			>
				<div
					style={{
						height: 46,
						borderBottom: `4px solid ${TELETYPE.amber}`,
						display: 'flex',
						alignItems: 'center',
						gap: 14,
						paddingLeft: 22,
						backgroundImage: `repeating-linear-gradient(90deg, rgba(255,176,0,0.25) 0 6px, transparent 6px 14px)`,
					}}
				>
					{[0, 1, 2].map((i) => (
						<div key={i} style={{width: 18, height: 18, borderRadius: 9, background: TELETYPE.bg, border: `3px solid ${TELETYPE.amber}`}} />
					))}
				</div>
				<div
					style={{
						padding: '34px 36px',
						fontFamily: teletype,
						fontWeight: 700,
						fontSize: 58,
						lineHeight: 1.28,
						display: 'flex',
						flexDirection: 'column',
						gap: 36,
					}}
				>
					<Typewriter
						frame={frame}
						start={16}
						charsPerFrame={1.4}
						color="#FFF1D2"
						hotColor="#FFFFFF"
						glow="rgba(255,240,210,0.35)"
						showCursor={frame < 32}
						segments={[{text: '> Je me sens seul.'}]}
					/>
					<Typewriter
						frame={frame}
						start={34}
						charsPerFrame={1.7}
						color={TELETYPE.amber}
						hotColor="#FFF6E0"
						glow={TELETYPE.glow}
						segments={[
							{text: `ELIZA${NBSP}:`, color: TELETYPE.hot},
							{text: ` Pourquoi vous\nsentez-vous seul${NBSP}?`},
						]}
					/>
				</div>
			</div>
			<div
				style={{
					position: 'absolute',
					left: 90,
					right: 90,
					top: 1170,
					fontFamily: teletype,
					fontWeight: 700,
					fontSize: 62,
					lineHeight: 1.3,
					color: TELETYPE.hot,
					textShadow: `0 0 18px ${TELETYPE.glow}`,
					opacity: body,
					translate: `0 ${interpolate(body, [0, 1], [30, 0])}px`,
				}}
			>
				Des gens lui confient
				<br />
				leurs secrets.
			</div>
		</AbsoluteFill>
	);
};
