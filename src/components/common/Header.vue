<template>
  <div class="w-full border h-full flex-1">
    <nav
      class="flex justify-between mx-auto w-full bg-white"
      style="height: inherit"
    >
      <div>
        <slot name="name"></slot>
      </div>
      <!-- <div class="logo flex ml-[20px] items-center">
        <img src="../../assets/images/btp.png" />
      </div> -->
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
            class="hover:bg-gray-100 cursor-pointer p-5 max-sm:px-1"
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
            class="hover:bg-gray-100 cursor-pointer p-5 max-sm:px-1"
            style="color: var(--color-primary)"
          >
            <i class="fal fa-phone text-lg"></i>
          </li>
          <li
            class="hover:bg-gray-100 cursor-pointer p-5 max-sm:px-1 w-[60px]"
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
            <!-- <div
              class="absolute text-white w-[20px] h-[20px] rounded-full top-0 text-xs right-0 flex items-center justify-center"
              style="background-color: var(--color-primary)"
            ></div> -->
          </li>
          <li
            class="text-white hover:bg-gray-100 cursor-pointer p-5 max-sm:px-1 w-full"
            @click="toggleActiveAccountBox"
            v-click-outside="onClickOutsideAccountBox"
          >
            <img
              src="../../assets/images/t.png"
              style="
                height: 30px;
                width: 30px;
                border-radius: 50%;
                border-color: var(--color-primary);
              "
            />
            <div
              id="modal-account-box"
              class="modal-account-box absolute z-[9999] items-center right-[10px]"
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
    </nav>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import AccountBox from '../../components/sidebar/AccountBox.vue'
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
<style></style>
