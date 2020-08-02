<script>
  import searchIcon from '../assets/search.svg';

  export let placeholder;
  export let search = false;
</script>

<div class="input">
  {#if search}
    <div class="search-icon">
      {@html searchIcon}
    </div>
  {/if}
  <input
    type="text"
    class:search
    {placeholder}
    on:input
  >
</div>

<style>
  input {
    border-width: 1px;
    border-radius: 999px;
    border-style: solid;
    border-color: var(--input-border-color);
    color: var(--user-msg-color);
    padding: 6px 12px;
  }
  input:focus {
    box-shadow: 0 0 0 0.5pt var(--link-color);
    outline: none;
  }
  .search {
    padding-left: 30px; 
  }
  .input {
    position: relative;
  }
  .search-icon {
    position: absolute;
    top: 6px;
    left: 9px;
  }
</style>
