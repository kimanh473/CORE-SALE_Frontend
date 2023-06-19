<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import { computed } from 'vue'
  import { userLogin } from './store/modules/accounts/userLogin'
  const route = useRoute()
  const router = useRouter()
  const userlog = userLogin()
  const layout = computed(() =>
    route.meta.layout ? route.meta.layout : 'base-layout'
  )
  userlog.checkAuthenticated(router)
</script>
<style scoped>
  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    overflow: hidden;
  
  }
</style>
