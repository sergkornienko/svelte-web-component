<script>
  import { createEventDispatcher, getContext } from 'svelte';
  import { fade } from 'svelte/transition';
  import Avatar from './Avatar.svelte';
  import Info from './Info.svelte';
  import Icons from './Icons.svelte';
  import { OUTPUT } from '../../constants.js';

const { dispatchEvent } = getContext('event-emitter');

const dispatch = createEventDispatcher();
  export let conv = {};
  export let active = false;
  export let index;

  const handleClick = () => {
  	if (!conv.isReaded) {
	    dispatchEvent(OUTPUT.TOGGLE_READED, {
  			_id: conv._id,
  		});
  	}
  	conv.isReaded = true;
  	dispatch('click', { _id: conv._id });
  };
  const handleFavoriteClick = () => {
  	conv.favorite = !conv.favorite;
	  dispatchEvent(OUTPUT.TOGGLE_FAVORITE, {
  		_id: conv._id,
  		value: conv.favorite,
  	});
  };
</script>

<div 
  class="item" 
  class:active 
  class:not-readed={!conv.isReaded} 
  on:click={handleClick}
  transition:fade="{{delay: 50 *( index % 50), duration: 800}}"
>
  <Avatar userAvatar={conv.userAvatar} />
  <Info {conv} />
  <Icons 
    id={conv._id}
    ticket={conv.withTicket}
    favorite={conv.favorite}
    on:click={handleFavoriteClick}
  />
</div>

<style>
  .item {
    display: flex;
    justify-content: space-between;
    min-height: 60px;
    cursor: pointer;
    background-color: #fff;
    border: var(--background-color-site) 0.5px solid;
    padding: 14px;
  }
  .not-readed {
    border-right: var(--link-color) 5px solid;
  }
  .item:hover, .active {
    background-color: var(--hover-color);
  }
</style>
