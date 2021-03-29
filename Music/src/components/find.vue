<template>
    <div>
        <!-- 头部 -->
        <div class="indexNav">
            <h4>发现</h4>
            <i class="fa fa-search"></i>
            <i class="fa fa-plus-circle"></i>
        </div>
        <div class="findContent">
            <ul>
                <li>
                    <i class="iconfont icon-pengyouquan left"></i>
                    <p>朋友圈</p>
                    <i class="iconfont icon-xiangyou right"></i>
                </li>
                <li>
                    <i>
                        <img src="@/assets/img/扫一扫.png" alt="">
                    </i>
                    <p>扫一扫</p>
                    <i class="iconfont icon-xiangyou right"></i>
                </li>
                <li>
                    <i class="iconfont icon-weixinyaoyiyaoicon left"></i>
                    <p>摇一摇</p>
                    <i class="iconfont icon-xiangyou right"></i>
                </li>
                <li>
                    <img src="@/assets/img/购物.png" alt="">
                    <p>购物</p>
                    <i class="iconfont icon-xiangyou right"></i>
                </li>
                <li>
                    <img src="@/assets/img/游戏.png" alt="">
                    <p>游戏</p>
                    <i class="iconfont icon-xiangyou right"></i>    
                </li>
                <li>
                    <i class="iconfont icon-xiaochengxu left"></i>
                    <p>小程序</p>
                    <i class="iconfont icon-xiangyou right"></i>
                </li>
               
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'find',
    data () {
        return {
        }
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
.findContent {
    width: 100%;
    height: 620px;
    background-color: #ededed
}
.findContent ul {
    width: 100%;
    height: 500px;
    /* background-color: red; */
    position: absolute;
    margin-top: 46px;
}
.findContent ul li {
    list-style: none;
    width: 100%;
    height: 50px;
    position: relative;
    background-color: #fff;
    margin-top: 5px;
}
.findContent ul li:nth-child(2) {
    margin-top: 15px;
}
.findContent ul li:nth-child(4) {
    margin-top: 15px;
}
.findContent ul li:last-child {
    margin-top: 15px;
}
.findContent ul li .left, img {
    width: 30px;
    height: 30px;
    font-size: 30px;
    position: absolute;
    margin-left: -160px;
    margin-top: 11px;
}
.findContent ul li p {
    width: 150px;
    height: 30px;
    font-size: 18px;
    position: absolute;
    margin-left: 70px;
    margin-top: 14px;
    text-align: left;
    color: #000;
}
.findContent ul li .right {
    width: 30px;
    height: 30px;
    font-size: 18px;
    position: absolute;
    margin-left: 146px;
    margin-top: 16px;
    color: #898989;
}
</style>
