<template>
  <div>
    <nav-bar>
      <div slot="left"
           class="left-image"
           @click="itemBack">
        <img src="~assets/img/common/back.svg" >
      </div>
      <div slot="center" class="titles">
        <div v-for="(item,index) in titles"
             class="titles-item"
             :class="{active:currentIndex === index}"
             @click="itemClick(index)"
        >
          {{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
    import NavBar from "../../../components/common/navbar/NavBar";

  export default {
    name: "DetailNav",
    components:{
      NavBar
    },
    data(){
      return{
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
      },
      itemBack(){
        this.$router.back()
      },


    },

  }
</script>

<style scoped>
  .left-image img{
    margin-top: 10px;
    margin-left: 10px;
  }
  .titles{
    display: flex;
  }
  .titles-item{
    flex:1;
    font-size: 16px;
  }
  .active{
    color: red;
    border-bottom: solid 2px red;
  }
</style>
