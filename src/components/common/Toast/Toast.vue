<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data(){
      return{
        isShow:false,
        message:'',
      }
    },
    methods:{
      show(message,duration = 2000){
        this.message = message;
        this.isShow = true;

        setTimeout(() =>{
          this.isShow = false;
          this.message = '';
        },duration)
      }
      // show(message,duration = 2000){
      //   this.message = message;
      //   this.isShow = true;
      //
      //   setTimeout(() =>{
      //     this.isShow = false;
      //     this.message = '';
      //   },duration)
      // }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    padding: 8px 20px;
    z-index: 999;

    color: #fff;
    background-color: rgba(0,0,0,.7);
    border-radius:5px;
    /*position: fixed;*/
    /*top: 50%;*/
    /*left: 50%;*/
    /*transform: translate(-50%,-50%);*/

    /*padding: 8px 10px;*/

    /*z-index: 999;*/

    /*color: #ffffff;*/
    /*background-color: rgba(0,0,0,.8);*/
  }

</style>
