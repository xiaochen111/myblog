<template>
    <div id="main">
        <div class="main-container">
            <side-nav/>
            <div class="right-main">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
    import { list } from '@/common/api'
    import sideNav from './sideBar'
    export default {
        components:{
            sideNav,
        },
        created() {
            list();
        },
    }
</script>

<style lang="less" scoped>
    #main{
        height: 100%; background-color: #f5f7f9;
        .main-container{
            width: 1200px; margin: 0 auto;
        }
        .right-main{
            width: 940px; background: #fff; float: right;
        }
    }
</style>