<template>
  <div class="game-page" :class="{animate: active}">
    <div class="header-bar">
      <span class="score">{{score}}</span>
      <img class="bar" src="../assets/images/time_bar.png">
      <div class="progress" :style="{width: time + '%'}"></div>
    </div>
    <div class="question">
      <span class="title">第{{index}}题</span>
      <div class="content" v-text="content"></div>
    </div>
    <div class="chooses">
      <qa-choose class="choose" v-for="(v, k) in chooses" :key="k"
        :text="v"
        :value="k"
        @choose-answer="chooseAnswer"></qa-choose>
    </div>
    <img class="bottom" src="../assets/images/game_page_bottom_star.png">
  </div>
</template>

<script>
import qaChoose from '@/components/QAChoose'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
	name: 'game',
  props: ['active'],
  computed: mapGetters(['index', 'content', 'chooses', 'score', 'time', 'gameOver']),
	watch: {
    gameOver (value) {
      if (value) {
        this.$router.push({path: '/score'})
      }
    }
  },
  methods: mapActions(['chooseAnswer', 'initGame', 'startGame']),
  created () {
    this.initGame()
  },
  mounted () {
    this.startGame()
  },
  components: {
    qaChoose
  },
}

</script>

<style lang="less">
@import (reference) '../assets/style/common';

.game-page {
  background-image: url(../assets/images/game_page_bg.jpg);
  width: 100%;
  height: 100%;
  text-align: center;

  .header-bar {
    position: relative;
    top: 20px;
    width: 390px;
    height: 65px;
    margin:0 auto;
    transform: translateY(-2000px);

    .score {
      position: relative;
      top: -15px;
      color: #fbf05e;
    }

    .bar {
      position: absolute;
      left: 0;
    }

    .progress {
      position: absolute;
      height: 30px;
      left: 45px;
      top: 26px;
      background: url(../assets/images/time_bar_progress.png) no-repeat;
      -webkit-mask-image: url(../assets/images/time_bar_progress_mask.jpg);
    }
  }

  .question {
    background: url(../assets/images/question_box.png) no-repeat;
    width: 420px;
    height: 174px;
    margin: 40px auto 0;
    transform: translateY(-2000px);

    .title {
      margin: 5px 0 0;
    }

    .content {
      margin-top: 24px;
      padding: 5px 10px;
    }
  }

  .chooses {
    width: 340px;
    margin: 0 auto;
    transform: scale(.9);
    .choose{
      &:nth-child(2n) {
        transform: translateX(-2000px);
      }
      &:nth-child(2n+1) {
        transform: translateX(2000px);
      }
    }
  }

  .bottom {
    position: absolute;
    bottom: -150px;
    left: 0;
    width: 100%;
  }
}

.game-page.animate {
  .bounce-in-down (@name, @scale) {
    @biName: '@{name}_bounce_in_down';
    animation:@biName 0.8s 1 ease forwards;
    .keyframes(all,@biName,{
      0% {
        opacity: 0;
        transform: scale(@scale) translateY(-2000px);
      }
      
      60% {
        opacity: 1;
        transform: scale(@scale) translateY(30px);
      }
      
      80% {
        transform: scale(@scale) translateY(-10px);
      }
      
      100% {
        transform: scale(@scale) translateY(0);
      }
    });
  }

  .header-bar {
    .bounce-in-down('header-bar', .8);
  }

  .question {
    .bounce-in-down('question', .9);
  }

  .chooses {
    .bounce-in-left (@name, @delay) {
      @biName: '@{name}_bounce_in_left';
      &:nth-child(2n) {
        animation:@biName 0.8s 1 @delay ease forwards;
        .keyframes(all,@biName,{
          0% {
            opacity: 0;
            transform: translateX(-2000px);
          }
          
          60% {
            opacity: 1;
            transform: translateX(30px);
          }
          
          80% {
            transform: translateX(-10px);
          }
          
          100% {
            transform: translateX(0);
          }
        });
      }
    }

    .bounce-in-right (@name, @delay) {
      @biName: '@{name}_bounce_in_right';
      &:nth-child(2n+1) {
        animation:@biName 0.8s 1 @delay ease forwards;
        .keyframes(all,@biName,{
          0% {
            opacity: 0;
            transform: translateX(2000px);
          }
          
          60% {
            opacity: 1;
            transform: translateX(-30px);
          }
          
          80% {
            transform: translateX(10px);
          }
          
          100% {
            transform: translateX(0);
          }
        });
      }
    }

    .choose {
      .bounce-in-left('choose', 0.3s);
      .bounce-in-right('choose', 0.3s);
    }
  }

  .bottom {
    animation:star_move_up 0.8s 1 0.3s ease-in forwards;

    .keyframes(all,star_move_up,{
      from {
        bottom: -150px
      }
      to {
        bottom: 0px
      }
    });
  }
}

</style>
