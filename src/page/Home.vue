<template>
	<div class="home_page back_img">
    <img class="bottom" src="../assets/images/home_page_bottom.png">
    <img class="bottom_star" src="../assets/images/home_page_bottom_star.png">
    <img class="logo clear" src="../assets/images/logo_bg.png">
    <router-link to="item" class="start"></router-link>
  </div>
</template>

<script>

export default {
	name: 'home',
	components: {
		
	},
  created(){
      
  }
}
</script>

<style lang="less">
@import (reference) '../assets/style/common';

.home_page {
  background-image: url(../assets/images/home_page_bg.jpg);
  width: 100%;
  height: 100%;
  text-align: center;

  .logo {
    margin: 0 auto;
    animation:logo_bounce_in 0.8s 1 ease;
    .keyframes(all,logo_bounce_in,{
      0% {
        opacity: 0;
        -webkit-transform: translateY(-2000px);
      }
      
      60% {
        opacity: 1;
        -webkit-transform: translateY(30px);
      }
      
      80% {
        -webkit-transform: translateY(-10px);
      }
      
      100% {
        -webkit-transform: translateY(0);
      }
    });
  }

  .bottom {
    width: 100%;
    position: absolute;
    left: 0px;
    bottom: 0px;
  }

  .bottom_star {
    width: 100%;
    position: absolute;
    left: 0px;
    bottom: 0px;
    animation:star_move_up 0.8s 1 ease-in;

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
    background: url(../assets/images/start_button.png) no-repeat;
    width: 48px;
    height: 60px;
    opacity: 0;
    position: absolute;
    left: 47%;
    top: 58%;
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