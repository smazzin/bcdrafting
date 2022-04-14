<template>
  <main>
    <slice-zone type="home-page" queryType="single" />
  </main>
</template>

<script>
import SliceZone from "vue-slicezone";
export default {
  name: "Homepage",
  components: {
    SliceZone
  }
};
</script>