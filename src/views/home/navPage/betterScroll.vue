<template>
      
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "BScroll",
  prop:['lis'],
  props:{
         
  },
  mounted() {
    this.lefts = new BScroll(this.lis, {
      click: true
    });
  },
};
</script>

<style lang="">
</style>