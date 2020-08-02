<script>
  import searchIcon from '../assets/search.svg';

  export let placeholder;
  export let search = false;
  export let stretch = false;
  export let disabled = false;
</script>

<div class="input"
  class:stretch
>
  {#if search}
    <div class="search-icon">
      {@html searchIcon}
    </div>
  {/if}
  <input
    type="text"
    class="input-element"
    class:search
    class:stretch
    {disabled}
    {placeholder}
    on:input
  >
</div>

<style>
  input {
    border-radius: 999px;
  }
  .search {
    padding-left: 30px; 
  }
  .input {
    display: inline-block;
    position: relative;
    width: fit-content;
  }
  .stretch {
    width: 100%;
  }
  .search-icon {
    position: absolute;
    top: 8px;
    left: 9px;
  }
</style>
