<template>
  <base-layout>
    <template v-slot:sidebar>
      <SideBar />
    </template>
    <template v-slot:header>
      <Header :is-show-search="false">
        <div class="flex grow">
          <div class="flex items-center">
            <div class="flex items-center">
              <Transition name="slide-fade"></Transition>
              <p class="longText pl-5 mb-0">Danh sách đơn hàng</p>
              <div class="icon-filter-approval relative group"></div>
            </div>
          </div>
        </div>
      </Header>
    </template>
    <template v-slot:content class="relative">
      <div
        class="!my-4 !py-[10px] !mx-[10px] bg-slate-500 rounded flex justify-between"
      >
        <div></div>
        <div
          class="button-create-new relative group rounded-md px-2"
          title="Tạo mới Đơn hàng"
          @click="CreateOrder()"
        >
          <p class="text-[14px] mt-1 px-1">Tạo mới đơn hàng</p>
        </div>
      </div>
      <a-table
        class="!p-[10px]"
        :columns="columns"
        :data-source="listOrder"
        bordered
        row-key="id"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'json_rule_detail'"> </template>
          <template v-if="column.key === 'id'">
            <a @click="navigateUpdate(record.id)">Sửa</a>&nbsp;|&nbsp;
            <a @click="handleOpenDelete(record)">Xóa</a>
          </template>
        </template>
        <template #switch="{ text }">
          <a-switch v-model:checked="isCheck" />
        </template>
      </a-table>
    </template>
    <template v-slot:footer>footer</template>
  </base-layout>
  <div>
    <modal-delete
      :isOpen="isOpenConfirm"
      :handleCloseDetail="handleCloseConfirm"
      :ConfirmDelete="handleDelete"
    >
    </modal-delete>
  </div>

  <!--  <loading-overlay :isLoading="isLoading"></loading-overlay>-->
  <!--        tạo mới account-->
  <!-- sửa tài khoản -->
</template>

<script setup lang="ts">
  import BaseLayout from '@/layout/baseLayout.vue'
  import SideBar from '@/components/common/SideBar.vue'
  import Header from '@/components/common/Header.vue'
  import { ref } from 'vue'
  import { useOrder } from '@/store/modules/order-service/order'
  import ModalDelete from '@/components/modal/ModalConfirmDelelte.vue'
  import { storeToRefs } from 'pinia'
  import { useRouter } from 'vue-router'

  const dataOrder = useOrder()
  dataOrder.getAllOrderPaginateAction()
  const { listOrder } = storeToRefs(dataOrder)
  const isCheck = ref<boolean>(false)
  const isLoading = ref<boolean>(false)
  const isOpenConfirm = ref<boolean>(false)
  const isOpenCreateModal = ref<boolean>(false)
  const isOpenUpdateModal = ref<boolean>(false)
  const router = useRouter()
  const columns = [
    {
      title: 'Mã đơn hàng',
      dataIndex: 'code',
    },
    {
      title: 'Mã khách hàng',
      dataIndex: 'customer_account_code',
    },
    {
      title: 'Thao tác',
      dataIndex: 'id',
      key: 'id',
    },
  ]

  const handleCloseConfirm = () => {
    isOpenConfirm.value = false
  }

  const navigateUpdate = (id: number) => {
    isOpenUpdateModal.value = true
  }

  const idSelected = ref()

  const handleOpenDelete = (record: any) => {
    isOpenConfirm.value = true
    idSelected.value = record.id
  }

  const handleDelete = () => {
    isLoading.value = true
  }

  const openModalCreateGroupCustomer = () => {
    isOpenCreateModal.value = true
  }

  const CreateOrder = () => {
    router.push('/create-order')
  }
  const handleCloseCreate = () => {
    isOpenCreateModal.value = false
  }
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
