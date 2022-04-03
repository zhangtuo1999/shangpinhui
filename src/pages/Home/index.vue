<template>
  <div>
    <type-nav></type-nav>
    <list-container></list-container>
    <today-recommend></today-recommend>
    <rank></rank>
    <like></like>
    <floor v-for="item in floorList" :key="item.id" :list="item"></floor>
    <bland></bland>
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import TodayRecommend from "@/pages/Home/TodayRecommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Bland from "@/pages/Home/Bland";
import {mapState} from "vuex";

export default {
  name: "Home",
  components: {Bland, Floor, Like, Rank, TodayRecommend, ListContainer},
  computed: {
    ...mapState('home', ['floorList'])
  },
  mounted() {
    this.$store.dispatch('home/getFloorList')
  }
}
</script>

<style scoped>

</style>
