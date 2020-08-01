<script>
  import { createEventDispatcher } from 'svelte';
  import Avatar from './Avatar.svelte';
  import Info from './Info.svelte';
  import Icons from './Icons.svelte';
	const dispatch = createEventDispatcher();
  export let conv = {};
  export let active = false;

  const handleClick = () => dispatch('click', { _id: conv._id });
</script>

<div class="item" class:active on:click={handleClick}>
  <Avatar userAvatar={conv.userAvatar} />
  <Info {conv} />
  <Icons 
    id={conv._id}
    ticket={conv.withTicket}
    favorite={conv.favorite}
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
    padding: 14px
  }
  .item:hover, .active {
    background-color: var(--hover-color);
  }
</style>
