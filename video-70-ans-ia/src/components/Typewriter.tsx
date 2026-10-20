import React from 'react';
import {interpolateColors} from 'remotion';

export type Segment = {
	readonly text: string;
	readonly color?: string;
	readonly glow?: string;
};

// Texte tapé lettre par lettre. La mise en page est figée dès la frame 0
// (les lettres à venir sont invisibles) : aucun saut de ligne en cours de frappe.
// Chaque lettre frappée flashe "à chaud" puis refroidit, comme un impact.
export const Typewriter: React.FC<{
	readonly segments: Segment[];
	readonly frame: number;
	readonly start: number;
	readonly charsPerFrame: number;
	readonly color: string;
	readonly hotColor: string;
	readonly glow: string;
	readonly cursorColor?: string;
	readonly showCursor?: boolean;
	readonly style?: React.CSSProperties;
}> = ({segments, frame, start, charsPerFrame, color, hotColor, glow, cursorColor, showCursor = true, style}) => {
	const total = segments.reduce((acc, s) => acc + s.text.replace(/\n/g, '').length, 0);
	const typed = Math.max(0, Math.min(total, Math.floor((frame - start) * charsPerFrame)));
	const done = typed >= total;
	const blinkOn = !done || Math.floor(frame / 8) % 2 === 0;

	let index = 0;
	const nodes: React.ReactNode[] = [];
	segments.forEach((seg, si) => {
		const lines = seg.text.split('\n');
		lines.forEach((line, li) => {
			if (li > 0) {
				nodes.push(<br key={`br-${si}-${li}`} />);
			}
			for (const ch of line) {
				const i = index++;
				const visible = i < typed;
				const age = frame - (start + i / charsPerFrame);
				const heat = visible ? Math.max(0, Math.min(1, 1 - age / 3)) : 0;
				const base = seg.color ?? color;
				nodes.push(
					<span
						key={`c-${i}`}
						style={{
							visibility: visible ? 'visible' : 'hidden',
							color: heat > 0 ? interpolateColors(heat, [0, 1], [base, hotColor]) : base,
							textShadow: `0 0 ${14 + heat * 24}px ${seg.glow ?? glow}`,
						}}
					>
						{ch}
					</span>,
				);
				if (showCursor && i === typed - 1 && blinkOn) {
					nodes.push(<Cursor key="cursor" color={cursorColor ?? color} glow={glow} />);
				}
			}
		});
	});
	if (showCursor && typed === 0 && frame >= start - 6 && Math.floor(frame / 8) % 2 === 0) {
		nodes.unshift(<Cursor key="cursor0" color={cursorColor ?? color} glow={glow} />);
	}

	return <div style={{whiteSpace: 'pre', ...style}}>{nodes}</div>;
};

const Cursor: React.FC<{readonly color: string; readonly glow: string}> = ({color, glow}) => (
	<span style={{position: 'relative', display: 'inline-block', width: 0, height: '1em'}}>
		<span
			style={{
				position: 'absolute',
				left: '0.08em',
				top: '0.02em',
				width: '0.52em',
				height: '0.96em',
				background: color,
				boxShadow: `0 0 16px ${glow}`,
			}}
		/>
	</span>
);
