<template>
    <nav-bar class="cart-nav-bar">
      <template #center>
        购物车（{{length}}）
      </template>
    </nav-bar>
</template>

<script>
import {mapGetters} from 'vuex'
import NavBar from "@/components/common/navbar/navBar";
export default {
name: "CartNavBar",
  components:{
    NavBar
  },
  computed:{
  ...mapGetters({
    length:'cartListLength',
    cartlist:'cartList'
  })
  }
}
</script>

<style scoped>
.cart-nav-bar{
  background: var(--color-tint);
  color: #ffffff;
}
</style>
