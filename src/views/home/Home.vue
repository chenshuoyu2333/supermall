<template>
<div id="home">
  <nav-bar class="home-nav">
        <template #center>
          <div>购物街</div>
        </template>
  </nav-bar>
</div>
</template>

<script>

import NavBar from "components/common/navbar/navBar";
import {getHomeMultidata} from 'network/home'
export default {
  name: "Home",
  components: {NavBar},
  component:{
    NavBar
  },
  data(){
    return{
      banner:null

    }
  },
  created() {

      getHomeMultidata().then(res=>{
        this.banner=res.data.banner.list
      })



  }

}
</script>

<style scoped>
 .home-nav{
   background: var(--color-tint);
   color: #ffffff;
 }

</style>
