<script>
  import {store} from '../data/store'
  import Jumbotron from './partials/main/Jumbotron.vue';
  import NewMovie from './partials/main/NewMovie.vue';
  import MoviePlaylist from './partials/main/MoviePlaylist.vue';
  import JumboComingSoon from './partials/main/JumboComingSoon.vue';
  export default {
    name: 'Main',
    components: {
      Jumbotron,
      NewMovie,
      MoviePlaylist,
      JumboComingSoon
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
    <MoviePlaylist :movies="store.newMovies" />
    <JumboComingSoon />
    
  </main>
</template>  

<style lang="scss" scoped>
  
</style>