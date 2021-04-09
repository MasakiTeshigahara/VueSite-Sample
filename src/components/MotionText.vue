<template>
  <transition>
    <div v-show="visible">
      <h1>ここがフェードイン・アウトするよ</h1>
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
        this.visible = window.scrollY > 2300;
      } else if (window.scrollY < 1800) {
        this.visible = !this.visible;
      }
    },
  },
};
</script>

<style scoped>
.v-enter {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}

.v-enter-to {
  opacity: 1;
}

.v-leave-to {
  opacity: 0;
}
/* ヘッダーロゴ フェード処理ここまで */
</style>