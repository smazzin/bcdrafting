<template>
  <section class="container grid-2 mb-5">
    <div :style="{ backgroundImage: 'url(' + slice.primary.backgroundImage.url + ')' }">
      <prismic-rich-text :field="slice.primary.title" class="title" />
      <prismic-rich-text :field="slice.primary.description" />
      <div class="contact-us">
        <prismic-rich-text :field="$store.state.footer['contact-title']" />
        <ul>
          <li>
            <span>Email:</span>
            <a href="mailto:bryan@bcdrafting.com">bryan@bcdrafting.com</a>
          </li>
          <li>
            <span>Call us:</span>
            <a href="tel:111-111-1111">111-111-1111</a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <prismic-image :field="slice.primary.image" class="ml-auto" />
    </div>
  </section>
</template>

<script>
export default {
  name: "HomepageFeatured",
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