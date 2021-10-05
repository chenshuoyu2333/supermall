<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control class="tab-control" :list="['流行','新款','精选']"  @tabClick="tabClick" v-show="isTabFixed" ref="tabControl1"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @Scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banner" @homeSwiperImageLoad="homeSwiperImageLoad"/>
      <recommends-view :recommends="recommends"/>
      <feature-view></feature-view>
      <tab-control  class="tab-control" :list="['流行','新款','精选']"  @tabClick="tabClick" ref="tabControl2"/>
      <goods-list :goods="showGoods"></goods-list>

    </scroll>

    <back-top @click="backClick" v-show="isShowBackTop"/>

  </div>
</template>

<script>
import HomeSwiper from "views/home/childComps/HomeSwiper";
import RecommendsView from "@/views/home/childComps/recommendsView";
import FeatureView from "@/views/home/childComps/FeatureView";

import Scroll from "@/components/common/scroll/Scroll";
import NavBar from "components/common/navbar/navBar";

import TabControl from "@/components/content/tabControl/TabControl";
import BackTop from "@/components/content/backTop/BackTop";
import GoodsList from "@/components/content/goods/GoodsList";


import { getHomeMultidata, getHomeGoods } from 'network/home'
import { debounce } from "assets/js/utils";


export default {
  name: "Home",
  components: {
    BackTop,
    Scroll,
    GoodsList, TabControl,
    FeatureView, RecommendsView,
    NavBar,HomeSwiper
  },
  data(){
    return{
      banner:[],
      recommends:[],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop',
      isShowBackTop:false,
      taboffsetTop:0,
      isTabFixed: false,
      saveY:0
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },

  activated() {

    this.$refs.scroll.scrollTo(0, this.saveY, 100)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
  },
  created() {
    // 请求home页轮播图，推荐信息
    this.getHomeMultidata()
    //请求home页商品信息
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')


  },
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on('itemImageLoad',()=>{
      refresh()
    })
  },

  methods:{
    homeSwiperImageLoad(){
      this.taboffsetTop= this.$refs.tabControl2.$el.offsetTop
      console.log(this.taboffsetTop)
      this.$refs.scroll.refresh()
    },

    //切换home页分类
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    //返回顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    // 返回顶部图标的显示
    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 1000
      this.isTabFixed = (-position.y)>this.taboffsetTop

    },

    //请求服务器数据
    getHomeMultidata(){
      getHomeMultidata().then(res=>{

        this.banner=res.data.banner.list
        this.recommends=res.data.recommend.list
      },error => {
        console.log(error)})
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res =>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()

      })
    }
  }

}
</script>

<style scoped>
#home{
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}
.home-nav{
  background: var(--color-tint);
  color: #ffffff;


  position: relative;
  /* left: 0;*/
  /* right: 0;*/
  /* top: 0;*/
   z-index: 9;
}
.tab-control{
  position:relative;
  z-index:101 ;
}
/*.content {*/
/*  position: absolute;*/
/*  top: 44px;*/
/*  bottom: 49px;*/
/*  left: 0;*/
/*  right: 0;*/
/*  overflow: hidden;*/
/*}*/

.content {
  height: calc(100% - 93px);
overflow: hidden;

}
</style>
