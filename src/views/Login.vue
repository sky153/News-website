<template>
    <div>
        <Center>
            <form class="login-container" @submit.prevent="handleSumit">
            <div class="from-item">
                <div class="input">
                    <label for="">账号:</label>
                    <input type="text" v-model="userInfo.loginId" @input="validatdEmpty('loginId', '账号不能为空')">
                </div>
                <fromError :msg="error.loginId"></fromError>
            </div>
            <div class="from-item">
                <div class="input">
                    <label for="">密码:</label>
                    <input type="password" v-model="userInfo.loginPwd" @input="validatdEmpty('loginPwd', '密码不能为空')" autocomplete="new-password">
                </div>
                <fromError :msg="error.loginPwd"></fromError>
            </div>
            <div class="from-item">
                <div class="input">
                    <label for=""></label>
                    <button>{{$store.state.loginUser.isLoading?"Loading...":"登录"}}</button>
                </div>
                <fromError :isCenter="true" :msg="error.server"></fromError>
            </div>
            </form>
        </Center>
    </div>
</template>

<script>
import Center from "../components/Center"
import fromError from "../components/fromError"
// import {reg} from "../services/userServies"
export default {
    components: {
        Center,
        fromError
    },
    data() {
        return {
            userInfo: {
                loginId: "",
                loginPwd: "",
            },
            error: {
                loginId: "",
                loginPwd: "",
            }
        }
    },
    methods: {
        validatdEmpty(field, msg) {
            if(this.userInfo[field]) {
                this.error[field] = "";
                return true;
            }else{
                this.error[field] = msg;
                return false;
            }
        },
        async handleSumit() {
            if(this.$store.state.loginUser.isLoading) {
                return;
            }
            if(this.validatdEmpty('loginId', '账号不能为空')&&
                this.validatdEmpty('loginPwd', '密码不能为空')
            ){
                //提交数据
                var res = await this.$store.dispatch("loginUser/login", this.userInfo)
                if(res) {
                    this.$router.push({name: "Home"})
                }else{
                    this.error.loginId = "账号/密码不正确"
                }
            }
        }
    }
}
</script>

<style scoped>
    .login-container{
        width: 300px;
    }
    .from-item .input{
        display: flex;
        position: relative;
    }
    .from-item label{
        line-height: 36px;
        display: inline-block;
        text-align: left;
    }
    .from-item input{
        border: 1px solid #424242;
        border-radius: 4px;
        padding-left: 10px;
        margin-left: 10px;
        flex: 1;
    }
    button{
        width: 254px;
        background-color: skyblue;
        height: 36px;
        border-radius: 4px;
        color: #fff;
        margin-left: 46px;
    }
    .pos{
        position: absolute;
        left: -30px;
        top: 0;
    }
    .from-item .input .wid{
        width: 242px;
        flex: none;
        height: 30px;
        margin-left: 46px;
    }
</style>