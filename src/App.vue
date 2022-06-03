<script setup>
import Footer from './components/Footer.vue'
</script>

<template>
  <header>
  <a class="logo" href='/'>Space for Geeks</a>
    <c-navigation />
  </header>

<router-view :key="$route.fullPath" />
     <component :is="currentView" /> 


    <Footer />

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import './assets/base.css';
  @import './assets/main.css';
</style>
