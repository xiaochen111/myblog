<template>
    <div class="list">
        <vue-markdown :source="content" class="markdown-body"/>
    </div>
</template>


<script>
    import { getMd } from '@/common/api'
    export default {
        components:{
            VueMarkdown:resolve => require(["vue-markdown"], resolve),
        },
        data() {
            return {
                content:''
            }
        },
        created() {
            this.getMdContent()
        },
        methods: {
            async getMdContent(){
                let res = await getMd();
                this.content = res;
            }
        },
    }
</script>

<style lang="less" scoped>
    .list{
        box-sizing: border-box; padding: 30px 20px;
    }
</style>