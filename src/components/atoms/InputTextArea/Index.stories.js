import InputTextArea from './index.vue'

export default {
  title: 'components/atoms/InputTextArea',
  component: InputTextArea,
  argTypes: {
    color: { control: 'color' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InputTextArea },
  template: '<InputTextArea v-bind="$props" />',
})

export const Message = Template.bind({})
Message.args = {
  placeholder: 'メッセージ本文',
  label:'メッセージ本文'
}
