<template>
  <div :class="[choose]" @click="$emit('choose-answer', value)">
    <span class="choose-text" v-text="text"></span>
  </div>
</template>

<script>

export default {
  name: 'qa-choose',
  props: ['value', 'text'],
  computed: {
    choose () {
      return 'choose-' + this.value.toLowerCase()
    }
  }
}
</script>

<style lang="less">
@import (reference) '../assets/style/common';

.choose-text {
  display: block;
  width: 260px;
  height: 72px;
  line-height: 62px;
  margin: 0 0 0 63px;
}

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
