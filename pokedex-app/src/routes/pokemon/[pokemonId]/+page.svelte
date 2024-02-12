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

  let id: any;
  let pokemon: any;

  onMount(async () => {
    pokemonID.subscribe((data: any) => {
      id = data;
    });

    pokemon = await loadPokemon();
    console.log(pokemon);
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

        return {
          name,
          stats,
          types,
          weight,
          height,
          abilities,
        };
      });
    return response;
  }
</script>

<div class="relative card bg-base-100 shadow-xl min-h-screen">
  <h1 class="card-title mx-auto mt-28">
    <strong>{pokemon?.name}</strong>
  </h1>
  <div class="mx-3">
    <figure
      class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]"
    >
      <img
        src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/{id}.svg"
        alt="Shoes"
        width="300px"
      />
    </figure>

    <div class="translate-y-96 rounded-md bg-slate-100 shadow-xl w-full mt-5">
      <div class="card-body text-black">
        <section class="flex justify-center translate-y-20">
          <div class="">
            <div class="flex gap-2">
                {#if pokemon?.types.length > 0}
                  {#each pokemon.types as type, index}
                      <div class="badge badge-primary"><strong>{type}</strong></div>
                  {/each}
                {/if}
            </div>
            <div class="my-5">
              <h1 class="my-5">About</h1>
            </div>
            <div class="flex flex-row justify-center gap-3 w-8 border-solid">
              <div class="border-r border-gray-500 border-solid">
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
        <section class="flex justify-center">
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
</div>
