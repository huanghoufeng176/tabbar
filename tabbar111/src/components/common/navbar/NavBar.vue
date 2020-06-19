<template>
  <div class="nav-bar">
    <div><slot name="left"></slot></div>
    <div><slot name="center"></slot></div>
    <div><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  components:{},
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
  .nav-bar{
    display: flex;
    width: 100%;
    height: 44px;
    background-color: deeppink;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
</style>