import Headingsubheading from './Index.vue'

export default {
  title: 'components/atoms/HeadingSubheading',
  component: Headingsubheading,
  argTypes: {
    color: { control: 'color' },
    headingFontsize: {
      control: { type: 'range', min: 10, max: 50, step: 1 },
    },
    subheadingFontsize: {
      control: { type: 'range', min: 10, max: 50, step: 1 },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Headingsubheading },
  template: '<Headingsubheading v-bind="$props" />',
})

export const Service = Template.bind({})
Service.args = {
  heading: 'SERVICE',
  subheading: 'サービス',
}

export const Profile = Template.bind({})
Profile.args = {
  heading: 'PROFILE',
  subheading: '会社概要',
}

export const Contact = Template.bind({})
Contact.args = {
  heading: 'CONTACT',
  subheading: 'お問い合わせ',
}

export const FontColor = Template.bind({})
FontColor.args = {
  color: 'red',
}
