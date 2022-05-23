<template>
  <section class="p-3 bg-gray-light">
    <div class="container text-center">
      <prismic-rich-text :field="slice.primary.title" class="title" />
      <prismic-rich-text :field="slice.primary.text" />
      <a class="btn" :href="`tel:${ slice.primary['phone-number'] }`">{{ slice.primary['phone-number'] }}</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "CallToAction",
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