<!-- form component, not functional -->
<template>
    <form @submit.prevent="onSubmit">
                <InputControl v-model="editedPost.title">Title</InputControl>
                <InputControl controlType="textarea" v-model="editedPost.content">Post Content</InputControl> 
                <InputControl v-model="editedPost.thumbnailLink">Thumbnail</InputControl>
                <ButtonControl type="submit">Submit</ButtonControl>
            </form>
</template>
<script>
import InputControl from '~/components/input.vue'
import ButtonControl from '~/components/button.vue'
export default {
    components: {
        InputControl,
        ButtonControl
    },
    props: {
        post: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            editedPost: this.post ? {...this.post} : {
                title: '',
                content: '',
                thumbnailLink: ''
            }
        }
    },
    methods: {
        onSubmit() {
            this.$emit('submit', this.editedPost)
        }
    }
}
</script>