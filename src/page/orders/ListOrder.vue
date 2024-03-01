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
              <Transition name="slide-fade"> </Transition>
              <p class="longText pl-5 mb-0">Danh sách đơn hàng</p>
              <div class="icon-filter-approval relative group"></div>
            </div>
          </div>
        </div>
      </Header>
    </template>
    <template v-slot:content class="relative">
      <!-- <div
        class="!my-4 !py-[10px] !mx-[10px] bg-slate-500 rounded flex justify-between"
      >
        <div></div>
        <div
          class="button-create-new relative group rounded-md px-2"
          title="Tạo mới web"
          @click="CreateOrder()"
        >
          <p class="text-[14px] mt-1 px-1">Tạo mới đơn hàng</p>
        </div>
      </div> -->
      <a-menu mode="horizontal">
        <a-menu-item key="1"> Trạng thái 1 </a-menu-item>
        <a-menu-item key="2"> Trạng thái 2 </a-menu-item>
        <a-menu-item key="3"> Trạng thái 3 </a-menu-item>
        <a-menu-item key="4"> Trạng thái 4 </a-menu-item>
        <a-menu-item key="5"> Trạng thái 5 </a-menu-item>
      </a-menu>
      <a-table
        class="!p-[10px]"
        :columns="columns"
        :data-source="listOrder"
        :pagination="false"
        v-model:current="currentPage"
        bordered
        row-key="id"
        ><template #bodyCell="{ column, record, index }">
          <template v-if="column.key === 'stt'">
            <div>
              {{ index + perPage * (currentPage - 1) + 1 }}
            </div>
          </template>
          <template v-if="column.key === 'order_sn'">
            <a @click="handleToDetail(record.id)">
              {{ record.order_sn }}
            </a>
          </template>
          <template v-if="column.key === 'id'">
            &nbsp;<a @click="handleToDetail(record.id)">Xem chi tiết</a>
          </template>
        </template>
        <template #switch="{ text }">
          <a-switch v-model:checked="isCheck" />
        </template>
      </a-table>
    </template>

    <template v-slot:footer
      ><div class="text-left px-[20px] py-[10px]">
        <a-pagination
          v-model:current="currentPage"
          v-model:pageSize="perPage"
          show-quick-jumper
          :total="totalPage"
          @change="changePage"
        />
      </div>
    </template>
  </base-layout>

  <modal-delete
    :isOpen="isOpenConfirm"
    :handleCloseDetail="handleCloseConfirm"
    :ConfirmDelete="handleDelete"
  >
  </modal-delete>
  <loading-overlay :isLoading="isLoading"></loading-overlay>
</template>

<script setup lang="ts">
  import BaseLayout from '@/layout/baseLayout.vue'
  import SideBar from '@/components/common/SideBar.vue'
  import Header from '@/components/common/Header.vue'
  import { useRoute, useRouter } from 'vue-router'
  import { ref } from 'vue'
  import ModalDelete from '@/components/modal/ModalConfirmDelelte.vue'
  import { useWebCatalog } from '@/store/modules/web-catalog/webcatalog'
  import { useOrder } from '@/store/modules/orders/orders'
  import { storeToRefs } from 'pinia'
  // const UrlImg = import.meta.env.VITE_APP_IMAGE_URL

  const router = useRouter()
  const route = useRoute()
  const dataWebsite = useWebCatalog()
  dataWebsite.getAllWebCatalogAction()
  // const { listWeb } = storeToRefs(dataWebsite)
  // function formatWeb(webcode: string) {
  //   const webName = listWeb.value.find((item: any) => item.code == webcode)
  //   return webName?.web_name
  // }
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const dataOrder = useOrder()
  const { totalPage, currentPage } = storeToRefs(dataOrder)
  const perPage = ref(10)
  dataOrder.getAllOrderPaginateAction(
    perPage.value,
    Number(route.params.page),
    EndTimeLoading
  )
  const changePage = (pageNumber: number) => {
    isLoading.value = true
    router.push(`/orders-list/page/${pageNumber}`)
    dataOrder.getAllOrderPaginateAction(
      perPage.value,
      pageNumber,
      EndTimeLoading
    )
  }
  const isCheck = ref<boolean>(false)
  const isLoading = ref<boolean>(false)
  const isOpenConfirm = ref<boolean>(false)

  const { listOrder } = storeToRefs(dataOrder)

  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'stt',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'create_time_order',
      key: 'create_time_order',
    },
    {
      title: 'Mã ĐH',
      dataIndex: 'order_sn',
      key: 'order_sn',
    },
    {
      title: 'Mã KH',
      dataIndex: 'buyer_user_id',
    },
    {
      title: 'Tên KH',
      dataIndex: `buyer_username`,
    },
    {
      title: 'Tiền hàng',
      dataIndex: 'total_amount',
    },
    {
      title: 'Tiền thuế',
      dataIndex: 'tax_money',
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'total_amount',
    },
    {
      title: 'Shop',
      dataIndex: 'shop_name',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'order_status',
    },
    {
      title: 'Diễn giải',
      dataIndex: 'note',
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

  // const CreateOrder = () => {
  //   router.push('/create-order')
  // }
  // const navigateUpdate = (id: number) => {
  //   router.push(`/update-product/${id}`)
  // }
  // const idSelected = ref()
  // const handleOpenDelete = (record: any) => {
  //   isOpenConfirm.value = true
  //   idSelected.value = record.id
  // }
  const handleToDetail = (id: number) => {
    router.push(`/detail-order/${id}`)
  }
  const handleDelete = () => {
    // da.deleteWebAction(
    //   Number(idSelected.value),
    //   EndTimeLoading,
    //   toast,
    //   handleCloseConfirm
    // )
    // dataWeb.getAllWebPaginateAction()
    // dataInventory.getListInventoryAction()
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
