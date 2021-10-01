<template>
<div class="tab-control">
  <div v-for="(item,index) in list" :key="index" class="tab-control-item"
       :class="{active:currentIndex===index}" @click="itemClick(index)">
    <span>{{item}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "TabControl",
  data(){
    return {
      currentIndex:0
    }
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  background:#ffffff;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}
.tab-control-item{
  flex: 1;
}
.tab-control-item span{
  padding: 5px;
}
.active{
  color: var(--color-high-text);
}
.active span{

  border-bottom: 3px solid var(--color-high-text);
}
</style>
