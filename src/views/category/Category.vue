<template>
  <div class="wrapper">
    <nav-bar class="nav-bar"><div slot="center">分类</div></nav-bar>
    <!--    <tab-menu :categories="categories"></tab-menu>-->

    <div class="category">
      <tab-menu :categories="categories"
                @menuItemClick="menuItemClick"
                ref="tabmenu"

      />

      <scroll class="content-right"
              @pullingUpload="pullingUpload"
              ref="ScrollVue"
              :pull-up-load="true"
              :threshold="-43"
      >
        <keep-alive>
          <router-view/>
        </keep-alive>
      </scroll>
    </div>

  </div>
</template>

<script>

  import BScroll from 'better-scroll'
  import NavBar from "../../components/common/navbar/NavBar";
  import Scroll from "../../components/common/scroll/Scroll";
  import TabMenu from "./childCpm/TabMenu";

  export default {
    name: "Category",
    components:{
      TabMenu,
      Scroll,
      NavBar

    },
    data(){
      return{
        categories:[
          {name:'唯品会',path:'/category/weipinhui',pathIndex:0},
          {name:'男装',path:'/category/nanzhuang',pathIndex:1},
          {name:'女装',path:'/category/nvzhuang',pathIndex:2},
          {name:'男鞋',path:'/category/nanxie',pathIndex:3},

          {name:'女鞋',path:'/category/nvxie',pathIndex:4},
          {name:'手机数码',path:'/category/phone',pathIndex:5},
          {name:'电脑办公',path:'/category/computer',pathIndex:6},
          {name:'家用电器',path:'/category/powerhome',pathIndex:7},

          {name:'食品生鲜',path:'/category/food',pathIndex:8},
          {name:'酒水饮料',path:'/category/drink',pathIndex:9},
          {name:'母婴童装',path:'/category/baby',pathIndex:10},
          {name:'医药保障',path:'/category/medicine',pathIndex:11},

          {name:'运动户外',path:'/category/sport',pathIndex:12},
          {name:'家居厨具',path:'/category/restaurant',pathIndex:13},
          {name:'礼品鲜花',path:'/category/flower',pathIndex:14},
          {name:'家居建材',path:'/category/jiaju',pathIndex:15},


        ],
        path:'',
        changeCurrentIndex:0,
      }
    },
    methods:{
      menuItemClick(path,index){
        this.path = path;
        console.log(path + '-----' + index);
        this.changeCurrentIndex = index;
      },
      pullingUpload(){

       if(this.changeCurrentIndex === 15){
         this.$toast.show('已经到底了',300);

       }else{
         this.$toast.show('即将滚动到下一页面',300);

         setTimeout(() => {
           let pullIndex = this.changeCurrentIndex+1;
           this.changeCurrentIndex ++;
           console.log('分类上啦加载中' + pullIndex);
           console.log('changeIndex' + this.changeCurrentIndex);

           this.path = this.categories[pullIndex].path;

           this.$router.push(this.path);
           this.$refs.tabmenu.currentIndex = pullIndex;
           this.$refs.ScrollVue.scrollTo(0,0,100)
         },300)
       }

      },

    },


    activated() {
      // 一激活把保存的路由加进去
      this.$router.push(this.path)


    },
    beforeRouteLeave (to, from, next) {
      // 离开时把离开前的路由记录下来
      this.path = this.$route.path;
      next();
    },
  }
</script>

<style scoped>
  .wrapper{
    height: 100vh;
    width: 100vw;
    /*background-color: red;*/
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #eeeeee;
  }
  .content-right{
    overflow: hidden;

    color: black;
    font-family:"NSimSun";
    font-size: 14px;
    font-weight: bold;
    line-height: 14px;

    position: absolute;
    bottom: 66px;
    top:48px;
    left: 74px;
    right: 0;
  }
</style>
