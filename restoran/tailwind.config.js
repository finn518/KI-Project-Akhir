/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				'mons-regular': ['Montserrat-Regular', 'sans-serif'],
				'mons-semiBold': ['Montserrat-SemiBold', 'sans-serif'],
				'mons-Bold': ['Montserrat-Bold','sans-serif']
			}
		},
	},
	plugins: [],
};
