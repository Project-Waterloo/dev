<!-- PostPreview is an individual post item in the PotsList-->
<template>
<!-- nuxt-link is a special link that does send another request to the server for a new page

    this links to a dynamic path which is a page for a post-->
    <nuxt-link :to="'posts/' + this.id">
        <article class="post-preview">
          <div class="post-thumbnail" :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
          <div class="post-content">
            <h1>{{ title }}</h1>
            <p>{{previewText}}</p>
          </div>
        </article>
      </nuxt-link>
</template>

<script>
export default {
    name: 'PostPreview',

    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        previewText: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
    },
}
</script>


<style scoped>
.post-preview {
  background-color:lightgray;
  padding:20px;
  display:inline-block;
  margin:20px 50px;
}
.post-thumbnail {
  width:200px;
  height:200px;
}
.post-content {
  color:black;
}
</style>

