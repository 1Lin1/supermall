<template>
  <div>
    <check-button
      :is-checked="itemInfo.checked"
      @click.native= "checkClick"
      ref="checkButton"
    ></check-button>
    {{itemInfo.id}}
    {{itemInfo.name}}
    {{itemInfo.checked}}
    <div>
      价格：{{itemInfo.price}}
      件数：{{itemInfo.count}}
    </div>

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
    </ul>
  </div>
</template>

<script>
  import CheckButton from "../../components/content/checkbutton/CheckButton";
  export default {
    name: "CartListItem",
    components: {CheckButton},
    props:{
      itemInfo:Object,
      default(){
        return {}
      }
    },
    methods:{
      checkClick(){
        this.itemInfo.checked = !this.itemInfo.checked;
      }
      // checkChange(){
      //   console.log('checkchange');
      //   console.log(this.itemInfo.checked);
      //   this.itemInfo.checked = !this.itemInfo.checked;
      //   // this.$refs.checkButton.checked =  this.itemInfo.checked
      //   console.log('点击后' + this.itemInfo.checked);
      //
      //   // this.$bus.$emit('on-click',!this.itemInfo.checked )
      //   // this.$refs.checkButton.checked = !this.$refs.checkButton.checked;
      //   // this.itemInfo.checked = !this.itemInfo.checked;
      // }
    },
    mounted() {

         // this.checkChange();
      },
    created() {
    }
  }
</script>

<style scoped>

</style>
