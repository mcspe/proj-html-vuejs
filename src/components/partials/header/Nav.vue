<script>
  import { store } from '../../../data/store';
  export default {
    name: 'Nav',
    data() {
      return {
        store,
        isHoverCartBtn: false
      }
    }
  }
</script>

<template>
  <section>
    <div class="container d-flex-j-between-a-center py-5">
      <nav>
        <ul class="d-flex">
          <li
            v-for="(item, i) in store.headerData.navBar"
            :key="i"
            :class="'item' + i">
            <a href="#" class="hover-green py-3 mr-5">
              {{ item.label }}
              <span v-if="item.dropdownOpt"><font-awesome-icon :icon="['fas', 'caret-down']" /></span>
            </a>
            <div v-if="item.dropdownOpt" :class="'drop-box' + i" class="p-3">
              <ul class="d-flex-col" v-if="item.dropdownOpt">
                <li 
                  v-for="(dropItem, j) in item.dropdownOpt"
                  :key="j"
                  class="py-2"
                  :class="'inner-drop-item' + j">
                  <a href="#" class="hover-green" v-if="dropItem.length > 0">{{ dropItem }}</a>
                  <a href="#" class="hover-green" v-else>
                    {{ dropItem.label }}
                    <span><font-awesome-icon :icon="['fas', 'caret-right']" /></span>
                  </a>
                  <div v-if="dropItem.dropdownOpt" :class="'inner-drop-box' + j" class="p-3">
                    <ul class="d-flex-col">
                      <li
                        v-for="(innerDropItem, k) in dropItem.dropdownOpt"
                        :key="k"
                        class="py-2">
                        <a href="#" class="hover-green">{{ innerDropItem }}</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <div class="cart">
        <button @mouseenter="isHoverCartBtn = true" @mouseleave="isHoverCartBtn = false">
          <font-awesome-icon :class="{'hover-green' : isHoverCartBtn}" :icon="['fas', 'basket-shopping']" />
          <span class="cart-counter">{{ store.cartData.items.length }}</span>
        </button>
        <div class="cart-info p-5" :class="{'hover' : isHoverCartBtn}">
          <p v-if="store.cartData.items.length === 0">No products in the cart.</p>
          <div v-else>
            <!-- inserire prodotti aggiunti al carrello -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>  

<style lang="scss" scoped>
  @use '../../../scss/general/vars' as *;
  .container {
    .hover-green {
      transition: all .5s linear;
      &:hover {
        color: $primary-green;
        transition: all .3s linear;
      }
    }
    [class ^= "drop-box"] {
      display: none;
      z-index: 5;
    }
    [class ^= "item"] {
      position: relative;
      a {
        font-size: 1.1rem;
        font-weight: bold;
      }
      &:hover [class ^= "drop-box"] {
        display: block;
        position: absolute;
        width: 250%;
        background: $primary-dark-blue;
        & a {
          font-size: .9rem;
        }
        [class ^= "inner-drop-box"] {
          display: none;
          &:hover [class ^= "inner-drop-box"] {
            display: block;
            // position: absolute;
            // top: 10%;
            // right: calc(-100%);
            // transform: translateX(-45%);
            width: 100%;
            background: $primary-dark-blue;
          }
        }
      }
    }
    .cart {
      position: relative;
      .cart-counter {
        position: relative;
        display: inline-block;
        background: $primary-green;
        font-size: .8rem;
        width: 15px;
        height: 15px;
        line-height: 15px;
        border-radius: 50%;
        translate: -50% -75%;
      }
      .cart-info {
        // display: none;
        position: absolute;
        background: white;
        color: black;
        width: 15rem;
        translate: -90% 100%;
        opacity: 0;
        transition: all .2s ease-in;
        &.hover {
          transition: all .5s ease-in;
          opacity: 1;
          translate: -90%;
        }
      }
    }
  }
</style>