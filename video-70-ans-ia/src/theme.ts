// Palettes par époque. Contrastes vérifiés : texte principal >= 7:1 sur fond.
export const TELETYPE = {
	bg: '#0F0A05',
	bgGlow: '#2A1A06',
	amber: '#FFB000',
	hot: '#FFD98A',
	dim: '#9A6A12',
	paper: '#F2D8A0',
	glow: 'rgba(255, 176, 0, 0.45)',
};

export const CRT = {
	bg: '#020C04',
	green: '#39FF6A',
	greenDim: '#1A7A34',
	ice: '#CFF6FF',
	iceDeep: '#5FC8E8',
	glow: 'rgba(57, 255, 106, 0.55)',
	iceGlow: 'rgba(160, 235, 255, 0.6)',
};

export const PIXEL = {
	desktop: '#1F4E79',
	desktopDither: '#183F63',
	gray: '#C3C3C3',
	light: '#FFFFFF',
	shadow: '#7B7B7B',
	dark: '#0A0A0A',
	titleBar: '#0B1F7A',
	titleBarEnd: '#2F64C8',
	led: '#FF2A1A',
	ledOff: '#3A0905',
	boardLight: '#E8D7A8',
	boardDark: '#8C6239',
};

export const FLAT = {
	blue: '#1D4ED8',
	teal: '#0F766E',
	violet: '#6D28D9',
	yellow: '#FACC15',
	coral: '#FB7185',
	mint: '#34D399',
	white: '#FFFFFF',
	ink: '#111827',
	goWood: '#F2B84B',
	goLine: '#5B3A12',
};

export const GLASS = {
	bg: '#07061A',
	violet: '#8B5CF6',
	pink: '#EC4899',
	cyan: '#22D3EE',
	amber: '#F59E0B',
	white: '#FFFFFF',
	soft: '#E9E4FF',
};

// Zones de sécurité TikTok / Reels.
export const SAFE = {
	side: 90,
	top: 150,
	bottom: 320,
	width: 1080,
	height: 1920,
};

// Le compteur occupe la bande juste sous la zone de sécurité du haut.
export const COUNTER_TOP = 172;
export const CONTENT_TOP = 380;
export const CONTENT_BOTTOM = SAFE.height - SAFE.bottom;
