<template>
  <div id="app">
    <hooper class="hooper" :auto-play="true" :play-speed="4000">
      <slide> <img src="https://picsum.photos/300/200" alt="" width="300px" /></slide>
      <slide> <img src="https://picsum.photos/id/237/300/200" alt="" width="300px"/> </slide>
      <slide> <img src="https://picsum.photos/300/200" alt="" width="300px"/> </slide>
      <slide>
        <img src="https://picsum.photos/300/200/?blur=3" alt="" width="300px"/>
      </slide>
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
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1, // 1ページに表示したい要素の個数
        centerMode: true, // 現在の要素を中央に表示するか};
        wheelControl: false,
        vertical: true,
        rtl: null,
      },
    };
  },
};
</script>

<style scoped>
.hooper-slide {
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 2px solid #fff;
  font-size: 30px;
  border-radius: 10px;
  width: 300px;
}
#app {
  padding: 0px;
}
</style>