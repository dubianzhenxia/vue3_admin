<template>
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
</template>




<script setup lang="ts">

import { ref } from 'vue'
import {Search} from '@element-plus/icons-vue'

const value = ref(0)

</script>




<style scoped>


</style>