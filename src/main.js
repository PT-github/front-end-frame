import Vue from 'vue';
import App from './App.vue';
import router from './router'
import * as filters from './filters' // global filters
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

import Layout from '@/components/layout'
Vue.use(Layout)


new Vue({
  el: '#app',
	router,
  render: h => h(App)
});
