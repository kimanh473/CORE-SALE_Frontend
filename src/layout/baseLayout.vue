<template>
  <div class="w-screen h-screen flex">
    <a-layout has-sider>
      <a-menu
        :style="{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }"
      >
        <div class="logo" />
        <slot name="sidebar"></slot>
      </a-menu>
      <a-layout style="margin-left: 256px">
        <a-layout-header :style="{ background: '#fff', padding: 0 }"
          ><slot name="header"></slot
        ></a-layout-header>
        <a-layout-content style="min-height: auto; overflow: initial">
          <slot name="content"></slot>
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
          <slot name="footer"></slot>
        </a-layout-footer>
      </a-layout>
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
  #components-layout-demo-fixed-sider .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .site-layout .site-layout-background {
    background: #fff;
  }

  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  }
</style>
