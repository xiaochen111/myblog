<template>
    <div class="list">
        <blog-tab 
            :list="typeList"
            @tabChanged="tabChanged"
            />
        <ul>
            <li v-for="(item,index) in list" :key="index" @click="toDetail(item.id)">
                <div>
                    <span>{{ item.title }}</span>
                    <span class="type">{{ item.name }}</span>
                </div>
                <span class="time">{{ item.createTime }}</span>
            </li>
        </ul>
    </div>
</template>


<script>
    import { getDbArt, getTypeList } from '@/common/api'
    export default {
        data() {
            return {
                list:[],
                typeList:[]
            }
        },
        created() {
            this.getlist();
            this.initTypelist();
        },
        methods: {
            async getlist(params={}){
                this.list = await getDbArt(params);
            },
            async initTypelist(){
                const all = {id:'',name:'全部'}
                this.typeList = await getTypeList();
                this.typeList.unshift(all)
            },
            tabChanged(item){
                console.log(item)
            },
            toDetail(id){
                this.$router.push({
                    path:'/detailDb',
                    query:{ id }
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
            border-bottom:1px solid @border; display: flex; justify-content: space-between;
            animation: showLi .5s ease-out both;
            &:hover{
                cursor: pointer;
            }
            a{
                text-decoration: none; color: @darkColor;
            }
            .time{
                font-size: 12px;
            }
            .type{
                background: @btnBlue; color: #fff; font-size: 12px; display: inline-block;
                padding: 0px 7px; border-radius: 3px; margin-left: 30px; line-height: 1.7;
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