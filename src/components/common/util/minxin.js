import BackTop from "components/content/backtop/BackTop";

export const backTop = {
  components:{
    BackTop
  },
  data(){
    return{
      isShow:false,
    }
  },
  methods:{
    backToTop(){
      // 运用ref取到scroll组件调用里面的方法 内部封装
      this.$refs.ScrollVue.scrollTo(0,0,500);
      this.$toast.show('回到顶部',800);
    },
  },

}

