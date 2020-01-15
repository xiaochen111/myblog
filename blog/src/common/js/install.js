import Message from "../../components/message"
// console.log(Message)
const keyName = 'blog';
export default {
    install(Vue,option={}){
        Vue.prototype.$message = Message;
        Vue.component(keyName+'Select', resolve => {
            require(['@/components/select'],resolve)
        })
    }
}