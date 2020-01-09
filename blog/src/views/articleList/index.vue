<template>
    <div class="list">
        <ul>
            <li v-for="(item,index) in list" :key="index" @click="toDetail(item)">
                {{ item }}
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
            },
            toDetail(fileName){
                this.$router.push({
                    path:'/detail',
                    query:{fileName}
                })
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
            border-bottom:1px solid @border;
            animation: showLi .5s ease-out both;
            &:hover{
                cursor: pointer;
            }
            a{
                text-decoration: none; color: @darkColor;
            }
        }
    }
    @keyframes showLi {
        0% {
            opacity: 0;
            line-height: 30px;
        }
        100% {
            opacity: 1;
            line-height: 40px;
        }
    }
</style>