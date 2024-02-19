export async function load({ fetch }) {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
    const pokemons = await response.json();
    console.log(pokemons);

    if (response.ok) {
      return {
        props: {
          pokemons: pokemons.results,
        },
      };
    }
  } catch (error) {
    return {
      status: 500,
      error: new Error("Failed to fetch pokemons"),
    };
  };
};