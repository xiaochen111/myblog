<template>
  <div class="selet-box" v-clickoutside="handleClose">
    <input type="text" :placeholder="placeholder" @focus="visible = true" v-model="value">
    <ul v-if="visible">
      <li v-for="(item,index) in list" :key="index" @click.stop="pickItem(item)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  import { post } from '@/common/js/axios'
  export default {
    data() {
      return {
        list:[],
        visible:false,
        value:this.initValue
      }
    },
    props:{
      url:{
        type:String,
        default:'/blog/getTypeList'
      },
      placeholder:{
        type:String,
        default:'请选择'
      },
      initValue:{
        type:String,
        default:''
      }
    },
    created() {
      console.log('select11')
      this.initList()
    },
    methods: {
      async initList(){
        this.list = await post(this.url);
      },
      handleClose(){
        this.visible = false
      },
      pickItem(item){
        this.value = item.name
        this.handleClose()
        this.$emit('changeValue',item)
      }
    },
    directives:{
      clickoutside:{
        bind:function(el,binding,vnode){
            function documentHandler(e){
                if(el.contains(e.target)){
                    return false;
                }
                if(binding.expression){
                    binding.value(e)
                }
            }
            el._vueClickOutside_ = documentHandler;
            document.addEventListener('click',documentHandler);
        },
        unbind:function(el,binding){
            document.removeEventListener('click',el._vueClickOutside_);
            delete el._vueClickOutside_;
        }
      }
    },
    watch: {
      initValue:{
        handler(value){
          this.value = value
        }
      }
    },
  }
</script>

<style lang="less" scoped>
  .selet-box{
      width: 240px; height: 40px;box-sizing: border-box; border: 1px solid @border; border-radius: 3px; margin-bottom: 20px; position: relative;
      input{
        width: 100%; line-height: 38px; border: none; outline: none; color: @lightColor; text-indent: 10px; 
      }
      ul{
        width: 100%; border: 1px solid @border; border-radius: 3px; left: -1px; position: absolute; top: 48px;z-index: 10;
        padding: 5px 0;background: #fff;
        &::after{
          content: ''; display: block;  position: absolute; top: -7px; left: 31px;
          width: 0; height: 0; border-left: 5px solid transparent;border-right: 5px solid transparent;
          border-bottom: 7px solid #fff;
        }
        &::before{
          content: ''; display: block;  position: absolute; top: -8px; left: 30px;
          width: 0; height: 0; border-left: 6px solid transparent;border-right: 6px solid transparent;
          border-bottom: 8px solid @border;
        }
        li{
          line-height: 35px;  color: @darkColor; font-size: 14px; cursor: pointer; box-sizing: border-box; padding: 0 10px;
          &:hover{
            background: #f5f7fa;
          }
        }
      }
  }
</style>