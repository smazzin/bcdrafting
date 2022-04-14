<template>
  <section class="container text-center mb-5">
    <prismic-rich-text :field="slice.primary.title" class="title p-3" />
    <div class="grid-3">
      <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">    
        <prismic-image :field="item.image" class="img-contain" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturedProjects",
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