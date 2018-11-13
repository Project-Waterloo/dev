<template>
  <div>
    <Header/>
    <nuxt/>
  </div>
</template>

<script>
import Header from '~/components/header.vue'
export default {
  components: {
    Header
  }
}
</script>


<style>

html {
  font-family: 'Roboto', sans-serif; 
}

body {
  margin-top:0;
}
</style>
