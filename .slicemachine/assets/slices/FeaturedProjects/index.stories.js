import MyComponent from '../../../../slices/FeaturedProjects';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FeaturedProjects'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"featured_projects","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Magna incididunt amet elit do cillum ea cupidatat quis nostrud ullamco velit. Pariatur ad proident sint aliqua officia enim tempor ullamco. Sunt qui magna sit nostrud dolore consequat ex tempor ad duis ut tempor sint ad.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Magna esse deserunt amet tempor dolore id laborum aute ut minim consectetur. Pariatur duis cupidatat et proident non enim fugiat veniam incididunt nulla voluptate nostrud incididunt nostrud ipsum. Occaecat dolore aliquip ullamco quis cillum nisi fugiat commodo ullamco in amet deserunt.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Sunt cupidatat quis minim culpa Lorem ad in eu incididunt exercitation incididunt non esse.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Dolore sit labore eu reprehenderit magna aliquip aliquip cupidatat. Do labore magna do nostrud incididunt eiusmod. Sint eu labore cillum velit cupidatat quis cupidatat aliqua Lorem veniam laboris.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"title":[{"type":"heading1","text":"Extend customized blockchains","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
