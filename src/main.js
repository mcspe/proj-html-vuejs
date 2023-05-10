import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope, faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faGooglePlusG, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faLock, faCaretDown, faCaretRight, faBasketShopping, faAnglesRight, faAnglesLeft, faStar } from '@fortawesome/free-solid-svg-icons';


library.add(faEnvelope, faFacebookF, faTwitter, faLinkedinIn, faInstagram, faGooglePlusG, faPinterest, faLock, faCaretDown, faCaretRight, faBasketShopping, faAnglesRight, faAnglesLeft, faStar, faCirclePlay);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
