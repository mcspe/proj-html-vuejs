<script>
  import SliderCard from './SliderCard.vue';
  export default {
    name: 'MoviePlaylist',
    components: {
      SliderCard
    },
    props: {
      movies: Array
    },
    computed: {
      getCategory() {
        const categories = this.movies.map((movie) => {
          return movie.category;
        });
        const category = [...new Set(categories)];
        category.unshift('All');
        return category;
      }
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
      <nav class="py-5">
        <ul>
          <li
            v-for="(category, i) in getCategory"
            :key="i">
            <button class="cat-nav mr-5">{{ category }}</button>
          </li>
        </ul>
      </nav>
      <div class="card-container d-flex-j-between my-5 py-5">
        <div 
          class="card d-flex-j-center-a-center"
          v-for="(movie, i) in movies"
          :key="i">
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
      .section-info{
        border-left: 2px solid $primary-green;
        border-bottom: 2px solid $primary-light-blue;
        h3 {
          font-weight: bold;
        }
      }
      nav {
        .cat-nav {
          font-size: 1rem;
          transition: all .3s ease-out;
          &::after {
            content: '';
            display: block;
            margin-top: 2px;
            height: 1px;
            width: 0;
            background: $primary-green;
          }
          &:hover {
            transition: all .3s ease-out;
            color: $primary-green;
            &::after {
              transition: all .3s ease-out;
              width: 100%;
            }
          }
        }
      }
      .card-container {
        flex-wrap: wrap;
        .card {
          width: 32%;
          height: 450px;
        }
      }
    }
  }
</style>