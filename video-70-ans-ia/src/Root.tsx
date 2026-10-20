import React from 'react';
import {Composition} from 'remotion';
import {SeventyYearsAI} from './SeventyYearsAI';

export const RemotionRoot: React.FC = () => (
	<Composition
		id="SeventyYearsAI"
		component={SeventyYearsAI}
		durationInFrames={1200}
		fps={30}
		width={1080}
		height={1920}
		defaultProps={{showSafeZones: false}}
	/>
);
