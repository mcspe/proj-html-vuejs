<script>
  import {store} from '../data/store'
  import Jumbotron from './partials/main/Jumbotron.vue';
  import NewMovie from './partials/main/NewMovie.vue';
  import MoviePlaylist from './partials/main/MoviePlaylist.vue';
  import JumboComingSoon from './partials/main/JumboComingSoon.vue';
  import MovieNavigator from './partials/main/MovieNavigator.vue';
  import LatestNews from './partials/main/LatestNews.vue';
  import Subscribe from './partials/main/Subscribe.vue';
  export default {
    name: 'Main',
    components: {
      Jumbotron,
      NewMovie,
      MoviePlaylist,
      JumboComingSoon,
      MovieNavigator,
      LatestNews,
      Subscribe
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
    <MovieNavigator :movies="store.newMovies" />
    <LatestNews :news="store.news" />
    <Subscribe />
  </main>
</template>  

<style lang="scss" scoped>
  
</style>