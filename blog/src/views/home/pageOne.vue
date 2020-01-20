<template>
    <div v-if="currentPage==1" class="page1">
        <div class="content">
            <p class="tit animated" :class="{'bounceInDown':currentPage==1}">前端攻城狮！</p>
            <p class="tit animated" :class="{'bounceInDown':currentPage==1}">爱代码，更爱生活！</p>
            <div class="avatar animated" :class="{'fadeIn':currentPage==1}">
                <img src="../../assets/22739609.jpg" alt="" srcset=""  height="200">
            </div>
            <p class="tit animated" :class="{'rollIn':currentPage==1}" style="animation-delay:.8s">生活不止眼前的苟且，还有诗和远方的田野！</p>
        </div>
    </div>
</template>

<script>
    export default {
        props:['currentPage']
    }
</script>

<style lang="less" scoped>
    .page1{
      position: relative;   height: 100%;
    }
    .content{
        position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%)
    }
    .tit{
        text-align: center; line-height: 1.9;
    }
    .avatar{
        text-align: center; padding: 50px 0;
        img{
            border-radius: 50%;
        }
    }
</style>