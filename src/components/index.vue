<script lang="ts">
import { defineComponent, ref } from 'vue'
import sidebar from './main/sidebar.vue'
import topbar from './main/topbar.vue'

export default defineComponent({
  components: {
    sidebar,
    topbar
  },
  setup() {
    const activeIndex = ref('/home')
    const handleSelect = (key: any, keyPath: any) => {
      console.log(key, keyPath)
    }
    return {
      activeIndex,
      handleSelect
    }
  }
})
</script>

<template>
  <div :class="['wrapper', isCollapse ? 'hideSidebar' : '']">
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '210px'">
        <sidebar />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <topbar @reload="handleReload" />
        </el-header>
        <el-main>
          <breadcrumb />
          <div v-if="isRouterAlive">
            <app-main />
          </div>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>

  <router-view />
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
