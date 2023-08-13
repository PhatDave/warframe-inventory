const defaultTheme = require('tailwindcss/defaultTheme');
const heropatterns = require('tailwindcss-hero-patterns/src/patterns');

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',

	theme: {
		extend: {
			fontFamily: {
				sans: ['roboto', ...defaultTheme.fontFamily.sans]
			}
		},
		heroPatternsOpacities: ['10'],
		heroPatterns: {
			topography: heropatterns.topography
		},
		colors: {
			accentText: '#000000',
			accent1: 'rgba(55,255,0,0.38)',
			accent2: 'rgba(0,141,255,0.87)',
		}
	},

	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['[data-theme=lofi]'],
					primary: '#45B1E8',
					secondary: '#fbbf24',
				},
				dark: {
					...require('daisyui/src/theming/themes')['[data-theme=black]'],
					primary: '#45B1E8',
					secondary: '#fbbf24',
				}
			}
		]
	},
	plugins: [require('daisyui'), require('tailwindcss-hero-patterns')]
};

module.exports = config;
