<script>
  export default {
    name: 'VideoThumb',
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
  <div class="thumb-wrapper d-flex-j-between-a-center m-3">
    <div class="img-wrapper mr-3">
      <img 
        :src="getImg(movie.hrefThumb)" 
        :alt="movie.title">
    </div>
    <div class="info-wrapper p-3">
      <h5>{{ movie.title }}</h5>
      <span class="my-2">{{ movie.views }} Views</span>
      <div class="d-flex-j-between">
        <span>{{ movie.release }}</span>
        <span>{{ movie.length }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../../../scss/general/vars' as *;
  .thumb-wrapper {
    cursor: pointer;
    .img-wrapper {
      max-width: 100px;
    }
    .info-wrapper {
      h5, &>span {
        font-weight: bold;
      }
      &>span {
        display: inline-block;
        font-size: .8rem;
      }
    }
  }
</style>