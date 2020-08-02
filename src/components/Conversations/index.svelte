<script>
	import { conversations, isLoading } from '../../store.js';
  import { isActiveConv, isScrolledToBootom } from '../../util.js';
  import Item from './Item.svelte';
  import Loader from '../Loader.svelte';
  import { dispatchLoadConversations } from '../../event-emitter.js';

  let active;
  let convList;
  let loadMore = true;

  conversations.subscribe(() => loadMore = false);
  
  const handleClick = ({ detail }) => active = detail._id;
  const handleScroll = () => {
    if(!$isLoading && isScrolledToBootom(convList)) {
      loadMore = true;
      isLoading.set(true);
		  dispatchLoadConversations();
    }
  };
</script>

<!-- // TODO: add animation -->
<div class="conv-list" 
  bind:this={convList}
  on:scroll={handleScroll}
>
  {#if !$isLoading || loadMore}
    {#each $conversations as conv, i}
      <Item 
        {conv} 
        active={isActiveConv(active, conv, i)} 
        on:click={handleClick} 
      />
    {/each}
  {/if}
  {#if loadMore || $isLoading}
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
