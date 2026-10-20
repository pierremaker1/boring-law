import React from 'react';
import {AbsoluteFill} from 'remotion';
import {CrtEra, FlatEra, GlassEra, PixelEra, TeletypeEra} from './components/Eras';
import {FLAT_WIPE_TAIL, SCENE_TAIL_GLASS, SCENE_TAIL_TELETYPE} from './components/SceneKit';
import {At} from './components/Timing';
import {EraIn, EraOut} from './components/Transitions';
import {AlexNet} from './scenes/AlexNet';
import {AlphaGo} from './scenes/AlphaGo';
import {Attention} from './scenes/Attention';
import {ChatGpt} from './scenes/ChatGpt';
import {Dartmouth} from './scenes/Dartmouth';
import {DeepBlue} from './scenes/DeepBlue';
import {Eliza} from './scenes/Eliza';
import {End} from './scenes/End';
import {Intro} from './scenes/Intro';
import {Seventy} from './scenes/Seventy';
import {ThisVideo} from './scenes/ThisVideo';
import {Winter} from './scenes/Winter';
import {CRT, GLASS, PIXEL, SAFE} from './theme';
import {ERAS, SCENES} from './timeline';

// ===========================================================================
// Pseudo du compte, affiché sur l'écran de fin. Laisser vide = aucun @ affiché.
// Exemple : export const HANDLE = "mon_compte";
export const HANDLE = "";
// ===========================================================================

const len = (s: {from: number; to: number}) => s.to - s.from;

const SafeZones: React.FC = () => (
	<AbsoluteFill style={{pointerEvents: 'none'}}>
		<div style={{position: 'absolute', left: 0, right: 0, top: 0, height: SAFE.top, background: 'rgba(255,0,0,0.35)'}} />
		<div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: SAFE.bottom, background: 'rgba(255,0,0,0.35)'}} />
		<div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: SAFE.side, background: 'rgba(255,0,0,0.25)'}} />
		<div style={{position: 'absolute', right: 0, top: 0, bottom: 0, width: SAFE.side, background: 'rgba(255,0,0,0.25)'}} />
	</AbsoluteFill>
);

export type SeventyYearsAIProps = {
	readonly showSafeZones: boolean;
};

// Chaque époque est une séquence qui contient son fond, son compteur d'années
// et ses scènes. Elle déborde de quelques frames sur l'époque suivante, qui la
// recouvre avec sa transition (scanline, pixels, glitch, morphing).
export const SeventyYearsAI: React.FC<SeventyYearsAIProps> = ({showSafeZones}) => (
	<AbsoluteFill style={{background: '#000'}}>
		<At name="1956-1966 · Télétype" from={ERAS.teletype.from} durationInFrames={len(ERAS.teletype) + ERAS.crt.intro}>
			<EraOut kind="scan" start={len(ERAS.teletype)} duration={ERAS.crt.intro}>
				<TeletypeEra>
					<At name="Intro" from={SCENES.intro.from} durationInFrames={len(SCENES.intro) + SCENE_TAIL_TELETYPE}>
						<Intro dur={len(SCENES.intro)} />
					</At>
					<At name="Il en faudra 70" from={SCENES.seventy.from} durationInFrames={len(SCENES.seventy) + SCENE_TAIL_TELETYPE}>
						<Seventy dur={len(SCENES.seventy)} />
					</At>
					<At name="1956 · Dartmouth" from={SCENES.dartmouth.from} durationInFrames={len(SCENES.dartmouth) + SCENE_TAIL_TELETYPE}>
						<Dartmouth dur={len(SCENES.dartmouth)} />
					</At>
					<At name="1966 · ELIZA" from={SCENES.eliza.from} durationInFrames={len(SCENES.eliza) + ERAS.crt.intro}>
						<Eliza />
					</At>
				</TeletypeEra>
			</EraOut>
		</At>

		<At name="1974-1993 · CRT" from={ERAS.crt.from} durationInFrames={len(ERAS.crt) + ERAS.pixel.intro}>
			<EraIn kind="scan" duration={ERAS.crt.intro} accent={CRT.green}>
				<EraOut kind="pixel" start={len(ERAS.crt)} duration={ERAS.pixel.intro}>
					<CrtEra>
						<Winter />
					</CrtEra>
				</EraOut>
			</EraIn>
		</At>

		<At name="1997 · Pixels" from={ERAS.pixel.from} durationInFrames={len(ERAS.pixel) + ERAS.flat.intro}>
			<EraIn kind="pixel" duration={ERAS.pixel.intro} accent={PIXEL.titleBarEnd}>
				<EraOut kind="glitch" start={len(ERAS.pixel)} duration={ERAS.flat.intro}>
					<PixelEra>
						<DeepBlue />
					</PixelEra>
				</EraOut>
			</EraIn>
		</At>

		<At name="2012-2017 · Flat" from={ERAS.flat.from} durationInFrames={len(ERAS.flat) + ERAS.glass.intro}>
			<EraIn kind="glitch" duration={ERAS.flat.intro} accent="#FFFFFF">
				<EraOut kind="morph" start={len(ERAS.flat)} duration={ERAS.glass.intro}>
					<FlatEra>
						<At name="2012 · AlexNet" from={SCENES.alexNet.from - ERAS.flat.from} durationInFrames={len(SCENES.alexNet) + FLAT_WIPE_TAIL}>
							<AlexNet />
						</At>
						<At name="2016 · AlphaGo" from={SCENES.alphaGo.from - ERAS.flat.from} durationInFrames={len(SCENES.alphaGo) + FLAT_WIPE_TAIL}>
							<AlphaGo />
						</At>
						<At name="2017 · Attention" from={SCENES.attention.from - ERAS.flat.from} durationInFrames={len(SCENES.attention) + ERAS.glass.intro}>
							<Attention />
						</At>
					</FlatEra>
				</EraOut>
			</EraIn>
		</At>

		<At name="2022-2026 · Verre" from={ERAS.glass.from} durationInFrames={len(ERAS.glass)}>
			<EraIn kind="morph" duration={ERAS.glass.intro} accent={GLASS.violet}>
				<GlassEra>
					<At name="2022 · ChatGPT" from={SCENES.chatGpt.from - ERAS.glass.from} durationInFrames={len(SCENES.chatGpt) + SCENE_TAIL_GLASS}>
						<ChatGpt dur={len(SCENES.chatGpt)} />
					</At>
					<At name="Et cette vidéo" from={SCENES.thisVideo.from - ERAS.glass.from} durationInFrames={len(SCENES.thisVideo) + SCENE_TAIL_GLASS}>
						<ThisVideo dur={len(SCENES.thisVideo)} />
					</At>
					<At name="Fin" from={SCENES.end.from - ERAS.glass.from} durationInFrames={len(SCENES.end)}>
						<End handle={HANDLE} />
					</At>
				</GlassEra>
			</EraIn>
		</At>

		{showSafeZones ? <SafeZones /> : null}
	</AbsoluteFill>
);
