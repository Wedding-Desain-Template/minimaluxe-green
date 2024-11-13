<template>
  <div class="blossom-blue">
    <CoverInvitation />
    <OpeningInvitation />
  </div>
</template>

<script>
import CoverInvitation from "../components/blossom-blue/Cover.vue";
import OpeningInvitation from "../components/blossom-blue/Opening.vue";
import "/blossom-blue/style.css";
import "/blossom-blue/custom.js"; 

export default {
  name: "App",
  components: {
    CoverInvitation,
    OpeningInvitation,
  },
};
</script>

<style scoped>
@import "@/assets/blossom-blue/style.css";
</style>
