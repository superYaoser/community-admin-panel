<template>
<div id="MainContainer">
  <div class="main el-card is-always-shadow is-hover-shadow">
    <slot name="default">

    </slot>
  </div>
</div>
</template>

<script>
export default {
  name: "MainContainer"
}
</script>

<style scoped>
  #MainContainer{
    padding: 60px 10px 10px 230px;
    width: calc(100% - 240px);
    height: calc(100% - 70px);
    background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fe034dcbd7ee791742c80becb6e8862fd08f5026c.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666875716&t=61b20eeaa28f80efcabaaf4228d02705");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .main{
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    background-color: rgba(255, 255, 255, 0.80);
    border-radius: 6px;
    padding: 20px;
  }
</style>
