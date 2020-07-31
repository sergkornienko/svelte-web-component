<script>
  import { getContext } from 'svelte';
	const { dispatchEvent } = getContext('event-emitter');
  const handleClick = () => {
		dispatchEvent(':GET_CONVERSATIONS', { test: 'work', responseType: ':ADD_CONVERSATIONS' });
	};
</script>
  
<div class="toolbar">
  Toolbar
</div>