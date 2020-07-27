<script>
	import { conversations } from '../store.js';
	import { getContext } from 'svelte';
	export let answer;

	const { dispatchEvent } = getContext('event-emitter');
	const handleClick = () => {
		dispatchEvent('meh', { test: 'work' });
	};
</script>

<span on:click={handleClick}>{answer}</span>
<ul>
	{#each $conversations as conv}
		<li>{conv.userName}</li>
	{/each}
</ul>
