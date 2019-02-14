import Vue from 'vue';
import App from './App.vue';

// Importando o bootstrap.css
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

new Vue({
  el: '#app',
  render: h => h(App)
})
