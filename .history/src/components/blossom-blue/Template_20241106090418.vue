<template>
    <div class="main-container">
      <div class="card-container">
        <CoverInvitation />
        <OpeningInvitation />
      </div>
    </div>
</template>

<script>
import CoverInvitation from "components/blossom-blue/Cover.vue";
import OpeningInvitation from "components/blossom-blue/Opening.vue";

export default {
  name: "App",
  components: {
    CoverInvitation,
    OpeningInvitation,
  },
};
</script>
