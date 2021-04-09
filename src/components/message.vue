<template>
  <div class="titletext" id="fadein">
    <div class="title">
      <div :style="{ color: titleColor, fontSize: titleFontsize + 'px' }">
        <h4>{{ title }}</h4>
      </div>
    </div>
    <v-img :src="image" />
    <div class="text">
      <div :style="{ fontSize: textFontsize + 'px' }">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  name: "titltext",
  props: {
    title: {
      type: String,
      required: false,
      default: "title",
    },
    text: {
      type: String,
      required: false,
      default: "text",
    },
    titleColor: {
      type: String,
      required: false,
      default: "#1E244A",
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
      default: require(`@/assets/decoration.svg`),
    },
    mounted() {
      anime({
        targets: "#fadein",
        rotate: 1800,
        loop: true,
      });
    },
  },
};
</script>

<style scoped>
.titletext {
  font-family: "ヒラギノ角ゴシック", "WS", Arial, sans-serif;
  max-width: 355px;
}
</style>