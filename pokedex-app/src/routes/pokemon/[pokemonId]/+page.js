import { pokemonId } from '$lib/pokemon-store';

const typeColors = {
  normal: "bg-amber-300 text-amber-300 border-amber-300 amber",
  fire: "bg-orange-500 text-orange-500 border-orange-500 orange",
  water: "bg-blue-300 text-blue-300 border-blue-300 blue",
  electric: "bg-amber-300 text-amber-300 border-amber-300 amber",
  grass: "bg-lime-300 text-lime-300 border-lime-300 lime",
  ice: "bg-teal-200 text-teal-200 border-teal-200 teal",
  fighting: "bg-rose-600 text-rose-600 border-rose-600 rose",
  poison: "bg-fuchsia-600 text-fuchsia-600 border-fuchsia-600 fuchsia",
  ground: "bg-amber-300 text-amber-300 border-amber-300 amber",
  flying: "bg-purple-400 text-purple-400 border-purple-400",
  psychic: "bg-rose-500 text-rose-500 border-rose-500",
  bug: "bg-lime-400 text-lime-400 border-lime-400",
  rock: "bg-yellow-400 text-yellow-400 border-yellow-400",
  ghost: "bg-violet-400 text-violet-400 border-violet-400",
  dragon: "bg-purple-600 text-purple-600 border-purple-600",
  dark: "bg-orange-800 text-orange-800 border-orange-800",
  steel: "bg-violet-200 text-violet-200 border-violet-200",
  fairy: "bg-rose-300 text-rose-300 border-rose-300"
}

export async function load({ fetch, params }) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`);
    console.log('data', params.pokemonId);
    const data = await response.json();

    pokemonId.set(params.pokemonId)
  
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

      const colorTheme = typeColors[types[0]];
      const pokemon =  {
          id,
          name,
          stats,
          types,
          weight,
          height,
          abilities,
          order,
          colorTheme,
      };
      return pokemon
    }
          
    return {
    status: response.status,
    error: new Error("Failed to fetch pokemons"),
    };
  }
