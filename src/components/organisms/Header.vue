<template>
  <div class="header">
    <Logo class="logo" />
    <HeaderMenu class="headermenu" />
  </div>
</template>

<script>
import Logo from '@/components/atoms/Logo/Index.vue'
import HeaderMenu from '@/components/atoms/HeaderMenu/index.vue'

export default {
  name: 'Header',
  components: {
    Logo,
    HeaderMenu,
  },
}
</script>

<style lang="scss">
.header {
  background-image: url('@/assets/img/top-shape.png');
  display: flex;
  height: 154px;
  .logo {
    margin-top: 10px;
    margin-left: 20px;
  }
}
</style>
