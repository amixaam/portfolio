/** @type {import('tailwindcss').Config} */
export default {
    content: ["./resources/**/*.blade.php", "./resources/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                bg: {
                    light: "#EEFAFF",
                    "light-50": "rgba(238, 250, 255, 0.5)",
                    dark: "#090B15",
                    "dark-50": "rgba(9, 11, 21, 0.5)",
                },
                secondary: {
                    light: "#C9CFEC",
                    dark: "#1A2637",
                },
                text: {
                    light: "#16272E",
                    dark: "#EEFAFF",
                },
                link: {
                    light: "#6E84EE",
                    dark: "#5479AD",
                },
            },
            spacing: {
                "default-app": "64px",
                "small-app": "32px",
            },
            aspectRatio: {
                portrait: "0.9",
            },
            borderRadius: {
                50: "50px",
                icon: "10px",
            },
            transitionTimingFunction: {
                snappy: "cubic-bezier(0.16, 1, 0.3, 1)",
            },
        },
    },
    plugins: [],
};
