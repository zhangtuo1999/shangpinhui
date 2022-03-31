<template>
  <div>
    <h1>{{ num }}</h1>
    <button @click="throttleHandleClick">点击加 1</button>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "Demo2",
  created() {
    this.throttleHandleClick = _.throttle(this.handleClick, 1000)
  },
  data() {
    return {
      num: 0
    }
  },
  methods: {
    handleClick() {
      this.num++
    }
  }
}
</script>

<style scoped>

</style>
