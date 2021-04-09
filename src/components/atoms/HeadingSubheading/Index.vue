<template>
  <div class="headingsubheading">
    <div class="heading">
      <div :style="{ color: color, fontSize: headingFontsize + 'px' }">
        {{ heading }}
      </div>
    </div>
    <div class="subheading">
      <div :style="{ color: color, fontSize: subheadingFontsize + 'px' }">
        {{ subheading }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Headingsubheading',
  props: {
    heading: {
      type: String,
      required: false,
      default: 'HEADING',
    },
    subheading: {
      type: String,
      required: false,
      default: 'サブヘディング',
    },
    color: {
      type: String,
      required: false,
      default: '#1E244A',
    },
    headingFontsize: {
      type: Number,
      required: false,
      default: 36,
    },
    subheadingFontsize: {
      type: Number,
      required: false,
      default: 25,
    },
  },
}
</script>

<style scoped>
.headingsubheading {
  text-align: center;
  line-height: 43px;
}
.heading {
  font-family: 'Industry Inc', 'Base', Arial, sans-serif;
}
.subheading {
  font-family: 'ヒラギノ角ゴシック', 'WS', Arial, sans-serif;
}
</style>
