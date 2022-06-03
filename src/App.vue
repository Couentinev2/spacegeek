import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express'

<template>
  <header>
  <a class="logo" href='/'>Space for Geeks</a>
    <c-navigation />
  </header>

<router-view :key="$route.fullPath" />
     <component :is="currentView" /> 
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
