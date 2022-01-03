module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "ui-sans-serif"],
			},
      screens: {
        "3xl": { max: "1601px" },
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
      },
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
