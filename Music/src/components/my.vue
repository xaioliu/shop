<template>
    <div class="content">
        <!-- 个人信息栏 -->
        <div class="mynav">
            <img src="@/assets/img/2-1.jpeg" alt="">
            <p class="name">久遇</p>
            <p class="number">微信号：Archer_L9</p>
            <i class="iconfont icon-erweima erweima"></i>
            <i class="iconfont icon-xiangyou right"></i>
            <div class="state">
                <p>+ 状态</p>
            </div>
        </div>
        <!-- 功能栏 -->
        <ul>
            <li>
                <i class="iconfont icon-weixinzhifu left"></i>
                <p>支付</p>
                <i class="iconfont icon-xiangyou right"></i>
            </li>
            <li>
                <i class="iconfont icon-shoucang left"></i>
                <p>收藏</p>
                <i class="iconfont icon-xiangyou right"></i>
            </li>
            <hr>
            <li>
                <i class="iconfont icon-tupian left"></i>
                <p>朋友圈</p>
                <i class="iconfont icon-xiangyou right"></i>
            </li>
            <li>
                <i class="iconfont icon-qiabao left"></i>
                <p>卡包</p>
                <i class="iconfont icon-xiangyou right"></i>
            </li>
            <hr>
            <li>
                <i class="iconfont icon-icon-test left"></i>
                <p>表情</p>
                <i class="iconfont icon-xiangyou right"></i>
            </li>
            <li>
                <i class="iconfont icon-shezhi left"></i>
                <p>设置</p>
                <i class="iconfont icon-xiangyou right"></i>
            </li>
        </ul>
    </div>
</template>
<script>

</script>
<style scoped>
.content {
    width: 100%;
    height: 620px;
    background-color: #ededed;
}
.mynav {
    width: 100%;
    height: 150px;
    background-color: #fff;
}
.mynav img {
    width: 50px;
    height: 50px;
    position: absolute;
    margin-top: 35px;
    margin-left: -160px;
    border-radius: 5px;
}
.mynav .name {
    width: 200px;
    height: 30px;
    position: absolute;
    color: #000;
    font-size: 20px;
    margin-top: 35px;
    margin-left: 5px;
} 
.mynav .number {
    width: 200px;
    height: 30px;
    position: absolute;
    color: #dddddd;
    font-size: 15px;
    margin-top: 69px;
    margin-left: 50px;
} 
.mynav .erweima {
    position: absolute;
    margin-top: 69px;
    margin-left: 115px;
    font-size: 18px;
    color: #8c8d8d;
}
.mynav .right {
    position: absolute;
    margin-top: 69px;
    margin-left: 150px;
    font-size: 18px;
    color: #8c8d8d;
}
.mynav .state {
    width: 60px;
    height: 20px;
    border-radius: 15px;
    border: 1px solid #5397cd;
    position: absolute;
    margin-top: 110px;
    margin-left: 80px;
}
.content ul {
    width: 100%;
    height: 300px;
    position: absolute;
}
.content ul li {
    list-style: none;
    width: 100%;
    height: 50px;
    position:relative;
    background-color: #fff;
}
.content ul li:first-child{
    margin-top: 6px;
}
.content ul li:nth-child(2) {
    margin-top: 6px;
}
.content ul li:last-child {
    margin-top: 6px;
}
.content hr {
    width: 80%;
    background-color: #eeeeee;
    position: absolute;
    margin-left: 20%;
}
.content ul li .left{
    width: 30px;
    height: 30px;
    font-size: 30px;
    position: absolute;
    margin-left: -160px;
    margin-top: 10px;
}
.content ul li p {
    width: 150px;
    height: 30px;
    font-size: 18px;
    position: absolute;
    margin-left: 70px;
    margin-top: 11px;
    text-align: left;
    color: #000;
}
.content ul li .right {
    width: 30px;
    height: 30px;
    font-size: 18px;
    position: absolute;
    margin-left: 146px;
    margin-top: 11px;
    color: #898989;
}
</style>
