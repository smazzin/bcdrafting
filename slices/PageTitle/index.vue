<template>
    <prismic-rich-text :field="slice.primary.title" class="py-2 text-center" />
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