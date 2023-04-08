<template>
  <div class="container">
    <Side></Side>
    <Header></Header>
    <MainContainer>
      <div class="content">
        <p style="width:300px;font-size:30px;color:#929292;margin: 20px auto;">主页暂时没有制作</p>

        <el-carousel style="border-radius:10px;width: 80%;height:100%;margin: 0 auto;" interval="1500" indicator-position="outside" class="content__swiper" height="85%">
          <el-carousel-item v-for="item in 4" :key="item">
            <img justify="center" style="width:100%;height: 100%;object-fit: cover" :src="'./images/swiper/bu-'+item+'.png'" alt="">
          </el-carousel-item>
        </el-carousel>

      </div>
    </MainContainer>
  </div>
</template>

<script>
import Side from '@/components/side/Side'
import Header from '@/components/header/Header'
import MainContainer from '@/components/MainContainer/MainContainer'

export default {
  name: "Home",
  components: {
    MainContainer,
    Side,
    Header,
  }
}
</script>

<style scoped>
.content{
  width: 100%;
  height: 100%;
}
</style>
