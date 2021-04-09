<template>
  <div>
    <v-img
      :height="'height' + '%'"
      :width="width"
      :style="`box-shadow: 15px 15px 0px ${shadowColor}`"
      :src="image"
    />
  </div>
</template>

<script>
export default {
  name: 'ShadowImage',
  props: {
    width: {
      type: Number,
      required: false,
      default: 350.5,
    },
    height: {
      type: Number,
      required: false,
      default: 100,
    },
    image: {
      type: String,
      required: true,
    },
    shadowColor: {
      type: String,
      required: false,
      default: '#FB8C18B3',
    },
  },
}
</script>
