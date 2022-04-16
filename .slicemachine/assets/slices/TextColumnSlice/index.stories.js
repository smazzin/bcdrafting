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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_column_slice","items":[{"title":[{"type":"paragraph","text":"Nostrud occaecat qui quis ullamco eu ipsum reprehenderit magna proident ad eiusmod in occaecat tempor laboris.","spans":[]}],"description":[{"type":"paragraph","text":"Velit proident laboris ad eu tempor aute occaecat nostrud nostrud velit ut qui. Ex incididunt deserunt proident.","spans":[]}],"icon":"utilize bleeding-edge infrastructures","background-color":"bg-light-green","text-color":"text-light-green"},{"title":[{"type":"paragraph","text":"Esse ex culpa velit laboris ipsum. Ipsum aute incididunt dolor cupidatat ex dolore amet exercitation Lorem ea occaecat voluptate excepteur et irure. Exercitation ullamco nisi dolore duis deserunt ad nulla Lorem veniam cupidatat.","spans":[]}],"description":[{"type":"paragraph","text":"Dolor irure aliquip consectetur irure mollit. Nulla pariatur fugiat mollit veniam exercitation ullamco aliquip consectetur aliqua incididunt laborum aute minim.","spans":[]}],"icon":"disintermediate customized relationships","background-color":"bg-green","text-color":"text-navy"},{"title":[{"type":"paragraph","text":"Consequat sunt ut sint magna officia sint qui aliqua sit aute velit. Culpa pariatur exercitation laborum sint laboris elit proident commodo sunt mollit.","spans":[]}],"description":[{"type":"paragraph","text":"Amet sint duis Lorem officia in consequat mollit do incididunt duis officia sit esse occaecat. Qui Lorem do mollit consequat ipsum quis amet. Id voluptate voluptate mollit pariatur consectetur pariatur laboris laboris irure ad sit officia nulla dolor sint.","spans":[]}],"icon":"utilize clicks-and-mortar supply-chains","background-color":"bg-light-green","text-color":"text-gray"}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
