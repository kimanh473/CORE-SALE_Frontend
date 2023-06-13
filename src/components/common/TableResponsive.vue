<template>
  <table class="h-full whitespace-nowrap border w-full relative">
    <thead>
      <tr>
        <th
          class="sticky top-0 px-3 py-3 text-[#050505] text-center font-medium bg-slate-50 z-[5]"
          v-for="(item, index) in table.header"
          :key="index"
          align="center"
          @click="handleSort"
          :class="{ isCheck: table.isCheck }"
        >
          {{ item }}
        </th>
      </tr>
    </thead>
    <tbody class="border-b">
      <slot></slot>
    </tbody>
  </table>
</template>

<script setup lang="ts">
  // export default {
  //   props: {
  //     header: {
  //       type: Array,
  //     },
  //     users: {
  //       type: Array,
  //     },
  //     checkAll: {
  //       type: Function,
  //     },
  //     isCheck: {
  //       type: Boolean,
  //     },
  //     isShow: {
  //       type: Boolean,
  //       default: true,
  //     },
  //   },
  //   setup() {
  //     const handleSort = () => {
  //       console.log('a')
  //     }
  //     return { handleSort }
  //   },
  // }
  interface Table {
    header: Array<any>
    checkAll: Function
    isCheck: boolean
    isShow: boolean
  }
  defineProps<{
    table: Table
  }>()
  const handleSort = () => {
    console.log('a')
  }
</script>

<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th,
  td {
    padding: 8px;
    text-align: left;
    /* border: #ddd; */
  }
  tbody tr:hover {
    background-color: #f7f8f9;
    /* color: white; */
  }
  thead th:nth-child(11) {
    text-align: center;
  }
</style>
