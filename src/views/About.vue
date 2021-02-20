<!--
 * @Author: your name
 * @Date: 2020-12-21 17:41:12
 * @LastEditTime: 2020-12-23 13:39:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\views\About.vue
-->
<template>
  <div id="about">
    <vue-json-editor
      v-model="resultInfo"
      :showBtns="false"
      :mode="'code'"
      lang="zh"
      @json-change="onJsonChange"
      @json-save="onJsonSave"
    />
    <JsonEditor1 :options="{ width: '600px', height: '300px' }" :value="resultInfo" />
    <JsonEditor :value="resultInfo"  />
  </div>
</template>
<script>
import vueJsonEditor from "vue-json-editor";
import JsonEditor1 from "@/components/JsonEditor";
import JsonEditor from "@/components/json-editor"

export default {
  components: {
    JsonEditor1,
    vueJsonEditor,
    JsonEditor
  },
  data() {
    return {
      resultInfo: {
        userId: "123",
        realName: "二狗1",
        gradeCode: "22ll",
        provinceCode: "110000",
        cityCode: {
          test1: "test1",
          test2: "test2",
        },
        schoolId: 21,
        schoolLevel: 1,
        schoolName: "南京第二实验小学",
         userId: "123",
        realName: "二狗1",
        gradeCode: "22ll",
        provinceCode: "110000",
        cityCode: {
          test1: "test1",
          test2: "test2",
        },
        schoolId: 21,
        schoolLevel: 1,
        schoolName: "南京第二实验小学",
         userId: "123",
        realName: "二狗1",
        gradeCode: "22ll",
        provinceCode: "110000",
        cityCode: {
          test1: "test1",
          test2: "test2",
        },
        schoolId: 21,
        schoolLevel: 1,
        schoolName: "南京第二实验小学",
         userId: "123",
        realName: "二狗1",
        gradeCode: "22ll",
        provinceCode: "110000",
        cityCode: {
          test1: "test1",
          test2: "test2",
        },
        schoolId: 21,
        schoolLevel: 1,
        schoolName: "南京第二实验小学",
      },
    };
  },
  methods: {
    onJsonChange(value) {
      console.log("value:", value);
    },
    onJsonSave(value) {
      console.log("value:", value);
    },
  },
};
</script>

<style lang="scss" scoped>
#about {
  width: auto;
  height: auto;
}
</style>
