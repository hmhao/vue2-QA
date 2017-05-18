<template>
  <div :class="[choose]" v-text="text" @click="$emit('choose-answer', index)"></div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'qa-choose',
  props: ['index', 'text'],
  computed: {
    choose () {
      return 'choose-' + String.fromCharCode(97 + this.index)
    }
  }
}
</script>

<style lang="less">
@import (reference) '../assets/style/common';

@names: a, b, c, d;
@length: length(@names);

.choose {
  width: 336px;
  height: 72px;
  margin-bottom: 20px;
}

.generate-choose(@names; @index) when (@index > 0) {
  .generate-choose(@names; (@index - 1));

  @name: extract(@names, @index);
  &-@{name}:extend(.choose) {
    background: url("@{baseImagePath}/choose_@{name}.png") no-repeat;
  }
}

.choose {
  .generate-choose(@names, @length)
}

/*
.choose {
  &-a, &-b, &-c, &-d {
    width: 336px;
    height: 72px;
    margin-bottom: 20px;
  }
  &-a {
    background: url("@{baseImagePath}/choose_a.png") no-repeat;
  }
  &-b {
    background: url("@{baseImagePath}/choose_b.png") no-repeat;
  }
  &-c {
    background: url("@{baseImagePath}/choose_c.png") no-repeat;
  }
  &-d {
    background: url("@{baseImagePath}/choose_d.png") no-repeat;
  }
}
*/
/*
.choose {
  width: 336px;
  height: 72px;
  margin-bottom: 20px;
}

.choose-a:extend(.choose) {
  background: url("@{baseImagePath}/choose_a.png") no-repeat;
}
.choose-b:extend(.choose) {
  background: url("@{baseImagePath}/choose_b.png") no-repeat;
}
.choose-c:extend(.choose) {
  background: url("@{baseImagePath}/choose_c.png") no-repeat;
}
.choose-d:extend(.choose) {
  background: url("@{baseImagePath}/choose_d.png") no-repeat;
}
*/

</style>
