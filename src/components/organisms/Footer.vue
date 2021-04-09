<template>
  <div class="footer">
    <Logo />
    <IconButton />
    <p>Copyright © アップスターツ株式会社</p>
  </div>
</template>

<script>
import Logo from '@/components/atoms/Logo/Index.vue'
import IconButton from '@/components/atoms/IconButton/index.vue'

export default {
  name: 'Footer',
  components: {
    Logo,
    IconButton,
  },
}
</script>

<style scoped>
.footer {
  height: 293px;
  text-align: center;
  background: #2b2f53;
  padding: 35px 0 28px;
}
p {
  font-family: 'ヒラギノ角ゴシック', 'WS', Arial, sans-serif;
}
</style>
