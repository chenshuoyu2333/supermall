<template>
<div id="detail">
  <detail-nav-bar class="detail-nav" @tab-click="tabClick" ref="nav"></detail-nav-bar>
  <scroll class="content" ref="scroll"
          probeType="3"
          @scroll="handleScrollContent">
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
    <detail-param-info ref="params" :param-info="paramInfo"></detail-param-info>
    <detail-comment-info  ref="comment" :comment-info="commentInfo"></detail-comment-info>
    <GoodsList ref="recommend" :goods="Recommends"></GoodsList>
  </scroll>
</div>
</template>

<script>
import DetailNavBar from "@/views/detail/detailComps/DetailNavBar";
import DetailSwiper from "@/views/detail/detailComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/detailComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/detailComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/detailComps/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/detailComps/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/detailComps/DetailCommentInfo";

import Scroll from "@/components/common/scroll/Scroll";
import GoodsList from "@/components/content/goods/GoodsList";

import  {getDetail, Goods,Shop,GoodsParam ,getRecommend} from "@/network/detail";
import {debounce} from "@/assets/js/utils";



export default {
name: "Detail",
  components: {
    GoodsList,
    Scroll,
    DetailCommentInfo,
    DetailParamInfo,
    DetailShopInfo,
    DetailBaseInfo,
    DetailSwiper,
    DetailNavBar,
    DetailGoodsInfo},
  data() {
    return {
      iid: null,
      item_id:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo: {},
      paramInfo: {},
      commentInfo:{},
      Recommends:[],
      themeTopYs:[],
      getthemeTopYs:null,
      currentIndex: 0
    }
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid
    this.item_id = this.$route.params.item_id
    // 2.根据iid请求详情数据
    this.getDetail()
    //3请求推荐数据
    this.getRecommend()
      //给this.themeTopYs防抖
    this.getthemeTopYs = debounce(()=>{
      this.themeTopYs=[]
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop-44)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44)
      this.themeTopYs.push(Number.MAX_VALUE);
      console.log(this.themeTopYs)
    },100)

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
          //6.获取评论信息
           this.commentInfo = data.rate.list[0]

        })
      },
      imageLoad() {
       this.getthemeTopYs()

      this.$refs.scroll.refresh()
    },
      getRecommend(){
        getRecommend().then(res=>{
          // console.log(res)
          this.Recommends = res.data.list

        })
      },
      tabClick(index) {
          this.$refs.scroll.scrollTo(0,-this.themeTopYs[index])
      },
    //处理内容滚动与标题同步
    handleScrollContent(position){
      let positionY = -position.y;
      let length = this.themeTopYs.length;

      for(let i = 0; i<length; i++){
        if(this.currentIndex!==i && positionY>=this.themeTopYs[i] && positionY<this.themeTopYs[i+1]){
          this.currentIndex = i;
          this.$refs.nav.currentIndex = i;
          console.log(this.currentIndex)
        }
      }

      // 是否显示backTop图标
      // this.isShowBackTop = Math.abs(position.y) > 1000;
    },

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
