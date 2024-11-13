<template>
  <div class="minimaluxe-green">
    <CoverInvitation />
    <OpeningInvitation />
  </div>
</template>

<script>
import CoverInvitation from "../components/minimaluxe-green/Cover.vue";
import OpeningInvitation from "../components/minimaluxe-green/Opening.vue";
import "../minimaluxe-green/style.css"; 
import "../minimaluxe-green/custom.js"; 

export default {
  name: "App",
  components: {
    CoverInvitation,
    OpeningInvitation,
  },
};
</script>
