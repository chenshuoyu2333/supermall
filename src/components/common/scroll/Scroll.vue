<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import ObserveImage from '@better-scroll/observe-image'

// 注册插件
BScroll.use(Pullup)
BScroll.use(ObserveImage)


  export default {
    name: "scroll",
    props:{
      probeType:{
        type: Number,
        default: 0
      },
      pullUpLoad:{
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        observeImage: true,
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      this.scroll.on('scroll', position =>{
        this.$emit('scroll', position)
      })

      this.scroll.on('pullingUp', () =>{
        this.$emit('pullingUp')
      })
    },
    methods: {
      scrollTo(x, y, time=300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scope>
.content{
  z-index: 100;
}
</style>
