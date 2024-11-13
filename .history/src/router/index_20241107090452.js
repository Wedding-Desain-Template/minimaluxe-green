import { createRouter, createWebHistory } from 'vue-router';

const MinimaluxeGreen = () => import('@/components/minimaluxe-green/Template.vue');
const BlossomBlue = () => import('@/components/blossom-blue/Template.vue');

const routes = [
  {
    path: '/minimaluxe-green',
    component: MinimaluxeGreen,
    beforeEnter: () => {
      // Hapus CSS sebelumnya, jika ada
      removeThemeStyles();
      // Muat CSS baru untuk tema Minimaluxe Green
      loadThemeStyles('/src/assets/minimaluxe-green/style.css', '/src/assets/minimaluxe-green/custom.js');
    },
  },
  {
    path: '/blossom-blue',
    component: BlossomBlue,
    beforeEnter: () => {
      removeThemeStyles();
      loadThemeStyles('/src/assets/blossom-blue/style.css', '/src/assets/blossom-blue/custom.js');
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Fungsi untuk memuat CSS tema secara dinamis
function loadThemeStyles(cssPath, jsPath) {
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = cssPath;
  cssLink.className = 'dynamic-theme'; // Tambahkan class untuk identifikasi
  document.head.appendChild(cssLink);

  const jsScript = document.createElement('script');
  jsScript.src = jsPath;
  jsScript.className = 'dynamic-theme';
  document.body.appendChild(jsScript);
}

// Fungsi untuk menghapus CSS tema sebelumnya
function removeThemeStyles() {
  document.querySelectorAll('.dynamic-theme').forEach((el) => el.remove());
}

export default router;
