<script>
 import Input from './Input.svelte';
 import Button from './Button.svelte';
 import debounce from 'lodash/debounce';

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
</div>

<style>
  .toolbar {
    background-color: #fff;
    padding: 14px;
  }
</style>
