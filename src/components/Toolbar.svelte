<script>
  import Input from './Input.svelte';
  import Button from './Button.svelte';
  import Dropdown from './Dropdown.svelte';
  import debounce from 'lodash/debounce';
  import { FILTERS, SORTS, LANGUAGES } from '../constants.js';
	import { isLoading } from '../store.js';
  import { dispatchLoadConversations, dispatchSearch, dispatchRefresh } from '../event-emitter.js';
  
  let filter;
  let sort;
  let language;

  const handleSearchInput = debounce((e) => dispatchSearch(e.target.value), 500);
  const handleFilterClick = (e) => dispatchLoadConversations(filter, sort, language);
</script>
  
<div class="toolbar">
  <Input 
    stretch
    search
    disabled={$isLoading}
    placeholder="Search Conversations"
    on:input={handleSearchInput}
  />
  <div class="filters">
    <Dropdown
      name="filterBy"
      options={FILTERS}
      bind:value={filter}
    />
    <Dropdown
      name="sortBy"
      options={SORTS}
      bind:value={sort}
    />
    <Dropdown
      name="language"
      options={LANGUAGES}
      bind:value={language}
    />
  </div>
  <div class="btns">
    <Button
      primary
      label="Filter"
      on:click={handleFilterClick}
      disabled={$isLoading}
    />
    <Button
      primary
      label="Refresh"
      on:click={dispatchRefresh}
      disabled={$isLoading}
    />
  </div>
</div>

<style>
  .toolbar {
    background-color: #fff;
    padding: 14px;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);
  }
  .filters {
    display: flex;
    justify-content: space-between;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }
  :global(.btns > .btn) {
    margin-left: 14px;
  }
</style>
