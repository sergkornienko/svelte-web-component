<script>
  import { EMPTY_STAR, FILL_STAR } from '../../constants.js';
  import link from '../../assets/link.svg';
  import ticketSvg from '../../assets/ticket.svg';
  import { dispatchToggleFavorite } from '../../event-emitter.js';

  export let id;
  export let favorite = false;
  export let ticket = false;

  $: starUrl = favorite ? FILL_STAR : EMPTY_STAR;

  const handleDeepLinkClick = () => navigator.clipboard.writeText(`${window.location.href}?conversationId=${id}`);
  const handleFavoriteClick = () => {
    favorite = !favorite;
    dispatchToggleFavorite(id);
  };
</script>

<div class="additional-icons">
  <div class="deep-link" on:click|stopPropagation={handleDeepLinkClick}>
    {@html link}
  </div>
  {#if ticket}
    <a class="icon" href={ticket} target="_blank">{@html ticketSvg}</a>
  {/if}
</div>
<div class="favorite">
  <img src={starUrl} alt="Star" height="28px" on:click|stopPropagation={handleFavoriteClick}>
</div>

<style>
  .additional-icons, .favorite {
    align-self: center;
  }
  .icon {
    display: block;
  }
</style>
