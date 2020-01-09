<template>
    <div class="list">
        <MarkdownPreview :initialValue="content"/>
    </div>
</template>


<script>
    import { getMd } from '@/common/api'
    import { MarkdownPreview } from 'vue-meditor'
    export default {
        components:{
            MarkdownPreview,
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