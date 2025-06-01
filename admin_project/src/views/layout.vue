<template>

  <div class="layout_container">
    <el-container class="layout_container">

    <!-- 左侧菜单  -->
      <el-aside class="layout_slider">
        <Logo></Logo>

          <el-menu
              default-active="2"
              class="el-menu-vertical"
              :collapse="isCollapse"
              @open="handleOpen"
              @close="handleClose"
          >
          <el-sub-menu index="1">
            <template #title >
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group>
              <template #title><span>Group One</span></template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><TrendCharts /></el-icon>
            <template #title>Navigator Two</template>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <template #title>Navigator Three</template>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <template #title>Navigator Four</template>
          </el-menu-item>
          </el-menu>

      </el-aside>


      <el-container>
    <!-- 顶部导航-->
        <el-header class="layout_tabs">Header</el-header>


        <!-- 内容展示区 -->
        <el-main class="layout_main">
          Main
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script setup  lang="ts">
import Logo from '@/components/logo.vue'
import {ref} from "vue";
import {Document, Location, Setting, TrendCharts} from "@element-plus/icons-vue";

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
     // isCollapse.value = !isCollapse.value;
}
const handleClose = (key: string, keyPath: string[]) => {
   // isCollapse.value = !isCollapse.value;
}
</script>

<style lang="scss" scoped>
@import "@/styles/variable.scss";
.layout_container{
  width: 100%;
  height: 100%;

    .layout_slider{
      width: $base-menu-width;
      height: 100vh;
      background: $base-menu-background;
    }

    .layout_tabs{
      height: $base-tabs-height;
      background-color: rgb(159.5, 206.5, 255);
    }

    .layout_main{
      background-color: rgb(235.9, 245.3, 255);
      overflow: auto;
      height: calc(100vh - $base-tabs-height);
    }
}
</style>