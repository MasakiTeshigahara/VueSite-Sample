import ShadowImage from './Index.vue'

export default {
  title: 'components/atoms/ShadowImage',
  component: ShadowImage,
  argTypes: {
    shadowColor: { control: 'color' },
    width: {
      control: { type: 'range', min: 1, max: 1200, step: 1 },
    },
    height: {
      control: { type: 'range', min: 1, max: 1200, step: 1 },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ShadowImage },
  template: '<ShadowImage v-bind="$props" />',
})

export const Service1 = Template.bind({})
Service1.args = {
  image: require(`~/../../assets/img/service1.png`),
}

export const Service2 = Template.bind({})
Service2.args = {
  image: require(`~/../../assets/img/service2.png`),
}
