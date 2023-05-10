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
    ],
    navBar: [
      {
        label: 'Home',
        dropdownOpt: [
          'Home',
          'Home 2',
          'Home 3',
          'Home 4',
          'Home 5',
          'Home 6'
        ]
      },
      {
        label: 'Celebrity',
        dropdownOpt: [
          'Celebrity',
          'Celebrity Single'
        ]
      },
      {
        label: 'Movie',
        dropdownOpt: [
          'Movie Post',
          'Top Rate Movie',
          'Movie Category',
          'Single Movie'
        ]
      },
      {
        label: 'Page',
        dropdownOpt: [
          'Pricing Table',
          'Call to Action',
          'My Account',
          'Cart',
          'Checkout',
          'Wishlist'
        ]
      },
      {
        label: 'Shop',
        dropdownOpt: [
          {
            label: 'Shop Sidebar',
            dropdownOpt: [
              'Grid View',
              'List view'
            ]
          },
          {
            label: 'No Sidebar',
            dropdownOpt: [
              'Grid View',
              'List view'
            ]
          }
        ]
      },
      {
        label: 'Blog',
      },
      {
        label: 'Contact Us',
      }
    ]
  },
  cartData: {
    items: []
  },
  jumbotron: [
    {
      alt: 'Slider',
      href: 'slider.jpg',
      jumboTitle: 'Our Special',
      jumboTitleSpecial: 'Movies',
      jumboSubtitle: 'Welcome to our movie site',
      jumboText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, culpa. Veniam, aspernatur dolorem sit maiores nostrum exercitationem, quos corporis ipsam atque ratione ut, tempora sed laudantium fuga quas eum numquam.'
    },
    {
      alt: 'Slider-2',
      href: 'slider-2.jpg',
      jumboTitle: 'Our Special',
      jumboTitleSpecial: 'Movies',
      jumboSubtitle: 'Welcome to our movie site',
      jumboText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, culpa. Veniam, aspernatur dolorem sit maiores nostrum exercitationem, quos corporis ipsam atque ratione ut, tempora sed laudantium fuga quas eum numquam.'
    }
  ],
  newMovies: [
    {
      title: 'Quisque Auctor Movie in Strack'
    }

  ]
});