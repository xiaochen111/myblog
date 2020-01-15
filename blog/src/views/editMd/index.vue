<template>
  <div class="markdown">
    <div class="title">
      <p class="label">标题</p>
      <input type="text" v-model="source.title">
    </div>

    <blog-select 
      @changeValue="item=>{source.typeId = item.id}"
      :initValue="source.type"
      placeholder="请选择类型"/>

    <Markdown v-model="source.content"/>
    <button @click="eidt" v-if="showEidt">修改</button>
    <button @click="save" v-else>保存</button>
  </div>
</template>


<script>
import Markdown from "vue-meditor";
import { writeArt, writeArtcleDb, getDbDetail, eidtArticle } from '@/common/api'
import { mapState } from 'vuex'
export default {
  components: {
    Markdown
  },
  data() {
    return {
      source:{
        content:'',
        title:'',
        typeId:''
      },
      showEidt:false
    }
  },
  created() {
    const { id } = this.$route.query;
    if(id){
      this.getMdContent({id});
      this.showEidt = true
    }
  },
  methods: {
    async save(){
      const params = {
        userId:this.loginInfor.id,
        ...this.source,
      }
      let res = await writeArtcleDb(params)
      if(res.code == 1){
        this.$message.success('保存成功！');
        setTimeout(()=>{
          this.$router.push({path:'/listDb',})
        },1500)
      }else{
        this.$message.fail('保存失败！');
      }
    },
    async getMdContent(params){
        let res = await getDbDetail(params);
        if (res.code == 1){
            this.source = res.art[0];
        }
    },
    async eidt(){
        const params = {
          userId:this.loginInfor.id,
          ...this.source,
        }
        let res = await eidtArticle(params);
        if (res.code == 1){
            this.$message.success('修改成功！');
            setTimeout(()=>{
              this.$router.push({path:'/listDb',})
            },1500)
        }
    }
  },
  computed:{
    ...mapState(['loginInfor'])
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