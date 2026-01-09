import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',  // Czysto białe tło jak RS Serwis
        surface: '#FAFAFA',     // Bardzo jasny szary dla kart
        'text-primary': '#1E1E1E',
        'text-secondary': '#6B6B6B',
        accent: '#E31E24',      // Czerwony jak RS Serwis
        'accent-secondary': '#FF6B35',  // Ciepły pomarańczowy
        border: 'rgba(0, 0, 0, 0.08)',
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#DC2626',
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', fontWeight: '700' }],
        'heading-xl': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-lg': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-md': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-sm': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      maxWidth: {
        'container': '1280px',
      },
      spacing: {
        'container-mobile': '1rem',    // 16px na mobile
        'container-desktop': '2rem',   // 32px na desktop
      },
      screens: {
        'xs': '475px',  // Extra small devices
      },
    },
  },
  plugins: [],
};

export default config;
