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
      title: 'Quisque Auctor Movie in Strack',
      category: 'Coming Soon',
      release: 'February 12, 2016',
      genres: [
        'Dramas',
        'Action Releas'
      ],
      length: '2.30.00',
      ratings: 4,
      views: 995,
      href: 'movie1.jpg'
    },
    {
      title: 'New Movie Quisque in Strack',
      category: 'Latest Movie',
      release: 'February 12, 2016',
      genres: [
        'Dramas',
        'Action Releas'
      ],
      length: '2.30.00',
      ratings: 8,
      views: 741,
      href: 'movie2.jpg'
    },
    {
      title: 'Movie Action Garila English',
      category: 'Top Rating',
      release: 'February 12, 2016',
      genres: [
        'Dramas',
        'Action Releas'
      ],
      length: '2.30.00',
      ratings: 6,
      views: 372,
      href: 'movie3.jpg'
    },
    {
      title: 'Action Garila English Movie',
      category: 'TV Series',
      release: 'February 12, 2016',
      genres: [
        'Dramas',
        'Action Releas'
      ],
      length: '2.30.00',
      ratings: 2,
      views: 303,
      href: 'movie4.jpg'
    },
    {
      title: 'Donec English Action Movie',
      category: 'Coming Soon',
      release: 'February 12, 2016',
      genres: [
        'Dramas',
        'Action Releas'
      ],
      length: '2.30.00',
      ratings: 6,
      views: 490,
      href: 'movie5.jpg'
    },
    {
      title: 'English Action Movie in Strack',
      category: 'Latest Movie',
      release: 'February 12, 2016',
      genres: [
        'Dramas',
        'Action Releas'
      ],
      length: '2.30.00',
      ratings: 10,
      views: 279,
      href: 'movie6.jpg'
    },
    {
      title: 'Movie Auctor Quisque in Strack',
      category: 'Top Rating',
      release: 'February 12, 2016',
      genres: [
        'Dramas',
        'Action Releas'
      ],
      length: '2.30.00',
      ratings: 0,
      views: 302,
      href: 'movie7.jpg'
    },
    {
      title: 'Auctor Movie Quisque in Strack',
      category: 'TV Series',
      release: 'February 12, 2016',
      genres: [
        'Dramas',
        'Action Releas'
      ],
      length: '2.30.00',
      ratings: 1,
      views: 348,
      href: 'movie8.jpg'
    },
    {
      title: 'Donec Movie Quisque in Strack',
      category: 'Coming Soon',
      release: 'February 12, 2016',
      genres: [
        'Dramas',
        'Action Releas'
      ],
      length: '2.30.00',
      ratings: 1,
      views: 365,
      href: 'movie9.jpg'
    },
    {
      title: 'New Movie Quisque in Strack',
      category: 'Latest Movie',
      release: 'February 12, 2016',
      genres: [
        'Dramas',
        'Action Releas'
      ],
      length: '2.30.00',
      ratings: 4,
      views: 507,
      href: 'movie10.jpg'
    },
    {
      title: 'Quisque in Strack New Movie',
      category: 'Top Rating',
      release: 'February 12, 2016',
      genres: [
        'Dramas',
        'Action Releas'
      ],
      length: '2.30.00',
      ratings: 3,
      views: 351,
      href: 'movie11.jpg'
    },
    {
      title: 'Nulla Strack New Animate Movie',
      category: 'TV Series',
      release: 'February 12, 2016',
      genres: [
        'Dramas',
        'Action Releas'
      ],
      length: '2.30.00',
      ratings: 7,
      views: 336,
      href: 'movie12.jpg'
    },
    {
      title: 'Blue Strack New Animate Movie',
      category: 'Coming Soon',
      release: 'February 12, 2016',
      genres: [
        'Dramas',
        'Action Releas'
      ],
      length: '2.30.00',
      ratings: 8,
      views: 425,
      href: 'movie13.jpg'
    },
    {
      title: 'Animate Blue Strack New Movie',
      category: 'Latest Movie',
      release: 'February 12, 2016',
      genres: [
        'Dramas',
        'Action Releas'
      ],
      length: '2.30.00',
      ratings: 6,
      views: 361,
      href: 'movie14.jpg'
    },
    {
      title: 'Hurry Animate Blue Strack New Movie',
      category: 'Top Rating',
      release: 'February 12, 2016',
      genres: [
        'Dramas',
        'Action Releas'
      ],
      length: '2.30.00',
      ratings: 9,
      views: 413,
      href: 'movie15.jpg'
    }
  ]
});