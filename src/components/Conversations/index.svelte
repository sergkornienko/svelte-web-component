<script>
  import { getContext } from 'svelte';
	import { conversations } from '../../store.js';
  import { isActiveConv, isScrolledToBootom } from '../../util.js';
  import Item from './Item.svelte';
  import Loader from '../Loader.svelte';
  let active;
  const { dispatchEvent } = getContext('event-emitter');
  let convList;
  let isLoading = true;

  conversations.subscribe(() => isLoading = false);
  
  const handleClick = ({ detail }) => active = detail._id;
  const handleScroll = () => {
    if(!isLoading && isScrolledToBootom(convList)) {
      isLoading = true;
		  dispatchEvent(':GET_CONVERSATIONS', { 
        responseType: ':ADD_CONVERSATIONS',
        // TODO: add data of filters state
      });
    }
  };
</script>

// TODO: add animation
<div class="conv-list" 
  bind:this={convList}
  on:scroll={handleScroll}
>
  {#each $conversations as conv, i}
    <Item 
      {conv} 
      active={isActiveConv(active, conv, i)} 
      on:click={handleClick} 
    />
  {/each}
  {#if isLoading}
    <Loader centred width="56px" />
  {/if}
</div>

<style>
  .conv-list {
      max-height: 100%;
		  overflow-y: scroll;
  }
  :global(.conv-list .loader) {
    margin-top: 16px;
    margin-bottom: 16px;
  }
</style>
