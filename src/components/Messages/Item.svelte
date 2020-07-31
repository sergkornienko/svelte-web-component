<script>
  import BotMessage from './BotMessage.svelte';
  import UserMessage from './UserMessage.svelte';
  import { MESSAGE_TYPE } from '../../types.js'

  export let msg = {};
  export let botId = '';
</script>

<div class="item">
  {#if msg.type === MESSAGE_TYPE.BOT}
    <BotMessage {...msg} {botId} />
  {:else if msg.type === MESSAGE_TYPE.USER}
      <UserMessage {...msg} />
  {:else}
    action
  {/if}
</div>

<style>
  .item{
    margin-bottom: 16px;
  }
</style>