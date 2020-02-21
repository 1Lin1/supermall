<template>
  <el-button type="danger"
             round @click="open"
             center="true"
             style="position: relative;top:20px;"
  >移除</el-button>
</template>


<script>
  export default {
    methods: {
      open() {
        this.$confirm('确定将商品移除购物车?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log('btnRemove' + this.pid);
          this.$store.dispatch('removeShop',this.pid).then(res =>{
            this.$toast.show(res,2000);
          })
        }).catch(() => {
          this.$toast.show('已取消移除')
        });
      }
    },
    props:{
      pid:{
        type:String
      }
    }
  }
</script>

<style scoped>

</style>
