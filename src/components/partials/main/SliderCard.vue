<script>
  export default {
    name: 'SliderCard'
  }
</script>

<template>
  <div class="card-wrapper transition-3">
    <img src="/movie1.jpg" alt="">
    <div class="overlay-mask transition-3"></div>
    <div class="overlay">
      <span class="length mt-5 p-3">
        2.30.00
      </span>
      <span class="rating mt-5 p-3">
        <span><font-awesome-icon :icon="['fas', 'star']" /></span>
        0/10
      </span>
      <button class="play transition-3"><font-awesome-icon :icon="['far', 'circle-play']" /></button>
      <div class="card-info px-5">
        <h3 class="my-5">Title</h3>
        <h4 class="my-3">Category</h4>
        <p>Release</p>
        <p>Genres</p>
      </div>
      <div class="cta d-flex-j-between py-3 mt-5 mb-3">
        <button class="left p-3">Details</button>
        <button class="right p-3">995 Views</button>
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
    border-radius: 2rem;
    overflow: hidden;
    max-width: fit-content;
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
        left: -20%;
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
        top: -10%;
        translate: -50%;
        &:hover {
          color: $primary-green;
        }
      }
      .card-info {
        position: absolute;
        bottom: 7%;
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
        }
      }
    }
  }
</style>