<script lang="ts">
  export let name: string;
  export let index: any;
  export let pokemon: any;
</script>

<div class="relative rounded-lg min-w-40 w-[8.85rem] h-[8.85rem] bg-white-100 shadow-xl my-2 mx-auto cursor-pointer transform transition duration-200 hover:scale-110">
  <div class="absolute right-0 mx-2 my-2">
    <p class="text-xs text-slate-600">#{index}</p>
  </div>
  <div class="flex justify-center !w-[76px] !h-[76px] mx-auto pt-4">
    <img
      src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${
        index + 1
      }.svg`}
    />
  </div>
  <div class="-mt-2 pt-10 px-8 pb-4 bg-gray-200 rounded-b-md text-center">
    <h2 class="text-sm text-slate-600">#{name}</h2>
  </div>
</div>
