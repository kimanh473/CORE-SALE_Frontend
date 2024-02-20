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
              <p class="longText pl-5 mb-0 font-bold">
                Danh sách sản phẩm sàn Shopee
              </p>
              <div class="icon-filter-approval relative group"></div>
            </div>
          </div>
        </div>
      </Header>
    </template>
    <template v-slot:content class="relative">
      <div
        class="!my-4 !py-[10px] !mx-[10px] bg-slate-500 rounded flex px-3.5 justify-between"
      >
        <div>
          <a-button
            type="primary"
            :disabled="!hasSelected"
            :loading="state.loading"
            @click="start"
          >
            Đẩy lên sàn
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
        <div>
          <a-button
            type="primary"
            :disabled="!hasSelectedDelete"
            :loading="state.loadingDel"
            @click="handleOpenDeleteAllProduct"
          >
            Xóa tất cả
          </a-button>
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
            <a @click="handlePushProduct(record.id)">Ẩn</a>&nbsp;|&nbsp;<a
              @click="navigateUpdate(record.id)"
              >Sửa</a
            >&nbsp;|&nbsp;<a @click="handleOpenDelete(record)">Xóa</a>
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
  import { ref, reactive, computed } from 'vue'
  import { useProduct } from '@/store/modules/store-setting/products'
  import { useToast } from 'vue-toastification'
  // import { UrlImg } from '@/services/services'
  import ModalDelete from '@/components/modal/ModalConfirmDelelte.vue'
  import ModalDeleteAll from '@/components/modal/ModalConfirmDeleteAll.vue'
  import { useWebCatalog } from '@/store/modules/web-catalog/webcatalog'
  import { storeToRefs } from 'pinia'
  // import { useProductShopee } from '@/store/modules/store-setting/product-shopee'

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
  // let listProductShopee = []
  dataProduct.getListProductAction(
    perPage.value,
    Number(route.params.page),
    EndTimeLoading
  )
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
    dataProduct.getListProductAction(perPage.value, pageNumber, EndTimeLoading)
  }
  const isCheck = ref<boolean>(false)
  const isLoading = ref<boolean>(false)
  const isOpenConfirm = ref<boolean>(false)
  const isOpenConfirmAll = ref<boolean>(false)
  const handleCloseConfirmAll = () => {
    isOpenConfirmAll.value = false
  }
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

  const handleCloseConfirm = () => {
    isOpenConfirm.value = false
  }
  const navigateUpdate = (id: number) => {
    router.push(`/update-product/${id}`)
  }
  const handlePushProduct = (id: number) => {}
  const idSelected = ref()
  const handleOpenDelete = (record: any) => {
    isOpenConfirm.value = true
    idSelected.value = record.id
    console.log(idSelected)
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
  type Key = string | number
  const state = reactive<{
    selectedRowKeys: Key[]
    loading: boolean
    loadingDel: boolean
  }>({
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    loadingDel: false,
  })
  const hasSelected = computed(() => state.selectedRowKeys.length > 0)
  const hasSelectedDelete = computed(() => state.selectedRowKeys.length > 1)
  const start = () => {
    state.loading = true
    // ajax request after empty completing
    for (let i = 0; i < state.selectedRowKeys.length; i++) {
      console.log(`push ${state.selectedRowKeys[i]}`)
      console.log('------')
      // dataProduct.pushAllProductShopeeAction(
      //   Number(state.selectedRowKeys[i]),
      //   toast
      // )
    }
    // ajax request after empty completing
    setTimeout(() => {
      state.loading = false
      state.selectedRowKeys = []
      handleCloseConfirmAll()
      EndTimeLoading()
      console.log('Push all')
    }, 1000)
  }
  const handleOpenDeleteAllProduct = () => {
    isOpenConfirmAll.value = true
  }
  const handleDeleteAll = () => {
    state.loadingDel = true
    for (let i = 0; i < state.selectedRowKeys.length; i++) {
      console.log(`delete ${state.selectedRowKeys[i]}`)
      console.log('------')
      dataProduct.deleteAllProductAction(
        Number(state.selectedRowKeys[i]),
        toast
      )
    }
    setTimeout(() => {
      state.loadingDel = false
      state.selectedRowKeys = []
      dataProduct.getListProductAction(
        perPage.value,
        Number(route.params.page),
        EndTimeLoading
      )
      handleCloseConfirmAll()
      EndTimeLoading()

      console.log('Del all')
    }, 1000)
  }

  const onSelectChange = (selectedRowKeys: any) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    state.selectedRowKeys = selectedRowKeys
    console.log(selectedRowKeys)
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
