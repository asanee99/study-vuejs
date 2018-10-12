import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
import store from './store/store'

Vue.config.productionTip = true

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-e4542.firebaseio.com/';

Vue.filter('currency', (value) => {
  return "$" + value.toLocaleString();
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
