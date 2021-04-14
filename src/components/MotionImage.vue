<template>
  <div>
    <div id="rotation">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  name: "MotionImage",
  data() {
    return {
      title: "Header",
      text: "Hello Vue.js!",
    };
  },
  methods: {
    rotaion() {
      anime({
        targets: "#rotation",
        translateX: 500,
        loop: true,
      });
    },
  },
};
</script>