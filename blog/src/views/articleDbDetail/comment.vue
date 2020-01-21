<template>
    <div class="comment">
        <p class="tit-comment">评论</p>
        <input type="text" placeholder="输入评论，友好交流，按回车键提交" v-model="comment" @keyup.enter="submit">

        <ul class="comments-box" v-if="listArr.length">
            <li v-for="(item,index) in listArr" :key="index">
                <p class="top"><span>{{listArr.length - index}}楼</span><span>{{item.commentUser}}</span><span>{{item.time}}</span></p>
                <p class="txt">{{item.comment}}</p>
            </li>
        </ul>
        <div class="no-data" v-else>
            <svg class="icon" aria-hidden="true">
                <use  xlink:href="#icon-zanwupinglun"></use>
            </svg>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { timeformate } from '@/common/js/utils'
    import { writeComment } from '@/common/api'
    export default {
        data() {
            return {
                listArr:this.list,
                comment:''
            }
        },
        props:{
            list:{
                type:Array,
                default:()=>[]
            },
            articaleId:{
                type:Number
            }
        },
        methods: {
            async submit(){
                // {comment: "诉讼费", time: "2020-01-21 16:13:21", commentUser: "admin"}
                let params = {
                    comment:this.comment,
                    commentUserId:this.loginInfor.id,
                    articaleId:this.articaleId
                }
                let res = await writeComment(params);
                if(res.code == 1){
                    let comment = {
                        comment:this.comment,
                        time:timeformate(new Date()),
                        commentUser:this.loginInfor.username
                    }
                    this.listArr.unshift(comment);
                    this.comment = ''
                }
            }
        },
        computed:{
            ...mapState(['loginInfor'])
        },
        watch: {
            list:{
                handler(arr){
                    this.listArr = arr;
                }
            }
        },
    }
</script>

<style lang="less" scoped>
    .comment{
        box-sizing: border-box; padding:10px 0 20px; border-top: 3px solid @border; margin-top: 50px;
        input{
            height: 32px; line-height: 32px; border: 1px solid @border; border-radius: 3px; outline: none; 
            display: block; width: 100%; text-indent: 10px;
        }
    }
    .tit-comment{
        font-size: 16px; line-height: 2; text-align: center; padding-bottom: 10px;
    }
    .comments-box{
        margin-top: 30px; padding-top: 20px;border-top: 2px solid @border; padding-left: 40px;
        li{
            border-bottom: 1px solid @border; padding-bottom: 5px; padding-top: 10px;
            .top{
                font-size: 12px; color: @lightColor; line-height: 1.8;
                span{
                    margin-right: 20px;
                }
            }
            .txt{
                font-size: 14px; color: @darkColor; line-height: 1.6;
            }
        }
    }
    .no-data{
        height: 200px; display: flex; justify-content: space-around; align-items: center;
        .icon{
            width: 100px; height: 100px;
        }
    }
</style>