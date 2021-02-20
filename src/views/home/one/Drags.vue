<template>
  <div class="page">
    <div class="left" :style="'width:' + this.width + 'px'" > </div>
      <XHandles @widthChange="this.widthChange" />
      <div class="right" ></div>
  </div>
</template>

<script>
import XHandles from "./components/Xhandles"
export default {
  components:{
    XHandles
  },
  data(){
    return{
      width: 320,
    }
  },
  methods: {
     widthChange(movement) {
      // console.log(movement)
      this.width -= movement
      if (this.width < 320) {
        this.width = 320
      }
      if (this.width > 700) {
        this.width = 700
      }
    }
  },
}
</script>

<style lang='scss' scoped>
.page{
  width: 100%;
  height: 100%;
  display: flex;
  .left{
    padding: 0 10px;
    background: #ccc;
  }
  .right{
    width: 100%;
    padding: 0 10px;
    background: gray;
  }
}
</style>
