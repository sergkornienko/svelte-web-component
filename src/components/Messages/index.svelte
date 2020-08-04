<script>
  import { messages } from '../../store.js';
  import Item from './Item.svelte';
  import BotAvatar from './BotAvatar.svelte';
  import UserAvatar from './UserAvatar.svelte';
  import { isUser, isBot } from '../../util.js';

  const showBotAvatar = (list, i) => isBot(list[i].type)
    && ((i + 1 < list.length && isUser(list[i + 1].type)) || list.length === 1 || i === list.length - 1);
</script>

<div class="msg-list">
    {#each $messages.list as msg, index}
      <div class="box">
        {#if showBotAvatar($messages.list, index)}
          <BotAvatar />
        {/if}
        {#if isUser(msg.type)}
          <UserAvatar src={$messages.avatar} />
        {/if}
        <Item {msg} />
      </div>
    {/each}
</div>

<style>
  .msg-list {
      grid-row: 1/3;
      grid-column: 2;
      margin: 14px;
      max-height: 100%;
		  overflow-y: scroll;
  }
  .box {
    margin: 0 60px;
    position: relative;
  }
</style>
