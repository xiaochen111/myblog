<template>
  <div v-show="currentPage==2">
      <div class="content">
        <div class="content-inner">
            <p class="tit animated" :class="{'flipInY':currentPage==2}" style="animation-delay:.8s">接触的技术</p>
            <div id="main" style="width: 600px;height:500px;" class="animated echart" :class="{'bounceInUp':currentPage==2}"></div>
        </div>
      </div>
  </div>
</template>

<script>
    import option from './echartOption'
    export default {
        props: ["currentPage"],
        mounted() {
            let echarts = require("echarts/lib/echarts");
            require("echarts/lib/chart/radar");
            let myChart = echarts.init(document.getElementById("main"));
            myChart.setOption(option);
        }
    };
</script>

<style lang="less" scoped>
    .content{
        .clearfix; height: 100%; 
    }
    .content-inner{
        position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
    }
    .tit{
        line-height: 4; text-align: center; font-size: 22px;
    }
</style>