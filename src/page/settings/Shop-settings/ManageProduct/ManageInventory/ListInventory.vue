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
              <p class="longText text-[#fff] mb-0">Danh sách kho</p>
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
          @click="CreateInventory()"
        >
          <p class="text-[14px] mt-1 px-1">Tạo mới kho</p>
        </div>
      </div>
      <a-table
        class="!p-[10px]"
        :columns="columns"
        :data-source="listInventory"
        :row-selection="rowSelection"
        bordered
        ><template #bodyCell="{ column }">
          <template v-if="column.key === 'action'">
            <a>Sửa</a>&nbsp;|&nbsp;<a>Xóa</a>
          </template>
        </template></a-table
      ></template
    >
    <template v-slot:footer>footer</template>
  </base-layout>
  <modal-view :isOpen="isOpenCreateInventory" :handleCloseDetail="handleClose">
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
  </modal-view>
</template>

<script setup lang="ts">
  import BaseLayout from '../../../../../layout/baseLayout.vue'
  import SideBar from '../../../../../components/common/SideBar.vue'
  import Header from '../../../../../components/common/Header.vue'
  //   import TableResponsive from '../../../components/common/TableResponsive.vue'
  import { useInventory } from '../../../../../store/modules/inventory/product-invetory'
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  //   import { Table } from 'ant-design-vue'
  import ModalView from '../../../../../components/modal/ModalView.vue'
  import { storeToRefs } from 'pinia'
  const router = useRouter()
  const isOpenCreateInventory = ref<boolean>(false)
  const dataInventory = useInventory()
  dataInventory.getListInventoryAction()
  const { listInventory } = storeToRefs(dataInventory)
  console.log(listInventory)

  const handleClose = () => {
    isOpenCreateInventory.value = false
  }
  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
    },
    {
      title: 'Tên kho',
      dataIndex: 'title',
    },
    {
      title: 'Mã kho',
      dataIndex: '',
    },
    {
      title: 'Nguồn hàng',
      dataIndex: '',
    },
    {
      title: 'Người tạo',
      dataIndex: '',
    },
    {
      title: 'Ngày tạo',
      dataIndex: '',
    },
    {
      title: 'Thao tác',
      key: 'action',
    },
  ]

  interface DataItem {
    title: number
    is_admin: any
    created_at: any
    updated_at: any
  }
  const rowSelection = ref({
    checkStrictly: false,
    onChange: (
      selectedRowKeys: (string | number)[],
      selectedRows: DataItem[]
    ) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      )
    },
    onSelect: (
      record: DataItem,
      selected: boolean,
      selectedRows: DataItem[]
    ) => {
      console.log(record, selected, selectedRows)
    },
    onSelectAll: (
      selected: boolean,
      selectedRows: DataItem[],
      changeRows: DataItem[]
    ) => {
      console.log(selected, selectedRows, changeRows)
    },
  })
  const CreateInventory = () => {
    isOpenCreateInventory.value = true
  }
  //   const selectedRowKeys = ref<DataItem['key'][]>([])
  //   const onSelectChange = (changableRowKeys: string[]) => {
  //     console.log('selectedRowKeys changed: ', changableRowKeys)
  //     selectedRowKeys.value = changableRowKeys
  //   }
  //   const rowSelection = computed(() => {
  //     return {
  //       selectedRowKeys: unref(selectedRowKeys),
  //       onChange: onSelectChange,
  //       hideDefaultSelections: true,
  //       selections: [
  //         Table.SELECTION_ALL,
  //         Table.SELECTION_INVERT,
  //         Table.SELECTION_NONE,
  //         {
  //           key: 'odd',
  //           text: 'Select Odd Row',
  //           onSelect: (changableRowKeys: string[]) => {
  //             let newSelectedRowKeys = []
  //             newSelectedRowKeys = changableRowKeys.filter((_key, index) => {
  //               if (index % 2 !== 0) {
  //                 return false
  //               }
  //               return true
  //             })
  //             selectedRowKeys.value = newSelectedRowKeys
  //           },
  //         },
  //         {
  //           key: 'even',
  //           text: 'Select Even Row',
  //           onSelect: (changableRowKeys: string[]) => {
  //             let newSelectedRowKeys = []
  //             newSelectedRowKeys = changableRowKeys.filter((_key, index) => {
  //               if (index % 2 !== 0) {
  //                 return true
  //               }
  //               return false
  //             })
  //             selectedRowKeys.value = newSelectedRowKeys
  //           },
  //         },
  //       ],
  //     }
  //   })
  //   import { useRouter } from 'vue-router'
  //   const router = useRouter()
  defineProps<{ isShowSearch: boolean }>()
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
