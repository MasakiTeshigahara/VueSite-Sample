<template>
  <div>
    <v-btn
      :color="color"
      elevation="5"
      style="text-transform: none"
      :class="`${textColor}--text`"
      :href="url"
      @push="pushButton"
    >
      <v-icon v-if="icon" left> {{ icon }} </v-icon>
      {{ name }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'InfoButton',
  props: {
    name: {
      type: String,
      required: false,
      default: 'アイコンボタン',
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
    color: {
      type: String,
      required: false,
      default: 'orange',
    },
    textColor: {
      type: String,
      required: false,
      default: 'white',
    },
    url: {
      type: String,
      required: true,
      default: '#',
    },
  },
  methods: {
    pushButton() {
      this.$emit('push')
    },
  },
}
</script>
