<template>
  <MainIndex />
</template>

<script>
import MainIndex from './components/MainIndex.vue'

export default {
  name: 'App',
  components: {
    MainIndex
  }
}
</script>

<style>
#app {
  font-family:  Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #98a0a8;
  /* padding: 24px; */
  /* background: #2c3e50; */
  height: 100vh;
  width: 100%;
}
</style>
