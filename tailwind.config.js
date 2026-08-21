/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        ink: '#0E0E0E',
        paper: '#F6F5F2',
        muted: '#6B6862',
        line: '#DAD7D0',
        accent: '#B4552D',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        label: '0.18em',
      },
      maxWidth: {
        shell: '1240px',
      },
    },
  },
}
