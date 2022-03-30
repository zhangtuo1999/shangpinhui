<template>
  <div>
    搜索：{{ keyword }}
  </div>
</template>

<script>
export default {
  name: "index",
  // params 模式下，路由中配置 { props:true } 后，使用 props 解耦
  props: ['keyword'],

  // query 模式下，使用计算属性获取 query 中的参数
  // computed: {
  //   keyword() {
  //     return this.$route.query['keyword']
  //   }
  // }
}
</script>

<style scoped>

</style>
