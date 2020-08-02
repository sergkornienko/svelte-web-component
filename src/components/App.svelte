<script>
	import { messages } from '../store.js';
	import Toolbar from './Toolbar.svelte';
	import ConversationsList from './Conversations/index.svelte';
	import MessagesList from './Messages/index.svelte';
	import { initEventEmmiter } from '../event-emitter.js';

	export let dispatchEvent;
	initEventEmmiter(dispatchEvent);
</script>

<main>
	<Toolbar/>
	<ConversationsList/>
	<MessagesList/>
</main>

<style>
	:global(:root) {
		--base-color: ;
		--user-msg-color: #162d3d;
		--text-color: #20455e;
		--event-color: #7A92A5;
		--link-color: #3D9BE9;
		--hover-color: #EAF7FF;
  	--mobile-width: '650px';
		--background-color-message-list: #f0f4f7;
		--background-color-site: #dfe5eb;
		--input-border-color: #c1e4fe;
	}
	:global(.bubble) {
		border-radius: 10px;
		display: inline-block;
		padding: 14px;
		max-width: 600px;
		word-break: break-word;
		text-align: left;
		position: relative;
	}
	:global(.avatar) {
		display: block;
		position: absolute;
		bottom: 5px;
		width: 24px;
		height: 24px;
		border-radius: 20px;
	}
	main {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: grid;
		grid-template: auto 1fr / 3fr 4fr;
		background-color: var(--background-color-site);
	}
</style>
