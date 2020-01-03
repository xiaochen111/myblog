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
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
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
    }
  }
};
</script>

<style lang="less" scoped>
    #home {
        color: @chatColor;
    }
</style>