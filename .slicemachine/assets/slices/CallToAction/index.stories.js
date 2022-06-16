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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"call_to_action","items":[],"primary":{"title":[{"type":"heading1","text":"Exploit front-end channels","spans":[]}],"text":[{"type":"paragraph","text":"Cupidatat non sint est. Commodo incididunt in amet fugiat nostrud eiusmod ex dolore consequat culpa aute cillum est aliqua voluptate. Sit non est esse tempor sunt Lorem.","spans":[]}],"phone-number":"evolve transparent web-readiness"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
