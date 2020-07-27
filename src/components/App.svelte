<script>
	import { messages } from '../store.js';
	import Nested from './Nested.svelte';
	import { initEventEmmiter } from '../event-emitter.js';

	export let name = 'serhiiko';
	export let dispatchEvent;

	initEventEmmiter(dispatchEvent);
</script>

<p>
	{name}
</p>
<ul>
	{#each $messages.list as msg}
		<li>{msg.message}</li>
	{/each}
</ul>
<Nested answer={42}/>
