<script>
  import { onMount } from "svelte";
  import { draw } from "svelte/transition";

  const baseStat = {
    HP: "hp",
    ATK: "attack",
    DEF: "defense",
    SATK: "special-attack",
    SDEF: "special-defense",
    SPD: "speed",
  };

  export let data;
  let pokemon = data;

  function baseStatLabel(data) {
    if (data === "hp") {
      return "  HP";
    } else if (data === "attack") {
      return " ATK";
    } else if (data === "defense") {
      return " DEF";
    } else if (data === "special-attack") {
      return "SATK";
    } else if (data === "special-defense") {
      return "SDEF";
    } else if (data === "speed") {
      return " SPD";
    }
  }
</script>

<div
  class="flex flex-col mx-auto w-full text-sm sm:text-base min-h-screen {pokemon.colorTheme.split(
    ' '
  )[0]}"
>
  <div class="relative flex flex-col mx-auto w-full max-w-[600px]">
    <div class="absolute right-0 w-[400px] h-[400px] m-auto z-3">
      <img src="../assets/pokeball.svg" alt="" class="opacity-15 w-full" />
    </div>
    <div class="flex flex-row">
      <h1 class="mx-auto mt-12">
        <a href="/">
          <i
            class="fa-solid fa-arrow-left text-2xl mx-4 shadow-xl transform transition duration-200 hover:scale-150"
          ></i>
        </a>
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
    <!-- <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-2/4 z-[1]"> -->
    <div class="my-4 pt-4 px-2 pb-2 transform translate-y-20 z-[1]">
      <figure>
        <div class="flex justify-center">
          <!-- <div class="flex justify-center mx-4">
            <img
              class="transform transition duration-200 hover:scale-125"
              src="../assets/chevron_left.svg"
              alt=""
            />
          </div> -->
          <div class="relative flex justify-center w-[200px] h-[200px] z-3">
            <img
              src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/{pokemon?.id}.svg"
              alt={pokemon?.name}
            />
          </div>
          <!-- <div class="flex justify-center mx-4">
            <img
              class="transform transition duration-200 hover:scale-125"
              src="../assets/chevron_right.svg"
              alt=""
            />
          </div> -->
        </div>
      </figure>
    </div>

    <div class="relative shadow-xl">
      <div class=" rounded-md bg-slate-100 w-full mt-5">
        <div class="card-body text-black">
          <section class="flex justify-center translate-y-4">
            <div>
              <div class="flex justify-center gap-2">
                {#if pokemon?.types?.length > 0}
                  {#each pokemon.types as type, index}
                    <div
                      class="badge badge-primary border-none text-md px-2 py-2 text-white {pokemon.colorTheme.split(
                        ' '
                      )[0]}"
                    >
                      <strong>{type}</strong>
                    </div>
                  {/each}
                {/if}
              </div>
              <div class="text-center my-4 py-2">
                <h1 class="text-md">
                  <strong>About</strong>
                </h1>
              </div>
              <div class="flex justify-center w-full mx-2 my-4">
                <div
                  class="flex flex-col justify-center border-r border-gray-500 border-solid w-32"
                >
                  <div class="flex justify-center gap-2 py-4 px-4 mx-2">
                    <img src="../assets/weight.svg" alt="" width="16px" />
                    <span class="px-2"
                      ><p class="text-justify text-sm">
                        {pokemon?.weight}
                      </p></span
                    >
                  </div>
                  <div class="text-center py-2 px-8">
                    <p class="text-xs text-slate-500">weight</p>
                  </div>
                </div>
                <div
                  class="flex flex-col justify-center border-r border-gray-500 border-solid w-32"
                >
                  <div class="flex justify-center gap-2 py-4 px-4 mx-2">
                    <img
                      src="../assets/height.svg"
                      alt=""
                      class="transform rotate-90"
                      width="16px"
                    />
                    <span class="px-2"
                      ><p class="text-justify text-sm">
                        {pokemon?.height}
                      </p></span
                    >
                  </div>
                  <div class="text-center py-2 px-8">
                    <p class="text-xs text-slate-500">height</p>
                  </div>
                </div>
                <div
                  class="flex flex-col justify-center border-solid border-gray-500 text-center w-32"
                >
                  <div class="gap-2 py-4 px-4 mx-2">
                    {#if pokemon?.abilities?.length > 0}
                      {#each pokemon.abilities as ability, index}
                        <span class=" flex flex-start">
                          <p class="text-center text-xs">
                            {ability}
                          </p></span
                        >
                      {/each}
                    {/if}
                  </div>
                  <div class="text-center py-2 px-8">
                    <p class="text-xs text-slate-500">abilities</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="w-full">
            <div class="mx-2">
              <div class="text-center my-4 py-2">
                <h1 class="text-md">
                  <strong>Base Stats</strong>
                </h1>
              </div>
              {#if pokemon?.stats.length > 0}
                {#each pokemon.stats as stat, index}
                  <div class="flex gap-2">
                    <div class="w-8 my-2 px-2">
                      <p
                        class="text-right text-xs font-bold {pokemon.colorTheme.split(
                          ' '
                        )[1]}"
                      >
                        {baseStatLabel(stat.name)}
                      </p>
                    </div>
                    <div
                      class="py-2 px-2 border-l border-solid mx-2 {pokemon.colorTheme.split(
                        ' '
                      )[2]}"
                    >
                      <p
                        class="text-xs font-bold {pokemon.colorTheme.split(
                          ' '
                        )[1]}"
                      >
                        {stat.base_stat}
                      </p>
                    </div>
                    <div class="w-full pt-1 pb-2 px-2 h-4">
                      <progress
                        class="progress progress-accent transition-all ease-out duration-1000 h-full relative w-0"
                        style="width: 100%"
                        value={stat.base_stat}
                        max="100"
                        in:draw={{ duration: 5000 }}
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
</div>
