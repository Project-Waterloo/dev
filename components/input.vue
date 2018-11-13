<!-- form controll component for inputs -->
<template>
    <div>
        <label><slot/></label>
        <div class="form">
        <input
        v-if="controlType === 'input'"
        :value="value"
        @input="$emit('input',$event.target.value)"
        >
        <textarea
        v-if="controlType === 'textarea'"
        :value="value"
        @input="$emit('input',$event.target.value)"
        ></textarea>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AppInputControl',
    props: {
        controlType: {
            type: String,
            default: 'input'
        },
        value: {
            type: String,
            default: ''
        }
    }
}
</script>
<style scoped>
.form {
    margin:20px 0;
}
</style>
