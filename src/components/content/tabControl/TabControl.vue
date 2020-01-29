<template>
  <div id="tabControl" >
    <div v-for="(item,index) in titles"
          :class="{active:currentIndex===index}"
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
    background-color: #eeeeee;
  }
  .tabControl-item {
    flex: 1;
  }
  .active{
    color: var(--color-tint);
  }

  .active span{
    border-bottom: 3px solid var(--color-tint);
    padding: 8px;
  }


</style>
