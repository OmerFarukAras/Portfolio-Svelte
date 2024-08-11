<script>
  import { onMount, onDestroy } from "svelte";
  import { slide } from "svelte/transition";

  let text = ["Backend Developer", "Photographer", "Freelancer"];
  let index = 0;
  let roller;

  onMount(() => {
    roller = setInterval(() => {
      if (index === text.length - 1) index = 0;
      else index++;
    }, 2500);
  });

  onDestroy(() => {
    clearInterval(roller);
  });
</script>

{#key index}
  <h3 class="montserrat" transition:slide>
    {text[index]}
  </h3>
{/key}
