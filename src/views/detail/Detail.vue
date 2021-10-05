<template>
<div id="detail">
  <detail-nav-bar class="detail-nav"></detail-nav-bar>
  <scroll class="content" ref="scroll">
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
    <detail-param-info :param-info="paramInfo"></detail-param-info>
  </scroll>
</div>
</template>

<script>
import DetailNavBar from "@/views/detail/detailComps/DetailNavBar";
import DetailSwiper from "@/views/detail/detailComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/detailComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/detailComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/detailComps/DetailGoodsInfo";
import Scroll from "@/components/common/scroll/Scroll";

import  {getDetail, Goods,Shop,GoodsParam} from "@/network/detail";
import DetailParamInfo from "@/views/detail/detailComps/DetailParamInfo";

export default {
name: "Detail",
  components: {DetailParamInfo, Scroll, DetailShopInfo, DetailBaseInfo, DetailSwiper, DetailNavBar,DetailGoodsInfo},
  data() {
    return {
      iid: null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo: {},
      paramInfo: {}
    }
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid
    // 2.根据iid请求详情数据
    this.getDetail()
  },
  methods:{
      getDetail(){
        getDetail(this.iid).then(res=>{
          console.log(res);
          const data = res.result
          // 1.获取顶部的图片轮播数据
          this.topImages = data.itemInfo.topImages
          // 2.获取商品信息
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
          //3.获取店铺信息
          this.shop = new  Shop(data.shopInfo)
          // 4.保存商品的详情数据
          this.detailInfo = data.detailInfo;
          // 5.获取参数的信息
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        })
      },
    imageLoad() {
      this.$refs.scroll.refresh()
    }

  }

}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 90;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px);
}
</style>
