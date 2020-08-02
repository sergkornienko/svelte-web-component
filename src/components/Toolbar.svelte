<script>
  import Input from './Input.svelte';
  import Button from './Button.svelte';
  import Dropdown from './Dropdown.svelte';
  import debounce from 'lodash/debounce';

  const options = [{
    label: 'Meh',
    value: 0,
  }];
  let filter;

  const handleSearchInput = debounce((e) => console.log(e.target.value), 500);
  const handleRefreshClick = (e) => console.log(e);
</script>
  
<div class="toolbar">
  <Input 
    search
    placeholder="Search Conversations"
    on:input={handleSearchInput}
  />
  <Button
    primary
    label="Refresh"
    on:click={handleRefreshClick}
    disabled={false}
  />
  <Dropdown
    label="Blet"
    {options}
    bind:value={filter}
  />
  {filter}
</div>

<style>
  .toolbar {
    background-color: #fff;
    padding: 14px;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);
  }
</style>
