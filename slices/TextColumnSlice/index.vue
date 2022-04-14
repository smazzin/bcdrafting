<template>
  <section class="container grid-3 mb-5">
    <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" :class="`${item.icon} ${item['background-color']} ${item['text-color']} p-3`">    
      <prismic-rich-text :field="item.title" />
      <prismic-rich-text :field="item.description" />
    </div>
  </section>
</template>

<script>
export default {
  name: "TextColumnSlice",
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