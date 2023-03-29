import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from './plugins/axios';
import vuetify from './plugins/vuetify';
import swal from './plugins/sweet_alert';

new Vue({
  router,
  axios,
  vuetify,
  swal,
  render: (h) => h(App),
}).$mount('#app');
