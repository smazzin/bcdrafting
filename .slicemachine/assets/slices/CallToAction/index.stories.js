import MyComponent from '../../../../slices/CallToAction';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CallToAction'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"call_to_action","items":[],"primary":{"title":[{"type":"heading1","text":"Productize killer e-markets","spans":[]}],"text":[{"type":"paragraph","text":"Fugiat labore in nisi magna esse aute est amet proident minim Lorem cillum deserunt. Lorem enim commodo et velit cupidatat magna. Laboris fugiat deserunt ad ea velit qui cupidatat reprehenderit nulla occaecat minim sunt exercitation occaecat nostrud.","spans":[]}],"phone-number":"syndicate one-to-one functionalities"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
