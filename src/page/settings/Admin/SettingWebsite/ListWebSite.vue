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
              <p class="longText pl-5 mb-0">Danh sách web</p>
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
          @click="CreateWebsite()"
        >
          <p class="text-[14px] mt-1 px-1">Tạo mới web</p>
        </div>
      </div>
      <a-table
        class="!p-[10px]"
        :columns="columns"
        :data-source="listWebPaginate"
        bordered
        row-key="id"
        ><template #bodyCell="{ column, record }">
          <template v-if="column.key === 'id'">
            <a @click="navigateUpdate(record.id)">Sửa</a>&nbsp;|&nbsp;<a
              @click="handleOpenDelete(record)"
              >Xóa</a
            >
          </template>
        </template>
        <template #switch="{ text }">
          <a-switch v-model:checked="isCheck" />
        </template> </a-table
    ></template>

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
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  import { useToast } from 'vue-toastification'
  import { useWebCatalog } from '@/store/modules//web-catalog/webcatalog'
  //   import { storeToRefs } from 'pinia'
  import ModalDelete from '@/components/modal/ModalConfirmDelelte.vue'
  import { storeToRefs } from 'pinia'
  const router = useRouter()
  const toast = useToast()
  const dataWeb = useWebCatalog()
  dataWeb.getAllWebPaginateAction()
  const { listWebPaginate } = storeToRefs(dataWeb)

  const isCheck = ref<boolean>(false)
  const isLoading = ref<boolean>(false)
  const isOpenConfirm = ref<boolean>(false)
  const columns = [
    {
      title: 'Mã website',
      dataIndex: 'code',
    },
    {
      title: 'Tên website',
      dataIndex: 'web_name',
    },
    {
      title: 'URL',
      dataIndex: 'url',
    },
    {
      title: 'Kích hoạt',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Người tạo',
      dataIndex: `fullname`,
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'created_at',
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
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const CreateWebsite = () => {
    router.push('/create-web')
  }
  const navigateUpdate = (id: number) => {
    router.push(`/update-web/${id}`)
  }
  const idSelected = ref()
  const handleOpenDelete = (record: any) => {
    isOpenConfirm.value = true
    idSelected.value = record.id
  }
  const handleDelete = () => {
    dataWeb.deleteWebAction(
      Number(idSelected.value),
      EndTimeLoading,
      toast,
      handleCloseConfirm
    )
    dataWeb.getAllWebPaginateAction()
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
