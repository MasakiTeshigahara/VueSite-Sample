<template>
  <div class="color">
    <table>
      <tr v-for="item in items" :key="item.name">
        <td>
          {{ item.name }}
        </td>
        <td class="sben">
          {{ item.contents }}
        </td>
      </tr>
    </table>
    <br />
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style scoped lang="css">
div {
  color: #1e244a;
  background-color: #f2ede7;
}
@media screen and (min-width: 1264px) {
  p.profile {
    font-size: 32px;
    padding-left: 520px;
    width: 100px;
    height: 25px;
  }
  p.company {
    font-size: 25px;
    margin-left: 530px;
  }
  tr {
    margin-left: 100px;
    white-space: nowrap;
  }
  table,
  td {
    padding-left: 60px;
    white-space: nowrap;
    color: #1e244a;
    border-bottom: 1px solid #707070;
    font-size: 18px;
    vertical-align: middle;
    padding-right: 28px;
    height: 50px;
  }
  .break {
    display: none;
  }

  table {
    border-collapse: collapse;
    margin-left: 280px;
    vertical-align: middle;
    white-space: nowrap;
    margin-bottom: 100px;
    padding-top: 36px;
  }
}
@media all and (min-width: 1024px) and (max-width: 1264px) {
  p.profile {
    font-size: 32px;
    padding-left: 320px;
    width: 10px;
    height: 15px;
    color: #1e244a;
    margin-bottom: 30px;
  }
  p.company {
    font-size: 24px;
    margin-left: 332px;
    color: #1e244a;
  }
  .sben {
    white-space: pre-line;
    word-wrap: normal;
    padding-bottom: 20px;
  }

  tr {
    margin-left: 15px;
    height: 60px;
    font-size: 14px;
    white-space: nowrap;
  }

  table {
    border-bottom: 1px solid #707070;
    font-size: 24px;
    vertical-align: middle;
    padding-right: 24px;
    border-collapse: collapse;
    margin-left: 108px;
    word-break: normal;
    text-align: justify;
  }
  td {
    border-bottom: 1px solid #707070;
    font-size: 16px;
    vertical-align: middle;
    padding-right: 24px;
    padding-left: 32px;
    word-break: normal;
  }
  .break {
    display: inline;
  }
}

@media all and (min-width: 768px) and (max-width: 1024px) {
  p.profile {
    font-size: 32px;
    padding-left: 320px;
    width: 10px;
    height: 15px;
    color: #1e244a;
    margin-bottom: 30px;
  }
  p.company {
    font-size: 24px;
    margin-left: 330px;
    color: #1e244a;
  }
  .sben {
    white-space: pre-line;
    word-wrap: normal;
    padding-bottom: 20px;
  }

  tr {
    margin-left: 15px;
    height: 60px;
    font-size: 14px;
    white-space: nowrap;
  }

  table {
    border-bottom: 1px solid #707070;
    font-size: 24px;
    vertical-align: middle;
    padding-right: 24px;
    border-collapse: collapse;
    margin-left: 108px;
    word-break: normal;
    text-align: justify;
  }
  td {
    border-bottom: 1px solid #707070;
    font-size: 16px;
    vertical-align: middle;
    padding-right: 24px;
    padding-left: 32px;
    word-break: normal;
  }
  .break {
    display: inline;
  }
}
@media only screen and (min-width: 480px) and (max-width: 768px) {
  p.profile {
    font-size: 32px;
    padding-left: 240px;
    width: 10px;
    height: 15px;
    color: #1e244a;
    margin-bottom: 30px;
  }
  p.company {
    font-size: 24px;
    margin-left: 250px;
    color: #1e244a;
  }
  .sben {
    white-space: pre-line;
    word-wrap: normal;
    padding-bottom: 20px;
  }

  tr {
    margin-left: 15px;
    height: 60px;
    font-size: 14px;
    white-space: nowrap;
  }

  table {
    border-bottom: 1px solid #707070;
    font-size: 24px;
    vertical-align: middle;
    padding-right: 24px;
    border-collapse: collapse;
    margin-left: 108px;
    word-break: normal;
    text-align: justify;
  }
  td {
    border-bottom: 1px solid #707070;
    font-size: 16px;
    vertical-align: middle;
    padding-right: 24px;
    padding-left: 32px;
    word-break: normal;
  }
  .break {
    display: inline;
  }
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
  p.profile {
    font-size: 26px;
    padding-left: 135px;
    width: 10px;
    height: 15px;
    color: #1e244a;
  }
  p.company {
    font-size: 20px;
    margin-left: 145px;
    color: #1e244a;
  }
  .sben {
    white-space: pre-line;
    word-wrap: normal;
    padding-bottom: 20px;
  }

  tr {
    margin-left: 15px;
    height: 60px;
    font-size: 14px;
    white-space: nowrap;
  }

  table {
    border-bottom: 1px solid #707070;
    font-size: 14px;
    vertical-align: middle;
    padding-right: 12px;
    border-collapse: collapse;
    margin-left: 10px;
    word-break: normal;
    text-align: justify;
  }
  td {
    border-bottom: 1px solid #707070;
    font-size: 14px;
    vertical-align: middle;
    padding-right: 12px;
    padding-left: 15px;
    word-break: normal;
  }
  .break {
    display: inline;
  }
}
</style>
