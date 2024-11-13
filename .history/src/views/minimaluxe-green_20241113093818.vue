<template>
  <div class="minimaluxe-green">
    <CoverInvitation />
    <OpeningInvitation />
  </div>
</template>

<script>
import CoverInvitation from "/src/components/minimaluxe-green/Cover.vue";
import OpeningInvitation from "/src/components/minimaluxe-green/Opening.vue";
import "/src/assets/minimaluxe-green/style.css"; 
import "/src/assets/minimaluxe-green/custom.js"; 

export default {
  name: "App",
  components: {
    CoverInvitation,
    OpeningInvitation,
  },
};
</script>
