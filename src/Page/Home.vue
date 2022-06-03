<script setup>
import LastPost from './LastPost.vue'
import LastInfo from './LastInfo.vue'
import Learning from './Learning.vue'
</script>

<template>

  <div class="hero">
  <div class= "wild-standart">
 <h1>Welcome to Space for Geeks</h1>
 <h2> Space made easy and fun</h2>
 </div>
</div>
   <h3>Their is currently {{ posts.number }} earthling in Space</h3>


    <LastPost />
    <LastInfo />
    <Learning />

    </template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`http://api.open-notify.org/astros.json`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}

</script>
