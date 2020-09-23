<script>
  // import { getContext } from 'svelte';
  import { EMPTY_STAR, FILL_STAR } from '../../constants.js';
  import { transformLink } from '../../util.js';
  import link from '../../assets/link.svg';
  import ticketSvg from '../../assets/ticket.svg';
  
  // const { dispatchEvent } = getContext('event-emitter');
  export let id;
  export let favorite = false;
  export let ticket = false;
  const baseUrl = window.location.origin + window.location.pathname;

  $: starUrl = favorite ? FILL_STAR : EMPTY_STAR;

  const handleDeepLinkClick = () => navigator.clipboard.writeText(`${baseUrl}?conversationId=${id}`);
</script>

<div class="additional-icons">
  <div class="deep-link" on:click|stopPropagation={handleDeepLinkClick}>
    {@html link}
  </div>
  {#if ticket}
    <a class="icon" href={transformLink(ticket)} target="_blank">{@html ticketSvg}</a>
  {/if}
</div>
<div class="favorite">
  <img src={starUrl} alt="Star" height="28px" on:click|self|stopPropagation>
</div>

<style>
  .additional-icons, .favorite {
    align-self: center;
  }
  .icon {
    display: block;
  }
</style>
