<template>
    <div class="specialDl"> 
         <header class="head">
               
         </header>
    </div>
</template>

<script>
     export default {
         created(){
             console.log(this.$route.params.id)
         }
     }
</script>  


<style lang="scss">
    .specialDl{
        width: 100%;
        height: 100%;
        font-size: .4rem;
        display: flex;
        flex-flow: column;
    }
    .head{
        height: 1rem;
    }
</style>