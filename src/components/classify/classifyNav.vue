<template>
  <ul class="list1">
    <li
      v-for="(item,index) in this.classifyData"
      :key="item.id"
      :class="[activechange===index?'active':'']"
      @click="li(index,item.id)"
    >{{item.name}}</li>
  </ul>
</template>    


<script>
import { mapState,mapActions} from "vuex";
export default {
  data() {
    return {
      activechange: 0
    };
  },
  created(){

  },
  methods: {
    ...mapActions('classify',['classifyList']),
    li(index,id) { 
       this.activechange = index;
       this.classifyList({id})
    }
  },
  computed: {
    ...mapState("classify", ["classifyData"])
  }
};
</script>

<style lang="scss">
.list1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 378px;
  text-align: center;
  li {
    flex: 1;
    padding: 0 8px;
    font-size: 0.3rem;
    line-height: 40px;
  }
  .active {
    color: #108ee9;
    border-left: 2px solid #108ee9;
  }
}
</style>