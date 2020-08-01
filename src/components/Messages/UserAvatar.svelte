<script>
  import { USER_AVATAR } from '../../constants.js';
  export let src = '';
</script>

<img class="avatar user-avatar" src={src || USER_AVATAR} alt="User avatar">


<style>
  .user-avatar {
    right: -40px;
  }
</style>