import titleText from './index.vue'

//使用するコンポーネントの宣言
export default {
    title: 'components/atoms/TitleText',
    component: titleText,
    argTypes: {
        titleColor: { control: 'color' },
        titleFontsize: {
          control: { type: 'range', min: 10, max: 50, step: 1 },
        },
        textFontsize: {
          control: { type: 'range', min: 10, max: 50, step: 1 },
        },
      },    
};

//共通のテンプレートの宣言
const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { titleText },
    template: '<titleText v-bind="$props" />',
});

export const engineers = Template.bind({});
engineers.args = {
    title: "エンジニア向け情報発信",
    text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
};
export const onlineSalon = Template.bind({});
onlineSalon.args = {
    title: "オンラインサロン",
    text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
}; 
