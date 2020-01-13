import { SET_LOGIN_INFOR } from "./moutations-types"

let mutations = {
    [SET_LOGIN_INFOR](state, { loginState, loginInfor}) {
        state.loginInfor = loginInfor;
        state.loginState = loginState
    },
}

export default mutations