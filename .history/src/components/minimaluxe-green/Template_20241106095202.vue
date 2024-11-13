<template>
    <CoverInvitation />
    <OpeningInvitation />
</template>

<script>
import CoverInvitation from "../minimaluxe-one/Cover.vue";
import OpeningInvitation from "../minimaluxe-one/Opening.vue";
// import '/src/assets/minimaluxe-one/style.css'; // Mengimpor CSS
// import '/src/assets/minimaluxe-one/custom.js'; // Mengimpor file JavaScript

export default {
 name: "App",
 components: {
   CoverInvitation,
   OpeningInvitation,
 },
};
</script>
