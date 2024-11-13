<template>
  <div class="main-container">
    <div class="card-container">
      <!-- Menampilkan komponen berdasarkan rute aktif -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>