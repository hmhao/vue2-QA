<template>
  <div class="item-page" :class="{animate: active}">
    <qa-item></qa-item>
  </div>
</template>

<script>
import qaItem from '@/components/QAItem'

export default {
	name: 'game',
  props: ['active'],
	components: {
 		qaItem
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
}
</style>
