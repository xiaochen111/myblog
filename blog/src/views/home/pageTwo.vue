<template>
    <div v-if="currentPage==2">
        <p class="tit animated" :class="{'bounceInDown':currentPage==2}">生活不止眼前的苟且，还有诗和远方的田野！2222</p>
    </div>
</template>

<script>
    export default {
        props:['currentPage']
    }
</script>

<style lang="less" scoped>

</style>