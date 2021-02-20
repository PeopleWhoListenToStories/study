<template>
  <div class="wrapper">
    <el-form-item v-for="(item, index) in list" :key="index" :prop="item.label">
      <div :class="item.class">
        <template v-if="item.children">
          <p class="label-name">{{ item.label }}</p>
        </template>
        <template v-else>
          <p class="label-name">{{ item.label }}</p>
          <el-input
            type="text"
            v-model="ruleForm[item.vModel]"
            @input="input()"
          >
          </el-input>
          <el-button
            v-if="item.type === 'Array'"
            @click="add(ruleForm, item.vModel)"
            >新增</el-button
          >
        </template>
      </div>
      <template v-if="item.children">
        <EleForm :list="item.children" :ruleForm="ruleForm[item.vModel]" />
      </template>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "EleForm",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    ruleForm: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.$forceUpdate();
  },
  methods: {
    changeInput(e) {
      console.log(e, "eee");
    },
    input() {
      this.$forceUpdate();
    },
    add(form, type) {
      console.log(form, type, "==---==");
      this.$emit("addInput", { form, type });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  .label-name {
    text-align: left;
  }
  /deep/ .m-1 {
    margin-left: 10px;
  }
  /deep/ .m-2 {
    margin-left: 20px;
  }
  /deep/ .m-3 {
    margin-left: 30px;
  }
  /deep/ .m-4 {
    margin-left: 40px;
  }
  /deep/ .m-5 {
    margin-left: 50px;
  }
}
</style>
