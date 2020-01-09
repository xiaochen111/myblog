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
            let fileName = this.$route.query.fileName
            this.getMdContent({fileName})
        },
        methods: {
            async getMdContent(params){
                let res = await getMd(params);
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