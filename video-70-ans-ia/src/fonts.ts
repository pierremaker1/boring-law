import {loadFont as loadCourierPrime} from '@remotion/google-fonts/CourierPrime';
import {loadFont as loadVT323} from '@remotion/google-fonts/VT323';
import {loadFont as loadPixelify} from '@remotion/google-fonts/PixelifySans';
import {loadFont as loadMontserrat} from '@remotion/google-fonts/Montserrat';
import {loadFont as loadInter} from '@remotion/google-fonts/Inter';
import {loadFont as loadJetBrains} from '@remotion/google-fonts/JetBrainsMono';

// Une police par époque : le design traverse les décennies.
export const teletype = loadCourierPrime('normal', {
	weights: ['400', '700'],
	subsets: ['latin'],
}).fontFamily;

export const phosphor = loadVT323('normal', {
	weights: ['400'],
	subsets: ['latin'],
}).fontFamily;

export const pixel = loadPixelify('normal', {
	weights: ['500', '700'],
	subsets: ['latin'],
}).fontFamily;

export const flat = loadMontserrat('normal', {
	weights: ['700', '800', '900'],
	subsets: ['latin'],
}).fontFamily;

export const modern = loadInter('normal', {
	weights: ['500', '700', '800', '900'],
	subsets: ['latin'],
}).fontFamily;

export const code = loadJetBrains('normal', {
	weights: ['400', '700'],
	subsets: ['latin'],
}).fontFamily;
