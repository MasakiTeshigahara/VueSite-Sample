<template>
  <v-app>
    <v-container>
      <div class="heading-subheading">
        <heading-subheading heading="SERVISE" subheading="サービス" />
      </div>
      <!---------------------- コンテンツ１ ------------------->
      <v-row justify="center">
        <div class="content1">
          <message
            title="ふわっとモーション"
            text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          >
          </message>
          <div class="btn1">
            <IconButton
              icon="mdi-open-in-new"
              name="YouTubeチャンネル"
              @click="clickButton(1)"
              class="ma-1"
            />
          </div>
        </div>
        <div class="image1">
          <motion-image-2 />
        </div>
      </v-row>
      <!--------------- コンテンツ2 ---------------->
      <v-row justify="center">
        <div class="content1">
          <message
            title="ふわっとモーション"
            text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          >
          </message>
          <div class="btn1">
            <IconButton
              icon="mdi-open-in-new"
              name="YouTubeチャンネル"
              @click="clickButton(1)"
              class="ma-1"
            />
          </div>
        </div>
        <transition>
          <div class="image1">
            <motion-image-2 />
          </div>
        </transition>
      </v-row>
      <!------------------- コンテンツ3 --------------->
      <v-row justify="center">
        <div class="content1">
          <message
            title="ふわっとモーション"
            text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          >
          </message>
          <div class="btn1">
            <IconButton
              icon="mdi-open-in-new"
              name="YouTubeチャンネル"
              @click="clickButton(1)"
              class="ma-1"
            />
          </div>
        </div>
        <div class="image1">
          <motion-image-2 />
        </div>
      </v-row>
      <!----------- スライドショー ----------->
      <v-row justify="center">
        <div class="content1">
          <message
            title="スライドショー"
            text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          >
          </message>
          <div class="btn1">
            <IconButton
              icon="mdi-open-in-new"
              name="YouTubeチャンネル"
              @click="clickButton(1)"
              class="ma-1"
            />
          </div>
        </div>
        <div class="image1">
          <div>
            <img
              src="@/assets/thumbnail.png"
              alt="スライドショー"
              id="slide_img"
              class="slider"
              max-width="300px"
            />
          </div>
        </div>
      </v-row>
      <slide-show-2 />
      <div id="rotation">
        <p>kaitenn</p>
      </div>
      <motion-image />
      <sumple-button />
      <slide-show />
      <motion-text />
      <div class="MoitonContainer">
        <motion-image-2 />
      </div>
    </v-container>
  </v-app>
</template>

<script>
import HeadingSubheading from "./components/HeadingSubheading.vue";
import IconButton from "./components/IconButton.vue";
import message from "./components/message.vue";
import MotionImage from "./components/MotionImage.vue";
import MotionImage2 from "./components/MotionImage2.vue";
import MotionText from "./components/MotionText.vue";
import SlideShow from "./components/SlideShow.vue";
import SlideShow2 from "./components/SlideShow2.vue";
import SumpleButton from "./components/SumpleButton.vue";
export default {
  components: {
    IconButton,
    message,
    HeadingSubheading,
    MotionText,
    MotionImage2,
    SumpleButton,
    SlideShow,
    MotionImage,
    SlideShow2,
  },
  methods: {
    clickButton(value) {
      alert(value);
    },
  },
};
const img_src = [
  "@/assets/thumbnail2.png",
  "assets/thumbnail3.png",
  "assets/thumbnail4.png",
];
let num = -1;

function slide_time() {
  if (num === 2) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("slide_img").src = img_src[num];
}
setInterval(slide_time, 2500);
</script>

<style scoped>
.container {
  height: 6000px;
}

.Block1 {
  -webkit-clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 83%, 0% 100%);
  width: 100%;
  margin: 0;
}
.heading-subheading {
  padding-bottom: 70px;
}
.btn1 {
  padding-left: 145px;
  padding-top: 10px;
}
.content1 {
  padding-right: 70px;
  padding-bottom: 300px;
}
.btn2 {
  padding-left: 155px;
  padding-top: 10px;
}
.content2 {
  padding-right: 50px;
}
.content5 {
  padding-top: 500px;
  padding-right: 70px;
  padding-bottom: 100px;
}
.image1 {
  padding-left: 50px;
  padding-bottom: 30px;
}
.image2 {
  padding-left: 50px;
}
.image5 {
  padding-top: 500px;
  padding-left: 50px;
}
.slider {
  max-width: 300px;
}
/* ↓スクロールに応じて要素を固定↓ */
.sticky {
  position: -webkit-sticky;
  /* 要素をスクロールに応じて固定 */
  position: sticky;
  /* 縦からどのくらいの位置に固定するか */
  top: 0;
  /* z-indexで最前面に持ってくる */
  z-index: 1;
}
.sticky-box1 {
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: gray;
  height: 500px;
  width: 500px;
  border-radius: 30px 30px 30px 30px;
}
.sticky-box2 {
  position: sticky;
  top: 0;
  z-index: 3;
  height: 1000px;
}
/* ↑スクロールに応じて要素を固定↑ */

.MoitonContainer {
  margin-top: 50px;
}
#elem .square {
  width: 60px;
  height: 60px;
  background: #39a2ae;
}
</style>