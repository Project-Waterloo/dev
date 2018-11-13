<!-- PostList generates a list of posts-->
<template>
    <div>
        <section class="latest-posts">
            <PostPreview
            v-for="post in posts"
            :key="post.id" 
            :id="post.id" 
            :thumbnail="post.thumbnail"
            :title="post.title" 
            :previewText="post.previewText"/>
            
        </section>
    </div>
</template>
<script>
import PostPreview from '~/components/post-previews.vue'
export default {
    components: {
        PostPreview
    },
    //props are properties which are set from outside the component, here, posts must be an array that comes from
    //outside of the component
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>
<style scoped>
.latest-posts {
  text-align: center;
}
</style>