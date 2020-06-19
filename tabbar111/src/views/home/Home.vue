<template>
  <div class="">
    <nav-bar>
      <div class="left" slot="left"></div>
      <div class="center" slot="center">购物街</div>
      <div class="right" slot="right"></div>
    </nav-bar>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  components:{
    NavBar,
  },
  data(){
    return {
    }
  },
  created(){},
  mounted(){},
  watch:{},
  computed:{},
  methods:{},
}
</script>
<style scoped>
  .center{
    height: 44px;
    flex: 1;
    /* text-align: center; */
    background-color: green;
  }
  .left, .right{
    height: 44px;
    width: 60px;
    background-color: deeppink;
  }
</style>