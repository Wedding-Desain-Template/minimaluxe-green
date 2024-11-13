<template>
  <div class="blossom-blue">
    <CoverInvitation />
    <OpeningInvitation />
  </div>
</template>

<script>
import CoverInvitation from "../components/blossom-blue/Cover.vue";
import OpeningInvitation from "../components/blossom-blue/Opening.vue";

export default {
  name: "App",
  components: {
    CoverInvitation,
    OpeningInvitation,
  },
};
</script>
