import Vue from 'vue'
import App from './App.vue'
import ServerStatus from './ServerStatus.vue'
import ServerControl from './ServerControl.vue'
import ServerDetails from './ServerDetails.vue'
import Header from './Header.vue'

Vue.component('app-server-status', ServerStatus);
Vue.component('app-server-control', ServerControl);
Vue.component('app-server-details', ServerDetails);
Vue.component('app-header', Header);

new Vue({
  el: '#app',
  render: h => h(App)
})
