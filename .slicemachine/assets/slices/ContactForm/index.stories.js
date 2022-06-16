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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"contact_form","items":[],"primary":{"title":[{"type":"paragraph","text":"Aliquip non laboris irure duis. Sunt quis cillum velit enim ea sunt est ex elit aute mollit eiusmod excepteur. Irure nostrud sunt voluptate voluptate elit magna veniam non do duis.","spans":[]}],"description":[{"type":"paragraph","text":"Minim nostrud adipisicing eiusmod duis non nulla sit voluptate pariatur nulla. Est adipisicing tempor nostrud cillum nostrud tempor nostrud deserunt est.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
