<script>
  import Cta from './partials/header/Cta.vue';
  import MainHeader from './partials/header/MainHeader.vue';
  import Nav from './partials/header/Nav.vue';
  export default {
    name: 'Header',
    components: {
      Cta,
      MainHeader,
      Nav
    }
  }
</script>

<template>
  <header>
    <Cta />
    <MainHeader />
    <Nav />
  </header>
</template>  

<style lang="scss" scoped>
  
</style>