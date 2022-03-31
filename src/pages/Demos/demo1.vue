<!--suppress JSValidateTypes -->
<template>
  <div>
    请输入：<input type="text" v-model="inputText"/>
  </div>
</template>

<script>
import debounce from 'lodash/debounce.js'

export default {
  name: "Demo1",
  data() {
    return {
      inputText: ''
    }
  },
  watch: {
    inputText() {
      this.handleChange()
    }
  },
  methods: {
    handleChange: debounce(function () {
      console.log(this.inputText)
    }, 500)
  }
}
</script>

<style scoped>

</style>
