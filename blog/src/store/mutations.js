import { GET_LOGIN_STATE } from "./moutations-types"

let mutations = {
    [GET_LOGIN_STATE](state,loginState){
        state.loginState = loginState
    },
}

export default mutations