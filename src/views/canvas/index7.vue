<template>
  <div class="canvas7">
    <div class="timeline">
      <li
        class="timeline-item"
        v-for="(item, index) in activities"
        :key="index"
      >
        <span>{{ item.size }}</span>
        <div class="item">{{ item.icon }}</div>
      </li>
    </div>
    <div class="timeline">
      <li
        class="timeline-item"
        v-for="(item, index) in activities"
        :key="index"
      >
        <span>{{ item.timestamp }}</span>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        {
          content: "图标",
          timestamp: "20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-more",
        },
        {
          content: "颜色",
          timestamp: "20:46",
          color: "#0bbd87",
          size: "large",
          icon: "el-icon-more",
        },
        {
          content: "尺寸",
          timestamp: "20:46",
          size: "large",
          icon: "el-icon-more",
        },
        {
          content: "样式的",
          timestamp: "20:46",
          icon: "el-icon-more",
          size: "large",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.canvas7 {
  width: 100%;
  height: 100%;
  .timeline {
    width: 500px;
    height: 50px;
    border: 1px solid red;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item {
      display: inline-block;
      width: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      font-size: 10px;
      text-align: left;
    }
  }
  li {
    width: 100%;
    display: flex;
    list-style: none;
  }
}
</style>
