<script>
  import NewsCard from './NewsCard.vue';
  export default {
    name: 'LatestNews',
    components: {
      NewsCard
    },
    props: {
      news: Array
    }
  }
</script>

<template>
  <section>
    <div class="container my-5 py-5">
      <div class="section-info px-5 pb-2">
        <h3 class="mb-3">Latest News</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div class="news-display d-flex-j-between py-5 my-5">
        <div class="main-news">
          <div class="card squared">
            <NewsCard :news="news[0]" />
          </div>
        </div>
        <div class="more-news d-flex-j-between">
          <div class="card squared p-3">
            <NewsCard :news="news[1]" />
          </div>
          <div class="card squared p-3">
            <NewsCard :news="news[2]" />
          </div>
          <div class="card squared p-3">
            <NewsCard :news="news[3]" />
          </div>
          <div class="card squared p-3">
            <NewsCard :news="news[4]" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>  

<style lang="scss" scoped>
  @use '../../../scss/general/vars' as *;
  section {
    .container {
      .section-info{
        border-left: 2px solid $primary-green;
        border-bottom: 2px solid $primary-light-blue;
        h3 {
          font-weight: bold;
        }
      }
      .news-display {
        .main-news, .more-news {
          width: 48%;
        }
        .squared {
          &::after {
            content: '';
            padding-top: 100%;
          }
        }
        .main-news {
          .card {
            width: 100%;
          }
        }
        .more-news {
          flex-wrap: wrap;
          .card {
            width: 50%;
          }
        }
      }
    }
  }
</style>