<script>
 import Input from './Input.svelte';
 import debounce from 'lodash/debounce';

  const handleSearchInput = debounce((e) => console.log(e.target.value), 500);
</script>
  
<div class="toolbar">
  <Input 
    search
    placeholder="Search Conversations"
    on:input={handleSearchInput}
  />
</div>

<style>
  .toolbar {
    background-color: #fff;
    padding: 14px;
  }
</style>
