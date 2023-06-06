<script setup lang="ts">
  import MenuNav from '../components/MenuNav.vue'
  // const items = [
  //   { id: 1, name: 'Tổng quan', path: 'e' },
  //   { id: 2, name: 'Đơn hàng', path: 'r' },
  //   { id: 3, name: 'Vận chuyển', path: 's' },
  // ]
</script>
<template>
  <div class="w-screen h-screen">
    <MenuNav :is-show-search="false" />
  </div>
</template>
<style></style>
