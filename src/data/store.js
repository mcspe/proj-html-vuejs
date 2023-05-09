import { reactive } from 'vue';
export const store = reactive({
  headerData: {
    topMovie: 'King Star',
    socialIcons: [
      'fa-facebook-f',
      'fa-twitter',
      'fa-linkedin-in',
      'fa-instagram',
      'fa-google-plus-g',
      'fa-pinterest'
    ],
    logo: '/cropped-logo.png',
    selectOptions: [
      'All Movie Categories',
      'Coming Soon',
      'Latest Movie',
      'Top Rating',
      'TV Series'
    ]
  }
});