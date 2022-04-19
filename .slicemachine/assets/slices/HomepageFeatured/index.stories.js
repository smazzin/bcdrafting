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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"homepage_featured","items":[],"primary":{"backgroundImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Expedite sexy ROI","spans":[]}],"description":[{"type":"paragraph","text":"Mollit ex quis enim officia proident voluptate elit aute nostrud proident nisi dolore labore occaecat laboris.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
