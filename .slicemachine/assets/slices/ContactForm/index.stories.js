import MyComponent from '../../../../slices/ContactForm';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ContactForm'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"contact_form","items":[],"primary":{"title":[{"type":"paragraph","text":"Irure quis nostrud in commodo.","spans":[]}],"description":[{"type":"paragraph","text":"Fugiat eu ullamco laborum officia anim occaecat aliquip anim ipsum nostrud consectetur duis. Culpa est reprehenderit non qui tempor nisi aliqua exercitation anim.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
