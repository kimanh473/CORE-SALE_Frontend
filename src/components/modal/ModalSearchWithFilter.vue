<template>
  <div class="flex mr-4 ml-4 max-sm:w-[400px] max-sm:m-0">
    <label
      for="default-search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only"
      >Search</label
    >
    <div class="relative">
      <div class="flex absolute inset-y-0 left-0 items-center pl-3">
        <i class="fal fa-search"></i>
      </div>
      <input
        type="search"
        class="block p-1.5 pl-10 w-full whitespace-no-wrap outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
        placeholder="Tìm kiếm"
        :v-model="searchValue"
        @input="searchInTable"
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke="currentColor"
        class="w-6 h-6 flex absolute right-3 top-1.5 text-gray-600 hover:text-gray-900 hover:cursor-pointer"
        @click="showFilterInTable"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
        />
      </svg>
    </div>
  </div>
</template>
<script setup>
  import { ref, defineEmits } from 'vue'

  const emit = defineEmits(['searchInTable', 'showFilterInTable'])
  const searchValue = ref('')
  const isOpenModalFilter = ref(false)
  const searchInTable = (e) => {
    searchValue.value = e.target.value
    emit('searchInTable', searchValue.value)
  }
  const showFilterInTable = () => {
    isOpenModalFilter.value = true
    emit('showFilterInTable', isOpenModalFilter.value)
  }
</script>
<style></style>
