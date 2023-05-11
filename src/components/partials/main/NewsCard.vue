<script>
  export default {
    name: 'NewsCard',
    props: {
      news: Object
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
      :src="getImg(news.href)" 
      :alt="news.title"
      class="transition-3">
    <div class="overlay-mask transition-3"></div>
    <div class="overlay">
      <span class="date mt-5 p-3">
        {{ news.date }}
      </span>
      <div class="card-info px-5">
        <h3 class="my-5">{{ news.title }}</h3>
      </div>
      <div class="cta d-flex-j-between py-3 mt-5 mb-3">
        <button class="left p-3">Details</button>
        <button class="right p-3">Share</button>
      </div>
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
    overflow: hidden;
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
      .date {
        position: absolute;
        display: inline-block;
        background: $primary-green;
        border-radius: 1.5rem 0 0 1.5rem;
        right: -50%;
        transition: all .5s ease-out;
      }
      .card-info {
        position: absolute;
        bottom: 20%;
        transition: all .5s ease-out;
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
        background: linear-gradient($primary-green 0%, $primary-light-blue 100%);
        opacity: .3;
      }
      .overlay {
        .date {
          right: 0;
          transition: all .5s ease-out;
        }
      }
    }
  }
</style>