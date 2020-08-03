<script>
  export let message = '';
  export let nodeID = '';
  export let botId = '';
  const url = `https://www.wix.com/support/conversations?botId=${botId}&nodeId=${nodeID}`;

  const handleClick = () => window.open(url,'_blank');
</script>

<div class="msg bubble" on:click={handleClick}>
  <p>{@html message}</p>
</div>

<style>
  .msg {
    background-color: #fff;
    color: var(--text-color);
    padding: 0 14px;
    cursor: pointer;
    font-size: 16px;
  }
  p {
    padding: 0;
  }
</style>