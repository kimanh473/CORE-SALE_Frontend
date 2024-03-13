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
              <p class="longText font-bold pl-5 mb-0">Danh sách đơn hàng</p>
              <div class="icon-filter-approval relative group"></div>
            </div>
          </div>
        </div>
      </Header>
    </template>
    <template v-slot:content class="relative">
      <div
        id="task-bar-list"
        class="!my-4 !py-[10px] !mx-[10px] bg-slate-500 rounded flex justify-between"
      >
        <div class="flex mr-4 ml-4 w-[500px] max-sm:w-[400px] max-sm:m-0">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only"
            >Search</label
          >
          <div class="relative">
            <div
              class="flex absolute inset-y-0 left-0 items-center pl-3 hover:cursor-pointer"
            >
              <!-- @click -->
              <i class="fal fa-search"></i>
            </div>
            <input
              type="search"
              class="block p-1.5 pl-10 w-full whitespace-no-wrap outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              placeholder="Tìm kiếm"
            />
            <!-- @pressEnter -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              class="w-6 h-6 flex absolute right-3 top-1.5 text-gray-600 hover:text-gray-900 hover:cursor-pointer"
            >
              <!-- @click -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
          </div>
        </div>
        <div
          class="button-custom update-list-button relative group rounded-md px-2"
          title="Đồng bộ"
          @click="handleOpenModalSync"
        >
          <p class="text-[14px] mt-[12px] px-1">Đồng bộ</p>
        </div>
      </div>
      <a-menu
        class="!mx-[10px]"
        v-model:selectedKeys="currentMenu"
        mode="horizontal"
        @select="handleSelectStatus"
      >
        <a-menu-item class="mr-5" key="all">
          Tất cả ({{ dataCount?.total }})
        </a-menu-item>
        <a-menu-item key="1">
          Chờ xác nhận ({{ dataCount?.UNPAID_INVOICE_PENDING }})</a-menu-item
        >
        <a-menu-item key="2">
          Chờ lấy hàng ({{ dataCount?.READY_TO_SHIP_PROCESSED }})
        </a-menu-item>
        <a-menu-item key="3">
          Đang giao ({{ dataCount?.TO_CONFIRM_RECEIVE }})
        </a-menu-item>
        <a-menu-item key="4">
          Đã giao ({{ dataCount?.COMPLETED_SHIPPED }})
        </a-menu-item>
        <a-menu-item key="5">
          Đơn hủy ({{ dataCount?.CANCELLED_INCANCELLED }})</a-menu-item
        >
        <a-menu-item key="6">
          Trả hàng/Hoàn tiền ({{ dataCount?.TO_RETURN }})
        </a-menu-item>
        <a-menu-item key="7">
          Giao không thành công ({{ dataCount?.FAILED_DELIVERY }})
        </a-menu-item>
        <a-menu-item key="8"> Khác ({{ dataCount?.DIFF_STATUS }}) </a-menu-item>
      </a-menu>
      <a-table
        class="!p-[10px]"
        :columns="columns"
        :data-source="listOrder"
        :pagination="false"
        :row-class-name="
          (_record: any, index: number) => (index % 2 === 1 ? 'table-striped' : null)
        "
        @change="handleChangeFilter"
        v-model:current="currentPage"
        bordered
        row-key="id"
        ><template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span>{{ column.title }}</span>
          </template> </template
        ><template
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
              :placeholder="`Search ${column.title}`"
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
              class="w-20 mr-2"
              @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
            >
              <i class="far fa-search mr-1.5"></i>
              <!-- <template #icon><SearchOutlined /></template> -->
              Lọc
            </a-button>
            <a-button
              size="small"
              style="width: 80px"
              @click="handleReset(clearFilters)"
            >
              Hủy
            </a-button>
          </div>
        </template>
        <template #customFilterIcon="{ filtered }">
          <search-outlined
            :style="{ color: filtered ? '#108ee9' : undefined }"
          /> </template
        ><template #bodyCell="{ column, record, index }">
          <template v-if="column.key === 'stt'">
            <div>
              {{ index + perPage * (currentPage - 1) + 1 }}
            </div>
          </template>
          <template v-if="column.key === 'order_sn'">
            <a @click="handleToDetail(record.id)">
              {{ record.order_sn }}
            </a>
          </template>
          <template v-if="column.key === 'total_amount'">
            {{ FormatPrice(record.total_amount) }}&#8363;
          </template>
          <!-- <template v-if="column.key === 'tax_money'">
            {{ FormatPrice(record.tax_money) }}&#8363;
          </template> -->
          <template v-if="column.key === 'order_status'">
            <a-tag
              :color="
                FormatColorOrderStatus(FormatOrderStatus(record.order_status))
              "
            >
              {{ FormatOrderStatus(record.order_status) }}</a-tag
            >
          </template>
          <template v-if="column.key === 'id'">
            &nbsp;<a @click="handleToDetail(record.id)"
              ><i class="fad fa-eye"></i
            ></a>
          </template>
        </template>
        <template #switch="{ text }">
          <a-switch v-model:checked="isCheck" />
        </template>
      </a-table>
    </template>

    <template v-slot:footer
      ><div class="text-left px-[20px] py-[10px] flex justify-between">
        <a-pagination
          v-model:current="currentPage"
          v-model:pageSize="perPage"
          show-quick-jumper
          :total="totalPage"
          @change="changePage"
        />
        <button
          class="back-top bg-slate-500 focus:outline-none"
          @click="backTop"
        >
          <p class="text-white text-2xl mb-1.5">↑</p>
        </button>
      </div>
    </template>
  </base-layout>
  <a-modal
    :visible="isOpenModalSync"
    @cancel="handleCloseModalSync"
    title="Đồng bộ đơn hàng"
    width="550px"
  >
    <template #footer>
      <a-button
        key="submit"
        type="primary"
        @click="handleUpdateShopee"
        :loading="isLoading"
        >Xác nhận</a-button
      >
      <a-button key="back" @click="handleCloseModalSync">Hủy</a-button>
    </template>
    <div class="p-[24px]">
      <div class="form-small">
        <label for="" class="form-group-label"
          >Chọn sàn đồng bộ<span class="text-red-600">* </span> <span></span
        ></label>
        <div>
          <a-select
            show-search
            v-model:value="selected_platform"
            class="form-control-input"
            placeholder="Chọn sàn TMĐT"
            :options="list_platform"
          >
          </a-select>
        </div>
      </div>
      <div class="form-small">
        <label for="" class="form-group-label"
          >Chọn Shop<span class="text-red-600">* </span> <span></span
        ></label>
        <div>
          <a-select
            show-search
            v-model:value="selected_shop"
            class="form-control-input"
            placeholder="Chọn Shop"
            :options="list_shop"
          >
          </a-select>
        </div>
      </div>
      <div class="form-small">
        <label for="" class="form-group-label"
          >Chọn khoảng ngày<span class="text-red-600">* </span> <span></span
        ></label>
        <div>
          <a-range-picker
            :placeholder="['Ngày bắt đầu', 'Ngày kết thúc']"
            :value="valueRangeDate || hackValue || value"
            :disabled-date="disabledDate"
            :format="dateFormat"
            @change="onChange"
            @openChange="onOpenChange"
            @calendarChange="onCalendarChange"
          />
        </div>
      </div>
    </div>
  </a-modal>
  <!-- <a-modal
    :visible="isOpenModalFilter"
    @cancel="handleCloseModalFilter"
    title="Bộ lọc"
    width="550px"
  >
    <template #footer>
      <a-button
        key="submit"
        type="primary"
        @click="handleUpdateShopee"
        :loading="isLoading"
        >Xác nhận</a-button
      >
      <a-button key="back" @click="handleCloseModalFilter">Hủy</a-button>
    </template>
  </a-modal> -->
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
  import BaseLayout from '@/layout/baseLayout.vue'
  import SideBar from '@/components/common/SideBar.vue'
  import Header from '@/components/common/Header.vue'
  import { useRoute, useRouter } from 'vue-router'
  import { ref, reactive, computed } from 'vue'
  import ModalDelete from '@/components/modal/ModalConfirmDelelte.vue'
  import { useWebCatalog } from '@/store/modules/web-catalog/webcatalog'
  import { useToast } from 'vue-toastification'
  import { useOrder } from '@/store/modules/orders/orders'
  import {
    FormatPrice,
    FormatOrderStatus,
    FormatColorOrderStatus,
  } from '@/components/constants/FormatAll'
  import type { SelectProps, TableColumnType, TableProps } from 'ant-design-vue'
  import dayjs, { Dayjs } from 'dayjs'
  import { storeToRefs } from 'pinia'

  // const UrlImg = import.meta.env.VITE_APP_IMAGE_URL

  const router = useRouter()
  const route = useRoute()
  const toast = useToast()
  const dataWebsite = useWebCatalog()
  dataWebsite.getAllWebCatalogAction()
  // const { listWeb } = storeToRefs(dataWebsite)
  // function formatWeb(webcode: string) {
  //   const webName = listWeb.value.find((item: any) => item.code == webcode)
  //   return webName?.web_name
  // }
  const dateFormat = 'YYYY-MM-DD'
  const currentTime = new Date()
  const previous15day = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)
  type RangeValue = [Dayjs, Dayjs]
  const valueRangeDate = ref<[Dayjs, Dayjs]>([
    dayjs(previous15day.toISOString().substring(0, 10), dateFormat),
    dayjs(currentTime.toISOString().substring(0, 10), dateFormat),
  ])
  const value = ref<RangeValue>()
  const hackValue = ref<RangeValue>()
  const disabledDate = (current: Dayjs) => {
    if (!valueRangeDate.value || (valueRangeDate.value as any).length === 0) {
      return false
    }
    const tooLate =
      valueRangeDate.value[0] &&
      current.diff(valueRangeDate.value[0], 'days') > 14
    const tooEarly =
      valueRangeDate.value[1] &&
      valueRangeDate.value[1].diff(current, 'days') > 14
    return tooEarly || tooLate
  }
  const onOpenChange = (open: boolean) => {
    if (open) {
      valueRangeDate.value = [] as any
      hackValue.value = [] as any
    } else {
      hackValue.value = undefined
    }
  }

  const onChange = (val: RangeValue) => {
    value.value = val
  }
  const onCalendarChange = (val: RangeValue) => {
    valueRangeDate.value = val
  }
  const isOpenModalSync = ref<boolean>(false)
  const handleOpenModalSync = () => {
    isOpenModalSync.value = true
  }
  const handleCloseModalSync = () => {
    isOpenModalSync.value = false
  }

  const currentMenu = ref<any>([route.query.status ? route.query.status : '1'])
  const handleSelectStatus = (item: any) => {
    router.push({
      path: route.fullPath,
      query: {
        page: 1,
        status: item.key,
      },
    })
    dataOrder.getAllOrderPaginateAction(
      perPage.value,
      1,
      item.selectedKeys,
      EndTimeLoading
    )
  }
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const dataOrder = useOrder()
  const { totalPage, currentPage } = storeToRefs(dataOrder)
  const perPage = ref(20)
  dataOrder.getAllOrderPaginateAction(
    perPage.value,
    route.query.page ? Number(route.query.page) : 1,
    currentMenu.value,
    EndTimeLoading
  )

  const changePage = (pageNumber: number) => {
    isLoading.value = true
    router.push({
      path: route.fullPath,
      query: {
        page: pageNumber,
        status: currentMenu.value,
      },
    })
    dataOrder.getAllOrderPaginateAction(
      perPage.value,
      pageNumber,
      currentMenu.value,
      EndTimeLoading
    )
  }
  // const onSearch = (searchValue: string) => {
  //   // if (record.order_sn.toString().toLowerCase().includes(searchValue.toLowerCase()))
  // }
  const isCheck = ref<boolean>(false)
  const isLoading = ref<boolean>(false)
  const isOpenConfirm = ref<boolean>(false)

  const { listOrder, dataCount } = storeToRefs(dataOrder)
  console.log(dataCount.value)
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
  const filteredInfo = ref()
  const columns = computed<TableColumnType[]>(() => {
    const filtered = filteredInfo.value || {}
    return [
      {
        title: 'STT',
        dataIndex: 'id',
        key: 'stt',
      },
      {
        title: 'Ngày tạo',
        dataIndex: 'create_time',
        key: 'create_time',
      },
      {
        title: 'Ngày đồng bộ',
        dataIndex: 'created_at',
        key: 'created_at',
      },
      {
        title: 'Mã ĐH',
        dataIndex: 'order_sn',
        key: 'order_sn',
        customFilterDropdown: true,
        filteredValue: filtered.name || null,
        onFilter: (value: any, record: any) =>
          record.order_sn
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),

        onFilterDropdownOpenChange: (visible: boolean) => {
          if (visible) {
            setTimeout(() => {
              searchInput.value.focus()
            }, 100)
          }
        },
      },
      {
        title: 'Mã KH',
        dataIndex: 'buyer_user_id',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) =>
          record.buyer_user_id
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible: boolean) => {
          if (visible) {
            setTimeout(() => {
              searchInput.value.focus()
            }, 100)
          }
        },
      },
      {
        title: 'Tên KH',
        dataIndex: `buyer_username`,
        customFilterDropdown: true,
        onFilter: (value: any, record: any) =>
          record.buyer_username
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible: boolean) => {
          if (visible) {
            setTimeout(() => {
              searchInput.value.focus()
            }, 100)
          }
        },
      },
      {
        title: 'Tiền hàng',
        dataIndex: 'total_amount',
        align: 'right',
        key: 'total_amount',
      },
      // {
      //   title: 'Tiền thuế',
      //   dataIndex: 'tax_money',
      //   key: 'tax_money',
      //   align: 'right',
      // },
      {
        title: 'Tổng tiền',
        dataIndex: 'total_amount',
        align: 'right',
        key: 'total_amount',
      },
      {
        title: 'Shop',
        dataIndex: 'shop_name',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) =>
          record.shop_name
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible: boolean) => {
          if (visible) {
            setTimeout(() => {
              searchInput.value.focus()
            }, 100)
          }
        },
      },
      {
        title: 'Trạng thái',
        dataIndex: 'order_status',
        key: 'order_status',
        align: 'center',
      },
      {
        title: 'Diễn giải',
        dataIndex: 'note',
      },
      {
        title: 'Thao tác',
        dataIndex: 'id',
        key: 'id',
        align: 'center',
      },
    ]
  })

  const handleChangeFilter: TableProps['onChange'] = (pagination, filters) => {
    console.log('Various parameters', pagination, filters)
    filteredInfo.value = filters
  }

  const handleUpdateShopee = () => {
    isLoading.value = true
    console.log('?', route.query.page)
    dataOrder.getOrderShopeeAction({
      perPage: perPage.value,
      page: Number(route.query.page) ? Number(route.query.page) : 1,
      status: currentMenu.value,
      time_from: valueRangeDate.value
        ? dayjs(valueRangeDate.value[0]).format(dateFormat)
        : '',
      time_to: valueRangeDate.value
        ? dayjs(valueRangeDate.value[1]).format(dateFormat)
        : '',
      toast,
      EndTimeLoading,
    })
  }
  const handleCloseConfirm = () => {
    isOpenConfirm.value = false
  }

  // const CreateOrder = () => {
  //   router.push('/create-order')
  // }
  // const navigateUpdate = (id: number) => {
  //   router.push(`/update-product/${id}`)
  // }
  // const idSelected = ref()
  // const handleOpenDelete = (record: any) => {
  //   isOpenConfirm.value = true
  //   idSelected.value = record.id
  // }
  const handleToDetail = (id: number) => {
    router.push(`/detail-order/${id}`)
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
  const backTop = () => {
    const viewTaskBar = document.getElementById('task-bar-list')
    viewTaskBar.scrollIntoView({ behavior: 'smooth' })
  }

  const selected_platform = ref('shopee')
  const selected_shop = ref('983519783')
  const list_platform = ref<SelectProps['options']>([
    {
      value: 'shopee',
      label: 'Shopee',
    },
    {
      value: 'tiktok',
      label: 'Tiktok',
    },
    {
      value: 'tiki',
      label: 'Tiki',
    },
    {
      value: 'lazada',
      label: 'Lazada',
    },
    {
      value: 'web',
      label: 'Website',
    },
  ])
  const list_shop = ref<SelectProps['options']>([
    {
      value: '983519783',
      label: 'Hawonkoo',
    },
  ])
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
  .update-list-button::before {
    font-family: 'Font Awesome 5 Pro';
    content: '\f021';
    font-weight: 500;
    margin-right: 2px;
  }

  .filter-button::before {
    font-family: 'Font Awesome 5 Pro';
    content: '\f0b0';
    font-weight: 500;
    margin-right: 2px;
  }

  .ant-tag {
    margin-right: 0;
  }
</style>
