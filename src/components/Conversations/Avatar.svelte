<script>
  import { USER_AVATAR } from '../../constants.js';
  export let userAvatar = '';
</script>

<img class="avatar user-avatar" src={userAvatar || USER_AVATAR} alt="User avatar">


<style>
  .user-avatar {
      position: inherit;
      width: 45px;
      height: 45px;
      object-fit: cover
    }
</style>