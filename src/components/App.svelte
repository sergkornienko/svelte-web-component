<script>
	import { messages } from '../store.js';
	import Nested from './Nested.svelte';

	export let name = 'serhiiko';
	export let dispatchEvent;

	const handleClick = () => {
		dispatchEvent(new CustomEvent('meh', { detail: {type: 'blet'} }));
	};
</script>

<p on:click={handleClick}>
	{name}
</p>
<ul>
	{#each $messages.list as msg}
		<li>{msg.message}</li>
	{/each}
</ul>
<Nested answer={42}/>
