<template>
  <div class="titletext">
    <div class="title">
      <div :style="{ color: titleColor, fontSize: titleFontsize + 'px' }">
        <h4>{{ title }}</h4>
      </div>
    </div>
    <v-img :src="image" />
    <div class="text">
      <div :style="{ color: textColor, fontSize: textFontsize + 'px' }">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Titltext',
  props: {
    title: {
      type: String,
      required: false,
      default: 'title',
    },
    text: {
      type: String,
      required: false,
      default: 'text',
    },
    titleColor: {
      type: String,
      required: false,
      default: '#1E244A',
    },
    textColor: {
      type: String,
      required: false,
      default: '#333333',
    },
    titleFontsize: {
      type: Number,
      required: false,
      default: 28,
    },
    textFontsize: {
      type: Number,
      required: false,
      default: 17.5,
    },
    image: {
      type: String,
      required: false,
      default: require(`@/assets/img/decoration.svg`),
    },
  },
}
</script>

<style scoped>
.titletext {
  font-family: 'ヒラギノ角ゴシック', 'WS', Arial, sans-serif;
  max-width: 450px;
  text-align: left;
}
.title {
  white-space: nowrap;
}
</style>
