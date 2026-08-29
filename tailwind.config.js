/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './context/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // Small phones (iPhone SE is 375px) get their own step so two-up
      // layouts and stat grids can breathe before `sm`.
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--brand)',
          deep: 'var(--brand-deep)',
          light: 'var(--brand-light)',
        },
        gold: {
          DEFAULT: 'var(--gold)',
          light: 'var(--gold-light)',
        },
        purple: {
          DEFAULT: 'var(--purple)',
          deep: 'var(--purple-deep)',
        },
        ink: {
          DEFAULT: 'var(--ink)',
          soft: 'var(--ink-soft)',
        },
        surface: {
          DEFAULT: 'var(--surface)',
          2: 'var(--surface-2)',
        },
        border: 'var(--border)',
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        numeric: ['var(--font-montserrat)', 'sans-serif'],
        urdu: ['var(--font-urdu)', 'serif'],
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        elevated: 'var(--shadow-elevated)',
        glow: 'var(--shadow-glow)',
      },
      borderRadius: {
        card: '24px',
        panel: '28px',
        hero: '32px',
      },
      spacing: {
        header: 'var(--header-h)',
        13: '3.25rem',
        15: '3.75rem',
      },
      maxWidth: {
        site: '1280px',
      },
      scale: {
        108: '1.08',
      },
      keyframes: {
        'slide-down': {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-down': 'slide-down 0.2s ease-out both',
      },
    },
  },
  plugins: [],
};
