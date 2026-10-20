import React from 'react';

// Odomètre à 4 chiffres : chaque colonne roule verticalement, les retenues
// se propagent comme sur un compteur mécanique.
const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const columnValue = (value: number, power: number) => {
	const unit = 10 ** power;
	const lower = value % unit;
	const digit = Math.floor(value / unit) % 10;
	const carry = power === 0 ? lower : Math.max(0, lower - (unit - 1));
	return digit + (power === 0 ? value % 1 : carry);
};

export const Odometer: React.FC<{
	readonly value: number;
	readonly height: number;
	readonly speed: number;
	readonly digitStyle?: React.CSSProperties;
	readonly gap?: number;
	// Halo appliqué hors des colonnes masquées (sinon il serait coupé net).
	readonly glow?: string;
}> = ({value, height, speed, digitStyle, gap = 0, glow}) => {
	const powers = [3, 2, 1, 0];
	return (
		<div style={{display: 'flex', gap, filter: glow}}>
			{powers.map((power) => {
				const v = columnValue(value, power);
				const moving = Math.abs(v - Math.round(v)) > 0.002;
				const blur = moving ? Math.min(6, speed * 10 * 10 ** -power + 1.2) : 0;
				return (
					<div
						key={power}
						style={{
							position: 'relative',
							height,
							overflow: 'hidden',
						}}
					>
						{/* Fantôme invisible : fixe la largeur de la colonne. */}
						<div style={{...digitStyle, height, lineHeight: `${height}px`, visibility: 'hidden'}}>
							0
						</div>
						<div
							style={{
								position: 'absolute',
								left: 0,
								top: 0,
								translate: `0 ${-v * height}px`,
								filter: blur > 0.3 ? `blur(${blur.toFixed(2)}px)` : undefined,
							}}
						>
							{DIGITS.map((d, i) => (
								<div
									key={i}
									style={{
										...digitStyle,
										height,
										lineHeight: `${height}px`,
										textAlign: 'center',
									}}
								>
									{d}
								</div>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
};
