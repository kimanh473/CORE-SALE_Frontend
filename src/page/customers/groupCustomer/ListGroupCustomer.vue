<template>
  <base-layout>
    <template v-slot:sidebar>
      <SideBar/>
    </template>
    <template v-slot:header>
      <Header :is-show-search="false">
        <div class="flex grow">
          <div class="flex items-center">
            <div class="flex items-center">
              <Transition name="slide-fade"></Transition>
              <p class="longText pl-5 mb-0">Danh sách nhóm khách hàng</p>
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
            @click="openModalCreateGroupCustomer"
            @cancel="handleCloseCreate"
        >
          <p class="text-[14px] mt-1 px-1">Tạo mới nhóm khách hàng</p>
        </div>

      </div>
      <a-table
          class="!p-[10px]"
          :columns="columns"
          :data-source="listGroupCustomer"
          bordered
          row-key="id"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'json_rule_detail'">
            <template v-if="record.json_rule_detail[0]">
              <p>Thời gian tài khoản đã tồn tại: {{ record.json_rule_detail[0].time_account_min }}</p>
              <p>Tổng số lượng đơn: {{ record.json_rule_detail[0].total_order }}</p>
              <p>Giới hạn số lượng đơn đã hủy: {{ record.json_rule_detail[0].total_order_destroy }}</p>
              <p>Tổng giá trị đơn hàng: {{ record.json_rule_detail[0].total_value_order }}</p>
              <p>Tần xuất mua hàng trên tháng: {{ record.json_rule_detail[0].frequency_order }}</p>
            </template>
          </template>
          <template v-if="column.key === 'id'">
            <a @click="navigateUpdate(record.id)">Sửa</a>&nbsp;|&nbsp;

            <a @click="handleOpenDelete(record)">Xóa</a>
          </template>
        </template>
        <template #switch="{ text }">
          <a-switch v-model:checked="isCheck"/>
        </template>
      </a-table
      >
      <p>{{ listGroupCustomer }}</p>
    </template>
    <template v-slot:footer>footer</template>
  </base-layout>
  <div>
    <modal-delete
        :isOpen="isOpenConfirm"
        :handleCloseDetail="handleCloseConfirm"
        :ConfirmDelete="handleDelete"
    >
    </modal-delete>
  </div>

  <!--  <loading-overlay :isLoading="isLoading"></loading-overlay>-->
  <!--        tạo mới account-->
  <a-modal :visible="isOpenCreateModal" @cancel="handleCloseCreate" width="540px">
    <div v-show="isDeliveryAddress == true" class="outer">
      <div class="p-4">
        <p>Tạo mới nhóm khách hàng</p>
        <div class="w-full inner">
          <Transition :duration="550" name="nested">
            <div
                class="text-left py-2 w-full h-full format-scroll form-plus-over"
            >
              <div class="w-full">
                <Transition name="slide-up">
                  <div v-show="isInfor == true" class="outer">
                    <div>
                      <div class="grid grid-cols-2 gap-2 form-small">
                        <div>
                          <label for="" class="form-group-label"
                          >Mã nhóm khách hàng<span class="text-red-600">* </span>
                            <span></span
                            ></label>
                          <div>
                            <input
                                type="text"
                                class="form-control-input"
                                placeholder="Nhập mã nhóm khách hàng"
                                v-model="customerGroupAccount.code"
                            />
                          </div>
                        </div>
                        <div>
                          <label for="" class="form-group-label"
                          >Tên nhóm khách hàng<span class="text-red-600"></span
                          ></label>
                          <div>
                            <input
                                type="text"
                                class="form-control-input"
                                placeholder="Nhập tên nhóm"
                                v-model="customerGroupAccount.title"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-small">
                        <div>

                          <a-switch
                              v-model:checked="customerGroupAccount.is_default"
                              :checkedValue="1"
                              :unCheckedValue="0"
                          />
                          &nbsp; Đặt làm mặc định

                        </div>
                        <div>
                          <label for="" class="form-group-label"
                          >Mô tả<span class="text-red-600">* </span>
                            <span></span
                            ></label>
                          <div>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="5"
                                class="form-control-input"
                                v-model="customerGroupAccount.desc"
                            ></textarea>
                          </div>
                        </div>

                        <div>
                          <label for="" class="form-group-label"
                          >Điều kiện<span class="text-red-600">* </span>
                            <span></span
                            ></label>

                          <div>
                            <label for="" class="form-group-label"
                            ><span>Thời gian tài khoản đã tồn tại (ngày)</span> <span class="text-red-600">* </span>
                              <span></span
                              ></label>
                            <input
                                type="text"
                                class="form-control-input"
                                placeholder="9999"
                                v-model="data_rule_detail.time_account_min"
                            />
                          </div>

                          <div>
                            <label for="" class="form-group-label"
                            >Tổng số lượng đơn<span class="text-red-600">* </span>
                              <span></span
                              ></label>
                            <input
                                type="text"
                                class="form-control-input"
                                placeholder="9999"
                                v-model="data_rule_detail.total_order"
                            />
                          </div>

                          <div>
                            <label for="" class="form-group-label"
                            >Giới hạn số lượng đơn đã hủy<span class="text-red-600">* </span>
                              <span></span
                              ></label>
                            <input
                                type="text"
                                class="form-control-input"
                                placeholder="0"
                                v-model="data_rule_detail.total_order_destroy"
                            />
                          </div>

                          <div>
                            <label for="" class="form-group-label"
                            >Tổng giá trị đơn hàng<span class="text-red-600">* </span>
                              <span></span
                              ></label>
                            <input
                                type="text"
                                class="form-control-input"
                                placeholder="10,000,000"
                                v-model="data_rule_detail.total_value_order"
                            />
                          </div>

                          <div>
                            <label for="" class="form-group-label"
                            >Tần xuất mua hàng trên tháng<span class="text-red-600">* </span>
                              <span></span
                              ></label>
                            <input
                                type="text"
                                class="form-control-input"
                                placeholder="9999"
                                v-model="data_rule_detail.frequency_order"
                            />
                          </div>

                        </div>
                        <!-- <a-switch v-model:checked="checked" /> &nbsp; Sử dụng làm điểm
                          nhận -->
                      </div>
                    </div>
                  </div>

                </Transition>
              </div>
            </div>
          </Transition>
        </div
        >
      </div>
    </div>
    <template #footer>
      <a-button
          key="submit"
          type="primary"
          @click="createCustomerAccount()"
      >Xác nhận
      </a-button
      >
      <a-button key="back" @click="handleCloseCreate">Hủy</a-button>
    </template>
    <loading-overlay :isLoading="isLoading"></loading-overlay>
  </a-modal>
  <!-- sửa tài khoản -->
  <a-modal :visible="isOpenUpdateModal" @cancel="handleCloseUpdate" width="540px">
    <div v-show="isDeliveryAddress == true" class="outer">
      <div class="p-4">
        <p>Cập nhật tài khoản khách hàng</p>
        //
      </div>
    </div>
    <template #footer>
      <a-button
          key="submit"
          type="primary"
          @click="updateCustomerAccount()"
      >Xác nhận
      </a-button
      >
      <a-button key="back" @click="handleCloseUpdate">Hủy</a-button>
    </template>
    <loading-overlay :isLoading="isLoading"></loading-overlay>
  </a-modal>

</template>

<script setup lang="ts">
import BaseLayout from '../../../layout/baseLayout.vue'
import SideBar from '../../../components/common/SideBar.vue'
import Header from '../../../components/common/Header.vue'
import {useRoute, useRouter} from 'vue-router'
import {ref, reactive} from 'vue'
import {useToast} from 'vue-toastification'
import ContextMenu from '../../../components/common/ContextMenu.vue'
import {useGroupCustomer} from '../../../store/modules/customers/customerGroup'
//   import { storeToRefs } from 'pinia'
import ModalDelete from '../../../components/modal/ModalConfirmDelelte.vue'
import {storeToRefs} from 'pinia'
import dayjs, {Dayjs} from "dayjs";
import {FormatModalX, FormatModalY} from "../../../components/constants/FormatAll";

const route = useRoute()
const router = useRouter()
const toast = useToast()
const dataGroupCustomer = useGroupCustomer()
dataGroupCustomer.getAllGroupCustomerPaginateAction()
const {listGroupCustomer} = storeToRefs(dataGroupCustomer)
const isCheck = ref<boolean>(false)
const isInfor = ref<boolean>(true)
const isLoading = ref<boolean>(false)
const isOpenConfirm = ref<boolean>(false)
const isDeliveryAddress = ref<boolean>(true)
const isOpenConfirmDefault = ref<boolean>(false)
const isOpenCreateModal = ref<boolean>(false)
const isOpenUpdateModal = ref<boolean>(false)
const isActiveAdminGroup = ref<boolean>(false)
const groupPermission = ref()
const fullnameReset = ref()

const dateFormat = 'DD/MM/YYYY';
const dateFormatRequest = 'YYYY/MM/DD';
const value_birth_day = ref<Dayjs>(dayjs('01/01/2015', dateFormat));

const columns = [
  {
    title: 'Mã',
    dataIndex: 'code',
  },
  {
    title: 'Tên nhóm',
    dataIndex: 'title',
  },
  {
    title: 'Mô tả',
    dataIndex: 'desc',
  },
  {
    title: 'Đặt làm mặc định',
    dataIndex: 'is_default',
  },
  {
    title: 'Điều kiện',
    dataIndex: 'json_rule_detail',
    key: 'json_rule_detail'
  }
]

const addOptions = () => {
  const data = {
    code: '',
    title: '',
    desc: '',
    is_default: '',
    json_rule_detail: ''
  }
}

const data_rule_detail = {
  time_account_min: '',
  total_order: '',
  total_order_destroy: '',
  total_value_order: '',
  frequency_order: ''
}

const data_rule_detail_arr = [];


const handleClose = () => {
  isOpenConfirmDefault.value = false
}

const handleCloseConfirm = () => {
  isOpenConfirm.value = false
}

const EndTimeLoading = () => {
  isLoading.value = false
}

const navigateUpdate = (id: number) => {
  //dataCustomerAccount.getDetailCustomerAccountAction(id)
  isOpenUpdateModal.value = true
}

const handleCloseUpdate = () => {
  isOpenUpdateModal.value = false
}

const idSelected = ref()

const handleOpenDelete = (record: any) => {
  isOpenConfirm.value = true
  idSelected.value = record.id
}

const handleDelete = () => {
  isLoading.value = true
  dataGroupCustomer.deleteGroupCustomerAction(
      Number(idSelected.value),
      toast,
      EndTimeLoading,
      handleCloseConfirm
  )
}

const customerGroupAccount = reactive({
  code: '',
  title: '',
  desc: '',
  is_default: '',
  json_rule_detail: data_rule_detail,
})

const openModalCreateGroupCustomer = () => {
  isOpenCreateModal.value = true
}

const handleCloseCreate = () => {
  isOpenCreateModal.value = false
}

const createCustomerAccount = () => {
  data_rule_detail_arr.push(data_rule_detail)
  //isLoading.value = true
  let data = {
    code: customerGroupAccount.code,
    title: customerGroupAccount.title,
    desc: customerGroupAccount.desc,
    is_default: customerGroupAccount.is_default,
    json_rule_detail: data_rule_detail_arr
  }
  dataGroupCustomer.createGroupCustomerAction(data, toast, EndTimeLoading, handleCloseCreate)
}

const updateCustomerAccount = () => {
  isLoading.value = true
  let id = detailGroupCustomer.value.id
  let data = {
    code: '',
    title: '',
    desc: '',
    is_default: '',
    json_rule_detail: ''
  }
  dataGroupCustomer.updateGroupCustomerAction(id, data, toast, EndTimeLoading, handleCloseUpdate)
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


