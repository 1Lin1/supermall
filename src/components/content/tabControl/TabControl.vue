<template>
  <div id="tabControl" >
    <div v-for="(item,index) in titles"
          :class="{active:currentIndex === index}"
          :key=index
          class="tabControl-item">
      <span @click="itemClick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return{
        currentIndex:0,
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        console.log(this.currentIndex);
        this.$emit('tabClick',this.currentIndex)
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  #tabControl{
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    background-color: #fff;

    border-top: 1px solid #dddddd;
  }
  .tabControl-item {
    flex: 1;
  }


  span{
    font-size: 20px;
  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
    padding: 8px;
  }


</style>
