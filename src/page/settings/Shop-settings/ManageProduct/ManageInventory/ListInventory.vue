<template>
  <base-layout>
    <template v-slot:sidebar>
      <!-- <div class="logo">
                <img src="../assets/images/btp.png" />
              </div> -->
      <SideBar />
    </template>
    <template v-slot:header>
      <Header :is-show-search="false">
        <div class="flex grow">
          <div class="flex items-center">
            <div class="flex items-center">
              <Transition name="slide-fade"> </Transition>
              <p class="longText pl-5 mb-0 text-xl font-bold">Danh sách kho</p>
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
        <!-- <div
          class="button-create-new relative group rounded-md px-2"
          title="Tạo mới web"
          @click="CreateInventory()"
        >
          <p class="text-[14px] mt-1 px-1">Tạo mới kho</p>
        </div> -->
        <!-- ka -->
        <div>
          <a-button
            class="btn mr-4 ml-4"
            type="primary"
            :disabled="!hasSelectedDelete"
            :loading="state.loadingDel"
            @click="handleOpenDeleteAllInvent"
          >
            Xóa tất cả
          </a-button>
          <span style="margin-top: 4px; color: white">
            <template v-if="hasSelectedDelete">
              {{ `Chọn ${selectedRowKeys.length} kho` }}
            </template>
          </span>
        </div>
        <div
          class="button-create-new relative group rounded-md px-2"
          title="Tạo mới web"
          @click="CreateInventory()"
        >
          <p class="text-[14px] mt-1 px-1">Tạo mới kho</p>
        </div>
        <!-- ka -->
      </div>
      <a-table
        row-key="id"
        class="!p-[10px]"
        :columns="columns"
        :data-source="listInventory"
        :rowSelection="{
          selectedRowKeys: selectedRowKeys,
          onChange: onSelectChange,
        }"
        bordered
        ><template #bodyCell="{ column, record }">
          <template v-if="column.key === 'id'">
            <a @click="navigateUpdateInvent(record.id)">Sửa</a>&nbsp;|&nbsp;<a
              @click="handleOpenDeleteInvent(record)"
              >Xóa</a
            >
          </template>
        </template>
      </a-table></template
    >

    <template v-slot:footer>footer</template>
  </base-layout>
  <!-- <modal-view :isOpen="isOpenCreateInventory" :handleCloseDetail="handleClose">
    <div>
      <h1 class="header-modal">Tạo mới kho</h1>
      <div
        class="text-left p-2 min-h-[300px] max-h-[600px] min-w-[500px] overflow-y-auto format-scroll"
      >
        <div class="">
          <label for="" class="form-group-label">Tên kho</label>
          <div>
            <input
              type="text"
              name=""
              id=""
              class="form-control-input"
              placeholder="Nhập tên kho"
            />
          </div>
        </div>
        <div class="mt-2">
          <label for="" class="form-group-label">Loại kho</label>
          <div>
            <input
              type="text"
              name=""
              id=""
              class="form-control-input"
              placeholder="Nhập mã phòng ban"
            />
          </div>
        </div>
        <div class="mt-2">
          <label for="" class="form-group-label">Quản lý kho</label>
          <div>
            <input
              type="text"
              name=""
              id=""
              class="form-control-input"
              placeholder="Nhập mã phòng ban"
            />
          </div>
        </div>
        <div class="mt-2">
          <label for="" class="form-group-label">Số điện thoại</label>
          <div>
            <input
              type="text"
              name=""
              id=""
              class="form-control-input"
              placeholder="Nhập mã phòng ban"
            />
          </div>
        </div>
        <div class="mt-2">
          <label for="" class="form-group-label">Địa chỉ</label>
          <div>
            <input
              type="number"
              name=""
              id=""
              class="form-control-input"
              placeholder="Nhập số"
            />
          </div>
        </div>
        <div class="mt-2">
          <label for="" class="form-group-label">Quốc gia</label>
          <div>
            <input
              type="number"
              name=""
              id=""
              class="form-control-input"
              placeholder="Nhập số"
            />
          </div>
        </div>
        <div class="mt-2">
          <label for="" class="form-group-label">Tỉnh/Thành phố</label>
          <div>
            <input
              type="number"
              name=""
              id=""
              class="form-control-input"
              placeholder="Nhập chiều rộng"
            />
          </div>
        </div>
        <div class="mt-2">
          <label for="" class="form-group-label">Quận/Huyện</label>
          <div>
            <input
              type="number"
              name=""
              id=""
              class="form-control-input"
              placeholder="Nhập chiều dài"
            />
          </div>
        </div>
        <div class="mt-2">
          <label for="" class="form-group-label">Xã/Phường/Thị trấn</label>
          <div>
            <input
              type="number"
              name=""
              id=""
              class="form-control-input"
              placeholder="Nhập chiều dài"
            />
          </div>
        </div>
        <div class="mt-2">
          <label for="" class="form-group-label">Địa chỉ chi tiết</label>
          <div>
            <input
              type="number"
              name=""
              id=""
              class="form-control-input"
              placeholder="Nhập địa chỉ"
            />
          </div>
        </div>
      </div>
      <div class="bg-button-modal">
        <button class="button-modal">Cập nhật</button>
        <button class="button-close-modal" @click="handleClose">Hủy bỏ</button>
      </div>
    </div>
  </modal-view> -->
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
  import { useInventory } from '@/store/modules/inventory/product-invetory'
  import { useRouter } from 'vue-router'
  import { ref, reactive, computed } from 'vue'
  import { useToast } from 'vue-toastification'
  import { storeToRefs } from 'pinia'
  import ModalDelete from '@/components/modal/ModalConfirmDelelte.vue'
  import ModalDeleteAll from '@/components/modal/ModalConfirmDeleteAll.vue'
  import { DataInventory } from '@/store/modules/inventory/inventory.type'

  // const route = useRoute()
  const router = useRouter()
  const toast = useToast()
  const isLoading = ref<boolean>(false)
  const isOpenConfirm = ref<boolean>(false)
  const isOpenConfirmAll = ref<boolean>(false)
  const dataInventory = useInventory()
  dataInventory.getListInventoryAction()
  const { listInventory } = storeToRefs(dataInventory)

  const columns = [
    {
      title: 'Mã kho',
      dataIndex: 'code',
    },
    {
      title: 'Tên kho',
      dataIndex: 'title',
      sorter: (a: DataInventory, b: DataInventory) =>
        a.title.localeCompare(b.title),
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
    },
    {
      title: 'Kích hoạt',
      dataIndex: 'status',
      key: 'status',
    },
    // {
    //   title: 'Thuộc nhóm kho',
    //   dataIndex: `inventGroup`,
    //   key: 'inventGroup',
    //   slots: { customRender: 'group' },
    // },
    {
      title: 'Người tạo',
      dataIndex: 'fullname',
      key: 'fullname',
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

  const navigateUpdateInvent = (id: number) => {
    router.push(`/update-inventory/${id}`)
  }
  const idSelected = ref()
  const handleOpenDeleteInvent = (record: any) => {
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
    dataInventory.deleteInventoryAction(
      Number(idSelected.value),
      EndTimeLoading,
      toast,
      handleCloseConfirm
    )
  }
  const selectedRowKeys = ref([])
  const onSelectChange = (selectedRowKeys1: any) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys1)
    selectedRowKeys.value = selectedRowKeys1
  }

  // ka
  const handleCloseConfirmAll = () => {
    isOpenConfirmAll.value = false
  }
  const state = reactive<{
    loadingDel: boolean
  }>({
    loadingDel: false,
  })
  const hasSelectedDelete = computed(() => selectedRowKeys.value.length > 1)

  const handleOpenDeleteAllInvent = () => {
    isOpenConfirmAll.value = true
  }
  const handleDeleteAll = () => {
    state.loadingDel = true
    for (let i = 0; i < selectedRowKeys.value.length; i++) {
      console.log(`delete ${selectedRowKeys.value[i]}`)
      console.log('------')
      dataInventory.deleteAllInventoryAction(
        Number(selectedRowKeys.value[i]),
        toast
      )
    }
    // ajax request after empty completing
    setTimeout(() => {
      state.loadingDel = false
      selectedRowKeys.value = []
      handleCloseConfirmAll()
      EndTimeLoading()
      console.log('Del all')
    }, 1000)
  }
  // ka

  // const rowSelection = ref({
  //   checkStrictly: false,
  //   onChange: (
  //     selectedRowKeys: (string | number)[],
  //     selectedRows: DataItem[]
  //   ) => {
  //     console.log(
  //       `selectedRowKeys: ${selectedRowKeys}`,
  //       'selectedRows: ',
  //       selectedRows
  //     )
  //   },
  //   onSelect: (
  //     record: DataItem,
  //     selected: boolean,
  //     selectedRows: DataItem[]
  //   ) => {
  //     console.log(record, selected, selectedRows)
  //   },
  //   onSelectAll: (
  //     selected: boolean,
  //     selectedRows: DataItem[],
  //     changeRows: DataItem[]
  //   ) => {
  //     console.log(selected, selectedRows, changeRows)
  //   },
  // })
  const CreateInventory = () => {
    router.push('/create-inventory')
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
