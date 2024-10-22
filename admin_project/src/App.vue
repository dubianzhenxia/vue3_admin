<template>

  <!-- 测试element-plus使用及图标全局组件 -->
<el-button type="primary" :icon="Search">小小樱</el-button> 
<el-rate v-model="value" size="large" />
<el-icon><Search /></el-icon>
<!-- <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      :size="size"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    /> -->

    <!-- 测试svg图标使用   注意svg标签需小写 写成Svg会被当成组件解析
     svg 的宽高控制大小 use 的fill控制颜色[不一定能控制,要看svg本身支不支持改变颜色没去研究-->
     <!-- <svg style="width: 50px;height:70px;">
      <use xlink:href="#icon-ArrowRightEndOnRectangle" fill="red"></use>
     </svg> -->

     <SvgIcon svg-name="home"
             :svg-style="{width: '180px',height:'170px'}"
             color="yellow"></SvgIcon>

    <SvgIcon svg-name="home"
             svg-style="width: 80px;height:70px"
             color="red"></SvgIcon>

</template>




<script setup lang="ts">
import { ref } from 'vue'
import {Search} from '@element-plus/icons-vue'
//import SvgIcon from '@/components/SvgIcon.vue'
const value = ref(0)

</script>





<style scoped>


</style>