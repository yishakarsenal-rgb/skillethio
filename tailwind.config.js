/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ethio: {
          // Brand & semantic palette
          green: '#10B981',      // emerald-500
          'green-deep': '#047857',
          gold: '#F59E0B',       // amber-500
          'gold-deep': '#B45309',
          // Surfaces
          dark: '#080E1A',       // base deep slate
          'dark-2': '#0F172A',
          'dark-3': '#1E293B',
          light: '#F8FAFC',
          'light-2': '#E2E8F0',
        },
      },
      fontFamily: {
        ethiopic: ['"Noto Sans Ethiopic"', '"Abyssinica SIL"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Isometric 3D chunky shadows
        'iso-green': '6px 6px 0px 0px rgba(16,185,129,0.45)',
        'iso-green-lg': '10px 10px 0px 0px rgba(16,185,129,0.45)',
        'iso-gold': '6px 6px 0px 0px rgba(245,158,11,0.45)',
        'iso-gold-lg': '10px 10px 0px 0px rgba(245,158,11,0.45)',
        'iso-light': '6px 6px 0px 0px rgba(16,185,129,0.25)',
        'iso-light-lg': '10px 10px 0px 0px rgba(16,185,129,0.25)',
        'iso-amber-light': '6px 6px 0px 0px rgba(245,158,11,0.35)',
        'glow-green': '0 0 30px rgba(16,185,129,0.45)',
        'glow-gold': '0 0 30px rgba(245,158,11,0.45)',
      },
      animation: {
        'float-slow': 'float 9s ease-in-out infinite',
        'float-med': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.6s ease-in-out infinite',
        'tilt-in': 'tiltIn 600ms cubic-bezier(.21,1.02,.73,1) both',
        'spin-slow': 'spin 24s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0,0,0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0,-22px,0) rotate(2deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translate3d(0,0,0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0,18px,0) rotate(-2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 18px rgba(16,185,129,0.35), 0 0 0 rgba(16,185,129,0)' },
          '50%':      { boxShadow: '0 0 38px rgba(16,185,129,0.75), 0 0 0 6px rgba(16,185,129,0.05)' },
        },
        tiltIn: {
          '0%':   { opacity: 0, transform: 'translateY(24px) rotateX(-8deg)' },
          '100%': { opacity: 1, transform: 'translateY(0)    rotateX(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-400px 0' },
          '100%': { backgroundPosition: '400px 0' },
        },
      },
    },
  },
  plugins: [],
};