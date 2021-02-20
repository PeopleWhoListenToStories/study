<template>
  <div style="color:red;font-size:27px;">count:{{ value }}</div>
</template>

<script>
export default {
  data() {
    return {
      startNum: 0,
      endNum: 2000,
      timer: null,
      sd: 50,
      value: 0,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.timer = setInterval(() => {
        console.log(this.value);
        if (this.startNum <= this.endNum) {
          if (this.endNum - this.startNum < 50) {
            this.sd = 500;
          }
          this.value = this.startNum;
          this.startNum += this.sd === 500 ? 1 : 39;
        } else {
          clearInterval(this.timer);
        }
      }, this.sd);
    },
  },
};
</script>

<style></style>
