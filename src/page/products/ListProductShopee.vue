<template>
  <base-layout>
    <template v-slot:sidebar>
      <SideBar />
    </template>
    <template v-slot:header>
      <Header :is-show-search="false">
        <div class="flex grow">
          <div class="flex items-center">
            <a-breadcrumb class="flex items-center">
              <Transition name="slide-fade"> </Transition>
              <!-- <i
                class="far fa-chevron-double-left pl-4 hover:text-cyan-500"
                @click="backToAllProduct(1)"
              ></i> -->

              <a-breadcrumb-item
                class="longText pl-5 font-bold hover:text-cyan-500 hover:cursor-pointer"
                @click="backToAllProduct(1)"
              >
                Danh sách sản phẩm
              </a-breadcrumb-item>
              <a-breadcrumb-item class="pl-1 font-bold"
                >Shopee</a-breadcrumb-item
              >
              <!-- <div class="icon-filter-approval relative group"></div> -->
            </a-breadcrumb>
          </div>
        </div>
      </Header>
    </template>
    <template v-slot:content class="relative">
      <div
        id="task-bar-list"
        class="!my-4 !py-[10px] !mx-[10px] bg-slate-300 rounded flex justify-between"
      >
        <span class="ml-2 mt-1.5 text-slate-700">
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
            class="button-custom update-list-button bg-amber-500 relative group rounded-md px-2"
            title="Cập nhật"
          >
            <p class="text-[14px] mt-1 px-1">Cập nhật</p>
          </div>
          <div
            class="button-custom export-button bg-red-500 relative group rounded-md px-2"
            title="Export"
          >
            <p class="text-[14px] mt-1 px-1">Export</p>
          </div>
          <div
            class="button-custom import-button bg-red-500 relative group rounded-md px-2"
            title="Import"
          >
            <p class="text-[14px] mt-1 px-1">Import</p>
          </div>
          <div
            class="button-custom hide-product bg-green-500 relative group rounded-md px-2 mr-3"
            title="Ẩn sản phẩm"
            @click="HideAllProductShopee"
          >
            <p class="text-[14px] mt-1 px-1">Ẩn sản phẩm</p>
          </div>
          <div
            class="button-custom push-product bg-green-500 relative group rounded-md px-2 mr-3"
            title="Đẩy sản phẩm"
            @click="PushAllProductShopee"
          >
            <p class="text-[14px] mt-1 px-1">Đẩy sản phẩm</p>
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
        class="!p-[10px]"
        :row-selection="{
          selectedRowKeys: state.selectedRowKeys,
          onChange: onSelectChange,
        }"
        :columns="columns"
        :data-source="listProduct"
        :pagination="false"
        :scroll="{ x: 'calc(700px + 50%)' }"
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
          <template v-if="column.key === 'status_sync'">
            <a-tag v-if="record.status === '1'" color="green"
              >Liên kết thành công</a-tag
            >
            <a-tag v-else color="red">Liên kết lỗi</a-tag>
          </template>
          <template v-if="column.key === 'web_site_code'">
            <div v-for="(item, index) in record.web_site_code" :key="index">
              <p class="abc text-red-600 mb-0">{{ formatWeb(item) }}</p>
            </div>
          </template>
          <template v-if="column.key === 'retail_price'">
            <!-- <p>
              {{ record.retail_price }}
            </p> -->
          </template>
          <template v-if="column.key === 'id'">
            <a @click="pushProductShopee(record)">Đẩy</a>&nbsp;|&nbsp;<a
              @click="hideProductShopee(record)"
              >Ẩn</a
            >&nbsp;|&nbsp;<a @click="navigateUpdate(record.id)">Sửa</a
            >&nbsp;|&nbsp;<a @click="handleOpenDelete(record)">Xóa</a>
          </template>
        </template>
        <template #switch="{ text }">
          <a-switch v-model:checked="isCheck" />
        </template>
      </a-table>
    </template>

    <template v-slot:footer
      ><div class="text-left px-[20px] py-[10px] flex justify-between">
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
  import { ref, reactive, computed } from 'vue'
  // import { useProduct } from '@/store/modules/store-setting/products'
  import { useToast } from 'vue-toastification'
  // import { UrlImg } from '@/services/services'
  import ModalDelete from '@/components/modal/ModalConfirmDelelte.vue'
  import ModalDeleteAll from '@/components/modal/ModalConfirmDeleteAll.vue'
  import { useWebCatalog } from '@/store/modules/web-catalog/webcatalog'
  import { storeToRefs } from 'pinia'
  import { useProductShopee } from '@/store/modules/store-setting/product-shopee'
  import type { UploadProps } from 'ant-design-vue'

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
  const fileProductList = ref<UploadProps['fileList']>([])
  // const fileProductSetting = ref<UploadProps['fileList']>([])
  const dataProduct = useProductShopee()
  const web_site_code = 'shopee'
  const { listProduct, totalPage, currentPage } = storeToRefs(dataProduct)
  const perPage = ref(10)

  // let listProductShopee = []
  // dataProduct.getListProductAction(
  //   time_range_field,
  //   perPage.value,
  //   Number(route.params.page),
  //   EndTimeLoading
  // )
  dataProduct
    .getListProductAction(
      web_site_code,
      perPage.value,
      Number(route.params.page),
      EndTimeLoading
    )
    .then(() => {
      fileProductList.value = listProduct?.value?.image?.map(
        (item: Array<string>, index: number) => ({
          uid: index,
          name: `image ${index}`,
          status: 'done',
          url: `${UrlImg}/${item}`,
        })
      )
    })
  // .then(() => {
  //   listProductShopee = listProduct.value.filter((item: any) => {
  //     return item.web_site_code.indexOf('shopee') != -1
  //   })
  //   console.log(listProduct.value)

  //   console.log(listProductShopee)
  // })

  const changePage = (pageNumber: number) => {
    isLoading.value = true
    router.push(`/products-list-shopee/page/${pageNumber}`)
    dataProduct.getListProductAction(
      web_site_code,
      perPage.value,
      pageNumber,
      EndTimeLoading
    )
    // dataProduct.getListProductAction(
    //   time_range_field,
    //   perPage.value,
    //   pageNumber,
    //   EndTimeLoading
    // )
    // dataProduct.getListProductAction(perPage, page, EndTimeLoading)
  }
  const isCheck = ref<boolean>(false)
  const isLoading = ref<boolean>(false)
  const isOpenConfirm = ref<boolean>(false)
  const isOpenConfirmAll = ref<boolean>(false)
  const selectAllProduct = ref()
  const handleCloseConfirmAll = () => {
    isOpenConfirmAll.value = false
  }
  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'stt',
      width: 60,
      align: 'center',
      fixed: 'left',
    },
    {
      title: 'Ảnh',
      dataIndex: 'image',
      key: 'image',
      width: 100,
      fixed: 'left',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      width: 300,
      fixed: 'left',
    },
    {
      title: 'SKU',
      dataIndex: 'sku',
      width: 150,
    },
    {
      title: 'Loại sản phẩm',
      dataIndex: `type_id`,
      width: 100,
    },
    {
      title: 'Bộ thuộc tính',
      dataIndex: 'attribute_set_id',
      width: 100,
    },
    {
      title: 'Trạng thái sản phẩm',
      dataIndex: 'status',
      align: 'center',
      key: 'status',
      width: 100,
    },
    {
      title: 'Trạng thái đồng bộ',
      dataIndex: 'status',
      align: 'center',
      key: 'status_sync',
      width: 180,
    },
    {
      title: 'Website',
      dataIndex: 'web_site_code',
      key: 'web_site_code',
      width: 100,
    },
    {
      title: 'Shop',
      dataIndex: 'shop_id',
      key: 'shop_id',
      width: 150,
    },
    {
      title: 'Giá niêm yết',
      dataIndex: 'listed_price',
      key: 'listed_price',
      width: 120,
      align: 'right',
    },
    {
      title: 'Giá sỉ',
      dataIndex: 'wholesale_price',
      key: 'wholesale_price',
      width: 120,
      align: 'right',
    },
    {
      title: 'Giá lẻ',
      dataIndex: 'retail_price',
      key: 'retail_price',
      width: 120,
      align: 'right',
    },
    {
      title: 'Thao tác',
      dataIndex: 'id',
      key: 'id',
      fixed: 'right',
      width: 170,
    },
  ]
  // const formatPrice = (price: any) => {
  //   const chunks = price.match(/.{1,3}/g)
  //   // Nghịch đảo mảng con
  //   const reversedChunks = chunks.reverse()
  //   // Nối các phần tử của mảng con lại thành chuỗi mới, ngăn cách nhau bằng dấu ','
  //   return reversedChunks.join(', ')
  // }
  const showDeleteAll = computed(() => state.selectedRowKeys.length > 1)
  const handleCloseConfirm = () => {
    isOpenConfirm.value = false
  }
  const CreateProduct = () => {
    router.push('/create-product')
  }
  const navigateUpdate = (id: number) => {
    router.push(`/update-product/${id}`)
  }
  const onSelectChange = (selectedRowKeys: any) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    selectAllProduct.value = selectedRowKeys.map((item: number) => String(item))
    state.selectedRowKeys = selectedRowKeys
    console.log('?', selectAllProduct)
  }
  const idSelected = ref()
  const pushProductShopee = (record: any) => {
    idSelected.value = record.id
    dataProduct.PushProductAction(
      Number(idSelected.value),
      EndTimeLoading,
      toast,
      web_site_code,
      perPage.value,
      Number(route.params.page)
    )
  }
  const hideProductShopee = (record: any) => {
    idSelected.value = record.id
    dataProduct.HideProductAction(
      Number(idSelected.value),
      EndTimeLoading,
      toast,
      web_site_code,
      perPage.value,
      Number(route.params.page)
    )
  }

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
      web_site_code,
      perPage.value,
      Number(route.params.page)
    )
  }
  type Key = string | number
  const state = reactive<{
    selectedRowKeys: Key[]

    loadingDel: boolean
  }>({
    selectedRowKeys: [], // Check here to configure the default column

    loadingDel: false,
  })
  const hasSelected = computed(() => state.selectedRowKeys.length > 0)

  const handleOpenDeleteAllProduct = () => {
    isOpenConfirmAll.value = true
  }

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
  //     // dataProduct.getListProductAction(
  //     //   time_range_field,
  //     //   perPage.value,
  //     //   Number(route.params.page),
  //     //   EndTimeLoading
  //     // )
  //     handleCloseConfirmAll()
  //     EndTimeLoading()

  //     console.log('Del all')
  //   }, 1000)
  // }

  // delete all dùng api xóa all
  const handleDeleteAll = () => {
    const data = {
      ids: selectAllProduct.value,
    }

    // console.log('data', data)
    dataProduct.deleteAllProductAction(
      Object(data),
      EndTimeLoading,
      toast,
      handleCloseConfirmAll,
      web_site_code,
      perPage.value,
      Number(route.params.page)
    )
    setTimeout(() => {
      state.loadingDel = false
      state.selectedRowKeys = []
    }, 1000)
  }

  const HideAllProductShopee = () => {
    const data = {
      ids: selectAllProduct.value,
    }
    console.log(data)

    // console.log('data', data)
    dataProduct.HideAllProductAction(
      Object(data),
      EndTimeLoading,
      toast,
      web_site_code,
      perPage.value,
      Number(route.params.page)
    )
    setTimeout(() => {
      state.loadingDel = false
      state.selectedRowKeys = []
    }, 1000)
  }

  const PushAllProductShopee = () => {
    const data = {
      ids: selectAllProduct.value,
    }
    console.log(data)

    // console.log('data', data)
    dataProduct.PushAllProductAction(
      Object(data),
      EndTimeLoading,
      toast,
      web_site_code,
      perPage.value,
      Number(route.params.page)
    )
    setTimeout(() => {
      state.loadingDel = false
      state.selectedRowKeys = []
    }, 1000)
  }

  const backToAllProduct = (page: number) => {
    router.push(`/products-list/page/${page}`)
  }
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

  .export-button::before {
    font-family: 'Font Awesome 5 Pro';
    content: '\f56e';
    font-weight: 500;
    margin-top: 2px;
    margin-right: 2px;
  }

  .update-list-button::before {
    font-family: 'Font Awesome 5 Pro';
    content: '\f021';
    font-weight: 500;
    margin-top: 2px;
    margin-right: 2px;
  }

  .push-product::before {
    font-family: 'Font Awesome 5 Pro';
    content: '\f062';
    font-weight: 500;
    margin-top: 2px;
    margin-right: 2px;
  }

  .hide-product::before {
    font-family: 'Font Awesome 5 Pro';
    content: '\f063';
    font-weight: 500;
    margin-top: 2px;
    margin-right: 2px;
  }
</style>
