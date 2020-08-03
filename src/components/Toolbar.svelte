<script>
  import { getContext } from 'svelte';
  import { INPUT, OUTPUT} from '../constants.js';
  import Input from './Input.svelte';
  import Button from './Button.svelte';
  import Dropdown from './Dropdown.svelte';
  import debounce from 'lodash/debounce';
  import { FILTERS, SORTS, LANGUAGES } from '../constants.js';
  import { isLoading } from '../store.js';
  
	const { dispatchEvent } = getContext('event-emitter');
  
  let filter;
  let sort;
  let language;

  const handleSearchInput = debounce((e) => {
    const value = e.target.value.trim();
    if (!value || value === '') {
      return;
    }
    dispatchEvent(OUTPUT.SEARCH, {
      value,
      responseType: INPUT.LOAD_SEARCH_RESULT,
    });
    
  }, 500);
  const handleFilterClick = (e) => {
    isLoading.set(true);
    dispatchEvent(OUTPUT.GET_CONVERSATIONS, {
      sort,
      filter,
      language,
      responseType: INPUT.LOAD_CONVERSATIONS,
    });
  };
  const dispatchRefresh = () => {
    dispatchEvent(OUTPUT.REFRESH, {
      responseType: INPUT.LOAD_CONVERSATIONS,
    });
  }
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
      stretch
      name="filterBy"
      options={FILTERS}
      bind:value={filter}
    />
    <Dropdown
      stretch
      name="sortBy"
      options={SORTS}
      bind:value={sort}
    />
    <Dropdown
      stretch
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
  @media screen and (min-width: 1720px) {
    .filters {
      justify-content: flex-start;
    }
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }
  :global(.btns > .btn) {
    margin-left: 14px;
  }
</style>
