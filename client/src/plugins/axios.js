import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);
