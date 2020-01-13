<template>
    <div id="main">
        <div class="main-container clearfix">
            <side-nav/>
            <div class="right-main">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
    import sideNav from './sideBar'
    import { mapState, mapMutations } from 'vuex'
    export default {
        components:{
            sideNav,
        },
        created() {
            // this.$message.success('成功！');
             console.log(this.loginInfo)
        },
        computed:{
            ...mapState(['loginState','loginInfo'])
        }
    }
</script>

<style lang="less" scoped>
    #main{
        min-height: 100%; background-color: #f5f7f9;
        .main-container{
            width: 1200px; margin: 0 auto;
        }
        .right-main{
            width: 940px; background: #fff; float: right;
        }
    }
    .clearfix{zoom: 1;}
    .clearfix:after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: "";
        clear: both;
        height: 0;
    }
</style>