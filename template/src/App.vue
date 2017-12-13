<template>
  <div id="app">
    <div class="logo">
      <img src="./assets/feui.png" alt="">
    </div>
    <divider>滚动文字</divider>
    <fe-swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
      <swiper-item><p><a href='http://ifuyuan.wang'>向着网络强国新时代昂首迈进</a></p></swiper-item>
      <swiper-item><p><a href='http://ifuyuan.wang'>国际政要点赞“中国梦”  领航新征程</a></p></swiper-item>
      <swiper-item><p><a href='http://ifuyuan.wang'>一个万亿级公司诞生：33万名员工、创四个世界之最</a></p></swiper-item>
      <swiper-item><p><a href='http://ifuyuan.wang'>奇葩！出狱不到十天再被抓 只因看守所有吃有喝</a></p></swiper-item>
      <swiper-item><p><a href='http://ifuyuan.wang'>传A站已被关停：没钱交电费被拉闸</a></p></swiper-item>
      <swiper-item><p><a href='http://ifuyuan.wang'>比尔盖茨凭什么能当中国工程院院士？</a></p></swiper-item>
    </fe-swiper>
    <br>
    <divider>滚动图文</divider>
    <fe-swiper auto height="100px">
      <swiper-item class="black"><h2 class="title fadeInUp animated">原力与你同在</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">尽在游戏中</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">欢迎来到下一关</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">玩乐未来</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">伟大，值得等待</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">你玩什么游戏</h2></swiper-item>
    </fe-swiper>
    <br>
  </div>
</template>

<script>
import { Header, Swiper, SwiperItem ,Divider} from 'feui';

export default {
  components: {
    [Header.name]: Header,
    [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem,
    [Divider.name]: Divider
  }
};
</script>

<style>
body {
  background-color: #f8f8f8;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
.black {
  background-color: #000;
}
.title{
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.nuim-swiper-item a{
  color:#333;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}

</style>
