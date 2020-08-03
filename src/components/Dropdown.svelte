<script>
  import arrowDown from '../assets/arrow-down.svg';
  
  export let options;
  export let name;
  export let value;
  // BUG: arrow click dosent open options
</script>

<div class="dropdown">
  <select 
    class="input-element"
    {name}
    bind:value
  >
    {#each options as {label, value}}
      <option {value}>{label}</option>
    {/each}
  </select>
  <div class="arrow">
    {@html arrowDown}
  </div>
</div>

<style>
  .dropdown {
    display: inline-block;
    position: relative;
    width: fit-content;
  }
  select {
    border-radius: 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding-right: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media screen and (min-width: 1720px) {
    .dropdown {
      margin-right: 30px;
    }
  }
  .arrow {
    position: absolute;
    top: 12px;
    right: 9px;
  }
  :global(.arrow-down-icon) {
    height: 10px;
    fill: var(--link-color);
  }
</style>
