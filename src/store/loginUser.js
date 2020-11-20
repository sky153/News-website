import {login, whoAmI, loginOut} from "../services/userServies"
export default{
    namespaced: true,  //开启命名空间
    state: {
            data: null,  //当前登录的用户
            isLoading: false //是否正在远程加载
    },
    mutations: {
        setIsLoading(state, payload) {
            state.isLoading = payload;
        },
        setData(state, payload) {
            state.Data = payload;
        }
   },
   actions: {
        async login(context, payload) {
            context.commit("setIsLoading", true)
            var result = await login(payload)
            var resrse = false;
            if(result.code === 0) {
                context.commit("setData", result)
                resrse = true;
            } 
            context.commit("setIsLoading", false)
            return resrse;
       },
        async whoAmI(context) {
            context.commit("setIsLoading", true)
            var result = await whoAmI()
                context.commit("setData", result)
            context.commit("setIsLoading", false)
        },
        loginOut(context) {
            loginOut() 
            context.commit("setData", null)
        }
    } 
}