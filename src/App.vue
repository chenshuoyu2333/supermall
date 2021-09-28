<template>
  <div id="App">
    <router-view/>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import ('./assets/css/base.css');
import MainTabBar from "./components/content/mainTabbar/MainTabBar";
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>

</style>
