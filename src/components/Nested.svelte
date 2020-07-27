<script>
	import { conversations } from '../store.js';
	import { getContext } from 'svelte';
	export let answer;

	const { dispatchEvent } = getContext('event-emitter');
	const handleClick = () => {
		dispatchEvent(':GET_CONVERSATIONS', { test: 'work', responseType: ':ADD_CONVERSATIONS' });
	};
</script>

<span on:click={handleClick}>{answer}</span>
<ul>
	{#each $conversations as conv}
		<li>{conv.userName}</li>
	{/each}
</ul>
