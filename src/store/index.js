import Vue from "vue"
import vuex from "vuex"
import channels from "../store/channels"
import loginUser from "../store/loginUser"
Vue.use(vuex)

var store = new vuex.Store({
    modules: {
        channels,
        loginUser
    },
})

export default store;