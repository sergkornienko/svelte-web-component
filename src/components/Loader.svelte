<script>
  import { blur } from 'svelte/transition';
  export let centred;
  export let width;
</script>

<img
  src="https://static.wixstatic.com/media/6b6193_a9c819b601db4a78b964470f8cc68826~mv2.gif"
  alt="Loader"
  class="loader"
  class:centred
  transition:blur="{{ duration: 1000 }}"
  {width}
>

<style>
  .centred {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
