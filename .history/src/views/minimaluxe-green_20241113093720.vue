<template>
  <div class="minimaluxe-green">
    <CoverInvitation />
    <OpeningInvitation />
  </div>
</template>

<script>
import CoverInvitation from "../minimaluxe-green/Cover.vue";
import OpeningInvitation from "../minimaluxe-green/Opening.vue";
import "/src/assetsminimaluxe-green/style.css"; 
import "/src/assetsminimaluxe-green/custom.js"; 

export default {
  name: "App",
  components: {
    CoverInvitation,
    OpeningInvitation,
  },
};
</script>
