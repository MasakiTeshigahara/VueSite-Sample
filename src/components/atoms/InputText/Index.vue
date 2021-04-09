<template>
  <div>
    <v-container>
      <v-row>
        <v-text-field
          :placeholder="placeholder"
          :label="label"
          :value="value"
          :rules="rules"
          :class="classname"
          sm="12"
          @input="$emit('input', $event.target.value)"
        ></v-text-field>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'InputText',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: '入力欄',
    },
    rules: {
      type: String,
      required: true,
      default: '入力してください',
    },
    label: {
      type: String,
      required: true,
      default: 'ラベル',
    },
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      classname: 'infoform',
    }
  },
}
</script>

<style scoped>
form {
  width: 700px;
  margin: 0 auto;
  text-align: center;
}
.infoform {
  padding: 15px 35px;
}
</style>
