import { reactive } from 'vue';
export const store = reactive({
  headerData: {
    topMovie: 'King Star',
    socialIcons: [
      'fa-facebook-f',
      'fa-twitter',
      'fa-linkedin-in',
      'fa-instagram',
      'fa-google-plus-g'
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
      href: 'movie1.jpg',
      hrefThumb: 'movie1-300x300.jpg'
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
      href: 'movie2.jpg',
      hrefThumb: 'movie2-300x300.jpg'
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
      href: 'movie3.jpg',
      hrefThumb: 'movie3-300x300.jpg'
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
      href: 'movie4.jpg',
      hrefThumb: 'movie4-300x300.jpg'
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
      href: 'movie5.jpg',
      hrefThumb: 'movie5-300x300.jpg'
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
      href: 'movie6.jpg',
      hrefThumb: 'movie6-300x300.jpg'
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
      href: 'movie7.jpg',
      hrefThumb: 'movie7-300x300.jpg'
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
      href: 'movie8.jpg',
      hrefThumb: 'movie8-300x300.jpg'
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
      href: 'movie9.jpg',
      hrefThumb: 'movie9-300x300.jpg'
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
      href: 'movie10.jpg',
      hrefThumb: 'movie10-300x300.jpg'
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
      href: 'movie13.jpg',
      hrefThumb: 'movie13-300x300.jpg'
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
      href: 'movie14.jpg',
      hrefThumb: 'movie14-300x300.jpg'
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
  ],
  news: [
    {
      title: 'Actor the Concept Movie',
      href: 'blog1-570x570.jpg',
      date: 'April 14, 2020'
    },
    {
      title: 'Actor the Concept Movie',
      href: 'blog2-570x570.jpg',
      date: 'April 14, 2020'
    },
    {
      title: 'Actor the Concept Movie',
      href: 'blog3-570x570.jpg',
      date: 'April 14, 2020'
    },
    {
      title: 'Actor the Concept Movie',
      href: 'blog4-570x570.jpg',
      date: 'April 14, 2020'
    },
    {
      title: 'Actor the Concept Movie',
      href: 'blog5-570x570.jpg',
      date: 'April 14, 2020'
    },
  ],
  footerData: [
    {
      type: 'text',
      title: 'About Us',
      content: {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nisi distinctio sit sunt. Ab, ad repudiandae! Quia, ea laboriosam reiciendis cupiditate maiores rerum ducimus possimus.',
        socialIcons: [
          'fa-facebook-f',
          'fa-twitter',
          'fa-linkedin-in',
          'fa-instagram',
          'fa-pinterest'
        ],
      }
    },
    {
      type: 'nav',
      title: 'Movie Category',
      content: {
        labels: [
          'English New Movie',
          'Hindi All Movie',
          'Latest Tamil Movie',
          'New Top Rating Movie',
          'Hornn New Movie',
          'Animation New Movie'
        ]
      }
    },
    {
      type: 'nav',
      title: 'Information',
      content: {
        labels: [
          'Youtube Video Post',
          'Actor Information', 
          'New Promotion',
          'Latest Movie in English',
          'Latest Film Product'
        ]
      }
    },
    {
      type: 'display',
      title: 'Recent Post',
      content: {
        posts: [
          {
            title: 'Actor the Concept Movie',
            href: 'blog1-570x570.jpg',
            date: 'April 14, 2020'
          },
          {
            title: 'Actor the Concept Movie',
            href: 'blog2-570x570.jpg',
            date: 'April 14, 2020'
          },
          {
            title: 'Actor the Concept Movie',
            href: 'blog3-570x570.jpg',
            date: 'April 14, 2020'
          }
        ]
      }
    }
  ]
});