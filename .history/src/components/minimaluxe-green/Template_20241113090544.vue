<template>
  <div class="minimaluxe-green">
    <CoverInvitation />
    <OpeningInvitation />
  </div>
</template>

<script>
import CoverInvitation from "../minimaluxe-green/Cover.vue";
import OpeningInvitation from "../minimaluxe-green/Opening.vue";

// Import CSS dan JS langsung di script
import "@/assets/minimaluxe-green/style.css";

export default {
  name: "App",
  components: {
    CoverInvitation,
    OpeningInvitation,
  },
  mounted() {
    // Import dan jalankan custom JavaScript saat komponen dimuat
    import("@/assets/minimaluxe-green/custom.js").then(() => {
      console.log("Custom script loaded for Minimaluxe Green");
    });
  },
};
</script>

<style scoped>
/* Anda dapat menambahkan gaya tambahan khusus untuk komponen ini di sini */
</style>
