<template>
  <base-layout>
    <template v-slot:sidebar>
      <SideBar />
    </template>
    <template v-slot:header>
      <Header :is-show-search="false" />
    </template>
    <template v-slot:content class="relative">
      <div>Đây là trang danh mục sales</div>
    </template>
    <template v-slot:footer>Copyright © 2023 Btp holdings Ecom.</template>
  </base-layout>
</template>

<script setup lang="ts">
  import BaseLayout from '../../layout/baseLayout.vue'
  import SideBar from '../../components/common/SideBar.vue'
  import Header from '../../components/common/Header.vue'
</script>

<style></style>
