/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			backgroundImage: {
				'orange-square': "url('/images/Orange square.png')",
			},
		},
	},
	plugins: [],
}
