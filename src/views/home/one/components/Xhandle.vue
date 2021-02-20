<template>
  <div ref="drag" class="drag">
    <div ref="left" :style="{ width: leftW }">
      <slot name="leftContext"> </slot>
    </div>
    <div ref="line" class="line" @mousedown="mouseDown"></div>
    <div>
      <slot name="rightContext"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    defaultWidths: {
      type: Number,
      default: 200,
    },
    visibleRange: {
      type: Object,
      default: () => {
        return {
          minWidth: 0,
          maxWidth: 10000,
        };
      },
    },
  },
  data() {
    return {
      leftW: null, // 默认左边容器的宽度
      defaultWidth: null,
      moveX: 0, // 移动的宽度
      minWidth: null, // 限制最小宽度
      maxWidth: null, // 限制最大宽度
    };
  },
  created() {
    document.addEventListener("mouseup", this.mouseUp);
    this.leftW = this.defaultWidths + "px";
    this.defaultWidth = this.defaultWidths;
    this.minWidth = this.visibleRange.minWidth;
    this.maxWidth = this.visibleRange.maxWidth;
  },
  destroyed() {
    document.removeEventListener("mouseup", this.mouseUp);
  },
  methods: {
    mouseDown(e) {
      this.downX = e.pageX;
      document.addEventListener("mousemove", this.mouseMove);
    },
    mouseMove(e) {
      e.preventDefault();
      e.stopPropagation();
      this.moveX = e.pageX - this.downX;
      const moveWidth = this.defaultWidth + this.moveX;
      if (moveWidth <= this.minWidth) {
        this.leftW = this.minWidth + "px";
      } else if (moveWidth >= this.maxWidth) {
        this.leftW = this.maxWidth + "px";
      } else {
        this.leftW = moveWidth + "px";
      }
    },
    mouseUp() {
      document.removeEventListener("mousemove", this.mouseMove);
      this.defaultWidth = Number(
        this.leftW.substring(0, this.leftW.length - 2)
      );
      // this.leftW = this.defaultWidth + "px";
    },
  },
};
</script>

<style lang="scss" scoped>
.drag {
  width: 100%;
  height: 100%;
  display: flex;
  border: 1px solid #ccc;
}
.left {
  background: skyblue;
}
.line {
  width: 2.5px;
  background: orange;
  height: 100%;
  cursor: e-resize;
}
.line:hover {
  background: gray;
}
.line:active {
  background: black;
}
</style>
