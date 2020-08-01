<script>
  import { createEventDispatcher } from 'svelte';
  import Avatar from './Avatar.svelte';
	const dispatch = createEventDispatcher();
  export let _id = '';
  export let active = false;
  export let duration = 0;
  export let countMessages = 0;
  export let withTicket = '';
  export let userAvatar = '';
  export let userName = false;
  export let finalMessage = '';

  const handleClick = () => dispatch('click', { _id });
</script>

<div class="item" class:active on:click={handleClick}>
  <Avatar {userAvatar} />
</div>

<style>
  .item {
    display: flex;
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
