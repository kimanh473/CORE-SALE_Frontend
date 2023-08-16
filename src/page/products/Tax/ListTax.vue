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
              <p class="longText pl-5 mb-0 text-xl font-bold">Danh sách thuế</p>
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
          title="Tạo mới"
          @click="handleToCreate()"
        >
          <p class="text-[14px] mt-1 px-1">Tạo mới thuế</p>
        </div>
      </div>
      <a-table
        row-key="id"
        class="!p-[10px]"
        :columns="columns"
        :data-source="listTax"
        :rowSelection="{
          selectedRowKeys: selectedRowKeys,
          onChange: onSelectChange,
        }"
        bordered
        ><template #bodyCell="{ column, record }">
          <template v-if="column.key === 'user_created'">
            {{ record.user_created?.fullname }}
          </template>
          <template v-if="column.key === 'id'">
            <a @click="navigateUpdate(record.id)">Sửa</a>&nbsp;|&nbsp;<a
              @click="handleOpenDelete(record)"
              >Xóa</a
            >
          </template>
        </template>
        <template #switch="{ text }">
          <a-switch :checked="text" />
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
  import BaseLayout from '../../../layout/baseLayout.vue'
  import SideBar from '../../../components/common/SideBar.vue'
  import Header from '../../../components/common/Header.vue'
  import { useListSpecification } from '../../../store/modules/store-setting/specification'
  import { useListTax } from '../../../store/modules/store-setting/tax'
  import { useRoute, useRouter } from 'vue-router'
  import { ref, reactive, computed } from 'vue'
  import { useToast } from 'vue-toastification'
  import { storeToRefs } from 'pinia'
  import ModalDelete from '../../../components/modal/ModalConfirmDelelte.vue'
  const route = useRoute()
  const router = useRouter()
  const toast = useToast()
  const isLoading = ref<boolean>(false)
  const isOpenConfirm = ref<boolean>(false)
  const dataTax = useListTax()
  dataTax.getListTaxAction()
  const { listTax } = storeToRefs(dataTax)
  const dataSpecification = useListSpecification()
  dataSpecification.getListSpecificationAction()
  const { listSpecification } = storeToRefs(dataSpecification)

  const columns = [
    {
      title: 'Tên loại thuế',
      dataIndex: 'title',
    },
    {
      title: 'Mã loại thuế',
      dataIndex: 'code',
    },
    {
      title: 'Mức thuế suất',
      dataIndex: 'tax_rate',
    },

    {
      title: 'Kích hoạt',
      dataIndex: 'status',
    },
    {
      title: 'Mô tả',
      dataIndex: 'desc',
    },
    {
      title: 'Người tạo',
      dataIndex: 'user_created',
      key: 'user_created',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'created_at',
      key: 'created_at',
    },

    {
      title: 'Thao tác',
      dataIndex: 'id',
      key: 'id',
    },
  ]

  const navigateUpdate = (id: number) => {
    router.push(`/update-tax/${id}`)
  }
  const idSelected = ref()
  const handleOpenDelete = (record: any) => {
    isOpenConfirm.value = true
    idSelected.value = record.id
  }
  const handleCloseConfirm = () => {
    isOpenConfirm.value = false
  }
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const handleDelete = () => {
    isLoading.value = true
    dataTax.deleteTaxAction(
      Number(idSelected.value),
      toast,
      EndTimeLoading,
      handleCloseConfirm
    )
  }
  const selectedRowKeys = ref([])
  const onSelectChange = (selectedRowKeys1: any) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys1)
    selectedRowKeys.value = selectedRowKeys1
  }
  const handleToCreate = () => {
    router.push('/create-tax')
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
  .button-create {
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    min-height: 30px;
    min-width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--color-primary);
    font-size: 1.3em;
    color: white;
  }

  .button-create::before {
    font-family: 'Font Awesome 5 Pro';
    content: '\f067';
    font-weight: 500;
  }
</style>
