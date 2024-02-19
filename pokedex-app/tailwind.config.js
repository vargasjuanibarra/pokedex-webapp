/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      // colors: {
      //   transparent: 'transparent',
      //   'normal-color': 'var(--color-normal)',
      //   'fire-color': 'var(--color-fire)',
      //   'water-color': 'var(--color-water)',
      //   'electric-color': 'var(--color-electric)',
      //   'grass-color': 'var(--color-grass)',
      //   'ice-color': 'var(--color-ice)',
      //   'poison-color': 'var(--color-poison)',
      //   'ground-color': 'var(--color-ground)',
      //   'flying-color': 'var(--color-flying)',
      //   'psychic-color': 'var(--color-psychic)',
      //   'bug-color': 'var(--color-bug)',
      //   'rock-color': 'var(--color-rock)',
      //   'ghost-color': 'var(--color-ghost)',
      //   'dragon-color': 'var(--color-dragon)',
      //   'dark-color': 'var(--color-dark)',
      //   'steel-color': 'var(--color-steel)',
      // },
    },
  },
  plugins: [require("daisyui")],
};