/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#09090b", // zinc-950
                foreground: "#fafafa", // zinc-50
                primary: {
                    DEFAULT: "#8b5cf6", // violet-500
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#27272a", // zinc-800
                    foreground: "#fafafa",
                },
                muted: {
                    DEFAULT: "#18181b", // zinc-900
                    foreground: "#a1a1aa", // zinc-400
                },
                accent: {
                    DEFAULT: "#27272a", // zinc-800
                    foreground: "#fafafa",
                },
                input: "#27272a", // zinc-800
                ring: "#8b5cf6", // violet-500
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [],
}
