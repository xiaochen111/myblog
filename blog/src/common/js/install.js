import Message from "../../components/message"
const keyName = 'blog';
export default {
    install(Vue){
        Vue.prototype.$message = Message;
        Vue.component(keyName+'Select', resolve => {
            require(['@/components/select'],resolve)
        })
        Vue.component(keyName+'Tab', resolve => {
            require(['@/components/tab'],resolve)
        })
    }
}