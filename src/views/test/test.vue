<template>
<!-- v-for事件代理 -->
  <div>
    <table @click="edit">
  <tr v-for="item in list">
    <button :title="item">{{item}}</button>
  </tr>
</table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:['增加','删除','查询']
    }
  },

  methods:{
    edit(event){
      console.log(event.target.title)
      if(event.target.title === '增加'){
        console.log('我被触发了')
      }
    }
  }
}
</script>