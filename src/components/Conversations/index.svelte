<script>
	import { conversations } from '../../store.js';
</script>

<div class="conv-list">
  <ul>
    {#each $conversations as conv}
      <li>{conv.userName}</li>
    {/each}
  </ul>
</div>

<style>
  .conv-list {
      background-color: blue;
  }
</style>