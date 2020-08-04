<script>
  import { dateToString, formatConvDetails } from '../../util.js';
  export let conv = {};
</script>

<div class="info">
<div class="main-info">
  <span class="username">{conv.userName}</span>
  <span class="date">{dateToString(conv._createdDate)}</span>
</div>
<div class="additiona-info">
  <p class="final-message">{conv.finalMessage}</p>
  <p class="messages-info">{formatConvDetails(conv)}</p>
</div>
</div>

<style>
  .info {
    width: 70%;
    display: flex;
    flex-direction: column;
    color: var(--event-color);
  }
  .main-info, .additiona-info {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
  .username {
    color: #162D3D;
    font-size: 14px;
    font-weight: bold;
  }
  .final-message {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre;
    width: 60%;
  }
  .messages-info, .date {
    min-width: 130px;
    text-align: right;
    margin-left: 12px;
  }
</style>
