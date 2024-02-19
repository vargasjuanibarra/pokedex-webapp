<script>
      import { bgColorDetail } from "$lib/pokemon-store";
    import { onDestroy, onMount } from "svelte";
  import { get } from "svelte/store";

    $: bgColor = get(bgColorDetail);
    onMount(() => {
        bgColorDetail.subscribe((data) => {
            if (data) {
                bgColor = data;
                console.log(bgColor);
            }
        })
    });

    onDestroy(() => {
        bgColorDetail.subscribe((data) => {
          console.log('onDestroy', data);
            bgColor = undefined;
        })
    })
</script>

<div class={"flex flex-col mx-auto w-full text-sm sm:text-base min-h-screen " + bgColor ? `bg-[${bgColor}]` : ' bg-emerald-200'}>
    <slot/>
</div>