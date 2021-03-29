<template>
    <div>
        <div class="chatcontent">
            <i class="fa fa-angle-left left" @click="goBack()"></i>
            <h4>而已</h4>
            <i class="fa fa-ellipsis-h right"></i>
        </div>
        <div class="content">
            <img src="@/assets/img/2-1.jpeg" alt="">
            <div class="info">
                <p>以前喜欢一个人，现在喜欢一个人，以前偷偷吃泡面，现在偷偷吃泡面，任何一个人在错过了那个需要的时间，都变得没有价值</p>
            </div>
        </div>
        <div class="footerchat">
            <img src="@/assets/img/键盘.png" alt="">
            <input type="text" name="" id="">
            <i class="iconfont icon-icon-test"></i>
            <i class="fa fa-plus-circle"></i>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {

        }
    },
    methods:{
        goBack:function() {
            this.$router.push('/index')     //vue的路由返回
        },
        getChat:function() {
            axios.get('http://127.0.0.1:8080/#/contact').then(res=>{
                    console.log(res)
                }).catch(error=>{
                    console.log(error)
                })
        }
    }
}
</script>
<style scoped>
.chatcontent {
    width: 100%;
    height: 40px;
    position: fixed;
    background-color: #ededed;
}
.chatcontent h4 {
    position: fixed;
    margin: 10px 45%;
    color: #1b1a1a;
}
.chatcontent .left {
    width: 20px;
    position: fixed;
    margin-top: 5px;
    margin-left: -44%;
    color: #000000;
    font-size: 32px;
}
.chatcontent .right {
    width: 20px;
    position: fixed;
    margin-top: 8px;
    margin-left: 35%;
    color: #8d8d8d;
    font-size: 31px;
}
.content {
    width: 100%;
    height: 582px;
    background-color: rgb(122, 223, 223);
    position: absolute;
    margin-top: 41px;
}
.content img {
    width: 50px;
    height: 50px;
    position: absolute;
    margin-top: 24px;
    margin-left: -48%;
    border-radius: 5px;
}
.content .info {
    width: 200px;
    max-height: 500px;
    position: absolute;
    margin-top: 33px;
    margin-left: 65px;
    background-color: rgb(255, 244, 244);
    color: #000;
}
.footerchat {
    width: 100%;
    height: 46px;
    background-color: #ededed;
    position: absolute;
    z-index: 120;
    margin-top: 620px;
}
.footerchat img {
    width: 25px;
    height: 25px;
    position: absolute;
    margin-left: -45%;
    margin-top: 12px;
}
.footerchat input {
    width: 200px;
    height: 25px;
    position: absolute;
    margin-left: -31%;
    margin-top: 11px;
}
.footerchat .iconfont {
    width: 25px;
    height: 25px;
    position: absolute;
    margin-left: 26%;
    margin-top: 10px;
    font-size: 28px;
    color: #000;
}
.footerchat .fa {
    width: 25px;
    height: 25px;
    position: absolute;
    margin-left: 35%;
    margin-top: 13px;
    font-size: 24px;
    color: #000;
}
</style>
