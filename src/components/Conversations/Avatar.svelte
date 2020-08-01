<script>
  import { USER_AVATAR } from '../../constants.js';
  export let userAvatar;
</script>

<img class="avatar user-avatar" src={userAvatar || USER_AVATAR} alt="User avatar">

<style>
  .user-avatar {
      position: inherit;
      width: 45px;
      height: 45px;
      object-fit: cover;
      background: url(https://static.wixstatic.com/media/e3b156_3d201b5439cc4306b29eec0c64e816b1~mv2.png);
      background-repeat: no-repeat;
      background-size: 45px;
    }
</style>
