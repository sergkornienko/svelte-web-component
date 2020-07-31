<script>
  const defaultURL = 'https://static.wixstatic.com/media/e3b156_3d201b5439cc4306b29eec0c64e816b1~mv2.png';
  export let src = '';
</script>

<img class="avatar user-avatar" src={src || defaultURL} alt="User avatar">


<style>
  .user-avatar {
    right: -40px;
  }
</style>