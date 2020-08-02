<script>
  export let label;
  export let primary;
  export let disabled;
</script>

<button
  class="btn"
  class:primary
  {disabled}
>
  {label}
</button>

<style>
  .btn {
    font-style: normal;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    white-space: nowrap;
    user-select: none;
    transition: all 0.1s ease-in-out;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .primary {
    border-radius: 100px;
    padding: 8px 28px;
    border-width: 1px;
    border-style: solid;
    display: inline-block;
    background-color: #3d9be9;
    border-color: transparent;
    margin: 0;
    color: #fff;
  }
  .primary:hover {
    background-color: #4eb7f5;
  }
  .primary:disabled {
    background-color: #ccc;
    pointer-events: none;
    cursor: default;
  }
</style>