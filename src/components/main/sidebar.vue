<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">打开</el-radio-button>
    <el-radio-button :label="true">关闭</el-radio-button>
  </el-radio-group>
  <el-menu
    default-active="/home"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    router
  >
    <el-menu-item index="/home">
      <i class="el-icon-menu"></i>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="/404">
      <i class="el-icon-document"></i>
      <template #title>404</template>
    </el-menu-item>
    <el-menu-item index="/login">
      <i class="el-icon-setting"></i>
      <template #title>登录</template>
    </el-menu-item>
  </el-menu>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const isCollapse = ref(true)
    const handleOpen = (key: any, keyPath: any) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: any, keyPath: any) => {
      console.log(key, keyPath)
    }
    return {
      isCollapse,
      handleOpen,
      handleClose
    }
  }
})
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
