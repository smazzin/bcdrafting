import MyComponent from '../../../../slices/FeaturedImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FeaturedImage'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"featured_image","items":[],"primary":{"backgroundImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Recontextualize wireless e-commerce","spans":[]}],"description":[{"type":"paragraph","text":"Est eu aliquip nostrud nulla cillum aliquip duis dolor non in proident aliquip. Do officia et ex quis eiusmod. Duis veniam ut sit.","spans":[]}],"image":{"dimensions":{"width":727,"height":402},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=727&h=402&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
