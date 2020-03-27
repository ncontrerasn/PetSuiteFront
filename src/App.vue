<template>
  <div id="app">
    <Navbar></Navbar>
    <Carousel></Carousel>
  </div>
</template>

<script>
import  Navbar  from "./components/navbar/index.vue"
import  Carousel  from "./components/carousel/index.vue"

export default {
  name: 'App',
  components: {
    Navbar,
    Carousel
  },
  data(){
    return{
    }
  }
}
</script>

<style>

</style>
