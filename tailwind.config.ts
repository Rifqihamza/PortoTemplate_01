import type { Config } from "tailwindcss"

export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bg: "#0f0f11",
                card: "#16161a",
                accent: "#8b5cf6",
                muted: "#a1a1aa",
            },
        },
    },
} satisfies Config
