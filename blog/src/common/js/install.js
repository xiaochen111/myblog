import Message from "../../components/message"
// console.log(Message)

export default {
    install(Vue,option={}){
        Vue.prototype.$message = Message;
    }
}