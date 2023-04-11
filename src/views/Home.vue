<template>
  <div id="Home">
    <p style="width:300px;font-size:30px;color:#929292;margin: 20px auto;">主页暂时没有制作</p>
    <el-carousel style="border-radius:10px;width: 80%;height:100%;margin: 0 auto;" interval="1500"
                 indicator-position="outside" class="content__swiper" height="85%">
      <el-carousel-item v-for="item in 4" :key="item">
        <img justify="center" style="width:100%;height: 100%;object-fit: cover" :src="'../images/swiper/bu-'+item+'.png'"
             alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>

export default {
  name: "Home",

}
</script>

<style scoped>
#Home {
  width: 100%;
  height: 100%;
}
</style>
