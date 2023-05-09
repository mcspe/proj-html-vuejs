<script>
  import { store } from '../../../data/store';
  export default {
    name: 'MainHeader',
    data() {
      return {
        store
      }
    }
  }
</script>

<template>
  <section>
    <div class="container d-flex-j-between-a-center py-3 mb-5">
      <div class="logo">
        <img src="/cropped-logo.png" alt="">
      </div>
      <div class="search-bar d-flex-j-end-a-center">
        <select class="p-3" name="categories" id="categories">
          <option
            v-for="(category, i) in store.headerData.selectOptions"
            :key="i"
            value="i">
            {{ category }}
          </option>
        </select>
        <input class="p-3" type="text" placeholder="Search ...">
        <button class="p-3">Search</button>
      </div>
    </div>
  </section>
</template>  

<style lang="scss" scoped>
  @use '../../../scss/general/vars' as *;
  section {
    border-bottom: 1px solid $primary-light-blue;
    .search-bar {
      width: 50%;
      * {
        font-size: 1rem;
      }
      select {
        background: none;
        border: 1px solid $primary-light-blue;
        width: 25%;
        color: $primary-light-grey;
        & option {
          color: black;
        }
      }
      input {
        background: none;
        border: none;
        border-top: 1px solid $primary-light-blue;
        border-bottom: 1px solid $primary-light-blue;
        width: 50%;
        color: $primary-green;
        &::placeholder {
          color: lighten($color: $primary-light-blue, $amount: 10) ;
          font-size: .9rem;
        }
        &:focus {
          outline: none;        
          &::placeholder {
            color: $primary-green;
          }
        }
      }
      button {
        background: $primary-green;
        border: 1px solid $primary-green;
        font-weight: bold;
      }
    }
  }
</style>