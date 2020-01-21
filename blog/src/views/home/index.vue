<template>
  <div id="home">

    <full-page :options="options" @after-load="afterLoad" ref="fullpage">
      <div class="section">
        <page-one :currentPage="currentPage" />
      </div>
      <div class="section">
        <page-two :currentPage="currentPage" />
      </div>
      <div class="section">
        <page-three :currentPage="currentPage" />
      </div>
    </full-page>

    <span class="visit-num">访问次数：{{visitNum}}</span>

    <ul>
      <li @click="toPage(1)">
        <template v-if="currentPage === 1">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bokezhuanjiadaibaibeijing" />
          </svg>
        </template>
        <span v-else></span>
      </li>
      <li @click="toPage(2)">
        <template v-if="currentPage === 2">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bokezhuanjiadaibaibeijing" />
          </svg>
        </template>
        <span v-else></span>
      </li>
      <li @click="toPage(3)">
        <template v-if="currentPage === 3">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bokezhuanjiadaibaibeijing" />
          </svg>
        </template>
        <span v-else></span>
      </li>
    </ul>
  </div>
</template>

<script>
import pageOne from "./pageOne";
import pageTwo from "./pageTwo";
import pageThree from "./pageThree";

import { visitNum } from '@/common/api'

export default {
  components: {
    pageOne,
    pageTwo,
    pageThree
  },
  data() {
    return {
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        sectionsColor: ["#41b883", "#ECEADF", "#f1f1f1"],
        afterLoad: this.afterLoad
      },
      currentPage: 1,
      visitNum: 0
    };
  },
  created() {
    this.getVisitNum();
  },
  mounted() {
    // console.log(this.$refs.fullpage)
    // console.log(this.$refs.fullpage.api.moveTo)
    // this.$refs.fullpage.api.moveTo(3, 0)
  },
  methods: {
    afterLoad: function(origin, destination, direction) {
      // console.log(origin, destination, direction)
      console.log(destination.index);
      this.currentPage = destination.index + 1;
    },
    toPage(index) {
      this.currentPage = index;
      this.$refs.fullpage.api.moveTo(index, 0);
    },
    async getVisitNum(){
      let res = await visitNum();
      this.visitNum = res.visitNum
    }
  }
};
</script>

<style lang="less" scoped>
#home {
  color: @chatColor; 
  ul {
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    li {
      width: 50px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      span {
        display: inline-block;
        width: 15px;
        height: 15px;
        background: @btnBlue;
        border-radius: 50%;
        cursor: pointer;
      }
      .icon {
        width: 1.5em;
        height: 1.5em;
      }
    }
  }
  .visit-num{
    position: fixed; right: 20px; bottom: 20px; z-index: 1;
  }
}
</style>