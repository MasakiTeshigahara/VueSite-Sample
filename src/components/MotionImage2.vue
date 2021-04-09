<template>
  <transition>
    <div v-show="visible">
      <div class="image">
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
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
      if (!this.visible) {
        this.visible = window.scrollY > 2400;
      } else if (window.scrollY < 1800) {
        this.visible = !this.visible;
      }
    },
  },
};
</script>

<style scoped>
.v-enter {
  /* 最初に表示されたくないので０ */
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  /* transition している間 */
  animation-timing-function: linear;
  transition: opacity 300ms ease-out;
}

.v-enter-to {
  /* 終わったら表示して欲しいので 1 */
  opacity: 1;
  transform: translateY(50px);
}

.v-leave-to {
  opacity: 0;
}
/* ヘッダーロゴ フェード処理ここまで */
.image {
  width: 300px;
  height: 200px;
}
</style>