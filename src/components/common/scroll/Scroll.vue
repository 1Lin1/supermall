<template>
  <div ref="wrapper">
    <div>
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>

  //导入bscroll
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props:{
      threshold:{
        type:Number,
        default() {
          return 0
        }
      },
      pullUpLoad: {
        type:Boolean,
        default() {
          return false;
        }
      },
    },
    data(){
      return{
        scroll:null,
        //判断滚动类型 1 2 3 三种类型
        probeType:{
          type:Number,
          default:0,
        },



      }
    },

    mounted() {
      // ref绑定的vue组件上 取到的是一个vue子组件
      //ref绑定在普通元素上 取到的是一个元素
      this.scroll = new BScroll(this.$refs.wrapper,{
        // 是否触发bscroll点击事件
        click:true,

        // 加载
        pullUpLoad: {
          threshold: this.threshold,
        },
        probeType: this.probeType,

        // 下拉加载
        // pullDownRefresh:true


      })


      this.scroll.on('scroll',(position =>{
        this.$emit('scrollPosition',position)
      }))




      if(this.pullUpLoad){
        this.scroll.on('pullingUp',() => {
          this.$emit('pullingUpload')
          this.scroll.finishPullUp();

        })


      }



    },
    methods:{
      // 方法封装  默认time为300 是es6的写法
      scrollTo(x,y,time = 300){
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      refresh(){
        this.scroll.finishPullUp();
        console.log('finishPullUp');
        this.scroll && this.scroll.refresh();
        console.log('刷新---!!!');

      },
      finishPullUp(){
        // 告诉他说做完了 进行下一次上拉加载
        console.log('finishPullUp');
        this.scroll.finishPullUp();
        // this.scroll.refresh();
      }

    }
  }
</script>

<style scoped>

</style>
