export default {
    routes: [
        {
            path: "/",
            name: "Home" ,
            component: ()=>import("../views/Home")
        },
        {
            path: "/login",
            name: "Login",
            component: ()=>import("../views/Login")
        },
        {
            path: "/reg",
            name: "Reg" ,
            component: ()=>import("../views/Reg")
        },
        {
            path: "/news/:id", 
            name: "ChannelsNews",
            component: ()=>import("../views/ChannelsNews")
        },
        {
            path: "*", //匹配所有路径
            name: "404" ,
            component: ()=>import("../views/NotFound")
        },
    ],
    mode: "history"
}
