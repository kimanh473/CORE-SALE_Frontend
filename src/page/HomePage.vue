<template>
  <base-layout>
    <template v-slot:sidebar>
      <!-- <div class="logo">
        <img src="../assets/images/btp.png" />
      </div> -->
      <SideBar />
    </template>
    <template v-slot:header>
      <Header :is-show-search="false" />
    </template>
    <template v-slot:content class="relative">
      <!-- <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>User</a-breadcrumb-item>
        <a-breadcrumb-item>Bill</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
        Bill is a cat.
      </div> -->
    </template>
    <template v-slot:footer>Copyright © 2023 Btp holdings Ecom.</template>
  </base-layout>
</template>

<script setup lang="ts">
  import BaseLayout from '../layout/baseLayout.vue'
  import SideBar from '../components/common/SideBar.vue'
  import Header from '../components/common/Header.vue'
</script>
<style>
  #components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }

  .site-layout .site-layout-background {
    background: #fff;
  }

  .ant-layout-header {
    height: 60px;
  }

  .modal-menu-box {
    position: absolute;
    top: 50px;
    right: 0px;
    z-index: 9999;
    justify-items: center;
  }
</style>
