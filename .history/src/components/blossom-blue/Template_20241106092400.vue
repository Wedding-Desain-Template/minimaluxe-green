<template>
    <div class="main-container">
      <div class="card-container">
        <CoverInvitation />
        <OpeningInvitation />
      </div>
    </div>
</template>

<script>
import CoverInvitation from "../blossom-blue/Cover.vue";
import OpeningInvitation from "../blossom-blue/Opening.vue";
import './assets/blossom-blue/style.css'; // Mengimpor CSS
import './assets/blossom-blue/custom.js'; // Mengimpor file JavaScript

export default {
  name: "App",
  components: {
    CoverInvitation,
    OpeningInvitation,
  },
};
</script>
