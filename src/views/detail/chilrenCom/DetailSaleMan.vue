<template>
 <div class="detail-sale-man">
   <div class="shopInfo">
     <img src="~assets/img/tabbar/home.svg" alt="">
     <p>{{saleMan.shopName}}</p>
   </div>

   <div class="person-info">
     <p class="sale-man">销售人:{{saleMan.saleMan}}</p>
     <p class="company">公司:{{saleMan.company}}</p>
     <p class="phone">电话:{{saleMan.saleManPhone}}</p>
   </div>

 </div>
</template>

<script>
  export default {
    name: "DetailSaleMan",
    props:{
      saleMan:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-sale-man{
    display: flex;
    justify-content: space-around;
    align-content: center;

    padding:30px 0;
    color: black;
    height: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }

  .shopInfo{
    margin-top: 13px;
  }
  .shopInfo img{
    margin-left: 30px;
    max-width: 25%;
  }

  .company{
    margin-top: 2px;
  }

</style>
