<template>
  <button
    style="outline: none"
    :style="{ backgroundColor: backgroundColor }"
    @click="onClick"
  >
    <v-img
      :src="require(`@/assets/img/logo-white.png`)"
      :aspect-ratio="1 / 1"
      :width="width"
    />
  </button>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    backgroundColor: {
      type: String,
      required: false,
      default: 'null',
    },
    width: {
      type: Number,
      required: false,
      default: 100,
    },
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>
