/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				// 'Consolas' es la fuente que le da ese look de terminal
				mono: ['Consolas', 'Monaco', 'ui-monospace', 'monospace'],
			},
		},
	},
	plugins: [],
};