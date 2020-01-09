<template>
    <div>
        <div class="left-box">
            <div class="site-meta">
                前端博客
            </div>
            <ul>
                <li>
                    <router-link to="/list">首页</router-link>    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .left-box{
        width: 240px; float: left; background: #fff; box-sizing: border-box; 
        padding-bottom: 20px;
        .site-meta{
            height: 76px; background: #ccc; display: flex; justify-content: space-around;
            justify-items: center;color: #666; font-size: 18px; flex-direction: column;
            text-align: center; margin-bottom: 15px;
        }
        ul{
            li{
                box-sizing: border-box; padding-left: 20px; line-height: 45px; 
                font-size: 14px; color: @darkColor;
                &:hover{
                    background-color: #ccc;cursor: pointer; color: #fff;
                }
                a{
                    text-decoration: none; color: @darkColor;
                }
            }
        }
    }
</style>