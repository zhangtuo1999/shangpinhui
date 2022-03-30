<template>
  <div>
    <type-nav></type-nav>
    <list-container></list-container>
    <today-recommend></today-recommend>
    <rank></rank>
    <like></like>
    <floor></floor>
    <floor></floor>
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

export default {
  name: "index",
  components: {Bland, Floor, Like, Rank, TodayRecommend, ListContainer},
}
</script>

<style scoped>

</style>
