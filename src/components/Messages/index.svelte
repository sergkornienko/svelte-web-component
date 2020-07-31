<script>
  import { messages } from '../../store.js';
  import { MESSAGE_TYPE } from '../../types.js'
  import Item from './Item.svelte';
  import BotAvatar from './BotAvatar.svelte';
  import UserAvatar from './UserAvatar.svelte';

  const showBotAvatar = (list, i) => list[i].type === MESSAGE_TYPE.BOT
    && ((i + 1 < list.length && list[i + 1].type === MESSAGE_TYPE.USER) || list.length === 1 || i === list.length - 1);
  const isUser = (t) => t === MESSAGE_TYPE.USER;
</script>

<div class="msg-list">
    {#each $messages.list as msg, index}
      <div class="box">
        {#if showBotAvatar($messages.list, index)}
          <BotAvatar />
        {/if}
        {#if isUser(msg.type)}
          <UserAvatar src={messages.avatar} />
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