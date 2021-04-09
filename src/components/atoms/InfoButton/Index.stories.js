import InfoButton from './Index.vue'

export default {
  title: 'components/atoms/InfoButton',
  component: InfoButton,
  argTypes: {
    color: { control: 'color' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InfoButton },
  template: '<InfoButton @push="pushButton" v-bind="$props" />',
  methods: {
    pushButton() {
      alert('押す')
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
