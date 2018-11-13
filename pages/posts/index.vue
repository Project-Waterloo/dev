
<template>
    <div style="text-align:center">
        <h1 style="text-align:center">Posts Page</h1>
        <PostList :posts="loadedPosts"/>

            <button @click="$router.push('/posts/new-post')">Create new Post</button>
    </div>
</template>
<script>

  import PostList from '~/components/post-list.vue'

  export default {
    components: {
      PostList
    },
    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      }
    }
  }
  
</script>
