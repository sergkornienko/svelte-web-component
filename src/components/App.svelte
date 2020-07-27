<script>
	import { count } from '../store.js';
	import Nested from './Nested.svelte';

	export let name = 'serhiiko';
	export let dispatchEvent;

	const handleClick = () => {
		dispatchEvent(new CustomEvent('meh', { detail: {type: 'blet'} }));
	}
</script>

<p on:click={handleClick}>{name} {$count}</p>
<Nested answer={42}/>