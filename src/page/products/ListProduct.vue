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
            <a-sub-menu key="sub1">
              <template #icon>
                <appstore-outlined />
              </template>
              <template #title>Chọn sàn</template>
              <a-menu-item-group title="Sàn TMĐT">
                <a-menu-item key="setting:1" @click="ShowProductShopee(1)"
                  >Shopee</a-menu-item
                >
                <a-menu-item key="setting:2">Lazada</a-menu-item>
                <a-menu-item key="setting:3">Tiki</a-menu-item>
                <a-menu-item key="setting:4">Tiktok</a-menu-item>
              </a-menu-item-group>
              <a-menu-item-group title="Item 2">
                <a-menu-item key="setting:5">Option 3</a-menu-item>
                <a-menu-item key="setting:6">Option 4</a-menu-item>
              </a-menu-item-group>
            </a-sub-menu>
          </a-menu>
        </div>
      </Header>
    </template>
    <template v-slot:content class="relative">
      <div
        class="!my-4 !py-[10px] !mx-[10px] bg-slate-500 rounded flex justify-between"
      >
        <div>
          <a-button
            class="ml-3"
            type="primary"
            :disabled="!hasSelectedDelete"
            :loading="state.loadingDel"
            @click="handleOpenDeleteAllProduct"
          >
            Xóa tất cả
          </a-button>
          <span
            style="
              margin-left: 8px;
              margin-left: 8px;
              margin-top: 4px;
              color: white;
            "
          >
            <template v-if="hasSelected">
              {{ `Chọn ${state.selectedRowKeys.length} sản phẩm` }}
            </template>
          </span>
        </div>
        <div
          class="button-create-new relative group rounded-md px-2"
          title="Tạo mới web"
          @click="CreateProduct()"
        >
          <p class="text-[14px] mt-1 px-1">Tạo mới sản phẩm</p>
        </div>
      </div>
      <a-table
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
          <template v-if="column.key === 'web_site_code'">
            <div v-for="(item, index) in record.web_site_code" :key="index">
              {{ formatWeb(item) }}
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
  import { AppstoreOutlined } from '@ant-design/icons-vue'
  import { before } from 'lodash-es'
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
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
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
    console.log(deleteAllProduct)
    state.selectedRowKeys = selectedRowKeys
    console.log(state.selectedRowKeys)
  }
  const hasSelected = computed(() => state.selectedRowKeys.length > 0)
  const hasSelectedDelete = computed(() => state.selectedRowKeys.length > 1)
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
    console.log(idSelected.value)
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

  const handleOpenDeleteAllProduct = () => {
    isOpenConfirmAll.value = true
  }
  const isOpenConfirmAll = ref<boolean>(false)
  const handleCloseConfirmAll = () => {
    isOpenConfirmAll.value = false
    console.log('del cai nay', state.selectedRowKeys)
  }
  const handleDeleteAll = () => {
    state.loadingDel = true

    console.log(`delete ${state.selectedRowKeys}`)
    console.log('------')
    // note
    console.log(`ids`, deleteAllProduct)
    const data = {
      ids: deleteAllProduct,
    }
    dataProduct.deleteAllProductAction(
      data,
      EndTimeLoading,
      toast,
      handleCloseConfirm,
      perPage.value,
      Number(route.params.page)
    )
    setTimeout(() => {
      state.loadingDel = false
      state.selectedRowKeys = []
      // dataProduct.getListProductAction(
      //   perPage.value,
      //   Number(route.params.page),
      //   EndTimeLoading
      // )
      handleCloseConfirmAll()
      console.log(`json mang ids`)
    }, 1000)
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
    display: flex !important;
    align-items: center !important;
  }
</style>
