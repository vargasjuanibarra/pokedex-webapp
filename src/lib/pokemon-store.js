import { get, writable } from 'svelte/store';


export let pokemonId = writable();
export let pokemon = writable();
export let bgColorDetail = writable();
export const getPokemonId = (id) => {
  pokemonId.update((data) => {
    return id + 1;
  })
}

// TEST DATA
  // export const bgColorDetail = writable(typeColors[pokemon?.types[0]]);

// const pokemon =  {
//     id: 1,
//     name: 'TEST_DATA',
//     stats: [
//         {
//           name: 'hp',
//           base_stat: 90
//         },
//         {
//           name: 'attack',
//           base_stat: 90
//         },
//         {
//           name: 'defense',
//           base_stat: 90
//         }
//     ],
//     types: [
//       'normal',
//       'fire'
//     ],
//     weight: 100,
//     height: 200,
//     abilities: [
//       'ability-1',
//       'ability-2'
//     ],
//     order: 1,
// };







