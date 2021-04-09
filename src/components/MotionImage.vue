<template>
    <div id="rotation">
      <v-img :height="height" :width="width" :src="image" />
  </div>
</template>

<script>
import anime from "animejs";
export default {
  name: "MotionImage",
  props: {
    height: {
      type: Number,
      required: false,
      default: 246,
    },
    width: {
      type: Number,
      required: false,
      default: 350.5,
    },
    image: {
      type: String,
      required: true,
    },
    mounted() {
      anime({
        targets: "#rotation",
        rotate: 1800,
        loop: true,
      });
    },
  },
};

</script>

