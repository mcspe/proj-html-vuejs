<script>
  export default {
    name: 'Nav',
    props: {
      info: Array
    },
    methods: {
      getImg(img) {
        return new URL('/' + img, import.meta.url).href;
      }
    }
  }
</script>

<template>
  <section>
    <div class="overlay-mask"></div>
    <div class="container d-flex-j-between my-5 py-5">
      <div 
        class="sections my-5 py-5"
        v-for="(section, i) in info"
        :key="i">
        <h4>{{ section.title }}</h4>
        <div class="content py-5">
          <div
            class="text"
            v-if="section.type === 'text'">
            <p>{{ section.content.text }}</p>
            <div class="button d-flex my-3">
              <a 
                href="#"
                v-for="(social, i) in section.content.socialIcons"
                :key="i"
                class="social-icons d-flex-j-center-a-center mr-3"
                :class="social">
                <font-awesome-icon :icon="['fab', social]" class="social-icon mx-2" />
              </a>
            </div>
          </div>
          <div
            class="nav"
            v-if="section.type === 'nav'">
            <ul class="d-flex-col">
              <li
                v-for="(item, i) in section.content.labels"
                :key="i"
                class="my-3 hover-green">
                <a href="#">{{ item }}</a>
              </li>
            </ul>
          </div>
          <div
            class="display"
            v-if="section.type === 'display'">
            <ul class="d-flex-col">
              <li
                v-for="(item, i) in section.content.posts"
                :key="i"
                class="my-3">
                <div class="card">
                  <img 
                    :src="item.href" 
                    :alt="item.title"
                    class="mr-2">
                    <div class="card-info p-2">
                      <a href="#" class="hover-green mb-3">{{ item.title }}</a>
                      <span>{{ item.date }}</span>
                    </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>  

<style lang="scss" scoped>
  @use '../../../scss/general/vars' as *;
  section {
    background: url('/ft-bg.jpg');
    position: relative;
    .overlay-mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba($color: $primary-light-blue, $alpha: .9);
    }
    .sections {
      width: 23%;
      z-index: 1;
      .social-icons {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        &:hover {
          border: 2px solid $primary-green;
        }
      }
      .fa-facebook-f {
        background: #3B5998;
      }
      .fa-twitter {
        background: #00ACEE;
      }
      .fa-linkedin-in {
        background: #0E76A8;
      }
      .fa-instagram {
        background: #C2212B;
      }
      .fa-pinterest {
        background: #b00a1b;
      }
      .hover-green {
        transition: all .3s linear;
        &:hover {
          color: $primary-green;
          transition: all .3s linear;
        }
      }
      & h4 {
        font-weight: bold;
        &::after {
          content: '';
          display: block;
          width: 2rem;
          height: 2px;
          margin-top: .2rem;
          background: white;
        }
      }
      .display {
        .card {
          img {
            max-width: 85px;
            float: left;
          }
        }
      }
    }
  }
</style>