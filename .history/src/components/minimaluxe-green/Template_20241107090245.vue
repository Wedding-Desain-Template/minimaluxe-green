<template>
    <CoverInvitation />
    <OpeningInvitation />
</template>

<script>
import CoverInvitation from "../minimaluxe-green/Cover.vue";
import OpeningInvitation from "../minimaluxe-green/Opening.vue";
// import '/src/assets/minimaluxe-green/style.css'; // Mengimpor CSS
// import '/src/assets/minimaluxe-green/custom.js'; // Mengimpor file JavaScript

export default {
 name: "App",
 components: {
   CoverInvitation,
   OpeningInvitation,
 },
};
</script>
