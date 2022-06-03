<template>
   <!-- <a href="/">Home</a> |
  <a href="/blog">Blog</a> -->
  <!-- <hr> -->

  <router-link :to="{ path: '/' }">
    Home
  </router-link>

  <router-link :to="{ name: 'blog-home' }">
    Blog
  </router-link>

  <router-link :to="{ name: 'AboutIndex' }">
    About
  </router-link>
</template>
