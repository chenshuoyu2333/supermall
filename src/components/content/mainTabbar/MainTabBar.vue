<template>
  <tab-bar>
    <div class="main-tab-bar">
      <TabBar>
        <TabBarItem path="/home">
          <template #item-icon><img src="~assets/img/tabbar/home.svg" alt="" srcset=""></template>
          <template #item-icon-active>
          <img  src="~assets/img/tabbar/home_active.svg" alt="" srcset="">
          </template>
          <template #item-text>
            <div>首页</div>
          </template>
        </TabBarItem>
        <TabBarItem path="/category">
          <template #item-icon>
            <img src="~assets/img/tabbar/category.svg" alt="" srcset="">
          </template>
          <template #item-icon-active>
            <img src="~assets/img/tabbar/category_active.svg" alt="" srcset="">
          </template>
          <template #item-text>
            <div>分类</div>
          </template>
        </TabBarItem>
        <TabBarItem path="/cart">
          <template #item-icon>
            <img src="~assets/img/tabbar/shopcart.svg" alt="" srcset="">
          </template>
          <template #item-icon-active>
            <img src="~assets/img/tabbar/shopcart_active.svg" alt="" srcset="">
          </template>
          <template #item-text>
            <div>购物车</div>
          </template>
        </TabBarItem>
        <TabBarItem path="/profile">
          <template #item-icon>
            <img src="~assets/img/tabbar/profile.svg" alt="" srcset="">
          </template>
          <template #item-icon-active>
            <img src="~assets/img/tabbar/profile_active.svg" alt="" srcset="">
          </template>
          <template #item-text>
            <div>我的</div>
          </template>
        </TabBarItem>
      </TabBar>
    </div>
    </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
