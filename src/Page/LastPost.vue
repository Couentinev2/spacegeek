<script>
  export default {
    name: 'blog-home',
    data() {
      return {
        page_title: 'Blog',
        posts: []
      }
    },
    methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 3
        }).then(res => {
          this.posts = res.data.data
        })
      }
    },
    created() {
      this.getPosts()
    }
  }

const butter = Butter('589c1da914e9b5982fa129c50f9e720c0422926f');

butter.post.list({page: 1, page_size: 3}).then(function(response) {
  console.log(response)
})

</script>


<template>
<div class="lastpost">
    <div class="wild-standart">
    <h1>Our Last posts</h1>


  <div class="home-last-blog-post " id="blog-home">
      <!-- Create `v-for` and apply a `key` for Vue. Here we are using a combination of the slug and index. -->
      <div
        v-for="(post,index) in posts"
        :key="post.slug + '_' + index"
      >
        <router-link :to="'/blog/' + post.slug">
          <article class="media">
            <figure>
              <!-- Bind results using a `:` -->
              <!-- Use a `v-if`/`else` if there is a `featured_image` -->
              <img
                v-if="post.featured_image"
                :src="post.featured_image"
                alt=""
              >
              <img
                v-else
                src="http://via.placeholder.com/250x250"
                alt=""
              >
            </figure>
            <h2>{{ post.title }}</h2>
            <p>{{ post.summary }}</p>
          </article>
        </router-link>
      </div>
  </div>


    </div>
</div>
</template>



