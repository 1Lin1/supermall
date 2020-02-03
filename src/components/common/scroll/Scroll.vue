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
    data(){
      return{
        scroll:null,
        //判断滚动类型
        probeType:{
          type:Number,
          default:0,
        },
        pullUpLoad: {
          type:Boolean,
          default:false,
        }
      }
    },

    mounted() {
          this.scroll = new BScroll(this.$refs.wrapper,{
            // 是否触发bscroll点击事件
            click:true,

            // 加载
            pullUpLoad:this.pullUpLoad,
            probeType: this.probeType,

      })


       this.scroll.on('scroll',(position =>{
         // console.log(position);
         this.$emit('scrollPosition',position)
       }))


    if(this.pullUpLoad){
      this.scroll.on('pullingUp',() => {

        this.$emit('pullingUpload')
        this.scroll.finishPullUp()

      })
    }


    },
    methods:{
      // 方法封装  默认time为300 是es6的写法
      scrollTo(x,y,time = 300){
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      refresh(){
        console.log('---');
        this.scroll && this.scroll.refresh();
      },
      finishPullUp(){
        // 告诉他说做完了 进行下一次上拉加载
        this.scroll.finishPullUp();
        // this.scroll.refresh();
      }

    }
  }
</script>

<style scoped>

</style>
