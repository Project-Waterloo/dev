<!-- This is the home page. all the pages are .vue files which basically are vue components (reusable code)
however dont mistake the files in the 'pages' folder with the 'components' folder. the files in 'pages' arent
reusable code. every .vue file must contain a template and inside an html component. script and style can also be added-->
<template>

  <div class="home-page">

    <section class="intro">
      <h1>HOME PAGE</h1>
      <h3>Our latest Posts</h3>
    </section>

    <!-- 'Postlist' is a vue component. Its reusable code and can be used multiple times through out any page file
    as long as its imported! (in script section)
    
    :posts is a binded vue attribute where loadedPosts (mentioned in the script section) is sent to the PostList component as a 'posts' property-->
    <PostList :posts="loadedPosts"/>

  </div>

</template>

<script>
  //this imports the PostList component from the components folder
  import PostList from '~/components/post-list.vue'

  export default {
    //'components' initialize the components you want to use in the page. here PostList is initialized.
    components: {
      PostList
    },
    //'computed' is where you can write functions however they are only executed if some something
    //involved with the function changes (a paramter or data inside)
    computed: {

      //returns data from the 'store' file. the data is an array of objects, which are posts
      loadedPosts() {
        return this.$store.getters.loadedPosts
      }
    }
  }
  
</script>

<!-- style section, it says scoped to make sure all the styles only affect the things in this file-->
<style scoped>
.intro {
  text-align:center;
}
</style>
