<template>
  <div>
    <ul>
      <li v-for="link in links" :key="link">
        <NuxtLink to="/">{{ link.label }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu',
  data() {
    return {
      links: [
        { label: 'サービス' },
        { label: '会社概要' },
        { label: 'お問い合わせ' },
      ],
    }
  },
}
// サービスのスクロール先top: 851px;left: 617px;
</script>

<style scoped>
div {
  margin: 0%;
}
ul {
  display: flex;
  list-style: none;
  width: 400px;
}
li {
  margin: 10px;
}
a {
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-family: 'ヒラギノ角ゴシック', 'WS', Arial, sans-serif;
}
</style>
