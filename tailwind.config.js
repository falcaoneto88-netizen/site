/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Poppins', 'sans-serif'],
                prata: ['Prata', 'serif'],
            },
            fontSize: {
                'xs': ['0.65rem', { lineHeight: '0.9rem' }],
                'sm': ['0.8rem', { lineHeight: '1.2rem' }],
                'base': ['0.9rem', { lineHeight: '1.4rem' }],
                'lg': ['1rem', { lineHeight: '1.6rem' }],
                'xl': ['1.1rem', { lineHeight: '1.6rem' }],
                '2xl': ['1.25rem', { lineHeight: '1.8rem' }],
                '3xl': ['1.5rem', { lineHeight: '2rem' }],
                '4xl': ['1.85rem', { lineHeight: '2.25rem' }],
                '5xl': ['2.25rem', { lineHeight: '1.1' }],
                '6xl': ['2.75rem', { lineHeight: '1' }],
                '7xl': ['3.5rem', { lineHeight: '1' }],
            },
            borderRadius: {
                '3xl': '1rem',
                '4xl': '1.5rem',
            },
            container: {
                center: true,
                padding: '2rem',
                screens: {
                    '2xl': '1100px',
                },
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
}
