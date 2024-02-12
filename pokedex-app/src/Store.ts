import { writable } from 'svelte/store';

export const pokemonID = writable();
export const storePokemon = writable([
    {src: `https://pokeapi.co/api/v2/pokemon/${pokemonID}`}
]);