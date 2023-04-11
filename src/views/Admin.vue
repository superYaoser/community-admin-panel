<template>
  <div id="Admin">
    <div class="container">
      <Side :active="'1'" @currentRouter-event="goToRouter"></Side>
      <Header :title="!headerTitle? '主页':headerTitle"></Header>
      <MainContainer>
        <div class="content">
          <router-view></router-view>
        </div>
      </MainContainer>
    </div>
  </div>
</template>
<script>
import Side from '@/components/side/Side'
import Header from '@/components/header/Header'
import MainContainer from '@/components/MainContainer/MainContainer'
import {useRouter} from 'vue-router'
import {ref} from "vue";

export default {
  name: "admin",
  components: {
    MainContainer,
    Side,
    Header,
  },
  setup() {
// 导入路由
    const router = useRouter()
// 定义一个响应式变量 headerTitle
    let headerTitle = ref()
// 定义一个函数 goToRouter，用于跳转到指定路由，并设置标题
    const goToRouter = (data) => {
      router.push(data.router) // 跳转到指定路由
      headerTitle.value = data.title // 设置标题
    }
    return {
      goToRouter, headerTitle
    }
  },
}
</script>

<style scoped>
#Admin, .content {
  width: 100%;
  height: 100%;
}
</style>
