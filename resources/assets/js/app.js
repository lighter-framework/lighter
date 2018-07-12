import Vue from 'vue'
import router from './router'
import store from './store'

import Lighter from './lighter'

import '../sass/app.scss'

Vue.component('app', require('@/layouts/App'))

/*Components here*/


const app = new Vue({
    router,
    store,
}).$mount('#app')