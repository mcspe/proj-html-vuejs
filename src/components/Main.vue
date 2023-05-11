<script>
  import {store} from '../data/store'
  import Jumbotron from './partials/main/Jumbotron.vue';
  import NewMovie from './partials/main/NewMovie.vue';
  export default {
    name: 'Main',
    components: {
      Jumbotron,
      NewMovie
    },
    data() {
      return {
        store
      }
    }
  }
</script>

<template>
  <main>
    <Jumbotron :JumboMedia="store.jumbotron" />
    <NewMovie :movies="store.newMovies" />
  </main>
</template>  

<style lang="scss" scoped>
  
</style>