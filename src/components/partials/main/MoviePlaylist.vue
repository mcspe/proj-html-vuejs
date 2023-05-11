<script>
  import VideoThumb from './VideoThumb.vue';
  export default {
    name: 'MoviePlaylist',
    components: {
      VideoThumb
    },
    props: {
      movies: Array
    }
  }
</script>

<template>
  <section>
    <div class="container my-5 py-5">
      <div class="section-info px-5 pb-2">
        <h3 class="mb-3">New Movie</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div class="media-display my-5 py-5 d-flex-j-between">
        <div class="media-player">
          <img src="/maxresdefault.webp" alt="video preview">
        </div>
        <div class="media-thumb ml-5">
          <div class="header p-3">
            <h5>New Movie</h5>
            <span>Playing {{ movies.length }}</span>
          </div>
          <div class="thumbs">
            <VideoThumb 
              :movie="movie" 
              v-for="(movie, i) in movies"
              :key="i"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>  

<style lang="scss" scoped>
  @use '../../../scss/general/vars' as *;
  section {
    .container {
      .section-info{
        border-left: 2px solid $primary-green;
        border-bottom: 2px solid $primary-light-blue;
        h3 {
          font-weight: bold;
        }
      }
      .media-display {
        height: 100%;
        .media-player {
          width: 80%;
        }
        .media-thumb {
          background: $primary-light-blue;
          .header {
            border-bottom: 1px solid $primary-dark-blue;
            h5 {
              font-weight: bold;
            }
          }
          .thumbs {
            height: 600px;
            overflow: auto;
          }
        }
      }
    }
  }
</style>