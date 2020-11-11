<script>
  import { getContext } from 'svelte';
import { conversations, isLoading, isSearchResult } from '../../store.js';
  import { isActiveConv, isScrolledToBootom } from '../../util.js';
  import Item from './Item.svelte';
  import Loader from '../Loader.svelte';
  import { INPUT, OUTPUT} from '../../constants.js';
  const { dispatchEvent } = getContext('event-emitter');

  let active;
  let convList;
  let loadMore = true;

  conversations.subscribe(() => loadMore = false);
  
  const handleClick = ({ detail }) => {
  	active = detail._id;
  	dispatchEvent(OUTPUT.MESSAGE, {
  		_id: detail._id,
  		responseType: INPUT.MESSAGE,
  	});
  };
  const handleScroll = () => {
    console.log({
      isLoading: $isLoading,
      isScrolledToBootom: isScrolledToBootom(convList),
      isSearchResult: $isSearchResult,
    });
  	if(!$isLoading && isScrolledToBootom(convList) && !$isSearchResult) {
  		loadMore = true;
		  isLoading.set(true);
  		dispatchEvent(OUTPUT.GET_CONVERSATIONS, {
  			responseType: INPUT.ADD_CONVERSATIONS,
  		});
  	}
  };
</script>

<div class="conv-list" 
  bind:this={convList}
  on:scroll={handleScroll}
>
  {#if !$isLoading || loadMore}
    {#each $conversations as conv, index}
      <Item 
        {conv}
        {index}
        active={isActiveConv(active, conv, index)} 
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
