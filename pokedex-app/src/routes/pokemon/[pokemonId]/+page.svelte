<script lang="ts">
  import { beforeUpdate, onMount } from "svelte";
  import axios from "axios";
  import { pokemonID } from "../../../Store";

  enum BaseStat {
    HP = "hp",
    ATK = "attack",
    DEF = "defense",
    SATK = "special-attack",
    SDEF = "special-defense",
    SPD = "speed",
  }

  const typeColors = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    // dark: "#EE99AC",
  };

  let id: any;
  let pokemon: any;
  let bgColor: any;

  onMount(async () => {
    pokemonID.subscribe((data: any) => {
      id = data;
    });

    pokemon = await loadPokemon();
    console.log(pokemon);
    setTypeBackgroundColor();
  });

  function baseStatLabel(data: any) {
    if (data === "hp") {
      return "HP";
    } else if (data === "attack") {
      return "ATK";
    } else if (data === "defense") {
      return "DEF";
    } else if (data === "special-attack") {
      return "SATK";
    } else if (data === "special-defense") {
      return "SDEF";
    } else if (data === "speed") {
      return "SPD";
    }
  }

  async function loadPokemon() {
    const response = axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        const data = response.data;
        console.log(data);
        const name = data.name;
        const weight = data.weight;
        const height = data.height;
        const stats = data.stats.map((stat: any) => {
          return {
            name: stat.stat.name,
            base_stat: stat.base_stat,
          };
        });
        const types = data.types.map((pokeType: any) => {
          return pokeType.type.name;
        });

        const abilities = data.abilities.map((data: any) => {
          return data.ability.name;
        });
        const order = data.order;

        return {
          name,
          stats,
          types,
          weight,
          height,
          abilities,
          order,
        };
      });
    return response;
  }

  function setTypeBackgroundColor() {
    const mainType = pokemon.types[0];
    const color = typeColors[mainType as keyof typeof typeColors];
    bgColor = color;
    if (!color) {
      console.warn(`Color not defined for type: ${mainType}`);
      return;
    }
  }
</script>

<div class="absolute right-0">
  <img
    src="../assets/pokeball.svg"
    alt=""
    class="opacity-15 min-w-[350px] h-auto"
  />
</div>
<div class="flex flex-row">
  <h1 class="mx-auto mt-12">
    <i class="fa-solid fa-arrow-left text-2xl mx-4"></i>
    <span class="text-4xl">
      <strong>{pokemon?.name}</strong>
    </span>
    <span class="ml-3 text-md"
      ><strong>
        #0{pokemon?.order}
      </strong></span
    >
  </h1>
</div>
<figure
  class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-2/4 z-[1]"
>
  <div class="flex flex-row items-center">
    <div class="mx-4 bg-slate-50">
      <img src="../assets/chevron_left.svg" alt="" />
    </div>
    <div class="relative flex justify-center w-[300px] h-[300px] m-auto z-3">
      <img
        src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/{id}.svg"
        alt={pokemon?.name}
      />
    </div>
    <div class="mx-4 bg-slate-50">
      <img src="../assets/chevron_right.svg" alt="" />
    </div>
  </div>
</figure>

<div class="relative card shadow-xl min-h-screen translate-y-1/4">
  <div class=" rounded-md bg-slate-100 w-full mt-5">
    <div class="card-body text-black">
      <section class="flex justify-center translate-y-12">
        <div>
          <div class="flex gap-2">
            {#if pokemon?.types.length > 0}
              {#each pokemon.types as type, index}
                <div class="badge badge-primary text-lg px-4 py-3 text-white"><strong>{type}</strong></div>
              {/each}
            {/if}
          </div>
          <div class="text-center my-4 py-2">
            <h1 class="text-xl">
              <strong>About</strong>
            </h1>
          </div>
          <div class="flex flex-row justify-center gap-3 w-8 border-solid">
            <div class="md:border-r border-gray-500 border-solid">
              <div class="w-96 flex flex-row justify-center gap-2">
                <img src="../assets/weight.svg" alt="" width="35px" />
                <span
                  ><p class="text-justify text-lg">
                    {pokemon?.weight}
                  </p></span
                >
              </div>
              <div class="mt-10 text-center">
                <p class="text-slate-500">Weight</p>
              </div>
            </div>
            <div class="border-r border-gray-500 border-solid">
              <div class="w-96 flex flex-row justify-center gap-2">
                <img
                  src="../assets/height.svg"
                  alt=""
                  class="transform rotate-90"
                  width="35px"
                />
                <span
                  ><p class="text-justify text-lg">
                    {pokemon?.weight}
                  </p></span
                >
              </div>
              <div class="mt-10 text-center">
                <p class="text-slate-500">Height</p>
              </div>
            </div>
            <div class="text-center">
              <div class="w-96">
                {#if pokemon?.abilities.length > 0}
                  {#each pokemon.abilities as ability, index}
                    <span class=" flex flex-col">
                      <p class="text-center text-lg">
                        {ability}
                      </p></span
                    >
                  {/each}
                {/if}
              </div>
              <div class="mt-10">
                <p class="text-slate-500">Abilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="flex justify-center translate-y-20">
        <div class="mx-2 p-2">
          <h2>Base Stats</h2>
          {#if pokemon?.stats.length > 0}
            {#each pokemon.stats as stat, index}
              <div class="flex flex-row gap-2">
                <div class="w-8 text-right">
                  <h6 class="text-right">{baseStatLabel(stat.name)}</h6>
                </div>
                <div class="w-full">
                  <progress
                    class="progress progress-error w-full"
                    style="width: 70%"
                    value={stat.base_stat}
                    max="100"
                  ></progress>
                </div>
              </div>
            {/each}
          {/if}
        </div>
      </section>

      <div class="card-actions justify-end"></div>
    </div>
  </div>
</div>
