<template>
  <div id="home">
    <full-page :options="options" @after-load="afterLoad" ref="fullpage">
      <div class="section">
        page1
      </div>
      <div class="section">
            <div>kjj</div>
      </div>
      <div class="section">
          <div>
            <div class="page3">
              <a href="#/list">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-bowenboke"></use>
                </svg> 
                进入博客
              </a>
            </div>
          </div>
      </div>
    </full-page>

    <ul>
      <li @click="toPage(1)">
        <template v-if="currentPage === 1">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bokezhuanjiadaibaibeijing"></use>
          </svg> 
        </template>
        <span v-else></span>
      </li>
      <li @click="toPage(2)">
        <template v-if="currentPage === 2">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bokezhuanjiadaibaibeijing"></use>
          </svg> 
        </template>
        <span v-else></span>
      </li>
      <li @click="toPage(3)">
        <template v-if="currentPage === 3">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bokezhuanjiadaibaibeijing"></use>
          </svg> 
        </template>
        <span v-else></span>
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
        sectionsColor: ['#41b883', '#ff5f45', '#fff'],
        afterLoad:this.afterLoad
      },
      currentPage:1,
    };
  },
  mounted() {
    // console.log(this.$refs.fullpage)
    // console.log(this.$refs.fullpage.api.moveTo)
    // this.$refs.fullpage.api.moveTo(3, 0)
  },
  methods: {
    afterLoad: function(origin, destination, direction){
      // console.log(origin, destination, direction)
      console.log(destination.index)
      this.currentPage = destination.index + 1;
    },
    toPage(index){
      this.currentPage = index;
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
            display: inline-block; width: 15px; height: 15px; background: @btnBlue; 
            border-radius: 50%; cursor: pointer;
          }
          .icon{
            width: 1.5em; height: 1.5em;
          }
        }
      }
      .page3{
        padding-top: 45px; text-align: center; box-sizing: border-box;cursor: pointer;
      }
    }
</style>