/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* cor de fundo global */
        background: 'var(--color-bg)',
        /* textos */
        textsecondary: 'var(--color-text-secondary)',
        textprimary: 'var(--color-text-primary)',
        /* botões, links, destaques */
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
    },
  },
  plugins: [],
};
