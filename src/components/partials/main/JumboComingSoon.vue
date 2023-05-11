<script>
  export default {
    name: 'JumboComingSoon'
  }
</script>

<template>
  <section class="mb-5">
    <img src="/coming-bg.jpg" alt="ComingSoon">
    <div class="overlay absolute-full d-flex-a-center">
      <div class="overlay-mask absolute-full"></div>
      <div class="overlay-text">
        <h4>Coming soon movie</h4>
        <h2 class="my-3">Max Still</h2>
        <div class="disclaimer py-2 px-5">
          <h4 class="mb-3">Jon Player <strong>&</strong> Emily Rose</h4>
          <h4>the countdown is finished!</h4>
        </div>
      </div>
    </div>
  </section>
</template>  

<style lang="scss" scoped>
  @use '../../../scss/general/vars' as *;
  section {
    height: 85vh;
    position: relative;
    .absolute-full {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .overlay-mask {
      background: rgba($color: $primary-dark-blue, $alpha: .5);
    }
    .overlay-text {
      position: absolute;
      left: 50%;
      text-transform: uppercase;
      text-align: center;
      z-index: 1;
      h2 {
        font-size: 60px;
      }
      &>h4 {
        color: $primary-green;
        font-weight: bold;
      }
      .disclaimer {
        background: $primary-dark-blue;
        strong {
          font-weight: normal;
          color: $primary-green;
        }
      }
    }
  }
</style>