import IconButtonSample from './Index.vue'

export default {
  title: 'components/atoms/IconButtonSample',
  component: IconButtonSample,
  argTypes: {
    color: { control: 'color' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IconButtonSample },
  template: '<IconButtonSample @click="onClick" v-bind="$props" />',
  methods: {
    onClick() {
      alert('クリック')
    },
  },
})

export const YouTube = Template.bind({})
YouTube.args = {
  icon: 'mdi-open-in-new',
  name: 'YouTubeチャンネル',
}

export const Gyakuten = Template.bind({})
Gyakuten.args = {
  icon: 'mdi-open-in-new',
  name: '逆転エンジニアサロン',
}

export const Submit = Template.bind({})
Submit.args = {
  name: '送信する',
}

export const Submit2 = Template.bind({})
Submit2.args = {
  name: '送信する',
  color: 'blue',
}
