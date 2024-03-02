<script>
  let searchInput = "";
</script>

<header class="relative w-full my-3 px-6" id="header">
  <div class="flex gap-3 pb-4 px-2 ml-auto">
    <div class="logo-container">
      <img src="./assets/pokeball.svg" alt="Pokeball" width="35px" />
    </div>
    <div class="title-wrapper">
      <h1 class="text-4xl font-bold">pokeDex</h1>
    </div>
  </div>
  <div class="flex flex-row gap-2 mx-auto">
    <div class="form-control grow h-14">
      <input
        bind:value={searchInput}
        type="text"
        placeholder="Search"
        class="bg-slate-50 input input-bordered w-full md:w-auto rounded-full text-black"
      />
    </div>
    <button class="btn btn-primary bg-white border-none">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
</header>
