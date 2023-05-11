<script>
  import { store } from '../data/store.js';
  import Nav from './partials/footer/Nav.vue';
  import Credits from './partials/footer/Credits.vue';
  export default {
    name: 'Footer',
    components: {
      Nav,
      Credits
    },
    data() {
      return {
        store
      }
    }
  }
</script>

<template>
  <footer>
    <Nav :info="store.footerData" />
    <Credits />
  </footer>
</template>  

<style lang="scss" scoped>
  
</style>