<template>
    <div id="left-bar" :style="scrollFlag?fixedStyle:''">
        <div class="left-box">
            <div class="site-meta">
                前端博客
            </div>
            <ul>
                <li :class="{'act' : currentPage == 0 }" @click="currentPage = 0">
                    <router-link to="/list">文章</router-link>    
                </li>
                <li :class="{'act' : currentPage == 1 }" @click="currentPage = 1">
                    <router-link to="/listDb">文章DB</router-link>    
                </li>
                <li :class="{'act' : currentPage == 2 }" @click="currentPage = 2">
                    <router-link to="/edit">写文章</router-link>    
                </li>
            </ul>
        </div>

        <div class="my-info" v-if="loginState">
            <div class="pic">
                <div class="avatar">
                    <img :src="loginInfor.avatar || avatar" alt="" @error="imgload">
                    <input type="file" name="" id="" @change="file">
                </div>
                <p>{{loginInfor.username}}</p>
            </div>
        </div>  
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { upload } from '@/common/api'
    export default {
        data() {
            return {
                scrollFlag:false,
                fixedStyle:'',
                currentPage:0,
                avatar:''
            }
        },
        computed:{
            ...mapState(['loginState','loginInfor'])
        },
        mounted() {
            this.scroll();
            document.addEventListener('scroll',this.scroll)
        },
        destroyed() {
            document.removeEventListener('scroll',this.scroll)
        },
        methods: {
            scroll(){
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                const width = document.body.clientWidth
                if(scrollTop>0){
                    this.scrollFlag = true;
                    this.fixedStyle = `position: fixed; top: 0; left: ${width/2 - 600}px;`
                }else{
                    this.scrollFlag = false;
                }
            },
            async file(e){
                let file = e.target.files[0];
                let formData = new FormData();
                formData.append('file', file);
                let res = await upload(formData);
                if(res.code == 1){
                    // this.avatar = res.url
                    this.$store.dispatch('getUser')
                }
            },
            imgload(e) {
                e.target.src = require("../../assets/22739609.jpg");
            }
        },
    }
</script>

<style lang="less" scoped>
    #left-bar{
        width: 240px; float: left;
    }
    .left-box{
        width: 240px; background: #fff; box-sizing: border-box; 
        padding-bottom: 20px;
        .site-meta{
            height: 76px; background: #939393; display: flex; justify-content: space-around;
            justify-items: center;color: #fff; font-size: 18px; flex-direction: column;
            text-align: center; margin-bottom: 15px;
        }
        ul{
            li{
                line-height: 45px; 
                font-size: 14px; color: @darkColor;
                &:hover{
                    background-color: #eceded;
                }
                &.act{
                    background-color:#c2c2c2;cursor: pointer;
                    a{
                         color: #fff;
                    }
                }
                a{
                    text-decoration: none; color: @darkColor; display: block; box-sizing: border-box; padding-left: 20px;
                }
            }
        }
    }
    .my-info{
        margin-top: 20px; background: #fff; box-sizing: border-box; padding: 10px;
        .pic{
            display: flex; box-sizing: border-box; padding: 15px 0; flex-direction: column; align-items: center;
            text-align: center;
            img,.avatar,input{
                width: 100px; height: 100px; border-radius: 50%; position: relative;
            }
            input{
                opacity: 0; position: absolute;left: 0; top: 0;
            }
            p{
                line-height: 1.8;
            }
        }
    }
</style>