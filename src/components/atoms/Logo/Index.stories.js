import Logo from './Index.vue'

export default {
  title: 'components/atoms/Logo',
  component: Logo,
  argTypes: {
    backgroundColor: { control: 'color' },
    width: {
      control: { type: 'range', min: 1, max: 200, step: 1 },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Logo },
  template: '<Logo @click="onClick" v-bind="$props" />',
  methods: {
    onClick() {
      alert('クリック')
    },
  },
})

export const backgroundColor1 = Template.bind({})
backgroundColor1.args = {
  backgroundColor: '#FB8C18B3',
}

export const backgroundColor2 = Template.bind({})
backgroundColor2.args = {
  backgroundColor: '#2B2F53',
}
