<script lang="ts">
  export let name: string;
  export let index: any;
  export let pokemon: any;
</script>

<div class="relative card w-40 bg-slate-200 shadow-xl mx-5 my-5">
  <img
    src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`}
    alt="Shoes"
    class="rounded-xl mx-auto my-5"
    width="80px"
  />
  <div class="bottom-0 card-body items-center text-center">
    <h2 class="card-title text-slate-900">{name}</h2>
  </div>
</div>
