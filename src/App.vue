<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing:border-box;
  }
   html,body,#app{
    width: 100%;
    height: 100%;
    background: #f5f5f9;
  }
  html{
    font-size:13.333333vw;
  }
  html{
      // font-size: calc(100/375*100vw);
      font-size: 13.333333vw;
  }
</style>
