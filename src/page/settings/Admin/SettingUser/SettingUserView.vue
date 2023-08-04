<template>
  <base-layout>
    <template v-slot:sidebar>
      <!-- <div class="logo">
              <img src="../assets/images/btp.png" />
            </div> -->
      <SideBar />
    </template>
    <template v-slot:header>
      <Header :is-show-search="false"
        ><div class="flex grow">
          <div class="flex items-center">
            <div class="flex items-center">
              <Transition name="slide-fade"> </Transition>
              <p class="longText text-[#fff] mb-0">Danh sách người dùng</p>
              <div class="icon-filter-approval relative group"></div>
            </div>
          </div></div
      ></Header>
    </template>
    <template v-slot:content class="relative"
      ><div
        class="!my-4 !py-[10px] !mx-[10px] bg-slate-500 rounded flex justify-between"
      >
        <div></div>
        <div
          class="button-create-new relative group rounded-md px-2"
          title="Tạo mới web"
          @click="CreateUser()"
        >
          <p class="text-[14px] mt-1 px-1">Tạo mới người dùng</p>
        </div>
      </div>
      <a-table
        row-key="id"
        :columns="columns"
        :data-source="listUsers"
        :rowSelection="{
          selectedRowKeys: selectedRowKeys,
          onChange: onSelectChange,
        }"
        bordered
        ><template #bodyCell="{ column, record }">
          <template v-if="column.key === 'id'">
            <a @click="navigateToUpdate(record.id)">Sửa</a>&nbsp;|&nbsp;<a
              @click="handleOpenDeleteUser(record)"
              >Xóa</a
            >
          </template>
        </template></a-table
      ></template
    >
    <template v-slot:footer>footer</template>
  </base-layout>
  <div>
    <!-- <context-menu :isActive="isActiveAdminGroup"
      ><ul>
        <li @click.prevent="navigateToUpdate()">
          <i class="fal fa-edit"></i><a href="#">Sửa</a>
        </li>
        <li @click.prevent="handleOpenConfirm()">
          <i class="fal fa-trash"></i><a href="#">Xóa</a>
        </li>
      </ul></context-menu
    > -->
    <modal-delete
      :isOpen="isOpenConfirm"
      :handleCloseDetail="handleCloseConfirm"
      :ConfirmDelete="handleDelete"
    >
    </modal-delete>
  </div>

  <loading-overlay :isLoading="isLoading"></loading-overlay>
</template>

<script setup lang="ts">
  import BaseLayout from '../../../../layout/baseLayout.vue'
  import SideBar from '../../../../components/common/SideBar.vue'
  import Header from '../../../../components/common/Header.vue'
  //   import TableResponsive from '@/components/common/TableResponsive.vue'
  import { useUserSetting } from '../../../../store/modules/users/users'

  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  import ContextMenu from '../../../../components/common/ContextMenu.vue'
  import ModalDelete from '../../../../components/modal/ModalConfirmDelelte.vue'
  import { useToast } from 'vue-toastification'
  //   import { Table } from 'ant-design-vue'
  import { storeToRefs } from 'pinia'
  const router = useRouter()
  const toast = useToast()
  const isLoading = ref<boolean>(false)
  const isOpenConfirm = ref<boolean>(false)
  const isActiveAdminGroup = ref<boolean>(false)
  const getUserSetting = useUserSetting()
  getUserSetting.getAllListUsersAction()
  const { listUsers } = storeToRefs(getUserSetting)
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const columns = [
    {
      title: 'Tài khoản',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Nhóm',
      dataIndex: 'group_id',
      key: 'group_id',
    },
    {
      title: 'Mã nhân viên',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Tên',
      dataIndex: 'fullname',
      key: 'fullname',
    },
    {
      title: 'Vị trí',
      dataIndex: '',
      key: '',
    },
    {
      title: 'Phòng ban',
      dataIndex: '',
      key: '',
    },
    {
      title: 'Website',
      dataIndex: '',
      key: '',
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

  interface DataItem {
    key: number
    name: any
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
  const CreateUser = () => {
    router.push('/create-user')
  }
  const handleDelete = () => {
    isLoading.value = true
    getUserSetting.deleteUserAction(
      Number(idSelected.value),
      toast,
      EndTimeLoading,
      handleCloseConfirm
    )
  }
  //   const rightClick = (record: any) => {
  //     return {
  //       oncontextmenu: (event: MouseEvent) => {
  //         event.preventDefault()
  //         console.log('Right-clicked row:', record)
  //         groupPermission.value = record
  //         var menu = document.getElementById('contextMenu')
  //         menu.style.display = 'block'
  //         FormatModalX(menu, event)
  //         FormatModalY(menu, event)
  //         // if (isActiveAdminGroup.value === true) {
  //         //   isActiveAdminGroup.value = false
  //         // } else {
  //         //   var menu = document.getElementById('contextMenu')
  //         //   menu.style.display = 'block'
  //         //   FormatModalX(menu, e)
  //         //   FormatModalY(menu, e)
  //         // }
  //       },
  //     }
  //   }
  const handleCloseConfirm = () => {
    isOpenConfirm.value = false
  }
  const navigateToUpdate = (id: any) => {
    router.push(`/update-user/${id}`)
  }
  const idSelected = ref()
  const handleOpenDeleteUser = (record: any) => {
    isOpenConfirm.value = true
    idSelected.value = record.id
  }
  const selectedRowKeys = ref([])
  const onSelectChange = (selectedRowKeys1: any) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys1)
    selectedRowKeys.value = selectedRowKeys1
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
