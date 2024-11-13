import { createApp } from 'vue'; // Mengimpor Vue dengan cara yang benar untuk Vue 3
import App from './App.vue';
import $ from 'jquery'; // Mengimpor jQuery
import './assets/blossom-blue/style.css'; // Mengimpor CSS
import './assets/minimaluxe-one/style.css'; // Mengimpor CSS
import './assets/minimaluxe-one/custom.js'; // Mengimpor file JavaScript
import router from './router'; // Pastikan router diimpor dengan benar

// Membuat instance aplikasi Vue terlebih dahulu
const app = createApp(App);

// Mengatur jQuery ke global
window.$ = $; 
window.jQuery = $;

// Menggunakan router di aplikasi
app.use(router);

// Mount aplikasi ke elemen dengan ID 'app'
app.mount('#app');
