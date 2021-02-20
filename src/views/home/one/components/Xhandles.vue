<template>
  <div class="xHandle" @mousedown="mouseDown"></div>
</template>

<script>
export default {
  name: 'XHandle',
  data() {
    return {
      lastX: ''
    }
  },
  created() {
    document.addEventListener('mouseup', this.mouseUp)
  },
  destroyed() {
    document.removeEventListener('mouseup', this.mouseUp)
  },
  methods: {
    mouseDown(event) {
      document.addEventListener('mousemove', this.mouseMove)
      this.lastX = event.screenX
    },
    mouseMove(event) {
      this.$emit('widthChange', this.lastX - event.screenX)
      this.lastX = event.screenX
    },
    mouseUp() {
      this.lastX = ''
      document.removeEventListener('mousemove', this.mouseMove)
    }
  }
}
</script>
<style lang="scss" scoped>
.xHandle {
  width: 5px;
  cursor: w-resize;
  z-index: 10;
  background: #ccc;
}
.xHandle:hover{
  opacity: .3;
}
.xHandle:active{
  opacity: .3;
}
</style>
