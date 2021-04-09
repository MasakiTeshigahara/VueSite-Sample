import OverviewUnderline from './index.vue'

export default {
  title: 'components/atoms/OverviewUnderline',
  component: OverviewUnderline,
  argTypes: {},
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    OverviewUnderline,
  },
  template: '<OverviewUnderline v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      name: '会社名',
      contents: 'アップスターツ株式会社',
    },
    {
      name: '設立',
      contents: '2021年1月25日',
    },
    {
      name: '事業内容',
      contents: '情報発信事業・オンラインサロン事業・コンサル事業',
    },
    {
      name: '資本金',
      contents: '500,000円',
    },
    {
      name: '所在地',
      contents: '〒274-0063 千葉県船橋市習志野台4-32-8-202',
    },
    {
      name: '代表者',
      contents: '曽我部拓也',
    },
  ],
}
