import Vue from 'vue'

// 神坑 要加.default  不知道为什么人家没有加
const MessageConstructor = Vue.extend(require('./index.vue').default);

const Message = option => {
    let mesInstance = new MessageConstructor({
        data:option,
    });
    mesInstance.$mount();
    document.body.appendChild(mesInstance.$el);
    return mesInstance
}

let icons = ['icon-tips_careful','icon-tips-'];
['fail','success'].forEach( ( type, index ) => {
    Message[type] = message => {
        let params = {
            icon:icons[index],
            message
        }
        Message(params)
    }
})

export default Message;