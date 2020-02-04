<template>
  <scroll id="tab-menu">
    <div class="menu-list">
      <div class="menu-list-item"
           v-for="item in categories"
          >
        {{item}}
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
      }
    }
  }
</script>

<style scoped>

  #tab-menu {
    background-color: #f6f6f6;
    overflow: hidden;

    position: absolute;
    bottom: 46px;
    top:46px;
    left: 0;
    right: 300px;
  }

  .menu-list-item {
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 20px;

    border-bottom: 2px solid #eeeeee;
  }
</style>
