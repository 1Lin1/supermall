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

      <div slot="right" class="share-for-internet">
        <span>
          <svg class="icon " aria-hidden="true">
          <use :xlink:href="iconTitle"></use>
        </svg>
        </span>
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
        currentIndex:0,
        iconTitle:'#icon-gengduo'
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
    margin-bottom: 0.5rem;
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

.share-for-internet{
  font-size: 13px;
  text-align: center;
}

</style>
