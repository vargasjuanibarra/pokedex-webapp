<script lang="js">
  import "../app.css";
    import Card from "$lib/Card.svelte";
    import Header from "$lib/Header.svelte";
    import { getPokemonId, pokemonId } from "$lib/pokemon-store.js";
  import { get } from "svelte/store";
  
    export let data;
    let { pokemons } = data.props;
    let id = get(pokemonId);

    function nameToUppercase(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
    
    pokemonId.subscribe((data) => {
      id = data;
      console.log('pokemonId', id);
    })
  

  </script>

<div class="relative flex flex-col justify-center mx-auto w-full text-sm sm:text-base bg-red-600 ">
  <Header />
  <main class="relative mx-2 bg-slate-50 rounded-2xl min-h-screen">
    <section class="flex flex-wrap justify-center gap-5 p-2 text-center">
      {#each pokemons as pokemon, index}
        <a
          href="/pokemon/pokemonId={index + 1}"
          on:click={() => getPokemonId(index)}
        >
          <Card pokemon {index} name={nameToUppercase(pokemon.name)} />
        </a>
      {/each}
    </section>
  </main>
</div>
  