<script>
  import { store } from '../../../data/store.js';
  export default {
    name: 'Cta',
    data() {
      return {
        store
      }
    }
  }
</script>

<template>
  <div class="container d-flex-j-between-a-center">
    <div class="social my-3">
      <font-awesome-icon icon="fa-regular fa-envelope" class="mr-1" />
      <span>Superhit Top Movie </span>
      <span class="getTopMovie">** {{ store.topMovie }} **</span>
      <div class="social-icons mx-3">
        <a
          href="#"
          v-for="(social, i) in store.socialIcons"
          :key="i"
          
          :class="social">
          <font-awesome-icon v-if="social != 'fa-pinterest'" :icon="['fab', social]" class="social-icon mx-2" />
        </a>
      </div>
    </div>
    <div class="login">
      <button>
        <font-awesome-icon :icon="['fas', 'lock']" />
        <span class="ml-1">Login</span>
      </button>
    </div>
  </div>
</template>  

<style lang="scss" scoped>
  @use '../../../scss/general/vars' as *;
  .container {
    .social {
      .getTopMovie {
        color: $primary-green;
        font-weight: bold;
      }
      .social-icons {
        display: inline-block;
        .social-icon {
          font-size: .8rem;
          transition: all .5s linear;
          &:hover {
            color: $primary-green;
            transition: all .3s linear;
          }
        }
        .fa-facebook-f {
          color: #3B5998;
        }
        .fa-twitter {
          color: #00ACEE;
        }
        .fa-linkedin-in {
          color: #0E76A8;
        }
        .fa-instagram {
          color: #C2212B;
        }
        .fa-google-plus-g {
          color: #DB4A39;
        }
      }
    }
    .login button {
      transition: all .5s linear;
      &:hover {
        color: $primary-green;
        transition: all .3s linear;
      }
    }
  }
</style>