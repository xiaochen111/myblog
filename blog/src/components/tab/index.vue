<template>
    <div class="tab-list">
        <div class="tab-item" 
            v-for="(item,index) in listArr" :key="index"
            :class="{'act':act==index}" 
            :id="`tab${index}`" @click="tabChange(index,item)"
            >{{item.name}}</div>
        <div class="line-bottom" :style="currentStyle"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentStyle:'',
                act:0,
                listArr:this.list
            }
        },
        props:{
            list:{
                type:Array,
                default:()=>[]
            }
        },
        methods: {
            tabChange(index,item){
                let tranformx = 0;
                this.act = index;
                this.$emit('tabChanged',item)
                const tab = document.querySelector(`#tab${index}`)
                for(let i = 0; i < index; i++){
                    const tab = document.querySelector(`#tab${i}`)
                    const currentDomStyle = document.defaultView.getComputedStyle(tab,null);
                    tranformx += currentDomStyle.width.replace('px','')*1 + 40
                }
                const currentDomStyle = document.defaultView.getComputedStyle(tab,null);
                this.currentStyle =`width:${currentDomStyle.width};transform: translateX(${tranformx}px);` 
            }
        },
        watch: {
            list:{
                handler(arr){
                    this.listArr = arr
                    setTimeout(()=>{
                        const tab = document.querySelector('#tab0')
                        const currentDomStyle = document.defaultView.getComputedStyle(tab,null);
                        this.currentStyle =`width:${currentDomStyle.width}`
                    },50) 
                }
            }
        },
    }
</script>

<style lang="less" scoped>
    .tab-list{
        height: 40px; border-bottom: 2px solid @border; margin-bottom: 20px; position: relative;
        .tab-item{
            display: inline-block; padding-right: 40px; line-height: 40px; cursor: pointer;// box-sizing: border-box;
            &.act{
                color: @btnBlue;
            }
        }
        .line-bottom{
            height: 2px; width: 0px; background: @btnBlue; position: absolute; left: 0; bottom: -2px;
            transition: transform .3s cubic-bezier(.645,.045,.355,1)
        }
    }
</style>