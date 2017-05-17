<template>
  <div :class="[choose]" v-text="text"></div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'qa-choose',
  props: ['index', 'text'],
  computed: {
    choose () {
      let c = 'choose-';
      switch(this.index){
        case 0: c += 'a';break;
        case 1: c += 'b';break;
        case 2: c += 'c';break;
        case 3: c += 'd';break;
      }
      return c
    }
  }
}
</script>

<style lang="less">
.choose-size {
  width: 336px;
  height: 72px;
  margin-bottom: 20px;
}

.choose-a {
  background: url(../assets/images/choose_a.png) no-repeat;
  .choose-size();
}
.choose-b {
  background: url(../assets/images/choose_b.png) no-repeat;
  .choose-size();
}
.choose-c {
  background: url(../assets/images/choose_c.png) no-repeat;
  .choose-size();
}
.choose-d {
  background: url(../assets/images/choose_d.png) no-repeat;
  .choose-size();
}

</style>
