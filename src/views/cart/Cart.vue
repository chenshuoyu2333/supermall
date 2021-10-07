<template>
<div id="cart">
  <cart-nav-bar/>
  <scroll class="cart-scroll">
    <cart-list :cartlist="cartlist" />
  </scroll>
  <cart-bottom-bar></cart-bottom-bar>
</div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import CartNavBar from "@/views/cart/cartComps/CartNavBar";
import CartList from "@/views/cart/cartComps/CartList";
import CartBottomBar from "@/views/cart/cartComps/CartBottomBar";

export default {
  name: "Cart",
  components: {CartBottomBar, CartNavBar,Scroll,CartList},
}
</script>

<style scoped>
#cart {
  height: 100vh;
}

.cart-scroll {
  height: calc(100% - 49px - 44px - 40px);
  overflow: hidden;
}

</style>
