<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TheComponent1 />
</template>

<script>
import TheComponent1 from './components/TheComponent1.vue';

export default {
  name: 'App',
  components: {
    TheComponent1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
