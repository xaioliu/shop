<template>
    <div>
        <!-- 头部 -->
        <div class="indexNav">
            <h4>微信</h4>
            <i class="fa fa-search"></i>
            <i class="fa fa-plus-circle"></i>
        </div>
        <!-- 消息窗口 -->
        <div class="indexContent">
            <div class="contentlist" v-for="(list, i) in lists" :key="i">
                <router-link to="/chat">
                <img :src="list.url" alt="">
                <p>{{list.UserName}}</p>
                <p>{{list.content}}</p>
                <p class="time">{{list.time}}</p>
                </router-link>
                <hr>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
name: 'index',
        data () {
            return {
                lists: [
                    {UserName: '初见', content: '遇见你第一句话该说你好，还是好久不见，我该怎么办', time: '15:35', url: require("@/assets/img/2-1.jpeg")},
                    {UserName: '而已', content: '遇见你很不容易，错过你很容易，但我一直都喜欢做不容易的事，而不喜欢做容易的事', time: '15:35', url: require("@/assets/img/2-2.jpeg")},
                    {UserName: '久遇', content: '有时候一个转身就是一辈子', time: '15:35', url: require("@/assets/img/2-3.jpeg")},
                    {UserName: '微信支付', content: '微信支付凭证', time: '15:35', url: require("@/assets/img/2-6.png")},
                    {UserName: '意中人', content: '再见，再也不见', time: '15:35', url: require("@/assets/img/2-5.jpeg")},
                    {UserName: '救赎', content: '世界欠我一个你，世界不欠你', time: '15:35', url: require("@/assets/img/2-1.jpeg")},
                    {UserName: '初见', content: '遇见你第一句话该说你好，还是好久不见，我该怎么办', time: '15:35', url: require("@/assets/img/2-1.jpeg")},
                    {UserName: '而已', content: '遇见你很不容易，错过你很容易，但我一直都喜欢做不容易的事，而不喜欢做容易的事', time: '15:35', url: require("@/assets/img/2-2.jpeg")},
                    {UserName: '久遇', content: '有时候一个转身就是一辈子', time: '15:35', url: require("@/assets/img/2-3.jpeg")},
                    {UserName: '微信支付', content: '微信支付凭证', time: '15:35', url: require("@/assets/img/2-6.png")},
                    {UserName: '意中人', content: '再见，再也不见', time: '15:35', url: require("@/assets/img/2-5.jpeg")},
                    {UserName: '救赎', content: '世界欠我一个你，世界不欠你', time: '15:35', url: require("@/assets/img/2-1.jpeg")},
                    {UserName: '初见', content: '遇见你第一句话该说你好，还是好久不见，我该怎么办', time: '15:35', url: require("@/assets/img/2-1.jpeg")},
                    {UserName: '而已', content: '遇见你很不容易，错过你很容易，但我一直都喜欢做不容易的事，而不喜欢做容易的事', time: '15:35', url: require("@/assets/img/2-2.jpeg")},
                    {UserName: '久遇', content: '有时候一个转身就是一辈子', time: '15:35', url: require("@/assets/img/2-3.jpeg")},
                    {UserName: '微信支付', content: '微信支付凭证', time: '15:35', url: require("@/assets/img/2-6.png")},
                    {UserName: '意中人', content: '再见，再也不见', time: '15:35', url: require("@/assets/img/2-5.jpeg")},
                    {UserName: '救赎', content: '世界欠我一个你，世界不欠你', time: '15:35', url: require("@/assets/img/2-1.jpeg")}
                    
                ]
            }
        },
        methods: {
            getLists:function() {
                axios.get('http://127.0.0.1:8080/#/contact').then(res=>{
                    console.log(res)
                }).catch(error=>{
                    console.log(error)
                })
            }
        },
        mounted:function() {
            this.getLists();
        }
}
</script>
<style scoped>
.indexNav {
    width: 100%;
    height: 40px;
    position: fixed;
    z-index: 99;
    background-color: #ededed;
}
.indexNav h4 {
    position: fixed;
    margin: 10px 45%;
    color: #1b1a1a;
}
.indexNav i {
    width: 20px;
    position: fixed;
    margin-top: 12px;
    margin-left: 30%;
    color: #1b1a1a;
    font-size: 20px;
}
.indexNav i:last-child {
    width: 20px;
    position: absolute;
    margin-top: 12px;
    margin-left: 40%;
    color: #1b1a1a;
    font-size: 20px;
}
.indexContent {
    width: 100%;
    height: 580px;
    position: absolute;
    margin-top: 40px;
    overflow-y: scroll;
    overflow-x:hidden;
}
.indexContent hr {
    width: 80%;
    background-color: #eeeeee;
    position: absolute;
    margin-left: 20%;
}
.indexContent .contentlist {
    width: 100%;
    height: 57px;
    background-color: rgb(255, 255, 255);
}
.indexContent .contentlist img {
    width: 50px;
    height: 50px;
    position: absolute;
    margin-top: 4px;
    margin-left: -48%;
    border-radius: 5px;
}
.indexContent .contentlist p {
    position: absolute;
    margin-left: 20%;
    margin-top: 4px;
    color: #1b1a1a;
}
.indexContent .contentlist p:nth-child(3){
    position: absolute;
    width: 60%;
    height: 17px;
    margin-left: 20%;
    margin-top: 30px;
    font-size: 12px;
    color: #cfcfcf;
    text-align: left;
    white-space: nowrap;
    /* 强制性的在一行显示所有的文本，直到文本结束或者遭遇br标签对象才换行*/
    overflow: hidden;
    /* 溢出的文字隐藏起来*/
    text-overflow: ellipsis;
    /* 溢出的文字将以点的形式展示 */
}
.indexContent .contentlist .time {
    position: absolute;
    margin-left: 85%;
    margin-top: 6px;
    font-size: 12px;
    color: #cfcfcf;
}
</style>
