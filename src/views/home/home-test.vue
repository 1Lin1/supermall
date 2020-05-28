<template>
  <div>

    {{$store.state.a.name}}
    {{$store.getters.fullName}}
    {{$store.getters.fullName2}}
    {{$store.getters.fullName3}}
    <button @click="updateNameAsyn">异步修改名字</button>
  </div>
</template>

<script>
  export default {
    name: "home-test",
    methods:{
      updateNameAsyn(){
        this.$store.dispatch('updateName','林洹')
      }
    }
  }
</script>

<style scoped>

</style>
