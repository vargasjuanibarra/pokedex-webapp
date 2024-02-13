<script lang="ts">
  import { onMount } from "svelte";
  import Card from "./Card.svelte";
  import axios from "axios";
  import { pokemonID } from "../Store";
  import Header from "./Header.svelte";

  let pokemons: any = [];
  const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon";

  onMount(() => {
    axios.get(`${POKEMON_URL}?limit=30`).then((response) => {
      pokemons = response.data.results;
    });
  });

  function getPokemonId(index: any) {
    pokemonID.set(index + 1);
  }
</script>
<Header />
<main class="relative mx-2 bg-slate-50 rounded-2xl min-h-screen">
  <section class="flex flex-wrap justify-center gap-5 p-2 text-center">
    {#each pokemons as pokemon, index}
      <a
        href="/pokemon/pokemonId={index + 1}"
        on:click={() => getPokemonId(index)}
      >
        <Card pokemon {index} name={pokemon.name} />
      </a>
    {/each}
  </section>
</main>
