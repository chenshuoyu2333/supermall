<template>
  <div class="block">
    <el-carousel height="150px">
      <el-carousel-item v-for="item in banners" :key="item.arm" >
        <a :href="item.link">
          <img :src="item.image" alt=""  @load="imageLoad">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {

  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return{
      isLoad:false
    }
  },
  methods:{
    imageLoad() {
      if (!this.isLoad){
        this.$emit('homeSwiperImageLoad')
        this.isLoad=true
      }
    }
  }
}
</script>

<style scoped>
.block{

  height: 150px
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  width: 100%;
  height: 100%;
}


</style>
