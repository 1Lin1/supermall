<template>
  <div class="category-right">

    <el-card shadow="always" class="box-card">
      <div class="top"><slot name="top"></slot></div>
    </el-card>

    <el-card shadow="always" class="box-card">
      <div class="center"><slot name="center"></slot></div>
    </el-card>

    <el-card shadow="always" class="box-card">
      <div class="bottom"><slot name="bottom"></slot></div>
    </el-card>

  </div>
</template>

<script>
  export default {
    name: "CategoryRight"
  }
</script>

<style scoped>
.top{
   margin: 0;
 }


  .category-right{

    margin: 10px 10px;
  }

</style>
