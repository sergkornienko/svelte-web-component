<script>
  import { dateToString, formatConvDetails } from '../../util.js';
  export let conv = {};
</script>

<div class="main-info">
  <span class="username">{conv.userName}</span>
  <p class="final-message">{conv.finalMessage}</p>
</div>
<div class="additiona-info">
  <span class="date">{dateToString(conv._createdDate)}</span>
  <p class="messages-info">{formatConvDetails(conv)}</p>
</div>

<style>
  .main-info {
    width: 50%;
  }
  .main-info, .additiona-info {
    margin-left: 12px;
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
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
    margin-bottom: 4px;
  }
  .additiona-info {
    text-align: right;
  }
</style>
