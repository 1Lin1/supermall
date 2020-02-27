<template>
  <div>
    <nav-bar class="detail-nav-bar">
      <div slot="left"
           class="left-image"
           @click="itemBack">
        <img src="~assets/img/common/back.svg" >
      </div>
      <div slot="center" class="titles">
          <div v-for="(item,index) in titles"
               :key="index"
               class="titles-item"
               :class="{active:currentIndex === index}"
               @click="detailItemClick(index)"
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
      detailItemClick(index){
        this.currentIndex = index;
        this.$emit('detailItemClick',index)
      },
      itemBack(){
        this.$router.push('/');
      },


    },

  }
</script>

<style scoped>
  .detail-nav-bar{
    /*相对于自己z-index提高*/
    position: relative;
    z-index: 15;
  }
  .left-image img{

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
    color: var(--color-high-text);
    border-bottom: solid 2px var(--color-high-text);
  }



</style>
