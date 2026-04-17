/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#111828',
          dark: '#0b0d19',
          light: '#1f2b45',
        },
        purple: {
          DEFAULT: '#4a47a3',
          light: '#9490cc',
        },
        gold: {
          DEFAULT: '#c4a44d',
          light: '#e0bf6a',
        },
        off: '#f5f4f0',
        slate: '#f0f1f8',
        text: {
          DEFAULT: '#111827',
          mid: '#374151',
          soft: '#6b7280',
          muted: '#9ca3af',
        },
        border: {
          DEFAULT: '#e5e7eb',
          navy: 'rgba(255,255,255,0.12)',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        lora: ['Lora', 'serif'],
      }
    },
  },
  plugins: [],
}
