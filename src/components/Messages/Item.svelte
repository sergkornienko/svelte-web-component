<script>
 import { slide } from 'svelte/transition';
import { quadOut } from 'svelte/easing';
 import BotMessage from './BotMessage.svelte';
 import UserMessage from './UserMessage.svelte';
 import Event from './Event.svelte';
 import { isBot, isUser } from '../../util.js';

 export let msg = {};
 export let botId = '';
</script>

<div 
  class="item"
  transition:slide="{{delay: 250, duration: 1500, easing: quadOut }}"
>
  {#if isBot(msg.type)}
    <BotMessage {...msg} {botId} />
  {:else if isUser(msg.type)}
      <UserMessage {...msg} />
  {:else}
    <Event {...msg} />
  {/if}
</div>

<style>
  .item {
    margin-bottom: 16px;
  }
</style>
