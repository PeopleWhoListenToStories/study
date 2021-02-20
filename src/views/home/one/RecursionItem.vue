<template>
  <div>
    <el-form
      status-icon
      :label-position="labelPosition"
      :model="ruleForm"
      size="mini"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <!-- <el-form-item :label="item.name" v-for="(item, index) in lists" :key="index">
        <el-input type="text" v-model="item.name" autocomplete="off">
           <template slot="prepend">{{item.name}}</template>
        </el-input>
        <template v-if="item.children">
          <EleForm :list="item.children" />
        </template>
      </el-form-item> -->
      <EleForm :list="lists" :ruleForm="this.ruleForm" @addInput="addInput" />
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import EleForm from "./components/EleForm";
export default {
  components: {
    EleForm,
  },
  data() {
    return {
      lists: [
        {
          label: "one",
          vModel: "one",
          class: "m-0",
          children: [
            {
              label: "two",
              vModel: "two",
              class: "m-1",
              value: "",
              // children: [
              //   {
              //     label: "three",
              //     vModel: "three",
              //     class: "m-2",
              //     value: "",
              //   },
              //   {
              //     label: "three1",
              //     vModel: "three1",
              //     class: "m-2",
              //     value: "",
              //   },
              // ],
            },
            // {
            //   label: "oneone",
            //   vModel: "one['oneone']",
            //   class: "m-1",
            //   value: "",
            // },
          ],
        },
        {
          label: "one2",
          vModel: "one2",
          class: "m-0",
          type: "Array",
          value: "",
          // children: [
          //   {
          //     name: "二级22",
          //   },
          //   {
          //     name: "一级22",
          //     children: [
          //       {
          //         name: "二级222",
          //       },
          //     ],
          //   },
          // ],
        },
      ],
      labelPosition: "left",
      ruleForm: {},
      // rules: {
      //   pass: [
      //     { require:true , trigger: 'blur' }
      //   ],
      //   checkPass: [
      //     { require:true , trigger: 'blur' }
      //   ],
      //   age: [
      //     { require:true  , trigger: 'blur' }
      //   ]
      // }
    };
  },
  mounted() {
    this.formtterData(this.lists, this.ruleForm);
  },
  methods: {
    formtterData(data, form) {
      data.forEach((item) => {
        if (item.children) {
          if (item.type === "Array") {
            form[item.label] = [];
          } else {
            form[item.label] = {};
            this.formtterData(item.children, form[item.label]);
          }
        } else {
          if (item.type === "Array") {
            form[item.label] = [''];
          } else {
            form[item.label] = "ok";
          }
        }
      });
    },
    submitForm(type) {
      console.log(this.ruleForm);
      console.log("submitFormtype...", type);
    },
    resetForm(type) {
      this.$refs.ruleForm.resetFields();
      console.log("resetFormtype...", type);
    },
    addInput(value) {
      this.ruleForm[type].push('');
    },
  },
};
</script>

<style lang="scss" scoped></style>
