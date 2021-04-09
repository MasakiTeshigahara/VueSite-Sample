import iconbutton from './IconButton.vue'

//使用するコンポーネントの宣言
export default {
    title: 'iconbottun',
    component: iconbutton,
    argTypes: {
    color: { control: 'color' },
  },
}

//共通のテンプレートの宣言
const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { iconbutton },
    template: '<iconbottun @push="onClick "v-bind="$props" />',
    methods: {
        onClick() {
          alert('click')
        },
      },
});

export const youtube = Template.bind({})
youtube.args = {
    name: 'youtubeチャンネル',
    icon: 'mdi-open-in-new',
} 

export const salon = Template.bind({})
salon.args = {
    name: 'エンジニアサロン',
    icon: 'mdi-open-in-new',
} 