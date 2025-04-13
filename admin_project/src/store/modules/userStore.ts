import {defineStore} from 'pinia'
import {reqLogin} from "@/api/user"
import type {loginRequest} from "@/api/user/type.ts"
import type {UserState} from  "./types/type.ts"

let useUserStore = defineStore('UserStore', {
    //数据
    state: () : UserState => {
        return {
            token: localStorage.getItem('token') || '',
        }
    },


    actions: {
        userLogin(userInfo:loginRequest) {
            return reqLogin(userInfo)
            .then(res => {
                if(res.code == 200){
                    this.token = res.data.token
                    //本地持久化存储token
                    localStorage.setItem("token",res.data.token)
                    return res
                }else {
                    return  Promise.reject(new Error(res.data.message))
                }
            })
        }
    },

    getters: {

    }
})

export default useUserStore;