import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Sparkle} from '../components/Icons';
import {clamp, glassExit, NNBSP, SCENE_TAIL_GLASS} from '../components/SceneKit';
import {code, modern} from '../fonts';
import {SOURCE_CODE} from '../generated/sourceCode';
import {GLASS} from '../theme';

const LINES = SOURCE_CODE.split('\n');
const LINE_H = 42;
const VISIBLE = 50;

const KEYWORDS = new Set([
	'import',
	'from',
	'export',
	'const',
	'let',
	'return',
	'if',
	'else',
	'for',
	'new',
	'type',
	'readonly',
	'as',
	'switch',
	'case',
	'true',
	'false',
	'null',
]);

// Coloration syntaxique minimaliste (suffisante pour un fond flouté).
const TOKEN = /(\/\/.*$)|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`)|(\b\d+(?:\.\d+)?\b)|(<\/?[A-Z][\w.]*|\/>)|([A-Za-z_]\w*)/g;

const highlight = (line: string): React.ReactNode[] => {
	const out: React.ReactNode[] = [];
	let last = 0;
	let m: RegExpExecArray | null;
	TOKEN.lastIndex = 0;
	let k = 0;
	while ((m = TOKEN.exec(line)) !== null) {
		if (m.index > last) {
			out.push(line.slice(last, m.index));
		}
		const [text, comment, str, num, tag, word] = m;
		let color: string | undefined;
		if (comment) color = '#7C7F9E';
		else if (str) color = '#86EFAC';
		else if (num) color = '#FBBF24';
		else if (tag) color = '#67E8F9';
		else if (word && KEYWORDS.has(word)) color = '#C4B5FD';
		else if (word && /^[A-Z]/.test(word)) color = '#F9A8D4';
		out.push(
			<span key={k++} style={{color}}>
				{text}
			</span>,
		);
		last = m.index + text.length;
	}
	if (last < line.length) {
		out.push(line.slice(last));
	}
	return out;
};

// 1035-1140 : "Et cette vidéo ?" puis "C'est une IA qui l'a codée."
// En fond : le vrai code de cette composition, flouté, qui défile.
export const ThisVideo: React.FC<{readonly dur: number}> = ({dur}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	// Défilement qui accélère.
	const scroll = (frame * 3.2 + frame * frame * 0.11) * 1.0;
	const first = Math.floor(scroll / LINE_H);
	const codeIn = interpolate(frame, [2, 10], [0, 1], clamp);
	const q = spring({frame: frame - 4, fps, config: {damping: 16, stiffness: 170}});
	const a = spring({frame: frame - 42, fps, config: {damping: 14, stiffness: 150}});
	const caretOn = Math.floor(frame / 8) % 2 === 0;
	return (
		<AbsoluteFill style={glassExit(frame, dur, SCENE_TAIL_GLASS)}>
			<AbsoluteFill style={{opacity: codeIn * 0.62, filter: 'blur(3px)', overflow: 'hidden'}}>
				<div
					style={{
						position: 'absolute',
						left: 40,
						top: -(scroll % LINE_H) - LINE_H,
						fontFamily: code,
						fontSize: 28,
						lineHeight: `${LINE_H}px`,
						color: '#D6D3F0',
						whiteSpace: 'pre',
					}}
				>
					{new Array(VISIBLE).fill(0).map((_, i) => {
						const idx = (first + i) % LINES.length;
						return (
							<div key={first + i} style={{height: LINE_H}}>
								<span style={{color: '#4B4A6B', display: 'inline-block', width: 80, textAlign: 'right', marginRight: 28}}>{idx + 1}</span>
								{highlight(LINES[idx])}
							</div>
						);
					})}
				</div>
			</AbsoluteFill>
			{/* Voile sombre au centre : le texte reste parfaitement lisible. */}
			<AbsoluteFill
				style={{
					background: 'radial-gradient(ellipse 80% 36% at 50% 47%, rgba(7,6,26,0.92) 0%, rgba(7,6,26,0.72) 55%, rgba(7,6,26,0.25) 100%)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: 90,
					right: 90,
					top: 660,
					textAlign: 'center',
					fontFamily: modern,
					fontWeight: 800,
					fontSize: 104,
					letterSpacing: '-0.03em',
					color: GLASS.white,
					opacity: q,
					translate: `0 ${interpolate(q, [0, 1], [40, 0])}px`,
				}}
			>
				Et cette vidéo{NNBSP}?
			</div>
			<div
				style={{
					position: 'absolute',
					left: 90,
					right: 90,
					top: 846,
					textAlign: 'center',
					fontFamily: modern,
					fontWeight: 900,
					fontSize: 112,
					lineHeight: 1.06,
					letterSpacing: '-0.035em',
					opacity: Math.min(1, a * 1.4),
					scale: String(interpolate(a, [0, 1], [1.25, 1])),
					filter: a < 0.98 ? `blur(${(1 - Math.min(1, a)) * 16}px)` : undefined,
				}}
			>
				<span
					style={{
						backgroundImage: `linear-gradient(90deg, ${GLASS.cyan}, ${GLASS.violet} 50%, ${GLASS.pink})`,
						WebkitBackgroundClip: 'text',
						backgroundClip: 'text',
						color: 'transparent',
					}}
				>
					C’est une IA
				</span>
				<span style={{display: 'inline-block', width: 0, position: 'relative'}}>
					<span style={{position: 'absolute', left: 14, top: -64, rotate: `${frame * 2}deg`}}>
						<Sparkle size={64} fill={GLASS.amber} />
					</span>
				</span>
				<br />
				<span style={{color: GLASS.white}}>qui l’a codée.</span>
				<span style={{display: 'inline-block', width: 0, position: 'relative'}}>
					<span
						style={{
							position: 'absolute',
							left: 10,
							top: -88,
							width: 10,
							height: 100,
							borderRadius: 5,
							background: GLASS.cyan,
							opacity: caretOn ? 1 : 0,
							boxShadow: `0 0 16px ${GLASS.cyan}`,
						}}
					/>
				</span>
			</div>
		</AbsoluteFill>
	);
};
