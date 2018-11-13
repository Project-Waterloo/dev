<template>
    <div style="text-align:center">
        <div style="margin:0 auto;width:200px;height:200px;" 
        :style="{backgroundImage: 'url('+loadedPost.thumbnail + ')'}"></div>
        <h1> title: {{loadedPost.title}} </h1>
        <h2> preview text: {{loadedPost.previewText}} </h2>
        <p>     </p>
        <p>post id: {{loadedPost.id}} </p>
    </div>
</template>
<script>
export default {
    computed: {
      loadedPost() {
        return this.$store.getters.loadPostById(this.$route.params.id)
      }
    },
}
</script>
