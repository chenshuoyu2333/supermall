<template>
    <div class="recommends">
        <div v-for="item in recommends" :key="item.arm" class="recommends-item">
          <a :href="item.link"><img :src="item.image" alt=""></a>
          <div>{{item.title}}</div>
        </div>

    </div>
</template>

<script>
export default {
name: "recommendsView",
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }

}
</script>

<style scoped>
.recommends{
  width: 100%;
  display: flex;
  text-align: center;
  padding: 10px 0 20px ;
  border-bottom: 8px solid #eee;
}
.recommends-item{
  flex: 1;
  font-size: 12px;


}
.recommends-item img{
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
