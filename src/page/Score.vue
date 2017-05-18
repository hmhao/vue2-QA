<template>
  <div class="score-page back-img" :class="{animate: active}">
    <img class="light-circle" src="../assets/images/score_light_circle.png">
    <img class="top" src="../assets/images/score_top.png">
    <img class="share" src="../assets/images/share.png">
    <img class="logo" src="../assets/images/logo_bg.png">
    <div class="buttons">
      <router-link to="/game" class="try-more"></router-link>
      <router-link to="" class="about"></router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'score',
  data () {
    return {
      
    }
  },
  props: ['active']
}
</script>

<style lang="less">
@import (reference) '../assets/style/common';

.score-page {
  background-image: url("@{baseImagePath}/score_bg.jpg");
  width: 100%;
  height: 100%;
  text-align: center;

  .top, .light-circle {
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
  }

  .share {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .logo {
    position: relative;
    margin: 90px auto 0;
  }

  .buttons {
    position: relative;
    bottom: -15%;

    .about, .try-more {
      display: block;
      width: 257px;
      height: 64px;
      margin: 0 auto 10px;
    }

    .about {
      background-image: url("@{baseImagePath}/about.png");
    }
    
    .try-more {
      background-image: url("@{baseImagePath}/try_more.png");
    }
  }
}

.score-page.animate {
  .light-circle {
    animation:light_circle_rotate 15s linear infinite;
    .keyframes(all,light_circle_rotate,{
      0% {
        transform: rotate(0);
      }

      50% {
        transform: rotate(180deg);
      }

      100% {
        transform: rotate(360deg);
      }
    });
  }

  .share {
    animation:share_point 2s linear infinite;
    .keyframes(all,share_point,{
      0% {
        transform: translate(0, 0);
      }

      50% {
        transform: translate(15px, -10px);
      }

      100% {
        transform: translate(0, 0);
      }
    });
  }
}
</style>