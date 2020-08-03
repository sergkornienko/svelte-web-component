<script>
  import { messages } from "../store.js";
  import Toolbar from "./Toolbar.svelte";
  import ConversationsList from "./Conversations/index.svelte";
  import MessagesList from "./Messages/index.svelte";
  import { initEventEmmiter } from "../event-emitter.js";

  export let dispatchEvent;
  initEventEmmiter(dispatchEvent);
</script>

<style>
  :global(:root) {
    --base-color: ;
    --user-msg-color: #162d3d;
    --text-color: #20455e;
    --event-color: #7a92a5;
    --link-color: #3d9be9;
    --hover-color: #eaf7ff;
    --mobile-width: "650px";
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
  :global(.input-element) {
    border-width: 1px;
    border-style: solid;
    border-color: var(--input-border-color);
    color: var(--user-msg-color);
    padding: 8px 12px;
    min-width: 190px;
  }

  :global(.input-element:focus) {
    box-shadow: 0 0 0 0.5pt var(--link-color);
    outline: none;
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

<svelte:head>
  <link
    rel="stylesheet"
    href="https://sergkornienko.github.io/svelte-web-component/bundle.css" />
</svelte:head>
<main>
  <Toolbar />
  <ConversationsList />
  <MessagesList />
</main>
