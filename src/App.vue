<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { computed } from 'vue'
  const route = useRoute()
  const layout = computed(() =>
    route.meta.layout ? route.meta.layout : 'base-layout'
  )
</script>
<style scoped>
  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
