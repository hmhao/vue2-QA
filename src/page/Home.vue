<template>
	<div class="home-page back-img" :class="{animate: active}">
    <img class="bottom" src="../assets/images/home_page_bottom.png">
    <img class="bottom-star" src="../assets/images/home_page_bottom_star.png">
    <img class="logo" src="../assets/images/logo_bg.png">
    <router-link to="/game" class="start"></router-link>
  </div>
</template>

<script>

export default {
	name: 'home',
  props: ['active'],
  created(){

  }
}
</script>

<style lang="less">
@import (reference) '../assets/style/common';

.home-page {
  background-image: url(../assets/images/home_page_bg.jpg);
  width: 100%;
  height: 100%;
  text-align: center;

  .logo {
    margin: 0 auto;
    transform: translateY(-2000px);
  }

  .bottom {
    width: 100%;
    position: absolute;
    left: 0px;
    bottom: 0px;
  }

  .bottom-star {
    width: 100%;
    position: absolute;
    left: 0px;
    bottom: -150px
  }

  .start {
    background: url(../assets/images/start_button.png) no-repeat;
    width: 48px;
    height: 60px;
    opacity: 0;
    position: absolute;
    left: 47%;
    top: 58%;
  }
}

.animate {
  .logo {
    animation:logo_bounce_in 0.8s 1 ease forwards;
    .keyframes(all,logo_bounce_in,{
      0% {
        opacity: 0;
        transform: translateY(-2000px);
      }
      
      60% {
        opacity: 1;
        transform: translateY(30px);
      }
      
      80% {
        transform: translateY(-10px);
      }
      
      100% {
        transform: translateY(0);
      }
    });
  }

  .bottom-star {
    animation:star_move_up 0.8s 1 ease-in forwards;

    .keyframes(all,star_move_up,{
      from {
        bottom: -150px
      }
      to {
        bottom: 0px
      }
    });
  }

  .start {
    animation-name:start_bounce_in, start_ripple;
    animation-duration:0.8s, 2s;
    animation-timing-function:linear, linear;
    animation-delay:0.6s, 1.8s;
    animation-iteration-count:1, infinite;
    animation-fill-mode: forwards, none;

    .keyframes(all,start_bounce_in,{
      0% {
        opacity: 0;
        transform: scale(.3);
      }
      50% {
        opacity: 1;
        transform: scale(1.05);
      }
      70% {
        transform: scale(.9);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    });

    .keyframes(all,start_ripple,{
      0% {
        transform: scale(1,1);
      }
      50% {
        transform: scale(2,2);
      }
      100% {
        transform: scale(1,1);
      }
    });
  }
}
</style>