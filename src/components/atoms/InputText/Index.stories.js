import InputText from './index.vue'

export default {
  title: 'components/atoms/InputText',
  component: InputText,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InputText },
  template: '<InputText v-bind="$props" />',
})

export const Name = Template.bind({})
Name.args = {
  placeholder: 'お名前',
  label: 'お名前',
  rules: [(value) => !!value || 'お名前を入力してください'],
}

export const Email = Template.bind({})
Email.args = {
  placeholder: 'メールアドレス',
  label: 'メールアドレス',
  rules: [
    (value) => !!value || 'メールアドレスを入力してください',
    (value) => {
      const pattern = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\\d)[a-zA-Z\\d]{6,32}$/
      return pattern.test(value) || '6文字以上で半角英数記号で正しく入力して下さい。'
    },
  ],
}

export const Title = Template.bind({})
Title.args = {
  placeholder: '件名',
  label: '件名',
  rules: [(value) => !!value || '件名を入力してください'],
}
