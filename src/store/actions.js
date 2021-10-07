import {ADD_COUNT,ADD_TO_CART} from "@/store/mutations-types";
export default {
  addCart(context,payload) {
    //payload 新添加的商品
    let  oldproduct =context.state.cartlist.find(item=>item.iid===payload.iid)
    if(oldproduct)
    {
      context.commit(ADD_COUNT,oldproduct)
    }
    else{
      payload.count=1
      context.commit(ADD_TO_CART,payload)
    }

  }

}
