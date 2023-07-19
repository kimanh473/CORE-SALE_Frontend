<template>
  <base-layout>
    <template v-slot:sidebar>
      <SideBar />
    </template>
    <template v-slot:header>
      <Header :is-show-search="false">
        <template v-slot:name
          ><div class="pl-4 text-lg flex items-center">Danh mục sản phẩm</div>
        </template>
      </Header>
    </template>
    <template v-slot:content>
      <div class="relative overflow-x-auto shadow-md sm: rounded-sm">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-white uppercase bg-[#524d49] dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Sản phẩm</th>
              <th scope="col" class="px-6 py-3">Màu sắc</th>
              <th scope="col" class="px-6 py-3">Loại sản phẩm</th>
              <th scope="col" class="px-6 py-3">Số lượng</th>
              <th scope="col" class="px-6 py-3">Giá</th>
              <th scope="col" class="px-6 py-3">Trạng thái</th>
              <th scope="col" class="px-6 py-3">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">1,000</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">Enabled</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Edit</a
                >
              </td>
            </tr>
            <tr
              class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Laptop PC</td>
              <td class="px-6 py-4">1,000</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">Enabled</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Edit</a
                >
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">1,000</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">Enabled</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Edit</a
                >
              </td>
            </tr>
            <tr
              class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Google Pixel Phone
              </th>
              <td class="px-6 py-4">Gray</td>
              <td class="px-6 py-4">Phone</td>
              <td class="px-6 py-4">1,000</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">Enabled</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Edit</a
                >
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple Watch 5
              </th>
              <td class="px-6 py-4">Red</td>
              <td class="px-6 py-4">Wearables</td>
              <td class="px-6 py-4">1,000</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">Enabled</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Edit</a
                >
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">1,000</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">Enabled</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Edit</a
                >
              </td>
            </tr>
            <tr
              class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Laptop PC</td>
              <td class="px-6 py-4">1,000</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">Enabled</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Edit</a
                >
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">1,000</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">Enabled</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Edit</a
                >
              </td>
            </tr>
            <tr
              class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Google Pixel Phone
              </th>
              <td class="px-6 py-4">Gray</td>
              <td class="px-6 py-4">Phone</td>
              <td class="px-6 py-4">1,000</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">Enabled</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Edit</a
                >
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple Watch 5
              </th>
              <td class="px-6 py-4">Red</td>
              <td class="px-6 py-4">Wearables</td>
              <td class="px-6 py-4">1,000</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">Enabled</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Edit</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template v-slot:footer></template>
  </base-layout>
</template>

<script setup lang="ts">
  import BaseLayout from '../../layout/baseLayout.vue'
  import SideBar from '../../components/common/SideBar.vue'
  import Header from '../../components/common/Header.vue'
</script>

<style></style>
