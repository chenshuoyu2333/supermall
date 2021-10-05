<template>
<nav-bar >
  <template #left>
    <div class="back" @click="back"><img src="~assets/img/common/back.svg" alt=""></div>
  </template>
  <template #center >
    <div class="title">
      <div  class="title-item" v-for="(item,index) in title" :key="index" :class="{active: currentIndex===index}" @click="titleClick(index)">{{item}}</div>
    </div>
  </template>
</nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/navBar";
export default {
name: "DetailNavBar",
  components: {NavBar},
  data(){
    return{
      currentIndex:0,
      title:['商品','参数','评价','推荐']
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex=index
    },
    back(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.back img {
  padding-top: 10px;
}
.title {
  display: flex;
}
.title-item{
  flex: 1;
  font-size: 12px;
}
.active{
  color: var(--color-high-text);
}

</style>
