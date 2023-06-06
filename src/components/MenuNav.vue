<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo">
        <img src="../assets/images/btp.png" />
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <!-- <pie-chart-outlined /> -->
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <!-- <desktop-outlined /> -->
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <!-- <user-outlined /> -->
              <span>User</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <!-- <team-outlined /> -->
              <span>Team</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <!-- <file-outlined /> -->
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <div class="w-full border h-full flex-1">
          <nav class="flex justify-end mx-auto w-full bg-white">
            <slot></slot>
            <div class="text-right w-[300px]" v-if="isShowSearch">
              <slot name="search"></slot>
            </div>
            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div class="flex items-center">
              <ul
                class="flex xxs222 items-center justify-center max-sm:mr-[60px] mb-[0px]"
              >
                <!--          menu-->
                <li
                  class="hover:bg-gray-100 cursor-pointer p-3 ml-2 rounded-lg max-sm:px-1"
                  style="color: var(--color-primary)"
                  @click="toggleActiveMenu"
                  v-click-outside="onClickOutsideMenuBox"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                  <div
                    class="modal-menu-box mr-100"
                    :class="activeMenu ? 'flex' : 'hidden'"
                    @click.stop
                  >
                    <div
                      class="bg-white text-base z-1 list-none text-left rounded shadow-lg mb-1"
                      ref="popoverDropdownRef"
                      v-if="activeMenu"
                    >
                      <menu-box />
                    </div>
                  </div>
                </li>
                <li
                  class="hover:bg-gray-100 cursor-pointer p-3 ml-2 rounded-lg max-sm:px-1"
                  style="color: var(--color-primary)"
                >
                  <font-awesome-icon :icon="['far', 'phone']" />
                </li>

                <li
                  class="hover:bg-gray-100 cursor-pointer p-3 ml-2 rounded-lg relative max-sm:px-1"
                  @click="toggleActiveNotifyBox"
                  v-click-outside="onClickOutsideNotifyBox"
                  style="color: var(--color-primary)"
                >
                  <i class="fal fa-bell text-lg"></i>
                  <div
                    class="modal-menu-box mr-100"
                    :class="activeNotifyBox ? 'flex' : 'hidden'"
                    @click.stop
                  >
                    <div
                      v-bind:class="{
                        hidden: !activeNotifyBox,
                        block: activeNotifyBox,
                      }"
                      class="bg-white text-base z-1 list-none text-left rounded shadow-lg mb-1"
                      ref="popoverDropdownRef"
                    >
                      <notify-box
                        :closeNotifyBox="onClickOutsideNotifyBox"
                      ></notify-box>
                    </div>
                  </div>
                  <div
                    class="absolute text-white w-[20px] h-[20px] rounded-full top-0 text-xs right-0 flex items-center justify-center"
                    style="background-color: var(--color-primary)"
                  ></div>
                </li>
                <li
                  class="text-white hover:bg-gray-100 cursor-pointer p-3 ml-2 mr-2 rounded-lg max-sm:px-1"
                  @click="toggleActiveAccountBox"
                  v-click-outside="onClickOutsideAccountBox"
                >
                  <img
                    src="../assets/images/btp.png"
                    style="
                      height: 25px;
                      width: 25px;
                      border-radius: 50%;
                      border-color: var(--color-primary);
                    "
                  />
                  <div
                    id="modal-account-box"
                    class="modal-account-box"
                    :class="activeAccountBox ? 'flex' : 'hidden'"
                  >
                    <div
                      v-bind:class="{
                        hidden: !activeAccountBox,
                        block: activeAccountBox,
                      }"
                      class="bg-white text-base z-1 list-none text-left rounded mb-1 shadow-lg text-blue-900"
                      ref="popoverDropdownRef"
                    >
                      <account-box />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav></div
      ></a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          Bill is a cat.
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const collapsed = ref<boolean>(false)
  const selectedKeys = ref<string[]>(['1'])
  defineProps<{ isShowSearch: boolean }>()
  const activeMenu = ref(false)
  const activeNotifyBox = ref(false)
  const activeAccountBox = ref(false)
  const toggleActiveMenu = () => (activeMenu.value = !activeMenu.value)
  const onClickOutsideMenuBox = () => (activeMenu.value = false)
  const toggleActiveNotifyBox = () =>
    (activeNotifyBox.value = !activeNotifyBox.value)
  const onClickOutsideNotifyBox = () => (activeNotifyBox.value = false)
  const toggleActiveAccountBox = () => (activeAccountBox.value = true)
  const onClickOutsideAccountBox = () => (activeAccountBox.value = false)
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
  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  }
</style>
