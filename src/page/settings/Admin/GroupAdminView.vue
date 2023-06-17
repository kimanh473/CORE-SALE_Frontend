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
              <Transition name="slide-fade">
                <div
                  class="button-create relative group"
                  title="Tạo mới nhóm quyền"
                  @click="CreateGroupAdmin()"
                ></div>
              </Transition>
              <p class="longText text-[#fff] mb-0">Danh sách nhóm quyền</p>
              <div class="icon-filter-approval relative group"></div>
            </div>
          </div></div
      ></Header>
    </template>
    <template v-slot:content class="relative"
      ><a-table
        :columns="columns"
        :data-source="listGroupPermission"
        :row-selection="rowSelection"
        :custom-row="rightClick"
    /></template>
    <template v-slot:footer>footer</template>
  </base-layout>
  <div>
    <context-menu :isActive="isActiveAdminGroup"
      ><ul>
        <li @click.prevent="navigateToUpdate()">
          <i class="fal fa-edit"></i><a href="#">Sửa</a>
        </li>
        <li @click.prevent="handleOpenConfirm()">
          <i class="fal fa-trash"></i><a href="#">Xóa</a>
        </li>
      </ul></context-menu
    >
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
  import BaseLayout from '../../../layout/baseLayout.vue'
  import SideBar from '../../../components/common/SideBar.vue'
  import Header from '../../../components/common/Header.vue'
  //   import TableResponsive from '@/components/common/TableResponsive.vue'
  import { useAdminSetting } from '../../../store/modules/admin-setting/adminsetting'

  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  import ContextMenu from '../../../components/common/ContextMenu.vue'
  import ModalDelete from '../../../components/modal/ModalConfirmDelelte.vue'
  import {
    FormatModalX,
    FormatModalY,
  } from '../../../components/constants/FormatAll'
  import { useToast } from 'vue-toastification'
  //   import { Table } from 'ant-design-vue'
  import { storeToRefs } from 'pinia'
  const router = useRouter()
  const toast = useToast()
  const isLoading = ref<boolean>(false)
  const isOpenConfirm = ref<boolean>(false)
  const isActiveAdminGroup = ref<boolean>(false)
  const getadminSetting = useAdminSetting()
  getadminSetting.getAllPermissionGroupsAction(10, 1)
  const { listGroupPermission } = storeToRefs(getadminSetting)
  const groupPermission = ref()
  console.log(listGroupPermission.value)
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const columns = [
    {
      title: 'Tên',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Quản trị hệ thống',
      dataIndex: 'is_admin',
      key: 'title',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'created_at',
      key: 'created_at',
    },
    {
      title: 'Ngày cập nhật',
      dataIndex: 'updated_at',
      key: 'updated_at',
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
  const CreateGroupAdmin = () => {
    router.push('/create-group-admin')
  }
  const handleDelete = () => {
    getadminSetting.deletePermissionGroupsAction(
      Number(groupPermission.value.id),
      EndTimeLoading,
      toast,
      handleCloseConfirm
    )
    getadminSetting.getAllPermissionGroupsAction(10, 1)
  }
  const rightClick = (record: any) => {
    return {
      oncontextmenu: (event: MouseEvent) => {
        event.preventDefault()
        console.log('Right-clicked row:', record)
        groupPermission.value = record
        var menu = document.getElementById('contextMenu')
        menu.style.display = 'block'
        FormatModalX(menu, event)
        FormatModalY(menu, event)
        // if (isActiveAdminGroup.value === true) {
        //   isActiveAdminGroup.value = false
        // } else {
        //   var menu = document.getElementById('contextMenu')
        //   menu.style.display = 'block'
        //   FormatModalX(menu, e)
        //   FormatModalY(menu, e)
        // }
      },
    }
  }
  const handleCloseConfirm = () => {
    isOpenConfirm.value = false
  }
  const handleOpenConfirm = () => {
    isOpenConfirm.value = true
  }
  const navigateToUpdate = () => {
    router.push(`/update-group-admin/${groupPermission.value.id}`)
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
