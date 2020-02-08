<template>
  <scroll id="tab-menu">
    <div class="menu-list">
      <div class="menu-list-item"
           v-for="(item,index) in categories"
           :class="{active:currentIndex === index}"
           @click="menuItemClick(index,item.path)"
          >
        {{item.name}}
      </div>
    </div>
  </scroll>
</template>

<script>
  import Scroll from "../../../components/common/scroll/Scroll";
  export default {
    name: "TabMenu",
    components: {Scroll},

    props:{
      categories:{
        type:Array,
        default:[]
      },
    },
    data(){
      return{
        currentIndex:0,
        path:'',
      }
    },
    methods:{
      menuItemClick(index,path){
        this.currentIndex = index;
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped>

  #tab-menu {
    background-color: #f6f6f6;
    overflow: hidden;


    position: absolute;
    bottom: 56px;
    top:45px;
    left: 0;
    right: 300px;
  }

  .menu-list-item {
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 13px;

    border-bottom: 2px solid #eeeeee;
  }

  .active{
    text-align: center;
    color:#272822;
    font-size:16px ;
    font-weight: bolder;
    background-color: #ffffff;
    border-left: 2px solid var(--color-tint);
  }
</style>
