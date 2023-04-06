<template>
  <div id="header">
  <div class="left">
    <span style="font-size: 20px">文章管理</span>
  </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
#header{
  padding: 0 20px;
  margin-left: 220px;
  height: 50px;
  background: #ffffff;
  border-bottom: 1px #e9e9e9 solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.right{
  height: 20px;
  width: 70px;
  background: #b71b1b;
}
</style>
