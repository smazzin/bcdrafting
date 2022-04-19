import MyComponent from '../../../../slices/TextColumnSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextColumnSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_column_slice","items":[{"title":[{"type":"paragraph","text":"Et Lorem ex magna laboris ea sit proident ipsum exercitation. Aute amet ea ea magna magna quis pariatur magna ad nulla. Dolore ullamco reprehenderit in ut magna minim non aute.","spans":[]}],"description":[{"type":"paragraph","text":"Ad laboris ut minim ut esse in deserunt duis.","spans":[]}],"icon":"whiteboard seamless synergies","background-color":"bg-light-gray","text-color":"text-gray","link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"title":[{"type":"paragraph","text":"Officia labore culpa fugiat ut voluptate esse ad irure excepteur ipsum voluptate qui. Adipisicing nulla voluptate consequat Lorem tempor culpa aliqua culpa aliqua in consectetur esse.","spans":[]}],"description":[{"type":"paragraph","text":"Officia minim adipisicing irure magna dolore enim qui et irure reprehenderit non commodo proident id. Laborum ullamco incididunt tempor sunt dolore.","spans":[]}],"icon":"visualize cross-media e-tailers","background-color":"bg-navy","text-color":"text-gray","link":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
