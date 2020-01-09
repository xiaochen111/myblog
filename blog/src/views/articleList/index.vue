<template>
    <div class="list">
        <ul>
            <li v-for="(item,index) in list" :key="index">
                {{ item.title }}{{index+1}}
            </li>
        </ul>
    </div>
</template>


<script>
    import VueMarkdown from 'vue-markdown'
    import { list } from '@/common/api';
    export default {
        components:{
            VueMarkdown
        },
        data() {
            return {
                list:[]
            }
        },
        created() {
            this.getlist()
        },
        methods: {
            async getlist(){
                let res = await list();
                this.list = res;
            }
        },
    }
</script>

<style lang="less" scoped>
    .list{
        box-sizing: border-box; padding: 30px 20px;
    }
    ul{
        li{
            line-height: 40px; border-bottom:1px solid @border;
            &:hover{
                cursor: pointer;
            }
        }
    }
</style>