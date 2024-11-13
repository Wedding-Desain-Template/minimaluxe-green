<template>
  <div class="blossom-blue">
    <CoverInvitation />
    <OpeningInvitation />
  </div>
</template>

<script>
import CoverInvitation from "../blossom-blue/Cover.vue";
import OpeningInvitation from "../components/blossom-blue/Opening.vue";
import "/src/assets/blossom-blue/style.css";
import "/src/assets/blossom-blue/custom.js"; 

export default {
  name: "App",
  components: {
    CoverInvitation,
    OpeningInvitation,
  },
};
</script>
