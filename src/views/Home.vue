<template>
  <div class="container">
    <Side></Side>
    <Header></Header>
  </div>
</template>

<script>
import Side from '@/components/side/Side'
import Header from '@/components/header/Header'

export default {
  name: "Home",
  components: {
    Side,
    Header,
  }
}
</script>

<style scoped>

</style>
