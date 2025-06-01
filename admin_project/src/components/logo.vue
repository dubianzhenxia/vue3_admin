<template>
  <div class="logo">
  <img src="/logo.png"/>
  <p>学习项目</p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    font-size: 25px;
    margin-left: 10px;
  }
}
</style>