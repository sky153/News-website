import axios from "axios";
export async function login(loginInfo) {
    var res = await axios.post("/api/user/login", loginInfo)
    var token = res.headers.authorization; //拿到服务器的令牌
    if(token) {
        //将令牌保存到 localStorage
        localStorage.setItem("token", token)
    }
    // console.log(token)
    return res.data;
}

//使用保存的令牌从服务器换取登录信息
export async function whoAmI() {
    var token = localStorage.getItem("token")
    if(!token) {
        return null;
    }
    var res = await axios.post("/api/user/whoAmI", {
        headers: {
            authorization: `bearer ${token}`
        }
    })
    return res.data.data;
}
//注销
export function loginOut() {
    localStorage.removeItem("token")
}
//注册
export async function reg(loginInfo) {
    var res = await axios.post("/api/user/reg", loginInfo)
    return res.data;
}

