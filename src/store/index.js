import {createStore} from 'vuex'
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import getters from "@/store/getters";
const state = {
  cartlist:[]
}





export default  createStore({
    state,
  mutations,
  actions,
  getters
})
