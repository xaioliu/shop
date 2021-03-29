<template>
    <div>
        <!-- 头部 -->
        <div class="indexNav">
            <h4>通讯录</h4>
            <i class="fa fa-search"></i>
            <i class="fa fa-plus-circle"></i>
        </div>
        <!-- 内容 -->
        <div class="indexcontent">
            <!-- 功能界面 -->
            <div class="contact">
                <div class="navContact" v-for="(list, i) in lists" :key="i">
                    <i class="iconfont" :class="list.icon" :style="{background:list.color}"></i>
                    <p>{{list.Name}}</p>
                    <hr>
                </div>
            </div>
            <!-- 提示窗口 -->
            <div class="enterprise">
                <p>我的企业微信及企业联系人</p>
            </div>
            <!-- 企业微信 -->
            <div class="enterprises">
                <img src="@/assets/img/qiye.png" alt=""> 
                <p>企业微信联系人</p>
            </div>
            <!-- 侧边栏 -->
            <div class="aside">
                <ul>
                    <li>&#8593;</li>
                    <li>&#9733;</li>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                    <li>E</li>
                    <li>F</li>
                    <li>G</li>
                    <li>H</li>
                    <li>I</li>
                    <li>J</li>
                    <li>K</li>
                    <li>M</li>
                    <li>L</li>
                    <li>N</li>
                    <li>O</li>
                    <li>P</li>
                    <li>Q</li>
                    <li>R</li>
                    <li>S</li>
                    <li>T</li>
                    <li>U</li>
                    <li>V</li>
                    <li>W</li>
                    <li>X</li>
                    <li>Y</li>
                    <li>Z</li>
                    <li>#</li>
                </ul>
            </div>
            <!-- 好友列表 -->
            <div class="friends">
                <div class="tip" v-for="(letter, i) in letters" :key="i">
                    <div class="tips">
                         <p class="title">{{letter.title}}</p>
                    </div>
                    <ul class="note">
                        <li v-for="value in letter.letterl" :key="value">
                            <img :src="value.url" alt="">
                            <p class="name">{{value.name}}</p>
                        </li>
                    </ul>
                </div>
                <!-- 底部信息 -->
                <div class="footertips">
                    <h5>共有25位联系人</h5>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
name: 'index',
        data () {
            return {
                lists: [
                    {icon: 'icon-tianjiahaoyou', Name: '新的朋友', color: '#fa9e39'},
                    {icon: 'icon--qunliaoshezhi', Name: '群聊', color: '#06c05f'},
                    {icon: 'icon-biaoqian', Name: '标签', color: '#2680d6'},
                    {icon: 'icon-gongzhonghao', Name: '公众号', color: '#2680d6'}
                ],
                letters: [
                   {
                       title: 'C',
                       letterl: [
                           {url: require('@/assets/img/2-1.jpeg'), name: '初见'}
                       ]
                   },
                   {
                       title: 'E',
                       letterl: [
                           {url: require('@/assets/img/2-2.jpeg'), name: '而已'}
                       ]
                   },
                   {
                       title: 'J',
                       letterl: [
                           {url: require('@/assets/img/2-3.jpeg'), name: '久遇'}
                       ]
                   },
                   {
                       title: 'Q',
                       letterl: [
                           {url: require('@/assets/img/2-5.jpeg'), name: '清风'}
                          
                       ]
                   },
                   {
                       title: 'Y',
                       letterl: [
                           {url: require('@/assets/img/2-5.jpeg'), name: '意中人'}
                       ]
                   },
                ]
                
            }
        },
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
    width: 50px;
    margin: 10px 43%;
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
.indexcontent {
    width: 100%;
    height: 623px;
    position: absolute;
    overflow-x: hidden;
    overflow-y: scroll;
}
.contact {
    width: 100%;
    height: 580px;
    position: absolute;
    margin-top: 40px;
}
.contact .navContact .iconfont {
    width: 50px;
    height: 50px;
    position: absolute;
    margin-top: 4px;
    margin-left: -48%;
    border-radius: 5px;
    font-size: 40px;
    color: #fff;
    text-align: center;
}
.contact .navContact p {
    position: absolute;
    margin-left: 20%;
    margin-top: 20px;
    color: #1b1a1a;
}
.contact .navContact  {
    width: 100%;
    height: 57px;
    background-color: rgb(255, 255, 255);
}
.navContact hr {
    width: 80%;
    background-color: #eeeeee;
    position: absolute;
    margin-left: 20%;
}
.enterprise {
    width: 100%;
    height: 30px;
    background-color: #ededed;
    position: absolute;
    margin-top: 268px;
}
.enterprise p {
    margin-left: -53%;
    margin-top: 5px;
    color: #767676;
    font-size: 13px;
}
.enterprises{
    width: 100%;
    height: 50px;
    background-color: rgb(255, 255, 255);
    position: absolute;
    margin-top: 297px;
}
.enterprises img {
    width: 50px;
    height: 50px;
    position: absolute;
    margin-left: -48%;
    border-radius: 5px;
    background-color: #2680d6;
    text-align: center;
}
.enterprises p {
    margin-top: 13px;
    color: #191919;
    margin-left: -113px;
}
.aside {
    width: 15px;
    position: fixed;
    margin-left: 95%;
    margin-top: 155px;
    font-size: 13px;
    z-index: 99;
}
.aside ul li {
    list-style: none;
    color: #252525;
}
.friends {
    width: 100%;
    position: relative;
    margin-top: 353px;
}
.friends .tip {
    width: 100%;
    height: 90px;
}
.friends .tip .tips {
    width: 100%;
    height: 30px;
    position: absolute;
    border-bottom: 1px solid rgb(187, 185, 185);
    background-color: #ededed;
}
.friends .tip .title {
    width: 15px;
    height: 15px;
    position: absolute;
    margin-top: 8px;
    margin-left: 9px;
    color: #000;
} 
.friends .tip .note {
    width: 100%;
    height: 142px;
    position: absolute;

}
 .friends .tip .note img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    position: relative;
    margin-left: -82%;
    margin-top: 36px;
}
.friends .tip .note .name {
    width: 250px;
    height: 35px;
    position:relative;
    margin-left: 68px;
    text-align: left;
    margin-top: -38px;
    color: #000;
    font-size: 18px;
} 
.footertips {
    width: 100%;
    height: 50px;
    background-color: #ededed;
    position:absolute;
}
.footertips h5 {
    width: 150px;
    height: 35px;
    color: #000;
    margin: 15px auto;
}
</style>
