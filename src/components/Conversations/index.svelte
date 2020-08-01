<script>
	import { conversations } from '../../store.js';
  import { isActiveConv } from '../../util.js';
  import Item from './Item.svelte';
  let active = false;
  
  const handleClick = ({ detail }) => active = detail._id;
</script>

<div class="conv-list">
  {#each $conversations as conv, i}
    <Item 
      {conv} 
      active={isActiveConv(active, conv, i)} 
      on:click={handleClick} 
    />
  {/each}
</div>

<style>
  .conv-list {
      max-height: 100%;
		  overflow-y: scroll;
  }
</style>
