import MyComponent from '../../../../slices/HomepageFeatured';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HomepageFeatured'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"homepage_featured","items":[],"primary":{"backgroundImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Reintermediate cutting-edge content","spans":[]}],"description":[{"type":"paragraph","text":"Labore ea in esse ea tempor consequat. Ipsum consequat ex minim irure duis consequat mollit reprehenderit. Labore laboris dolore elit Lorem cillum laboris tempor esse veniam culpa sit aliqua in sunt.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
