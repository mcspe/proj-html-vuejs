<script>
  import SliderCard from './SliderCard.vue';
  export default {
    name: 'NewMovie',
    components: {
      SliderCard
    },
    props: {
      movies: Array
    }
  }
</script>

<template>
  <section>
    <div class="container my-5 py-5">
      <div class="slider-control d-flex-j-between-a-center py-5">
        <div class="slider-info px-5 pb-2">
          <h3 class="mb-3">New Movie</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="slider-btn">
          <button class="hover-green p-2 m-2"><font-awesome-icon :icon="['fas', 'angles-left']" /></button>
          <button class="hover-green p-2 m-2"><font-awesome-icon :icon="['fas', 'angles-right']" /></button>
        </div>
      </div>
      <div class="slider-display d-flex-j-between-a-center py-5 my-5">
        <div 
          v-for="(movie, i) in movies"
          :key="i"
          class="movie-card d-flex-j-center-a-center my-5"
          :class="['item' + i, {'active' : ((i===1) || (i === 2) || (i===3))}]">
          <SliderCard :movie="movie" />
        </div>
      </div>
    </div>
  </section>
</template>  

<style lang="scss" scoped>
  @use '../../../scss/general/vars' as *;
  section {
    .container {
      .slider-control {
        .slider-info{
          flex-grow: 1;
          width: auto;
          border-left: 2px solid $primary-green;
          border-bottom: 2px solid $primary-light-blue;
          h3 {
            font-weight: bold;
          }
        }
        .slider-btn {
          .hover-green {
            color: $primary-green;
            font-size: .9rem;
            border-radius: 50%;
            border: 1px solid $primary-light-blue;
            &:hover {
              background: $primary-green;
              color: white;
            }
          }
        }
      }
      .slider-display {
        position: relative;
        width: 100%;
        flex-wrap: wrap;

        & .movie-card {
          display: none;
          &>* {
            border-radius: 2rem;
            overflow: hidden;
          }
        }
        & .movie-card.active {
          display: flex;
          width: 35%;
          scale: 1.1;
        }
        & .movie-card.item2 {
          width: 30%;
          scale: 1.3;
        }
      }
    }
  }
</style>