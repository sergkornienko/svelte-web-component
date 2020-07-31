<script>
  export let message = '';
  export let linkTitle = '';
  export let linkHref = '';
</script>

<div class="action">
  <div class="line"></div>
  <div class="action-content">
    <p>{message}</p>
    {#if linkHref}
      <a href={linkHref} target="_blank">
        {linkTitle}
        <img class="link" src="https://static.wixstatic.com/shapes/260237_e485e56c29f348cca734a0f39cd915ca.svg" alt="Link">
      </a>
    {/if}
  </div>
  <div class="line"></div>
</div>

<style>
  .action {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .action-content {
    text-align: center;
  }
  p {
    font-family: Helvetica Neue,sans-serif;
    font-weight: 500;
    text-align: center;
    color:  var(--event-color);
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 0;
  }
  .line {
    min-width:30px; 
    height:2px; 
    background-color: var(--event-color); 
    display:inline-block; 
    /* margin-bottom:5px; */
    margin-left:30px;
    margin-right:30px;
  }
  a {
    text-transform: none;
    font-size: 12px;
    color: var(--link-color);
  }
  .link {
    width: 10px;
  }
</style>