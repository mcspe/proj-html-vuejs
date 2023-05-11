<script>
  export default {
    name: 'Credits'
  }
</script>

<template>
  <section>
    <div class="container d-flex-j-between-a-center py-3">
      <div class="legal">
        <a href="#" class="hover-green mr-5">Terms and Condition</a>
        <a href="#" class="hover-green mr-5">Policy</a>
        <a href="#" class="hover-green mr-5">About</a>
      </div>
      <div class="credits">
        <font-awesome-icon :icon="['far', 'copyright']" />
        <a class="link mx-1" href="https://github.com/mcspe">@mcspe</a>
        <span>All Rights Reserved</span>
      </div>
    </div>
  </section>
</template>  

<style lang="scss" scoped>
  @use '../../../scss/general/vars' as *;
  .hover-green {
    transition: all .3s linear;
    &:hover {
      color: $primary-green;
      transition: all .3s linear;
    }
  }
  .credits {
    font-size: .8rem;
    .link {
      transition: all .3s linear;
      color: $primary-green;
      &:hover {
        color: white;
        transition: all .3s linear;
      }
    }
  }
</style>