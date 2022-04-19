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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"call_to_action","items":[],"primary":{"title":[{"type":"heading1","text":"Enable B2B mindshare","spans":[]}],"text":[{"type":"paragraph","text":"Eiusmod do deserunt quis excepteur ad minim minim laboris Lorem aliquip nostrud labore ipsum sit. Quis labore dolore excepteur Lorem eu enim fugiat minim qui magna adipisicing magna ipsum cupidatat veniam.","spans":[]}],"phone-number":"extend visionary e-business"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
