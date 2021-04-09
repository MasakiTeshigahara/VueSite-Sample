<template>
  <div>
    <v-container>
      <v-row>
        <v-textarea
          :placeholder="placeholder"
          :value="value"
          :label="label"
          :rules="messageRules"
          :class="classname"
          rows="3"
          sm="12"
          @input="updateValue"
        ></v-textarea>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'InputTextArea',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: 'メッセージ本文',
    },
    label: {
      type: String,
      required: false,
      default: 'メッセージ本文',
    },
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      contactForm: {
        message: '',
      },
      messageRules: [(value) => !!value || 'メッセージ本文を入力してください'],
      classname: 'infoform',
    }
  },
  methods: {
    updateValue(e) {
      this.$emit('input', e.target.value)
    },
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
