<template>
    <div class="main-container">
        <CoverInvitation />
        <OpeningInvitation />
    </div>
</template>

<script>
import CoverInvitation from "../blossom-blue/Cover.vue";
import OpeningInvitation from "../blossom-blue/Opening.vue";
import '/src/assets/blossom-blue/style.css'; // Mengimpor CSS
import '/src/assets/blossom-blue/custom.js'; // Mengimpor file JavaScript

export default {
  name: "App",
  components: {
    CoverInvitation,
    OpeningInvitation,
  },
};
</script>
