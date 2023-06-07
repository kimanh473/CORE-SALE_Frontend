<template>
  <a-menu
    v-model:openKeys="state.openKeys"
    v-model:selectedKeys="state.selectedKeys"
    style="width: 256px"
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
      <a-menu-item v-for="child in item.children" :key="child.key"
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
    },
    {
      key: '2',
      title: 'Navigation 2',
      children: [
        {
          key: '2.1',
          title: 'Navigation 3',
        },
      ],
    },
  ]
  import { reactive } from 'vue'
  import type { MenuProps } from 'ant-design-vue'
  import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  } from '@ant-design/icons-vue'
  const state = reactive({
    selectedKeys: [],
    openKeys: [],
  })

  const handleClick: MenuProps['onClick'] = (menuInfo) => {
    console.log('click ', menuInfo)
  }
</script>
<style></style>
