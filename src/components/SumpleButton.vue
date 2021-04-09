<template>
 <div id="demo" class="button">
  <button v-on:click="show = !show" :style="{color: 'red'}">
    ボタン
  </button>
  <transition name="fade">
    <p v-if="show">Motion Sample</p>
  </transition>
</div>   
</template>
<script>
export default {
    el: '#demo',
  data() {
    return {
      show: true,
    };
},
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s, transform .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>>

