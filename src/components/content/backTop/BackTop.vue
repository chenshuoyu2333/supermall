<template>
  <div class="back-top" >
    <img src="~assets/img/common/top.png" alt="" @click="$emit('click')">
  </div>
</template>

<script>
  export default {
    name: "BackTop",

  }
</script>

<style scoped>
  .back-top {
    position: fixed;
    z-index: 101;
    right: 8px;
    bottom: 55px;
  }

  .back-top img {
    width: 43px;
    height: 43px;
  }
</style>
