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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_column_slice","items":[{"title":[{"type":"paragraph","text":"Consectetur sint officia tempor in minim laborum nulla quis elit excepteur quis cupidatat pariatur consequat in. Qui esse ex velit mollit. Laboris labore consequat dolor reprehenderit excepteur ut.","spans":[]}],"description":[{"type":"paragraph","text":"Dolor eu dolor enim ipsum officia ex Lorem proident fugiat fugiat qui qui. Elit sunt adipisicing est magna cillum ex nulla consequat ipsum veniam cupidatat culpa ex pariatur.","spans":[]}],"icon":"implement real-time blockchains","background-color":"bg-green","text-color":"text-navy"},{"title":[{"type":"paragraph","text":"Dolore nostrud mollit ex exercitation deserunt laborum dolore dolor. Non nulla eiusmod anim ex reprehenderit pariatur sint consequat commodo velit. Pariatur est fugiat ad in incididunt velit laboris labore voluptate ipsum exercitation.","spans":[]}],"description":[{"type":"paragraph","text":"Proident incididunt ex magna consectetur ut quis ea dolor officia quis laborum veniam nulla. Ullamco mollit nulla fugiat excepteur velit anim. Dolore labore ea commodo elit pariatur do et adipisicing.","spans":[]}],"icon":"incentivize bricks-and-clicks ROI","background-color":"bg-green","text-color":"text-light-green"},{"title":[{"type":"paragraph","text":"Ipsum labore nulla commodo anim pariatur tempor ex officia sit. Tempor officia duis sint enim mollit aliqua do. Magna aute nostrud nostrud adipisicing magna Lorem eu.","spans":[]}],"description":[{"type":"paragraph","text":"Enim pariatur cillum do proident dolor non do mollit veniam reprehenderit. Consectetur aliquip deserunt officia Lorem. Id ut sint ullamco eu veniam esse.","spans":[]}],"icon":"transition world-class action-items","background-color":"bg-navy","text-color":"text-gray"},{"title":[{"type":"paragraph","text":"Labore do cillum sit cillum nostrud sint labore sint sint excepteur. Deserunt non elit reprehenderit irure nulla. Tempor excepteur fugiat aliqua id officia adipisicing veniam excepteur est do non excepteur.","spans":[]}],"description":[{"type":"paragraph","text":"Culpa reprehenderit sunt irure eu elit esse excepteur consectetur cupidatat minim aliquip veniam ad incididunt elit. Nostrud ex incididunt cupidatat in voluptate. Aute reprehenderit eu voluptate magna sit cupidatat dolore nulla magna ex officia magna ut adipisicing.","spans":[]}],"icon":"unleash cutting-edge relationships","background-color":"bg-gray","text-color":"text-gray"},{"title":[{"type":"paragraph","text":"Est est pariatur consectetur irure. Velit non mollit eu incididunt quis culpa ea commodo esse anim dolor esse ex. Fugiat irure nisi incididunt quis cillum amet est velit.","spans":[]}],"description":[{"type":"paragraph","text":"Cillum eu consectetur nisi aliquip in Lorem. Commodo deserunt minim tempor culpa sunt adipisicing fugiat velit fugiat ut dolore tempor culpa.","spans":[]}],"icon":"streamline innovative communities","background-color":"bg-light-gray","text-color":"text-light-green"},{"title":[{"type":"paragraph","text":"Dolore aliqua ea cupidatat voluptate laborum irure mollit ad exercitation dolore. Amet culpa labore pariatur culpa incididunt. Quis dolor dolore aliqua et.","spans":[]}],"description":[{"type":"paragraph","text":"Ipsum sit in consequat ad ea Lorem occaecat duis laboris consequat in aliquip tempor.","spans":[]}],"icon":"revolutionize synergistic e-services","background-color":"bg-gray","text-color":"text-light-green"}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
