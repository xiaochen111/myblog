<template>
    <div v-show="currentPage==3" style="height:100%">
        <div class="content">
            <div class="page3">
                <p class="tit animated" :class="{'flipInY':currentPage==3}">关于我</p>
                <p class="intro animated" :class="{'bounceInDown':currentPage==3}" style="animation-delay:.8s">
                    在一个团队中待了三年多，从一个开发组成员慢慢成长为开发组长，期间独立开发网站，移动端，小程序等项目，
                    非常渴望和学习新的技术，爱“折腾”，能够独立把学到的新技术运用到自己的项目中。
                </p>
                <p class="intro animated" :class="{'bounceInDown':currentPage==3}" style="animation-delay:.8s">联系我吧：chb0413@163.com</p>
                <a href="#/list" class="animated" :class="{'bounceInUp':currentPage==3}" style="animation-delay:1.6s">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-bowenboke"></use>
                    </svg> 
                    进入学习笔记
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
         props: ["currentPage"],
    }
</script>

<style lang="less" scoped>
    .content{
        height: 100%; position: relative;
    }
    .page3 {
        padding-top: 45px; width: 800px;
        text-align: center;
        box-sizing: border-box;
        cursor: pointer;position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
    }
    .tit{
        line-height: 3; margin-bottom: 50px; font-size: 22px;
    }
    .intro{
        text-align: center; line-height: 1.4; margin-bottom: 20px;
    }
</style>