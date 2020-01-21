<template>
    <div class="art-detail">
        <div class="auther">
            <div>
              <span>作者：{{ art.username }}</span>
              <span>{{ art.time }}</span>
              <span>阅读数：{{ art.readNum }}</span>
              <span>类别：{{ art.type }}</span>
            </div>
            <a class="eidt" :href="`#/edit?id=${art.id}`">修改</a>
        </div>
        <p class="tit">{{art.title}}</p>
        <MarkdownPreview :initialValue="art.content"/>

        <comment :list="art.list" :articaleId="articaleId"/>
        
    </div>
</template>


<script>
    import { getDbDetail } from '@/common/api'
    import { MarkdownPreview } from 'vue-meditor'
    import comment from './comment'
    export default {
        components:{
            MarkdownPreview,comment
        },
        data() {
            return {
                art:{},
                articaleId:''
            }
        },
        created() {
            let id = this.$route.query.id
            this.articaleId = id*1;
            this.getMdContent({id})
        },
        methods: {
            async getMdContent(params){
                let res = await getDbDetail(params);
                if (res.code == 1){
                    this.art = res.art[0];
                }
            }
        },
    }
</script>

<style lang="less" scoped>
    .art-detail{
        box-sizing: border-box; padding: 30px 20px;
    }
    .auther{
        line-height: 1.6; font-size: 14px; color: @lightColor; padding: 10px 0; display: flex; justify-content: space-between; align-items: center;
        span{
            margin-right: 25px;
        }
        .eidt{
          cursor: pointer; color: @btnBlue; text-decoration: none;
        }
    }
    .tit{
        color: @darkColor; line-height: 1.8; font-size: 18px; padding: 15px 0 15px 15px;position: relative;
        border-bottom: 1px solid @border;
        &::after{
            content: ''; display: block; width: 5px;height: 20px; background:@btnBlue; 
            position: absolute; left: 0; top: 21px; 
        }
    }
    
</style>