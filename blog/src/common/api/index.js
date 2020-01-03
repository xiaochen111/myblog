import { post } from '../js/axios'

// 登录
export function login(params={}){
    return post('/user/login.do',params)
}