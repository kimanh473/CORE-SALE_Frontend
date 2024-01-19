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
              <p class="longText pl-5 mb-0">Danh sách sản phẩm</p>
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
          title="Tạo mới web"
          @click="CreateProduct()"
        >
          <p class="text-[14px] mt-1 px-1">Tạo mới sản phẩm</p>
        </div>
      </div>
      <a-table
        class="!p-[10px]"
        :columns="columns"
        :data-source="listProduct"
        :pagination="false"
        v-model:current="current"
        bordered
        row-key="id"
        ><template #bodyCell="{ column, record }">
          <template v-if="column.key === 'image' && record.image">
            <img
              :src="UrlImg + '/' + record.image[0]"
              alt=""
              width="60"
              height="80"
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
      <a-pagination
        v-model:current="current"
        v-model:pageSize="perPage"
        show-quick-jumper
        :total="totalPage"
        @change="changePage"
    /></template>

    <template v-slot:footer>footer</template>
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
  import { ref, reactive, computed } from 'vue'
  import { useToast } from 'vue-toastification'
  import { useProduct } from '@/store/modules/store-setting/products'
  // import { UrlImg } from '@/services/services'
  //   import { storeToRefs } from 'pinia'
  import ModalDelete from '@/components/modal/ModalConfirmDelelte.vue'
  import { useWebCatalog } from '@/store/modules/web-catalog/webcatalog'
  import { storeToRefs } from 'pinia'
  const UrlImg = import.meta.env.VITE_APP_IMAGE_URL

  const route = useRoute()
  const router = useRouter()
  const toast = useToast()
  const dataWebsite = useWebCatalog()
  dataWebsite.getAllWebCatalogAction()
  const { listWeb } = storeToRefs(dataWebsite)
  function formatWeb(webcode: string) {
    let webName = listWeb.value.find((item: any) => item.code == webcode)
    return webName?.web_name
  }
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const current = ref(1)
  const perPage = ref(10)
  const dataProduct = useProduct()
  dataProduct.getListProductAction(perPage.value, current.value, EndTimeLoading)
  const changePage = (pageNumber: number) => {
    isLoading.value = true
    dataProduct.getListProductAction(perPage.value, pageNumber, EndTimeLoading)
  }
  const { listProduct, totalPage } = storeToRefs(dataProduct)
  console.log(totalPage)
  const isCheck = ref<boolean>(false)
  const isLoading = ref<boolean>(false)
  const isOpenConfirm = ref<boolean>(false)
  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
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

  const CreateProduct = () => {
    router.push('/create-product')
  }
  const navigateUpdate = (id: number) => {
    router.push(`/update-product/${id}`)
  }
  const idSelected = ref()
  const handleOpenDelete = (record: any) => {
    isOpenConfirm.value = true
    idSelected.value = record.id
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
