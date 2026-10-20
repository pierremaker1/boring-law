import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {clamp, EASE, paperFeedExit} from '../components/SceneKit';
import {Typewriter} from '../components/Typewriter';
import {teletype} from '../fonts';
import {TELETYPE} from '../theme';

// 0-90 : le texte d'accroche, frappé au télétype.
export const Intro: React.FC<{readonly dur: number}> = ({dur}) => {
	const frame = useCurrentFrame();
	const hot = {color: TELETYPE.hot, glow: 'rgba(255, 217, 138, 0.6)'};
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				paddingLeft: 90,
				paddingRight: 90,
				...paperFeedExit(frame, dur),
			}}
		>
			<div
				style={{
					fontFamily: teletype,
					fontWeight: 700,
					fontSize: 76,
					lineHeight: 1.32,
					marginTop: 60,
					scale: String(interpolate(frame, [0, 60], [1, 1.02], {...clamp, easing: EASE.inOut})),
					transformOrigin: 'left center',
				}}
			>
				<Typewriter
					frame={frame}
					start={1}
					charsPerFrame={1.8}
					color={TELETYPE.amber}
					hotColor="#FFF6E0"
					glow={TELETYPE.glow}
					segments={[
						{text: 'En '},
						{text: '1956', ...hot},
						{text: ',\n'},
						{text: '10 chercheurs', ...hot},
						{text: '\nse donnent un été\npour inventer '},
						{text: "l'IA", ...hot},
						{text: '.'},
					]}
				/>
			</div>
		</AbsoluteFill>
	);
};
