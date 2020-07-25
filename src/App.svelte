<script>
	export let name = 'serhiiko';
	import Nested from './Nested.svelte';
</script>

<p>{name}</p>
<Nested answer={42}/>