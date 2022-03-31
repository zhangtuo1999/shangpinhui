<template>
  <div>
    请输入：<input type="text" v-model="inputText"/>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: "Demo1",
  created() {
    this.debounceHandleChange = _.debounce(this.handleChange, 500)
  },
  data() {
    return {
      inputText: ''
    }
  },
  watch: {
    inputText() {
      this.debounceHandleChange()
    }
  },
  methods: {
    handleChange() {
      console.log(this.inputText)
    }
  }
}
</script>

<style scoped>

</style>
