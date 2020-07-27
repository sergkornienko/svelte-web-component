<script>
	import { conversations } from '../store.js';
	export let answer;
</script>

<span>{answer}</span>
<ul>
	{#each $conversations as conv}
		<li>{conv.userName}</li>
	{/each}
</ul>