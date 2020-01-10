import message from '@/components/message';
<template>
    <div id="message">
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#${icon}`"></use>
        </svg> 
        {{ message }}
    </div>
</template>

<script>
    export default {
        // name:'message',
        data() {
            return {
                message:'',
                icon:''
            }
        },
        created() {
        },
        mounted() {
            // this.visible = false
            setTimeout(() => {
                // this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el); // 从DOM里将这个组件移除
            }, 3000);
        }
    }
</script>

<style lang="less" scoped>
    #message{
        box-sizing: border-box; padding:10px 15px; background-color: rgba(0, 0, 0, .6); color: #fff;
        display: inline-block; border-radius: 3px; position: fixed; top: 30%; left: 50%; 
        transform: translate(-50%,-50%);
    }
</style>