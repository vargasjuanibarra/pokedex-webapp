<script lang="ts">
  import { onMount } from "svelte";
    import Card from "./Card.svelte";
    import axios from "axios";

    let pokemons: any = [];

    onMount( () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=30").then((response) => {
            pokemons = response.data.results;
        });

    })



</script>

<main class="relative mx-2 bg-slate-50 rounded-2xl min-h-screen">
    <section class="flex flex-wrap mx-auto">
        {#each pokemons as pokemon, index }
        <Card pokemon index={index} name={pokemon.name}/>
        {/each}

    </section>
</main>