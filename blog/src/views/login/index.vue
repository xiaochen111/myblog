<template>
    <div class="login">
        <p class="tit">登录</p>
        <div class="title">
            <p class="label">用户名</p>
            <input type="text" v-model="loginParams.username">
        </div>
        <div class="title">
            <p class="label">密码</p>
            <input type="password" v-model="loginParams.password">
        </div>
        <div class="btn">
            <button @click="loginSubimt">登录</button>
        </div>
    </div>
</template>

<script>
    import { login } from '@/common/api'
    import { mapMutations } from 'vuex'
    import { SET_LOGIN_INFOR } from '@/store/moutations-types'
    export default {
        data() {
            return {
                loginParams:{}
            }
        },
        methods: {
            ...mapMutations([SET_LOGIN_INFOR]),
            async loginSubimt(){
                let res = await login(this.loginParams);
                let { user,code } = res;
                if(res.code === 1){
                    this.SET_LOGIN_INFOR({ loginState:true, loginInfor:user});
                    this.$router.push({
                        path:'/list'
                    })
                }
            }
        },
    }
</script>

<style lang="less" scoped>
    .login{
        width: 450px; .juzhong(); border: 1px solid @border; border-radius: 3px;
        box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35), 12px 0 20px -12px rgba(0, 0, 0, 0.35);
        box-sizing: border-box; padding: 30px 40px;
    }
    .tit{
        line-height: 1.8; font-size: 22px; text-align: center; margin-bottom: 20px;
    }
    .title{
      padding-bottom: 20px;
      .label{
        line-height: 1.8; margin-bottom: 10px;
      }
      input{
        display: block; line-height:35px; border:1px solid @border; outline: none;
        width: 100%;  text-indent: 10px; border-radius: 3px;
      }
    }
    .btn{
        text-align: center;
        button{
            padding: 10px 45px; background: @btnBlue; color: #fff; outline: none; border: none; margin: 20px 0;
            border-radius: 3px; cursor: pointer;
        }
    }
</style>