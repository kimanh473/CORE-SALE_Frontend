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
        <!-- <Transition name="slide-fade">
                <div
                  class="button-create relative group"
                  title="Tạo mới nhóm quyền"
                  @click="CreateGroupAdmin()"
                ></div>
              </Transition> -->
        <template v-slot:name
          ><p class="pl-5 text-[16px]">Danh sách nhóm quyền</p></template
        >
      </Header>
    </template>
    <!-- <template v-slot:content class="relative"
      ><a-table
        row-key="id"
        :columns="columns"
        :data-source="listGroupPermission"
        :rowSelection="{
          selectedRowKeys: selectedRowKeys,
          onChange: onSelectChange,
        }"
        :custom-row="rightClick"
    /></template> -->
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
          <p class="text-[14px] mt-1 px-1">Tạo mới nhóm người dùng</p>
        </div>
      </div>
      <a-table
        row-key="id"
        :columns="columns"
        :data-source="listGroupPermission"
        :rowSelection="{
          selectedRowKeys: selectedRowKeys,
          onChange: onSelectChange,
        }"
        ><template #bodyCell="{ column, record }">
          <template v-if="column.key === 'id'">
            <a @click="navigateToUpdate(record.id)">Sửa</a>&nbsp;|&nbsp;<a
              @click="handleOpenConfirm(record)"
              >Xóa</a
            >
          </template>
          <!-- <template v-if="column.key === 'json_web_list'">
            <div v-for="item in record.json_web_list" :key="item">
              {{ item.toString() }}
            </div>
          </template>
          <template v-if="column.key === 'json_inventory_list'">
            <div v-for="item in record.json_inventory_list" :key="item">
              {{ item.toString() }}
            </div>
          </template> -->
        </template>
      </a-table></template
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
  import { useAdminSetting } from '../../../../store/modules/admin-setting/adminsetting'

  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  import ContextMenu from '../../../../components/common/ContextMenu.vue'
  import ModalDelete from '../../../../components/modal/ModalConfirmDelelte.vue'
  import {
    FormatModalX,
    FormatModalY,
  } from '../../../../components/constants/FormatAll'
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
    {
      title: 'Website',
      dataIndex: `web_list_name`,
      key: 'web_list_name',
    },
    {
      title: 'Kho',
      dataIndex: 'inventory_list_name',
      key: 'inventory_list_name',
    },
    {
      title: 'Thao tác',
      dataIndex: 'id',
      key: 'id',
    },
  ]

  // interface DataItem {
  //   key: number
  //   name: any
  //   created_at: any
  //   updated_at: any
  // }
  const selectedRowKeys = ref([])
  const onSelectChange = (selectedRowKeys1: any) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys1)
    selectedRowKeys.value = selectedRowKeys1
  }
  const handleToCreate = () => {
    router.push('/create-group-admin')
  }
  const idSelected = ref()
  const handleDelete = () => {
    getadminSetting.deletePermissionGroupsAction(
      Number(idSelected.value),
      EndTimeLoading,
      toast,
      handleCloseConfirm
    )
    getadminSetting.getAllPermissionGroupsAction(10, 1)
  }
  // const rightClick = (record: any) => {
  //   return {
  //     oncontextmenu: (event: MouseEvent) => {
  //       event.preventDefault()
  //       console.log('Right-clicked row:', record)
  //       groupPermission.value = record
  //       var menu = document.getElementById('contextMenu')
  //       menu.style.display = 'block'
  //       FormatModalX(menu, event)
  //       FormatModalY(menu, event)
  //       // if (isActiveAdminGroup.value === true) {
  //       //   isActiveAdminGroup.value = false
  //       // } else {
  //       //   var menu = document.getElementById('contextMenu')
  //       //   menu.style.display = 'block'
  //       //   FormatModalX(menu, e)
  //       //   FormatModalY(menu, e)
  //       // }
  //     },
  //   }
  // }
  const handleCloseConfirm = () => {
    isOpenConfirm.value = false
  }
  const handleOpenConfirm = (record: any) => {
    isOpenConfirm.value = true
    idSelected.value = record.id
  }
  const navigateToUpdate = (id: number) => {
    router.push(`/update-group-admin/${id}`)
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
