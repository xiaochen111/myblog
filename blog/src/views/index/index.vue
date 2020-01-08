<template>
    <div>
        index
    </div>
</template>

<script>
    import { list } from '@/common/api'
    export default {
        created() {
            list();
        },
    }
</script>

<style lang="less" scoped>

</style>