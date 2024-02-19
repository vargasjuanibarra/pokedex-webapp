import { pokemonId } from "$lib/pokemon-store";
import { onMount } from "svelte";
import { get } from "svelte/store";

export async function load({ fetch }) {
    const id = get(pokemonId)
    console.log('id', id);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
  
    if (response.ok) {
      const id = data.id;
      const name = data.name;
      const weight = data.weight;
      const height = data.height;
      const stats = data.stats.map((stat) => {
          return {
          name: stat.stat.name,
          base_stat: stat.base_stat,
          };
      });
      const types = data.types.map((pokeType) => {
          return pokeType.type.name;
      });
  
      const abilities = data.abilities.map((data) => {
          return data.ability.name;
      });
      const order = data.order;
      
      const pokemon =  {
          id,
          name,
          stats,
          types,
          weight,
          height,
          abilities,
          order,
      };
  
      return pokemon
    }
          
    return {
    status: response.status,
    error: new Error("Failed to fetch pokemons"),
    };
  }