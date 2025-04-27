<template>

  <div class="layout_container">
    <el-container class="layout_container">

    <!-- 左侧菜单  -->
      <el-aside class="layout_slider">Aside</el-aside>


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