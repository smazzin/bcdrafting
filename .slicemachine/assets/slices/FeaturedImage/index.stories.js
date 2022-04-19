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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"featured_image","items":[],"primary":{"backgroundImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Engage intuitive architectures","spans":[]}],"description":[{"type":"paragraph","text":"Dolore veniam reprehenderit ipsum enim dolor adipisicing nulla dolor consectetur aute.","spans":[]}],"image":{"dimensions":{"width":727,"height":402},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=727&h=402&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
