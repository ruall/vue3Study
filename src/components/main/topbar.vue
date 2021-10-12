<template>
  <div class="topbar">
    <i class="el-icon el-icon-2 el-icon-refresh"></i>
    <i class="el-icon el-icon-1 el-icon-s-fold"></i>
    <i class="el-icon el-icon-3 el-icon-full-screen"></i>
    <el-badge :value="3" class="item el-icon el-icon-4">
      <i class="el-icon-bell"></i>
    </el-badge>
    <el-dropdown class="">
      <span class="el-dropdown-link el-icon el-icon-5">
        Admin
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '',
  setup() {
    return {}
  }
})
</script>
<style lang="scss" scoped>
.topbar {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 22px;
  position: relative;
  .el-dropdown {
    width: 100px;
    position: absolute;
    right: 0;
    top: 0;
  }
  .el-icon {
    position: absolute;
    top: 0;
    &.el-icon-1 {
      left: 0;
    }
    &.el-icon-2 {
      left: 50px;
    }
    &.el-icon-3 {
      right: 150px;
    }
    &.el-icon-4 {
      right: 50px;
    }
    &.el-icon-5 {
      width: 100px;
      right: 0;
    }
  }
}
</style>
