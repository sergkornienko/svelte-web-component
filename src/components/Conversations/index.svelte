<script>
	import { conversations } from '../../store.js';
  import Item from './Item.svelte';
  let active = false;
  
  const handleClick = ({ detail }) => active = detail._id;
</script>

<div class="conv-list">
  {#each $conversations as conv, i}
    <Item {...conv} active={active === conv._id || (!active && i === 0)} on:click={handleClick} />
  {/each}
</div>

<style>
  .conv-list {
      max-height: 100%;
		  overflow-y: scroll;
  }
</style>