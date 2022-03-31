<template>
  <div>
    <h1>{{ num }}</h1>
    <button @click="handleClick">点击加 1</button>
  </div>
</template>

<script>
import throttle from 'lodash/throttle.js'

export default {
  name: "Demo2",
  data() {
    return {
      num: 0
    }
  },
  methods: {
    handleClick: throttle(function () {
      this.num++
    }, 500)
  }
}
</script>

<style scoped>

</style>
