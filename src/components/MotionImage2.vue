<template>
  <transition>
    <div class="image">
      <div class="m-5 element js-animation">
        <v-img :src="require('@/assets/thumbnail.png')" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showElementAnimation() {
      var element = document.getElementsByClassName("js-animation");
      if (!element) return; // 要素がなかったら処理をキャンセル

      var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
      var scrollY = window.pageYOffset; //ブラウザトップを基準としスクロール量を返す
      var windowH = window.innerHeight; //現在のウィンドウの内部の高さをピクセル単位で返す
      for (var i = 0; i < element.length; i++) {
        var elemClientRect = element[i].getBoundingClientRect(); // 画面からどのくらい上から、左から離れているかを取得する
        var elemY = scrollY + elemClientRect.top; //（ブラウザトップからのスクロール量）＋（画面の上から、要素の上までの距離）
        if (scrollY + windowH - showTiming > elemY) {
          element[i].classList.add("is-show"); //is-showクラスが追加されふわっとモーションが表示される
        } else if (scrollY + windowH < elemY) {
          // 上にスクロールして再度非表示にする場合はこちらを記述
          element[i].classList.remove("is-show");
        }
        window.addEventListener("scroll");
      }
    },
  },
};
</script>

<style scoped>
.js-animation {
  opacity: 0;
  visibility: hidden;
  transform: translatey(80px);
  transition: all 1s;
}
.js-animation.is-show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0px);
}
.image {
  width: 300px;
  height: 200px;
}
</style>