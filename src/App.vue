<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
  font-family: 'Encode Sans Expanded', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;  
}
h3{
  padding-bottom: 30px;
  }
</style>
