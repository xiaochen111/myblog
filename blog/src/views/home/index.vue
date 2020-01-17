<template>
  <div id="home">
    <full-page :options="options" @after-load="afterLoad" ref="fullpage">
      <div class="section">
        page1
      </div>
      <div class="section">
        page2
      </div>
      <div class="section">
        page3
      </div>
    </full-page>

    <ul>
      <li @click="toPage(1)">
        <span></span>
      </li>
      <li @click="toPage(2)">
        <span></span>
      </li>
      <li @click="toPage(3)">
        <span></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        // menu: '#menu',
        // anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#fff'],
        afterLoad:this.afterLoad
      }
    };
  },
  mounted() {
    console.log(this.$refs.fullpage)
    console.log(this.$refs.fullpage.api.moveTo)
    // this.$refs.fullpage.api.moveTo(3, 0)
  },
  methods: {
    afterLoad: function(origin, destination, direction){
      // console.log(origin, destination, direction)
      console.log(destination.index)
    },
    toPage(index){
      this.$refs.fullpage.api.moveTo(index, 0)
    }
  }
};
</script>

<style lang="less" scoped>
    #home {
        color: @chatColor;
        ul{
          position: fixed; right: 50px; top: 50%; transform: translateY(-50%);
          width: 50px;
          li{
            width: 50px; height: 30px; text-align: center; line-height: 30px; 
            span{
              display: inline-block; width: 15px; height: 15px; background: @btnBlue; border-radius: 50%; 
              cursor: pointer;
            }
          }
        }
    }
</style>