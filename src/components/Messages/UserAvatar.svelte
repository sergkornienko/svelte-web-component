<script>
  import { USER_AVATAR } from '../../constants.js';
  export let src = '';
</script>

<img class="avatar user-avatar" src={src || USER_AVATAR} alt="User avatar">


<style>
  .user-avatar {
    right: -40px;
  }
  img {
    background: url(https://static.wixstatic.com/media/e3b156_3d201b5439cc4306b29eec0c64e816b1~mv2.png);
    background-repeat: no-repeat;
    background-size: 24px;
  }
</style>