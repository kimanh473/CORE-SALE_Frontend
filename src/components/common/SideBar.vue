<template>
  <!-- <a-menu
    v-model:openKeys="state.openKeys"
    v-model:selectedKeys="state.selectedKeys"
    class="w-[256px] overflow-scroll"
    mode="vertical"
    @click="handleClick"
  >
    <div class="logo pt-[20px] pr-[20px] pb-[35px]">
      <img class="float-right" src="../../assets/images/btp.png" />
    </div>
    <a-menu-item key="1">
      <template #icon>
        <MailOutlined />
      </template>
      Navigation One
    </a-menu-item>
    <a-menu-item key="2">
      <template #icon>
        <CalendarOutlined />
      </template>
      Navigation Two
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>Navigation Three</template>
      <a-menu-item key="3">Option 3</a-menu-item>
      <a-menu-item key="4">Option 4</a-menu-item>
      <a-sub-menu key="sub1-2" title="Submenu">
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <template #icon>
        <SettingOutlined />
      </template>
      <template #title>Navigation Four</template>
      <a-menu-item key="7">Option 7</a-menu-item>
      <a-menu-item key="8">Option 8</a-menu-item>
      <a-menu-item key="9">Option 9</a-menu-item>
      <a-menu-item key="10">Option 10</a-menu-item>
    </a-sub-menu>
    <a-sub-menu v-for="item in list" :key="item.key">
      <template #icon>
        <SettingOutlined />
      </template>
      <template #title>{{ item.title }}</template>
      <a-menu-item
        v-for="child in item.children"
        :key="child.key"
        @click="router.push(`${child.path}`)"
        >{{ child.title }}
      </a-menu-item>
    </a-sub-menu>
  </a-menu> -->
  <a-menu style="width: 256px" mode="inline">
    <a-sub-menu v-for="item in list" :key="item.key">
      <template #icon>
        <SettingOutlined />
      </template>
      <template #title>{{ item.title }}</template>
      <a-menu-item
        v-for="child in item.children"
        :key="child.key"
        @click="router.push(`${child.path}`)"
        >{{ child.title }}
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script setup lang="ts">
  const list = [
    {
      key: '1',
      title: 'Option 1',
      path: '/',
    },
    {
      key: '2',
      title: 'Navigation 2',
      children: [
        {
          key: '2.1',
          title: 'Navigation 3',
          path: '/setting-menu',
        },
      ],
    },
    {
      key: '3',
      title: 'Cài đặt hệ thống',
      children: [
        {
          key: '3.1',
          title: 'Cài đặt admin',
          path: '/group-admin-view',
        },
      ],
    },
  ]
  import { reactive } from 'vue'
  // import type { MenuProps } from 'ant-design-vue'
  import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  } from '@ant-design/icons-vue'
  import { useRouter } from 'vue-router'
  const state = reactive({
    collapsed: false,
    selectedKeys: ['1'],
    openKeys: ['sub1'],
    preOpenKeys: ['sub1'],
  })
  const router = useRouter()
  // const handleClick: MenuProps['onClick'] = (menuInfo) => {
  //   console.log('click ', menuInfo)
  // }
</script>
<style>
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 5px;
  }
</style>
