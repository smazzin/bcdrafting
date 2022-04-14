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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"featured_image","items":[],"primary":{"title":[{"type":"heading1","text":"Brand 24/7 applications","spans":[]}],"description":[{"type":"paragraph","text":"Consequat minim incididunt duis qui ex Lorem ad. Velit commodo aliquip duis dolor magna magna velit aliquip nisi consequat et dolore aliquip do elit. Nostrud irure laborum cillum proident quis culpa reprehenderit in quis eu eiusmod magna.","spans":[]}],"image":{"dimensions":{"width":727,"height":402},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=727&h=402&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
