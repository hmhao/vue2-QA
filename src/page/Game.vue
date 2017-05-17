<template>
  <div class="item-page" :class="{animate: active}">
    <div class="score-bar">
      <span class="score">{{score}}/{{total}}</span>
      <img class="bar" src="../assets/images/score_bar.png">
      <div class="progress" :style="{width: score + 'px'}"></div>
    </div>
    <div class="question">
      <span class="title">第{{index}}题</span>
      <div class="content" v-text="content"></div>
    </div>
    <div class="chooses">
      <qa-choose v-for="(choose, i) in chooses" :key="choose.id"
        :index="i"
        :text="choose"></qa-choose>
    </div>
    <img class="bottom" src="../assets/images/game_page_bottom_star.png">
  </div>
</template>

<script>
import qaChoose from '@/components/QAChoose'

export default {
	name: 'game',
  data () {
    return {
      score: 40,
      total: 120,
      index: 1,
      content: '我是问题，我是问题，我是问题，我是问题，我是问题？',
      chooses: [
        'a',
        'b',
        'c',
        'd'
      ]
    }
  },
  props: ['active'],
	components: {
 		qaChoose
	},
	created(){
		//this.$store.commit('REMBER_TIME');
	}
}

</script>

<style lang="less">
@import (reference) '../assets/style/common';

.item-page {
  background-image: url(../assets/images/game_bg.jpg);
  width: 100%;
  height: 100%;
  text-align: center;

  .score-bar {
    position: relative;
    top: 20px;
    width: 390px;
    height: 65px;
    margin:0 auto;
    transform: scale(.8);

    .score {
      position: absolute;
      top: -15px;
      left: 170px;
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
      background: url(../assets/images/score_progress.png) no-repeat;
      -webkit-mask-image: url(../assets/images/score_progress_mask.jpg);
    }
  }

  .question {
    background: url(../assets/images/question_box.png) no-repeat;
    width: 420px;
    height: 174px;
    margin: 40px auto 0;
    transform: scale(.9);

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
  }

  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}

</style>
