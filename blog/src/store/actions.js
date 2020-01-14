import { getUserInfo } from '@/common/api'
import { SET_LOGIN_INFOR } from "./moutations-types"

let actions = {
    async getUser({ commit }){
        let res = await getUserInfo();
        console.log('action.....')
        if(res.code == 1){
            commit(SET_LOGIN_INFOR,{loginState:true,loginInfor:res.user})
        }
        return res.code;
    }
}

export default actions;