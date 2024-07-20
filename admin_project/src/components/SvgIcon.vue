<!-- svg图标组件 -->
<template>
    <svg :style="svgStyle">
      <use :xlink:href= "prefix + svgName"  :fill= "color"></use>
     </svg>
</template>




<script setup lang="ts">

defineProps({
    prefix: {
        type: String,
        default: "#icon-"
    },
    svgName: {
        type: String,
        default: ""
    },
    color: {
        type: String,
        default: ""
    },
    svgStyle: {
        type: [String, Object],
        default: {}
    }
})


</script>




<style scoped>


</style>