<script>
  export let message = '';
</script>

<div class="right">
  <div class="msg bubble">
    <p>{@html message}</p>
  </div>
</div>

<style>
  .right {
    position: relative;
    text-align: right;
  }
  .msg {
    background-color: #cbd3dc;
    color: var(--user-msg-color);
    padding: 0 14px;
  }
  p {
    padding: 0;
  }
</style>