<template>
  <div class="minimaluxe-green">
    <CoverInvitation />
    <OpeningInvitation />
  </div>
</template>

<script>
import CoverInvitation from "../minimaluxe-green/Cover.vue";
import OpeningInvitation from "../minimaluxe-green/Opening.vue";


export default {
  name: "App",
  components: {
    CoverInvitation,
    OpeningInvitation,
  },
};
</script>

<style scoped>
import "/src/assets/minimaluxe-green/style.css"; 
import "/src/assets/minimaluxe-green/custom.js"; 
</style>