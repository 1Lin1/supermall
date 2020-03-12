<template>
    <div id="list">
      <div v-for="(item, index) in listData" :key="index" class="item">
<!--        <span class="icon  ">-->
<!--          <svg :fill="item.iconColor"><use :xlink:href="item.icon"></use></svg>-->
<!--         -->
<!--        </span>-->
        <svg class="icon " aria-hidden="true">
          <use :xlink:href="item.icon"></use>
        </svg>
        <div class="info">{{item.info}}</div>
      </div>
    </div>
</template>

<script>
	export default {
		name: "ListView",
    props: {
		  listData: {
		    type: Array,
        default: function () {
          return []
        }
      }
    }
	}
</script>

<style scoped>


  .icon {
    width: 1em; height: 2.3em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  #list {
    background-color: #fff;
    font-size: 15px;
    color: #333;
  }

  #list .item {
    height: 44px;
    line-height: 44px;
    position: relative;
  }

  .icon svg {
    width: 18px;
    height: 18px;
  }

  .item .icon {
    margin-top: 10px;
    position: absolute;
    left: 16px;
    top: -7px;
  }

  .item .info {
    margin-left: 40px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    padding-left: 5px;
  }

  .item:last-of-type .info {
    border-bottom: none;
  }
</style>
