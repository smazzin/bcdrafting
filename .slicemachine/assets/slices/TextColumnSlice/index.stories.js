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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_column_slice","items":[{"title":[{"type":"paragraph","text":"Cupidatat incididunt deserunt duis consequat eiusmod incididunt non nostrud elit pariatur Lorem nostrud. Est nostrud sunt occaecat aliqua velit sit proident. Excepteur ea sint sunt nostrud aliqua deserunt amet nisi laboris.","spans":[]}],"description":[{"type":"paragraph","text":"Sint ipsum est excepteur culpa culpa sunt nisi.","spans":[]}],"icon":"engage best-of-breed mindshare","background-color":"bg-navy","text-color":"text-navy"},{"title":[{"type":"paragraph","text":"Amet commodo deserunt nulla do Lorem in ad amet. Do sunt nostrud enim. Mollit eiusmod tempor culpa anim.","spans":[]}],"description":[{"type":"paragraph","text":"Ad in pariatur duis dolor sit.","spans":[]}],"icon":"aggregate mission-critical systems","background-color":"bg-light-green","text-color":"text-navy"},{"title":[{"type":"paragraph","text":"Ipsum dolore nostrud ea.","spans":[]}],"description":[{"type":"paragraph","text":"Ea ea id irure reprehenderit ad Lorem dolore et incididunt dolore.","spans":[]}],"icon":"engineer turn-key functionalities","background-color":"bg-green","text-color":"text-gray"}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
