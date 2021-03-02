<template>
  <div id="home">
    <!-- <router-link to="/about">about-</router-link>
    <router-link to="/home">home</router-link>
    <router-view> </router-view> -->
    <div class="left">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一 One</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link to="/home/one">JSON编辑器</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/home/one2">Count计数器</router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link to="/home/one3">拖拽</router-link>
            </el-menu-item>
            <el-menu-item index="1-4">
              <router-link to="/home/one4">简易拖拽</router-link>
            </el-menu-item>
            <el-menu-item index="1-5">
              <router-link to="/home/one5">递归form</router-link>
            </el-menu-item>
            <el-menu-item index="1-6">
              <router-link to="/home/one6">简易拖拽6</router-link>
            </el-menu-item>
            <el-menu-item index="1-7">
              <router-link to="/home/one7">简易拖拽7</router-link>
            </el-menu-item>
            <el-menu-item index="1-8">
              <router-link to="/home/one8">简易拖拽8</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">canvas</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <router-link to="/canvas">canvas</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link to="/canvas1">canvas1</router-link>
            </el-menu-item>
            <el-menu-item index="2-3">
              <router-link to="/canvas2">canvas2</router-link>
            </el-menu-item>
            <el-menu-item index="2-4">
              <router-link to="/canvas3">canvas3</router-link>
            </el-menu-item>
            <el-menu-item index="2-5">
              <router-link to="/canvas4">canvas4</router-link>
            </el-menu-item>
            <el-menu-item index="2-6">
              <router-link to="/canvas5">canvas5</router-link>
            </el-menu-item>
            <el-menu-item index="2-7">
              <router-link to="/canvas6">canvas6</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">
            <router-link to="/home/two">导航二</router-link>
          </span>
          
        </el-menu-item> -->
        <!-- <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">
            <router-link to="/about">About</router-link>
          </span>
        </el-menu-item> -->
      </el-menu>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  created() {
    axios
      .post(
        "http://127.0.0.1:1410/manage/api/TUserList",
        {
          pages: 1,
          size: 2,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss">
#home {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
}

.right {
  position: relative;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
