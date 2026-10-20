import React from 'react';
import {AbsoluteFill, interpolate, random, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {clamp, EASE, paperFeedExit} from '../components/SceneKit';
import {Typewriter} from '../components/Typewriter';
import {teletype} from '../fonts';
import {TELETYPE} from '../theme';

const IMPACT = 9;

// Confettis de cartes perforées projetés par l'impact.
const CHADS = new Array(26).fill(0).map((_, i) => ({
	angle: random(`chad-a-${i}`) * Math.PI * 2,
	dist: 260 + random(`chad-d-${i}`) * 420,
	size: 10 + random(`chad-s-${i}`) * 14,
	spin: (random(`chad-r-${i}`) - 0.5) * 720,
}));

// 90-150 : "Il en faudra 70." Gros impact.
export const Seventy: React.FC<{readonly dur: number}> = ({dur}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const exit = paperFeedExit(frame, dur);
	const slam = spring({frame: frame - IMPACT, fps, config: {damping: 13, stiffness: 260, mass: 0.9}});
	const shake = frame >= IMPACT ? Math.exp(-(frame - IMPACT) / 5) * 22 : 0;
	const flash = interpolate(frame, [IMPACT - 1, IMPACT, IMPACT + 7], [0, 0.55, 0], clamp);
	const ring = interpolate(frame, [IMPACT, IMPACT + 22], [0, 1], {...clamp, easing: EASE.out});
	return (
		<AbsoluteFill
			style={{
				opacity: exit.opacity,
				translate: exit.translate,
			}}
		>
			<AbsoluteFill style={{translate: `${Math.sin(frame * 2.7) * shake}px ${Math.cos(frame * 3.3) * shake}px`}}>
			{/* Onde de choc. */}
			<div
				style={{
					position: 'absolute',
					left: 540 - 520,
					top: 1060 - 520,
					width: 1040,
					height: 1040,
					borderRadius: 520,
					border: `${interpolate(ring, [0, 1], [40, 2])}px solid ${TELETYPE.amber}`,
					scale: String(interpolate(ring, [0, 1], [0.2, 1.15])),
					opacity: frame >= IMPACT ? interpolate(ring, [0, 1], [0.7, 0], clamp) : 0,
				}}
			/>
			{CHADS.map((c, i) => {
				const t = interpolate(frame, [IMPACT, IMPACT + 34], [0, 1], {...clamp, easing: EASE.out});
				return (
					<div
						key={i}
						style={{
							position: 'absolute',
							left: 540 + Math.cos(c.angle) * c.dist * t - c.size / 2,
							top: 1060 + Math.sin(c.angle) * c.dist * t + t * t * 140 - c.size,
							width: c.size,
							height: c.size * 1.9,
							borderRadius: 2,
							background: i % 3 === 0 ? TELETYPE.paper : TELETYPE.amber,
							rotate: `${c.spin * t}deg`,
							opacity: frame >= IMPACT ? interpolate(t, [0, 0.7, 1], [1, 0.9, 0], clamp) : 0,
						}}
					/>
				);
			})}
			<div
				style={{
					position: 'absolute',
					left: 90,
					right: 90,
					top: 600,
					fontFamily: teletype,
					fontWeight: 700,
					fontSize: 96,
					textAlign: 'center',
				}}
			>
				<Typewriter
					frame={frame}
					start={2}
					charsPerFrame={2.2}
					color={TELETYPE.amber}
					hotColor="#FFF6E0"
					glow={TELETYPE.glow}
					showCursor={false}
					segments={[{text: 'Il en faudra'}]}
				/>
			</div>
			<div
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					top: 740,
					textAlign: 'center',
					fontFamily: teletype,
					fontWeight: 700,
					fontSize: 440,
					lineHeight: 1,
					color: TELETYPE.amber,
					textShadow: `0 0 40px ${TELETYPE.glow}, 0 0 120px rgba(255,140,0,0.35)`,
					opacity: frame >= IMPACT ? 1 : 0,
					scale: String(interpolate(slam, [0, 1], [2.6, 1])),
				}}
			>
				70.
			</div>
			</AbsoluteFill>
			<AbsoluteFill style={{background: TELETYPE.hot, opacity: flash, mixBlendMode: 'screen'}} />
		</AbsoluteFill>
	);
};
