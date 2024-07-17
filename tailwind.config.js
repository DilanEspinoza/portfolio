/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primer-color": "#dfe6e9;",
				"link-primary-color": "#232526",
				"segundo-color-1": "#414345",
				"segundo-color-2": "#232526",
			},
		},
	},
	plugins: [],
};
