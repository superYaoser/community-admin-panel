<template>
  <div class="container">
    <Side></Side>
    <Header></Header>
    <MainContainer>

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

</style>
