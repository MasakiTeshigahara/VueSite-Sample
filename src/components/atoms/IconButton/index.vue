<template>
  <ul>
    <li v-for="(image, i) in images" :key="i">
      <button style="outline: none" @click="onClick">
        <img :src="image" />
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'IconButton',
  data() {
    return {
      images: [
        require('@/assets/img/t_icon.png'),
        require('@/assets/img/f_icon.png'),
      ],
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>
<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 23px 0 28px;
  padding: 0;
}
img {
  width: 50px;
  height: 50px;
  margin: 0 12.5px;
}
</style>
