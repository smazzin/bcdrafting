import MyComponent from '../../../../slices/TextColumnSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextColumnSlice'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_column_slice","items":[{"title":[{"type":"paragraph","text":"Anim ex Lorem do laborum ullamco. Cupidatat occaecat culpa exercitation quis esse enim officia ipsum veniam esse laborum consectetur esse velit.","spans":[]}],"description":[{"type":"paragraph","text":"Sit magna esse laboris occaecat do eiusmod et non sit velit est qui. Dolore sit aliquip ea.","spans":[]}],"icon":"transform out-of-the-box blockchains","background-color":"bg-navy","text-color":"text-gray","link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"title":[{"type":"paragraph","text":"Elit id in duis sit dolore irure et incididunt voluptate adipisicing aliquip nisi in elit id.","spans":[]}],"description":[{"type":"paragraph","text":"Lorem labore duis excepteur ullamco cillum dolore sint consequat sit. Occaecat do id occaecat. Proident anim et nisi eiusmod est consequat excepteur qui quis labore.","spans":[]}],"icon":"reintermediate e-business technologies","background-color":"bg-light-gray","text-color":"text-gray","link":{"link_type":"Web","url":"https://prismic.io"}},{"title":[{"type":"paragraph","text":"Occaecat officia est est exercitation irure nulla ut veniam duis dolor. Tempor ad laborum esse et occaecat deserunt Lorem.","spans":[]}],"description":[{"type":"paragraph","text":"Proident dolore deserunt consectetur sint consequat reprehenderit adipisicing tempor excepteur pariatur. Cupidatat nisi amet nostrud anim eiusmod nisi voluptate dolor.","spans":[]}],"icon":"unleash dynamic systems","background-color":"bg-light-green","text-color":"text-green","link":{"link_type":"Web","url":"http://twitter.com"}},{"title":[{"type":"paragraph","text":"Ut minim laborum commodo cupidatat sint in officia in. Et labore magna et ex ad dolore ullamco nisi exercitation id veniam eu ea labore aute.","spans":[]}],"description":[{"type":"paragraph","text":"Non eiusmod quis amet ad commodo eiusmod proident consequat exercitation esse exercitation voluptate veniam reprehenderit officia. Elit enim culpa ad mollit et et dolor aliquip aliqua dolor. Excepteur aliquip cillum in ipsum deserunt occaecat labore Lorem magna reprehenderit nulla.","spans":[]}],"icon":"maximize holistic relationships","background-color":"bg-green","text-color":"text-light-gray","link":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
