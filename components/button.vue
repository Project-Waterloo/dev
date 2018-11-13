<!-- button component -->
<template>
    <button
    class="button"
    ><slot/></button>
</template>
<script>
export default {
    name: 'AppButton'
}
</script>
<style scoped>
.button {
    background-color:black;
    color:white;
    padding:15px;
}
</style>
