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
              <p>
                Thời gian tài khoản đã tồn tại:
                {{ record.json_rule_detail[0].time_account_min }}
              </p>
              <p>
                Tổng số lượng đơn: {{ record.json_rule_detail[0].total_order }}
              </p>
              <p>
                Giới hạn số lượng đơn đã hủy:
                {{ record.json_rule_detail[0].total_order_destroy }}
              </p>
              <p>
                Tổng giá trị đơn hàng:
                {{ record.json_rule_detail[0].total_value_order }}
              </p>
              <p>
                Tần xuất mua hàng trên tháng:
                {{ record.json_rule_detail[0].frequency_order }}
              </p>
            </template>
          </template>
          <template v-if="column.key === 'id'">
            <a @click="navigateUpdate(record.id)">Sửa</a>&nbsp;|&nbsp;
            <a @click="handleOpenDelete(record)">Xóa</a>
          </template>
        </template>
        <template #switch="{ text }">
          <a-switch v-model:checked="isCheck" />
        </template>
      </a-table>
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
  <a-modal
    :visible="isOpenCreateModal"
    @cancel="handleCloseCreate"
    width="540px"
  >
    <div v-show="isDeliveryAddress == true" class="outer">
      <div class="p-4">
        <p>Tạo mới nhóm khách hàng</p>
        <div class="w-full inner">
          <Transition :duration="550" name="nested">
            <div
              class="text-left p-1 w-full h-full format-scroll form-plus-over"
            >
              <div class="w-full">
                <Transition name="slide-up">
                  <div v-show="isInfor == true" class="outer">
                    <div>
                      <div class="grid grid-cols-2 gap-2 form-small">
                        <div>
                          <label for="" class="form-group-label"
                            >Mã nhóm khách hàng<span class="text-red-600"
                              >*
                            </span>
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
                            >Tên nhóm khách hàng<span
                              class="text-red-600"
                            ></span
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
                          Đặt làm mặc định &nbsp;
                          <a-switch
                            v-model:checked="customerGroupAccount.is_default"
                            :checkedValue="1"
                            :unCheckedValue="0"
                          />
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
                          <div>
                            <label for="" class="form-group-label"
                              >Điều kiện<span class="text-red-600">* </span>
                              <span></span
                            ></label>
                            &nbsp;
                            <a-switch
                              v-model:checked="customerGroupAccount.rule"
                              :checkedValue="1"
                              :unCheckedValue="0"
                            />
                          </div>

                          <div>
                            <label for="" class="form-group-label"
                              ><span
                                >Thời gian tài khoản đã tồn tại (ngày)</span
                              >
                              <span class="text-red-600">* </span> <span></span
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
                              >Tổng số lượng đơn<span class="text-red-600"
                                >*
                              </span>
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
                              >Giới hạn số lượng đơn đã hủy<span
                                class="text-red-600"
                                >*
                              </span>
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
                              >Tổng giá trị đơn hàng<span class="text-red-600"
                                >*
                              </span>
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
                              >Tần xuất mua hàng trên tháng<span
                                class="text-red-600"
                                >*
                              </span>
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
        </div>
      </div>
    </div>
    <template #footer>
      <a-button key="submit" type="primary" @click="createGroupCustomer()"
        >Xác nhận
      </a-button>
      <a-button key="back" @click="handleCloseCreate">Hủy</a-button>
    </template>
    <loading-overlay :isLoading="isLoading"></loading-overlay>
  </a-modal>
  <!-- sửa tài khoản -->
  <a-modal
    :visible="isOpenUpdateModal"
    @cancel="handleCloseUpdate"
    width="540px"
  >
    <div v-show="isDeliveryAddress == true" class="outer">
      <div class="p-4">
        <p>Cập nhật nhóm khách hàng</p>
        <div class="w-full inner">
          <Transition :duration="550" name="nested">
            <div
              class="text-left p-1 w-full h-full format-scroll form-plus-over"
            >
              <div class="w-full">
                <Transition name="slide-up">
                  <div v-show="isInfor == true" class="outer">
                    <div>
                      <div class="grid grid-cols-2 gap-2 form-small">
                        <div>
                          <label for="" class="form-group-label"
                            >Mã nhóm khách hàng<span class="text-red-600"
                              >*
                            </span>
                            <span></span
                          ></label>
                          <div>
                            <input
                              type="text"
                              class="form-control-input"
                              placeholder="Nhập mã nhóm khách hàng"
                              v-model="detailGroupCustomer.code"
                            />
                          </div>
                        </div>
                        <div>
                          <label for="" class="form-group-label"
                            >Tên nhóm khách hàng<span
                              class="text-red-600"
                            ></span
                          ></label>
                          <div>
                            <input
                              type="text"
                              class="form-control-input"
                              placeholder="Nhập tên nhóm"
                              v-model="detailGroupCustomer.title"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-small">
                        <div>
                          Đặt làm mặc định &nbsp;
                          <a-switch
                            v-model:checked="detailGroupCustomer.is_default"
                            checkedValue="1"
                            unCheckedValue="0"
                          />
                          <div>
                            <p>{{ detailGroupCustomer.is_default }}</p>
                          </div>
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
                              v-model="detailGroupCustomer.desc"
                            ></textarea>
                          </div>
                        </div>

                        <div>
                          <div>
                            <label for="" class="form-group-label"
                              >Điều kiện<span class="text-red-600">* </span>
                              <span></span
                            ></label>
                            &nbsp;
                            <a-switch
                              v-model:checked="detailGroupCustomer.rule"
                              checkedValue="1"
                              unCheckedValue="0"
                            />
                          </div>

                          <div
                            v-for="(
                              item, index
                            ) in detailGroupCustomer.json_rule_detail"
                            :key="index"
                            class=""
                          >
                            <div>
                              <label for="" class="form-group-label"
                                ><span
                                  >Thời gian tài khoản đã tồn tại (ngày)</span
                                >
                                <span class="text-red-600">* </span>
                                <span></span
                              ></label>
                              <input
                                type="text"
                                class="form-control-input"
                                placeholder="9999"
                                v-model="item.time_account_min"
                              />
                            </div>

                            <div>
                              <label for="" class="form-group-label"
                                >Tổng số lượng đơn<span class="text-red-600"
                                  >*
                                </span>
                                <span></span
                              ></label>
                              <input
                                type="text"
                                class="form-control-input"
                                placeholder="9999"
                                v-model="item.total_order"
                              />
                            </div>

                            <div>
                              <label for="" class="form-group-label"
                                >Giới hạn số lượng đơn đã hủy<span
                                  class="text-red-600"
                                  >*
                                </span>
                                <span></span
                              ></label>
                              <input
                                type="text"
                                class="form-control-input"
                                placeholder="0"
                                v-model="item.total_order_destroy"
                              />
                            </div>

                            <div>
                              <label for="" class="form-group-label"
                                >Tổng giá trị đơn hàng<span class="text-red-600"
                                  >*
                                </span>
                                <span></span
                              ></label>
                              <input
                                type="text"
                                class="form-control-input"
                                placeholder="10,000,000"
                                v-model="item.total_value_order"
                              />
                            </div>

                            <div>
                              <label for="" class="form-group-label"
                                >Tần xuất mua hàng trên tháng<span
                                  class="text-red-600"
                                  >*
                                </span>
                                <span></span
                              ></label>
                              <input
                                type="text"
                                class="form-control-input"
                                placeholder="9999"
                                v-model="item.frequency_order"
                              />
                            </div>
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
        </div>
      </div>
    </div>
    <template #footer>
      <a-button key="submit" type="primary" @click="updateGroupCustomer()"
        >Xác nhận
      </a-button>
      <a-button key="back" @click="handleCloseUpdate">Hủy</a-button>
    </template>
    <loading-overlay :isLoading="isLoading"></loading-overlay>
  </a-modal>
</template>

<script setup lang="ts">
  import BaseLayout from '../../../layout/baseLayout.vue'
  import SideBar from '../../../components/common/SideBar.vue'
  import Header from '../../../components/common/Header.vue'
  import { useRoute, useRouter } from 'vue-router'
  import { ref, reactive } from 'vue'
  import { useToast } from 'vue-toastification'
  import ContextMenu from '../../../components/common/ContextMenu.vue'
  import { useGroupCustomer } from '../../../store/modules/customers/customerGroup'
  //   import { storeToRefs } from 'pinia'
  import ModalDelete from '../../../components/modal/ModalConfirmDelelte.vue'
  import { storeToRefs } from 'pinia'
  import dayjs, { Dayjs } from 'dayjs'
  import {
    FormatModalX,
    FormatModalY,
  } from '../../../components/constants/FormatAll'

  const route = useRoute()
  const router = useRouter()
  const toast = useToast()
  const dataGroupCustomer = useGroupCustomer()
  dataGroupCustomer.getAllGroupCustomerPaginateAction()
  const { listGroupCustomer, detailGroupCustomer } =
    storeToRefs(dataGroupCustomer)
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

  const dateFormat = 'DD/MM/YYYY'
  const dateFormatRequest = 'YYYY/MM/DD'
  const value_birth_day = ref<Dayjs>(dayjs('01/01/2015', dateFormat))
  const is_default = ref<boolean>(false)

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
      key: 'json_rule_detail',
    },
    {
      title: 'Thao tác',
      dataIndex: 'id',
      key: 'id',
    },
  ]

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
    dataGroupCustomer.getDetailGroupCustomerAction(id)
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

  const data_rule_detail = {
    time_account_min: '',
    total_order: '',
    total_order_destroy: '',
    total_value_order: '',
    frequency_order: '',
  }

  const data_rule_detail_arr = ref([])

  const customerGroupAccount = reactive({
    code: '',
    title: '',
    desc: '',
    is_default: 0,
    rule: 0,
    rule_detail: [],
    status: 0,
  })

  const openModalCreateGroupCustomer = () => {
    isOpenCreateModal.value = true
  }

  const handleCloseCreate = () => {
    isOpenCreateModal.value = false
  }

  const createGroupCustomer = () => {
    isLoading.value = true
    data_rule_detail_arr.value.push(data_rule_detail)
    let data = {
      code: customerGroupAccount.code,
      title: customerGroupAccount.title,
      desc: customerGroupAccount.desc,
      is_default: customerGroupAccount.is_default,
      rule: customerGroupAccount.rule,
      rule_detail: data_rule_detail_arr.value,
    }
    dataGroupCustomer.createGroupCustomerAction(
      data,
      toast,
      EndTimeLoading,
      handleCloseCreate
    )
  }

  const updateGroupCustomer = () => {
    isLoading.value = true
    let id = detailGroupCustomer.value.id
    let data = {
      code: detailGroupCustomer.value.code,
      title: detailGroupCustomer.value.title,
      desc: detailGroupCustomer.value.desc,
      is_default: detailGroupCustomer.value.is_default,
      rule: detailGroupCustomer.value.rule,
      rule_detail: JSON.parse(
        JSON.stringify(detailGroupCustomer.value.json_rule_detail)
      ),
    }
    dataGroupCustomer.updateGroupCustomerAction(
      id,
      data,
      toast,
      EndTimeLoading,
      handleCloseUpdate
    )
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
