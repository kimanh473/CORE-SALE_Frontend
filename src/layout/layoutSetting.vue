<template>
  <div class="w-screen h-screen">
    <a-layout style="min-height: 100vh">
      <a-layout-header style="background: #fff; padding: 0"
        ><slot name="header"></slot
      ></a-layout-header>
      <a-layout-content style="margin: 0 16px"
        ><slot name="content"></slot
      ></a-layout-content>
      <a-layout-footer style="text-align: center"
        ><slot name="footer"></slot
      ></a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
  // import Header from '../Components/admin/Header.vue'
  // import Sidebar from '../Components/Sidebar'
  // import Footer from '../Components/Footer'
  import { ref } from 'vue'
  // import { library } from '@fortawesome/fontawesome-svg-core'
  // import { faCog } from '@fortawesome/free-solid-svg-icons'

  // library.add(faCog)
  const collapsed = ref<boolean>(false)
</script>
<style scoped>
  #components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  }
  .ant-layout-header {
    height: 60px;
  }
</style>
