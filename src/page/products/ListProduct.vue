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
              <p class="longText pl-5 mb-0 font-bold">Danh sách sản phẩm</p>
              <div class="icon-filter-approval relative group"></div>
            </div>
          </div>
          <a-menu v-model:selectedMenu="current" mode="horizontal">
            <a-sub-menu key="sub" class="flex">
              <template #icon>
                <i class="far fa-chevron-double-down"></i>
              </template>
              <a-menu-item key="setting:1" @click="ShowProductShopee(1)"
                >Shopee</a-menu-item
              >
              <a-menu-item key="setting:2">Lazada</a-menu-item>
              <a-menu-item key="setting:3">Tiki</a-menu-item>
              <a-menu-item key="setting:4">Tiktok</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </div>
      </Header>
    </template>
    <template v-slot:content class="relative">
      <div
        id="task-bar-list"
        class="!my-4 !py-[10px] !mx-[10px] bg-slate-500 rounded flex justify-between"
      >
        <span class="ml-2 mt-1.5 text-white">
          <template v-if="hasSelected">
            {{ `Chọn ${state.selectedRowKeys.length} sản phẩm` }}
          </template>
        </span>
        <div class="flex">
          <div
            class="button-delete relative group rounded-md px-2"
            title="Xóa tất cả"
            @click="handleOpenDeleteAllProduct"
            v-show="showDeleteAll"
          >
            <p class="text-[14px] mt-1 px-1">Xoá tất cả</p>
          </div>
          <div
            class="button-create-new relative group rounded-md px-2"
            title="Tạo mới sản phẩm"
            @click="CreateProduct()"
          >
            <p class="text-[14px] mt-1 px-1">Tạo mới sản phẩm</p>
          </div>
        </div>
      </div>
      <a-table
        id="table-data-list-sp"
        class="!p-[10px]"
        :row-selection="{
          selectedRowKeys: state.selectedRowKeys,
          onChange: onSelectChange,
        }"
        :columns="columns"
        :data-source="listProduct"
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
          <template v-if="column.key === 'image' && record.image">
            <img
              :src="UrlImg + '/' + record.image[0]"
              alt=""
              width="50"
              height="50"
            />
          </template>
          <template v-if="column.key === 'status'">
            <a-tag v-if="record.status === '1'" color="green">Bật</a-tag>
            <a-tag v-else>Tắt</a-tag>
          </template>
          <template v-if="column.key === 'web_site_code'">
            <div v-for="(item, index) in record.web_site_code" :key="index">
              <p class="abc text-red-600 mb-0">{{ formatWeb(item) }}</p>
            </div>
          </template>
          <template v-if="column.key === 'id'">
            <a @click="navigateUpdate(record.id)">Sửa</a>&nbsp;|&nbsp;<a
              @click="handleOpenDelete(record)"
              >Xóa</a
            >
          </template>
        </template>
        <template #switch="{ text }">
          <a-switch v-model:checked="isCheck" />
        </template>
      </a-table>
    </template>

    <template v-slot:footer>
      <div class="text-left px-[20px] py-[10px] flex justify-between">
        <a-pagination
          v-model:current="currentPage"
          v-model:pageSize="perPage"
          show-quick-jumper
          :total="totalPage"
          @change="changePage"
        />
        <button
          class="back-top bg-slate-500 focus:outline-none"
          @click="backTop"
        >
          <p class="text-white text-2xl mb-1.5">↑</p>
        </button>
      </div>
    </template>
  </base-layout>

  <modal-delete
    :isOpen="isOpenConfirm"
    :handleCloseDetail="handleCloseConfirm"
    :ConfirmDelete="handleDelete"
  >
  </modal-delete>
  <modal-delete-all
    :isOpenAll="isOpenConfirmAll"
    :handleCloseDetailAll="handleCloseConfirmAll"
    :ConfirmDeleteAll="handleDeleteAll"
  ></modal-delete-all>
  <loading-overlay :isLoading="isLoading"></loading-overlay>
</template>

<script setup lang="ts">
  import BaseLayout from '@/layout/baseLayout.vue'
  import SideBar from '@/components/common/SideBar.vue'
  import Header from '@/components/common/Header.vue'
  import { useRoute, useRouter } from 'vue-router'
  import { reactive, ref, computed } from 'vue'
  import { useProduct } from '@/store/modules/store-setting/products'
  // import { UrlImg } from '@/services/services'
  //   import { storeToRefs } from 'pinia'
  import { useToast } from 'vue-toastification'
  import ModalDelete from '@/components/modal/ModalConfirmDelelte.vue'
  import ModalDeleteAll from '@/components/modal/ModalConfirmDeleteAll.vue'
  import { useWebCatalog } from '@/store/modules/web-catalog/webcatalog'
  import { storeToRefs } from 'pinia'
  const current = ref<string[]>([])
  const UrlImg = import.meta.env.VITE_APP_IMAGE_URL

  const toast = useToast()
  const router = useRouter()
  const route = useRoute()
  const dataWebsite = useWebCatalog()
  dataWebsite.getAllWebCatalogAction()
  const { listWeb } = storeToRefs(dataWebsite)
  function formatWeb(webcode: string) {
    const webName = listWeb.value.find((item: any) => item.code == webcode)
    return webName?.web_name
  }
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const dataProduct = useProduct()
  const { listProduct, totalPage, currentPage } = storeToRefs(dataProduct)
  const perPage = ref(10)
  dataProduct.getListProductAction(
    perPage.value,
    Number(route.params.page),
    EndTimeLoading
  )
  const changePage = (pageNumber: number) => {
    isLoading.value = true
    router.push(`/products-list/page/${pageNumber}`)
    dataProduct.getListProductAction(perPage.value, pageNumber, EndTimeLoading)
  }
  const isCheck = ref<boolean>(false)
  const isLoading = ref<boolean>(false)
  const isOpenConfirm = ref<boolean>(false)
  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'stt',
    },
    {
      title: 'Ảnh',
      dataIndex: 'image',
      key: 'image',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'SKU',
      dataIndex: 'sku',
    },
    {
      title: 'Loại sản phẩm',
      dataIndex: `type_id`,
    },
    {
      title: 'Bộ thuộc tính',
      dataIndex: 'attribute_set_id',
      key: 'attribute_set_id',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      align: 'center',
      key: 'status',
    },
    {
      title: 'Website',
      dataIndex: 'web_site_code',
      key: 'web_site_code',
    },
    {
      title: 'Giá niêm yết',
      dataIndex: 'listed_price',
    },
    {
      title: 'Giá sỉ',
      dataIndex: 'wholesale_price',
    },
    {
      title: 'Giá lẻ',
      dataIndex: 'retail_price',
    },
    {
      title: 'Thao tác',
      dataIndex: 'id',
      key: 'id',
    },
  ]

  type Key = string
  const state = reactive<{
    selectedRowKeys: Key[]
    loading: boolean
    loadingDel: boolean
  }>({
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    loadingDel: false,
  })

  const deleteAllProduct = ref()
  const onSelectChange = (selectedRowKeys: any) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    deleteAllProduct.value = selectedRowKeys.map((item: number) => String(item))
    state.selectedRowKeys = selectedRowKeys
  }
  const hasSelected = computed(() => state.selectedRowKeys.length > 0)

  const showDeleteAll = computed(() => state.selectedRowKeys.length > 1)
  // const ids = state.selectedRowKeys.map((item: number) => String(item))
  // console.log(ids)
  const handleCloseConfirm = () => {
    isOpenConfirm.value = false
  }

  const CreateProduct = () => {
    router.push('/create-product')
  }
  // link đến trang sp sàn shopee
  const ShowProductShopee = (page: number) => {
    router.push(`/products-list-shopee/page/${page}`)
  }
  const navigateUpdate = (id: number) => {
    router.push(`/update-product/${id}`)
  }
  const idSelected = ref()
  const handleOpenDelete = (record: any) => {
    isOpenConfirm.value = true
    idSelected.value = record.id
  }
  // const handleDelete = () => {
  //   // da.deleteWebAction(
  //   //   Number(idSelected.value),
  //   //   EndTimeLoading,
  //   //   toast,
  //   //   handleCloseConfirm
  //   // )
  //   // dataWeb.getAllWebPaginateAction()
  //   // dataInventory.getListInventoryAction()
  // }
  const handleDelete = () => {
    isLoading.value = true
    dataProduct.deleteProductAction(
      Number(idSelected.value),
      EndTimeLoading,
      toast,
      handleCloseConfirm,
      perPage.value,
      Number(route.params.page)
    )
  }
  const isOpenConfirmAll = ref<boolean>(false)
  const handleOpenDeleteAllProduct = () => {
    isOpenConfirmAll.value = true
  }
  const handleCloseConfirmAll = () => {
    isOpenConfirmAll.value = false
  }

  // delete all dùng api xóa all
  const handleDeleteAll = () => {
    const data = {
      ids: deleteAllProduct.value,
    }

    // console.log('data', data)
    dataProduct.deleteAllProductAction(
      Object(data),
      EndTimeLoading,
      toast,
      handleCloseConfirmAll,
      perPage.value,
      Number(route.params.page)
    )
    setTimeout(() => {
      state.loadingDel = false
      state.selectedRowKeys = []
    }, 1000)
  }

  // delete all ko dùng api xóa all (chạy ok)
  // const handleDeleteAll = () => {
  //   state.loadingDel = true
  //   for (let i = 0; i < state.selectedRowKeys.length; i++) {
  //     console.log(`delete ${state.selectedRowKeys[i]}`)
  //     console.log('------')
  //     dataProduct.deleteAllProductAction(
  //       Number(state.selectedRowKeys[i]),
  //       toast
  //     )
  //   }
  //   setTimeout(() => {
  //     state.loadingDel = false
  //     state.selectedRowKeys = []
  //     dataProduct.getListProductAction(
  //       perPage.value,
  //       Number(route.params.page),
  //       EndTimeLoading
  //     )
  //     handleCloseConfirmAll()
  //     EndTimeLoading()

  //     console.log('Del all')
  //   }, 1000)
  // }

  const backTop = () => {
    const viewTaskBar = document.getElementById('task-bar-list')
    viewTaskBar.scrollIntoView({ behavior: 'smooth' })
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

  .ant-menu-submenu-title {
    padding-top: 6px !important;
    display: flex !important;
    align-items: center !important;
  }

  .ant-menu-overflow-item {
    padding: 2px !important;
    display: flex !important;
    border: 0px !important;
  }
</style>
