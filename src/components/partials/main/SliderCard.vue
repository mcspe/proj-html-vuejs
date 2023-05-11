<script>
  export default {
    name: 'SliderCard',
    props: {
      movie: Object
    },
    methods: {
      getImg(img) {
        return new URL('/' + img, import.meta.url).href;
      }
    }
  }
</script>

<template>
  <div class="card-wrapper transition-3">
    <img 
      :src="getImg(movie.href)" 
      :alt="movie.title"
      class="transition-3">
    <div class="overlay-mask transition-3"></div>
    <div class="overlay">
      <span class="length mt-5 p-3">
        {{ movie.length }}
      </span>
      <span class="rating mt-5 p-3">
        <span><font-awesome-icon :icon="['fas', 'star']" /></span>
        {{movie.ratings}}/10
      </span>
      <div class="card-info px-5">
        <h3 class="my-5">{{ movie.title }}</h3>
        <h4 class="my-3">{{ movie.category }}</h4>
        <div class="card-hide">
          <p>{{ movie.release }}</p>
          <p>
            <span
              v-for="(genre, i) in movie.genres"
              :key="i">
              {{ genre }} &nbsp;
            </span> 
          </p>
        </div>
      </div>
      <div class="cta d-flex-j-between py-3 mt-5 mb-3">
        <button class="left p-3">Details</button>
        <button class="right p-3">{{movie.views}} Views</button>
      </div>
      <button class="play transition-3"><font-awesome-icon :icon="['far', 'circle-play']" /></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../../../scss/general/vars' as *;
  .transition-3 {
    transition: all .3s linear;
  }
  .card-wrapper {
    position: relative;
    border-radius: 2rem;
    overflow: hidden;
    width: 300px;
    .overlay-mask {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background: black;
      opacity: .5;
    }
    .overlay {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      .rating, .length {
        position: absolute;
        display: inline-block;
      }
      .length {
        background: $primary-green;
        border-radius: 0 1.5rem 1.5rem 0;
        left: -30%;
        transition: all .5s ease-out;
      }
      .rating {
        right: 0;
        &>span {
          color: $primary-green;
        }
      }
      .play {
        font-size: 3rem;
        position: absolute;
        left: 50%;
        top: -15%;
        translate: -50%;
        &:hover {
          color: $primary-green;
        }
      }
      .card-info {
        position: absolute;
        bottom: 7%;
        transition: all .5s ease-out;
        .card-hide {
          position: relative;
          bottom: -200%;
          transition: all .5s ease-out;
        }
      }
      .cta {
        position: absolute;
        width: 100%;
        bottom: 0;
        button {
          background: $primary-dark-blue;
          font-weight: bold;
          transition: all .2s linear;
          &.left {
            border-radius: 0 1.5rem 1.5rem 0;
          }
          &.right {
            border-radius: 1.5rem 0 0 1.5rem;
          }
          &:hover {
            background: $primary-green;
          }
        }
      }
    }
    &:hover {
      img {
        scale: 1.3;
      }
      .overlay-mask {
        background: $primary-green;
        opacity: .3;
      }
      .overlay {
        .length {
          left: 0;
          transition: all .5s ease-out;
        }
        .play {
          top: 40%;
          transition: all .5s ease-out;
        }
        .card-info {
          bottom: 20%;
          transition: all .5s ease-out;
          .card-hide {
            bottom: 0;
            transition: all .5s ease-out;
          }
        }
      }
    }
  }
</style>