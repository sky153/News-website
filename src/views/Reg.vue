<template>
    <div>
        <Center>
            <form class="login-container" @submit.prevent="handleSubmit">
            <div class="from-item">
                <div class="input">
                    <label for="">账号:</label>
                    <input type="text" v-model="userInfo.loginId" @input="validatdEmpty('loginId', '账号不能为空')">
                </div>
                <fromError :msg="error.loginId"></fromError>
            </div>
            <div class="from-item">
                <div class="input">
                    <label for="">呢称:</label>
                    <input type="text"  v-model="userInfo.nickName" @input="validatdEmpty('nickName', '请输入呢称')">
                </div>
                <fromError :msg="error.nickName"></fromError>
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
                    <label class="pos">重复密码:</label>
                    <input type="password" autocomplete="new-password" class="wid"  v-model="userInfo.loginAgain" @input="validatdPawAgain">
                </div>
                <fromError :msg="error.loginAgain"></fromError>
            </div>
            <div class="from-item">
                <div class="input">
                    <label for=""></label>
                    <button>注册</button>
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
import {reg} from "../services/userServies"
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
                loginAgain: "",
                nickName: "" 
            },
            error: {
                loginId: "",
                loginPwd: "",
                loginAgain: "",
                nickName: "",
                server: "",
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
        async handleSubmit() {
            var validata1 = this.validatdEmpty('loginId', '账号不能为空');
            var validata2 = this.validatdEmpty('nickName', '请输入呢称')
            var validata3 = this.validatdEmpty('loginPwd', '密码不能为空')
            var validata4 = this.validatdPawAgain()
            if(validata1 && validata2 && validata3 && validata4){
                //提交数据
                var resp = await reg(this.userInfo)
                
                if(resp.data === null) {
                    console.log(resp)
                    alert("注册成功")
                    this.$router.push({
                    name: "Login",
                });
                }else{
                    this.error.server = "账号已存在";   
                }
            }
        },
        validatdPawAgain() {
            var result = this.validatdEmpty('loginAgain', '重复密码不能为空')
            if(result) {
                if(this.userInfo.loginPwd !== this.userInfo.loginAgain) {
                    this.error.loginAgain = "两次密码不一致"
                    return false;
                }
                return true;
            }
            return false;
        },
        
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