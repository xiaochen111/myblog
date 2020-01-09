<template>
  <div class="markdown">
    <div class="title">
      <p class="label">标题</p>
      <input type="text" v-model="source.title">
    </div>
    <Markdown v-model="source.value"/>
    <button @click="save">save</button>
  </div>
</template>

<script>
import Markdown from "vue-meditor";
import { writeArt } from '@/common/api'
export default {
  components: {
    Markdown
  },
  data() {
    return {
      source:{
        value:'',
        title:''
      }
    }
  },
  methods: {
    async save(){
      let res = await writeArt(this.source)
      if(res.code == 1){
        alert('保存成功！')
      }else{
        alert('保存失败！')
      }
    }
  },
};
</script>

<style lang="less" scoped>
  .markdown{
    padding: 20px 10px;
    .title{
      padding-bottom: 20px;
      .label{
        line-height: 1.8;
      }
      input{
        display: block; line-height:35px; border:1px solid @border; outline: none;
        width: 500px;  text-indent: 10px; 
      }
    }

    button{
      padding: 10px 25px; background: @btnBlue; color: #fff; outline: none; border: none; margin-top: 20px;
      border-radius: 3px; cursor: pointer;
    }
  }
</style>