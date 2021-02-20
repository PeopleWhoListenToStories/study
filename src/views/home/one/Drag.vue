<template>
  <div class="wrapper">
   
    <Xhandle :defaultWidths="defaultWidth" :visibleRange="visibleRange" >
      <template slot="leftContext">
        <div class="a"> 123123123 </div>
      </template>
      <template slot="rightContext">
        <div class="b">
          6666666
        </div>
      </template>
    </Xhandle>
  </div>
</template>

<script>
import Xhandle from "./components/Xhandle";
export default {
  components: {
    Xhandle,
  },
  data() {
    return {
      defaultWidth: 300,
      visibleRange: {
        minWidth: 100,
        maxWidth: 1300,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  .a{
    background: yellow;
  }
  .b{
    width: 500px;
    background: green;
  }
}
</style>
