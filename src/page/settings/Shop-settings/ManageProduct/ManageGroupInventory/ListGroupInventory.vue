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
              <p class="longText pl-5 mb-0 text-xl font-bold">
                Danh sách nhóm kho
              </p>
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
          title="Tạo mới kho"
          @click="CreateGroupInventory()"
        >
          <p class="text-[14px] mt-1 px-1">Tạo mới nhóm kho</p>
        </div>
      </div>
      <!-- <div class="rounded flex justify-between">
        <div></div>
        <div
          class="button-create-new relative group rounded-sm px-3 text-[var(--color-text)]"
          title="Tạo mới kho"
          @click="CreateGroupInventory()"
        >
          <p class="text-[14px] mt-1 px-1">Tạo mới</p>
        </div>
      </div> -->
      <a-table
        row-key="id"
        class="!p-[10px]"
        :columns="columns"
        :data-source="listGroupInventory"
        :rowSelection="{
          selectedRowKeys: selectedRowKeys,
          onChange: onSelectChange,
        }"
        bordered
        ><template #bodyCell="{ column, record }">
          <template v-if="column.key === 'user_created'">
            <p>{{ record.user_created?.username }}</p>
          </template>
          <template v-if="column.key === 'status'">
            <a-tag v-if="record.status === '1'" color="green">Bật</a-tag>
            <a-tag v-else>Tắt</a-tag>
          </template>
          <template v-if="column.key === 'id'">
            <a @click="navigateUpdateGroupInventory(record.id)">Sửa</a
            >&nbsp;|&nbsp;<a @click="handleOpenDeleteGroupInventory(record)"
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
  <loading-overlay :isLoading="isLoading"></loading-overlay>
</template>

<script setup lang="ts">
  import BaseLayout from '@/layout/baseLayout.vue'
  import SideBar from '@/components/common/SideBar.vue'
  import Header from '@/components/common/Header.vue'
  import { useGroupInventory } from '@/store/modules/inventory/group-inventory'
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  import { useToast } from 'vue-toastification'
  import { storeToRefs } from 'pinia'
  import ModalDelete from '@/components/modal/ModalConfirmDelelte.vue'
  import { DataInventory } from '@/store/modules/inventory/inventory.type'
  const router = useRouter()
  const toast = useToast()
  const isLoading = ref<boolean>(false)
  const isOpenConfirm = ref<boolean>(false)
  const dataGroupInventory = useGroupInventory()
  dataGroupInventory.getListGroupInventoryAction()
  const { listGroupInventory } = storeToRefs(dataGroupInventory)

  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
    },
    {
      title: 'Tên',
      dataIndex: 'title',
      sorter: (a: DataInventory, b: DataInventory) =>
        a.title.localeCompare(b.title),
    },
    {
      title: 'Mã kho',
      dataIndex: 'code',
    },

    {
      title: 'Kích hoạt',
      dataIndex: 'status',
      align: 'center',
      key: 'status',
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

  const navigateUpdateGroupInventory = (id: number) => {
    router.push(`/update-group-inventory/${id}`)
  }
  const idSelected = ref()
  const handleOpenDeleteGroupInventory = (record: any) => {
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
    dataGroupInventory.deleteGroupInventoryAction(
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
  // const rowSelection = {
  //   onChange(selectedRowKeys: (string | number)[], selectedRows: DataItem[]) {
  //     console.log(
  //       `selectedRowKeys: ${selectedRowKeys}`,
  //       'selectedRows: ',
  //       selectedRows
  //     )
  //   },
  // }
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
  const CreateGroupInventory = () => {
    router.push('/create-group-inventory')
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
