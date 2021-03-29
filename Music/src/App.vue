<template>
  <div id="app">
    <!-- 动态路由展示 -->
    <router-view/>
    <!-- 导入组件 底部组件 -->
    <footerNav />
  </div>
</template>

<script>
import footerNav from './components/footerNav'
export default {
  name: 'App',
  components: {
    footerNav
  }
}
</script>
<style>
@import './assets/css/index.css'
</style>
