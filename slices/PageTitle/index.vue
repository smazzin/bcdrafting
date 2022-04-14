<template>
    <prismic-rich-text :field="slice.primary.title" class="title text-center" />
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>

</style>