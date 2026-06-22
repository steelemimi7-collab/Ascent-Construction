/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#0c0b09',
        surface: '#161410',
        'surface-2': '#211f1a',
        accent: '#c8973a',
        'accent-light': '#e0b257',
        fore: '#f5f1e8',
        muted: '#c2b7a3',
        edge: '#2a2720',
      },
      fontFamily: {
        display: ['"Montserrat"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
};
