import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {modern} from '../fonts';
import {GLASS} from '../theme';

// 1140-1200 : écran de fin. Le @ n'apparaît que si HANDLE est renseigné.
export const End: React.FC<{readonly handle: string}> = ({handle}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const big = spring({frame: frame - 3, fps, config: {damping: 15, stiffness: 170}});
	const sub = spring({frame: frame - 6, fps, config: {damping: 18, stiffness: 170}});
	const tag = spring({frame: frame - 8, fps, config: {damping: 18, stiffness: 170}});
	const cleanHandle = handle.trim().replace(/^@+/, '');
	const sweep = interpolate(frame, [10, 40], [-0.4, 1.4]);
	return (
		<AbsoluteFill>
			<div
				style={{
					position: 'absolute',
					left: 60,
					right: 60,
					top: 560,
					textAlign: 'center',
					fontFamily: modern,
					fontWeight: 900,
					fontSize: 236,
					lineHeight: 1,
					letterSpacing: '-0.05em',
					backgroundImage: `linear-gradient(100deg, #FFFFFF 0%, #FFFFFF ${sweep * 100 - 12}%, #FFE1F3 ${sweep * 100}%, #FFFFFF ${sweep * 100 + 12}%, ${GLASS.soft} 100%)`,
					WebkitBackgroundClip: 'text',
					backgroundClip: 'text',
					color: 'transparent',
					filter: `drop-shadow(0 10px 40px rgba(139,92,246,0.55)) blur(${interpolate(big, [0, 1], [14, 0])}px)`,
					scale: String(interpolate(big, [0, 1], [0.86, 1])),
					opacity: Math.min(1, big * 1.5),
				}}
			>
				70 ans.
			</div>
			<div
				style={{
					position: 'absolute',
					left: 90,
					right: 90,
					top: 850,
					height: 8,
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<div
					style={{
						width: interpolate(sub, [0, 1], [0, 320]),
						height: 8,
						borderRadius: 4,
						background: `linear-gradient(90deg, ${GLASS.cyan}, ${GLASS.violet}, ${GLASS.pink})`,
					}}
				/>
			</div>
			<div
				style={{
					position: 'absolute',
					left: 90,
					right: 90,
					top: 910,
					textAlign: 'center',
					fontFamily: modern,
					fontWeight: 800,
					fontSize: 86,
					lineHeight: 1.12,
					letterSpacing: '-0.03em',
					color: GLASS.white,
					opacity: Math.min(1, sub * 1.4),
					translate: `0 ${interpolate(sub, [0, 1], [40, 0])}px`,
				}}
			>
				Et ça ne fait
				<br />
				que commencer.
			</div>
			{cleanHandle ? (
				<div
					style={{
						position: 'absolute',
						left: 90,
						right: 90,
						top: 1230,
						display: 'flex',
						justifyContent: 'center',
						opacity: Math.min(1, tag * 1.4),
						translate: `0 ${interpolate(tag, [0, 1], [30, 0])}px`,
					}}
				>
					<div
						style={{
							padding: '18px 44px',
							borderRadius: 999,
							background: 'rgba(255,255,255,0.14)',
							border: '2px solid rgba(255,255,255,0.35)',
							backdropFilter: 'blur(20px)',
							fontFamily: modern,
							fontWeight: 700,
							fontSize: 60,
							color: GLASS.white,
							whiteSpace: 'nowrap',
						}}
					>
						@{cleanHandle}
					</div>
				</div>
			) : null}
		</AbsoluteFill>
	);
};
