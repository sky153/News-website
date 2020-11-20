<template>
    <div class="header">
        <div class="header-container">
            <div class="container">
                <div class="logo">
                    <router-link :to="{name: 'Home'}">
                        <img src="../assets/lo.png" alt="">
                    </router-link>
                </div>
                
                 <ul class="nav">
                    <li><router-link :to="{name: 'Home'}">首页</router-link></li>
                    <li v-for="item in data.slice(0,5)" 
                    :key="item.channelId">
                        <router-link :to="`/news/${item.channelId}`">{{item.name}}</router-link>
                    </li>
                </ul>
                <div class="user">
                    <span v-if="isLogining">...laoding</span>
                    <template v-else-if="loginUser">
                    <a href="">用户名</a>
                    <a href="">退出登录</a>
                    </template>
                    <template v-else>
                    <router-link :to="{name: 'Login'}">登录</router-link>
                    <router-link :to="{name: 'Reg'}">注册</router-link>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState("channels",["data","isLoading"]),
        ...mapState("loginUser", {
            loginUser: "data",
            isLogining: "isLoading"
        })
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    }
}

</script>

<style scoped>
    .header{
        height: 60px;
        
    }
    .header-container{
        height: 60px;
        background-color: #000;
        color: #fff;
        line-height: 60px;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        display: flex;
        z-index: 100;
    }
    .container{
        display: flex;
        width: 1080px;
        margin: 0 auto;
    }
    .logo a{
        display: flex;
        align-items: center;
        height: 100%;
    }
    .logo img{
        width: 42px;
        height: 42px;
    }
    .nav{
        margin: 0 60px;
        display: flex;
        flex-grow: 1;
        
    }
    .nav a{
        display: block;
        padding: 0 16px;
    }
    .nav .router-link-exact-active{
        color: #fff;
        background: #999;
    }
    /* .nav .active{
        background-color: #999;
        
    } */
    .nav li:hover{
        background-color: #999;
        transition: all 0.4s linear;
    }
    .user{
        font-size: 14px;
    }
    .user *{
        margin-left: 10px;
    }
    .header a{
        color: #fff;
    }
    
</style>