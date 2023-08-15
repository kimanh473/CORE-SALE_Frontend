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
              <p class="longText pl-5 mb-0 text-xl font-bold">
                Danh sách tiền tệ
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
          title="Tạo mới"
          @click="handleToCreate()"
        >
          <p class="text-[14px] mt-1 px-1">Tạo mới tiền tệ</p>
        </div>
      </div>
      <a-table
        row-key="id"
        sticky
        class="!p-[10px] ant-table-striped"
        :columns="columns"
        :data-source="listCurrency"
        :rowSelection="{
          selectedRowKeys: selectedRowKeys,
          onChange: onSelectChange,
        }"
        bordered
        :scroll="{ x: 1300, y: 1000 }"
        :row-class-name="
          (_record: any, index: number) => (index % 2 === 1 ? 'table-striped' : null)
        "
      >
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span>{{ column.title }}</span>
          </template>
        </template>

        <template
          #customFilterDropdown="{
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            column,
          }"
        >
          <div style="padding: 8px; text-align: right">
            <a-input
              ref="searchInput"
              :placeholder="`Search ${column.dataIndex}`"
              :value="selectedKeys[0]"
              style="width: 188px; margin-bottom: 8px; display: block"
              @change="
                (e: any) => setSelectedKeys(e.target.value ? [e.target.value] : [])
              "
              @pressEnter="
                handleSearch(selectedKeys, confirm, column.dataIndex)
              "
            />
            <a-button
              type="primary"
              size="small"
              style="width: 90px; margin-right: 8px"
              @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
            >
              <template #icon><SearchOutlined /></template>
              Lọc
            </a-button>
          </div>
        </template>
        <template #customFilterIcon="{ filtered }">
          <search-outlined
            :style="{ color: filtered ? '#108ee9' : undefined }"
          />
        </template>

        <template #bodyCell="{ column, record }" ali>
          <span
            v-if="state.searchText && state.searchedColumn === column.dataIndex"
          >
            <template
              v-for="(fragment, i) in record.title
                .toString()
                .split(
                  new RegExp(
                    `(?<=${state.searchText})|(?=${state.searchText})`,
                    'i'
                  )
                )"
            >
              <mark
                v-if="fragment.toLowerCase() === state.searchText.toLowerCase()"
                :key="i"
                class="bg-yellow-500 p-0"
              >
                {{ fragment }}
              </mark>
              <template v-else>{{ fragment }}</template>
            </template>
          </span>

          <template v-if="column.key === 'status'">
            <a-tag v-if="record.status === 1" color="green">Bật</a-tag>
            <a-tag v-else>Tắt</a-tag>
          </template>
          <template v-if="column.key === 'is_default'">
            <a-tag v-if="record.is_default === 1" color="green">Bật</a-tag>
            <a-tag v-else>Tắt</a-tag>
          </template>

          <template v-if="column.key === 'created_by_id'">
            {{ record.created_by?.fullname }}
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
  import { SearchOutlined } from '@ant-design/icons-vue'
  // import type { TableColumnsType } from 'ant-design-vue'

  import BaseLayout from '../../../layout/baseLayout.vue'
  import SideBar from '../../../components/common/SideBar.vue'
  import Header from '../../../components/common/Header.vue'
  import { useListCurrency } from '../../../store/modules/store-setting/currency'
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
  const dataCurrency = useListCurrency()
  dataCurrency.getListCurrencyAction()
  const { listCurrency } = storeToRefs(dataCurrency)
  const state = reactive({
    searchText: '',
    searchedColumn: '',
  })

  const handleSearch = (selectedKeys: any, confirm: any, dataIndex: any) => {
    confirm()
    state.searchText = selectedKeys[0]
    state.searchedColumn = dataIndex
  }

  const handleReset = (clearFilters: any) => {
    clearFilters({ confirm: true })
    state.searchText = ''
  }

  const searchInput = ref()
  const columns = [
    {
      title: 'Đơn vị tiền tệ',
      dataIndex: 'title',
      fixed: 'left',
      width: 250,
      key: 'name',
      customFilterDropdown: true,
      onFilter: (value: any, record: any) =>
        record.title.toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownOpenChange: (visible: boolean) => {
        if (visible) {
          setTimeout(() => {
            searchInput.value.focus()
          }, 100)
        }
      },
    },
    {
      title: 'Ký hiệu',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Symbol',
      dataIndex: 'symbol',
    },
    {
      title: 'Symbol 2',
      dataIndex: 'symbol2',
    },
    {
      title: 'Phần thập phân',
      dataIndex: 'decimal_number',
    },
    {
      title: 'Kích hoạt',
      dataIndex: 'status',
      align: 'center',
      key: 'status',
    },
    {
      title: 'Mặc định',
      dataIndex: 'is_default',
      key: 'is_default',
      align: 'center',
    },
    {
      title: 'Người tạo',
      dataIndex: 'created_by_id',
      key: 'created_by_id',
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
      fixed: 'right',
      width: 100,
    },
  ]

  const navigateUpdate = (id: number) => {
    router.push(`/update-currency/${id}`)
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
    dataCurrency.deleteCurrencyAction(
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
    router.push('/create-currency')
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
<style></style>
