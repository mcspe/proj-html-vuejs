<script>
  export default {
    name: 'Jumbotron',
    props: {
      JumboMedia: Array
    },
    data() {
      return {
        jumboHeight: 0,
        isActive: false,
        activeSLide: 0
      }
    },
    methods: {
      getImg(img) {
        return new URL('/' + img, import.meta.url).href;
      },
      toggleSlide() {
        this.isActive = !this.isActive;
        this.activeSLide = (this.isActive) ? 1 : 0;
      }
    },
    computed: {
      // getHeight() {
      //   return this.jumboHeight;
      // }
    },
    mounted() {
      // setInterval(() => {
      //   const container = document.querySelector('.jumbo-container');
      //   this.jumboHeight = container.offsetHeight + 'px';
      //   console.log(container.offsetHeight);
      // }, 1000);
    }
  }
</script>

<template>
  <section>
    <div 
      class="jumbo-container"
      v-for="(jumbo, i) in JumboMedia"
      :key="i"
      :class="{'slide' : !(i%2), 'active' : i === activeSLide}">
      <img 
        :src="getImg(jumbo.href)" 
        :alt="jumbo.alt">
      <div class="overlay d-flex-j-between-a-center p-5">
        <button class="hover-green p-3" @click="toggleSlide"><font-awesome-icon :icon="['fas', 'angles-left']" /></button>
        <div class="overlay-text d-flex-col-a-center">
          <h5>{{ jumbo.jumboSubtitle }}</h5>
          <h1 class="my-3">{{ jumbo.jumboTitle }} <strong>{{ jumbo.jumboTitleSpecial }}</strong></h1>
          <p>{{ jumbo.jumboText }}</p>
          <button class="hover-white px-3 py-2 my-3">Read more</button>
        </div>
        <button class="hover-green p-3" @click="toggleSlide"><font-awesome-icon :icon="['fas', 'angles-right']" /></button>
      </div>
    </div>
  </section>
</template>  

<style lang="scss" scoped>
  @use '../../../scss/general/vars' as *;
  section {
    // z-index: -1;
    position: relative;
    height: 100vh;
    .jumbo-container {
      position: absolute;
      height: 100%;
      opacity: 0;
      transition: all .5s linear;
      &.active {
        opacity: 1;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        .overlay-text {
          width: 40%;
          text-align: center;
          translate: 25%;
          h1 {
            text-transform: uppercase;
            strong {
              font-weight: normal;
              color: $primary-green;
            }
          }
          p {
            width: 85%;
          }
        }
        .hover-green {
          font-size: 1.5rem;
          transition: all .3s linear;
          &:hover {
            background: rgba(0, 0, 0, .4);
            border-radius: 50%;
            color: $primary-green;
          }
        }
        .hover-white {
          background: $primary-green;
          font-weight: bold;
          border-radius: 1.5rem;
          transition: all .2s linear;
          &:hover {
            background: white;
            color: black;
          transition: all .2s linear;
          }
        }
      }
    }
  }
</style>