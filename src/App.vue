<template>
  <div id="app">
    <transition :name="transitionName" 
      @before-enter="active = false" 
      @after-enter="active = true">
      <router-view class="page-trans" :active="active"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left',
      active: true
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.length == 1 ? 1 : to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}

.page-trans { 
  transition: all .5s cubic-bezier(.55,0,.1,1);
}

.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  transform: translate(-100%, 0);
}

</style>