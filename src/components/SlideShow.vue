<template>
  <div id="app">
    <hooper class="hooper" :auto-play="true" :play-speed="3000">
      <slide> slide 1 </slide>
      <slide> slide 2 </slide>
      <slide> slide 3 </slide>
      <slide> slide 4 </slide>
    </hooper>
  </div>
</template>
<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "SlideShow",
  components: {
    Hooper,
    Slide,
  },
};
</script>
<style scoped>
.hooper-slide {
  background-color: #62caaa;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 2px solid #fff;
  font-size: 30px;
  border-radius: 10px;
  width: 100%;
}
.hooper {
  width: 300px;
}
</style>