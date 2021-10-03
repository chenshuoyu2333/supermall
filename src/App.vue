<template>
  <div id="App">

    <router-view v-slot="{ Component }">
      <keep-alive include="Home">
        <component  :is="Component" />
      </keep-alive>
    </router-view>
    <main-tab-bar class="min-tab-bar"></main-tab-bar>
  </div>
</template>

<script>
import Home from "@/views/home/Home";
import ('./assets/css/base.css');
import MainTabBar from "./components/content/mainTabbar/MainTabBar";
export default {
  name: 'App',
  components: {
    Home,
    MainTabBar
  }
}
</script>

<style>
.min-tab-bar{
  z-index: 10;
}
</style>
