<script lang="ts">
  export let name: string;
  export let index: any;
  export let pokemon: any;
</script>

<div class="relative sm:w-1/2 card min-w-40 max-w-40 h-64 bg-slate-200 shadow-xl my-2 mx-auto cursor-pointer transform transition duration-200 hover:scale-110">
  <div class="flex justify-center items-center pt-12">
    <img
      src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${
        index + 1
      }.svg`}
      alt="Shoes"
      class="rounded-xl mx-auto"
      width="64px"
    />
  </div>
  <div class="absolute bottom-0 card-body text-center">
    <h2 class="card-title text-slate-900">{name}</h2>
  </div>
</div>
