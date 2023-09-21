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
              <p class="longText pl-5 mb-0">Danh sách tài khoản khách hàng</p>
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
          @click="openModalCreateCustomerAccount"
          @cancel="handleCloseCreate"
        >
          <p class="text-[14px] mt-1 px-1">Tạo mới tài khoản khách hàng</p>
        </div>
      </div>
      <a-table
        class="!p-[10px]"
        :columns="columns"
        :data-source="listCustomerAccount"
        :custom-row="rightClick"
        bordered
        row-key="id"
      >
        <template #bodyCell="{ column, record }">
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
    <context-menu :isActive="isActiveAdminGroup"
      ><ul>
        <li @click.prevent="handleOpenResetPass" v-if="role == 'ADMIN'">
          <i class="fal fa-key"></i><a href="#">Reset mật khẩu</a>
        </li>
        <li
          v-if="groupPermission?.status == 'ACTIVE' && role == 'ADMIN'"
          @click.prevent="
            changeStatusAccount(
              Number(groupPermission.id),
              groupPermission.status
            )
          "
        >
          <i class="fal fa-lock"></i><a href="#">Khóa tài khoản</a>
        </li>
        <li
          v-if="groupPermission?.status == 'BLOCK' && role == 'ADMIN'"
          @click.prevent="
            changeStatusAccount(
              Number(groupPermission.id),
              groupPermission.status
            )
          "
        >
          <i class="fal fa-unlock"></i><a href="#">Mở khóa tài khoản</a>
        </li>

        <li @click.prevent="handleCreateOrder" v-if="role == 'ADMIN'">
          <i class="fal fa-key"></i><a href="#">Tạo mới đơn hàng</a>
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

  <modal-delete
    :isOpen="isOpenConfirm"
    :handleCloseDetail="handleCloseConfirm"
    :ConfirmDelete="handleDelete"
  >
  </modal-delete>
  <!--  <loading-overlay :isLoading="isLoading"></loading-overlay>-->
  <!-- tạo mới account-->
  <a-modal
    :visible="isOpenCreateModal"
    @cancel="handleCloseCreate"
    width="540px"
  >
    <div v-show="isDeliveryAddress == true" class="outer">
      <div class="p-4">
        <p>Tạo mới tài khoản khách hàng</p>
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
                            >Tên tài khoản<span class="text-red-600">* </span>
                            <span></span
                          ></label>
                          <div>
                            <input
                              type="text"
                              class="form-control-input"
                              placeholder="Nhập tên tài khoản"
                              v-model="customerAccount.username"
                            />
                          </div>
                        </div>
                        <div>
                          <label for="" class="form-group-label"
                            >Họ và tên<span class="text-red-600"></span
                          ></label>
                          <div>
                            <input
                              type="text"
                              class="form-control-input"
                              placeholder="Nhập họ và tên"
                              v-model="customerAccount.fullname"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-small">
                        <div>
                          <label for="" class="form-group-label"
                            >Ngày sinh<span class="text-red-600">* </span>
                            <span></span
                          ></label>
                          <div>
                            <a-space direction="vertical" :size="12">
                              <a-date-picker
                                v-model:value="value_birth_day"
                                :format="dateFormat"
                              />
                            </a-space>
                          </div>
                        </div>
                        <div>
                          <label for="" class="form-group-label"
                            >Giới tính<span class="text-red-600">* </span>
                            <span></span
                          ></label>
                          <div>
                            <select
                              v-model="customerAccount.gender"
                              class="form-control-input"
                            >
                              <option disabled value="">Chọn giới tính</option>
                              <option value="1">Nam</option>
                              <option value="0">Nữ</option>
                              <option value="2">Khác</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label for="" class="form-group-label"
                            >Email<span class="text-red-600">* </span>
                            <span></span
                          ></label>
                          <div>
                            <input
                              type="text"
                              class="form-control-input"
                              placeholder="Nhập email"
                              v-model="customerAccount.email"
                            />
                          </div>
                        </div>

                        <div>
                          <label for="" class="form-group-label"
                            >Số điện thoại<span class="text-red-600">* </span>
                            <span></span
                          ></label>
                          <div>
                            <input
                              type="text"
                              class="form-control-input"
                              placeholder="Nhập số điện thoại"
                              v-model="customerAccount.phone"
                            />
                          </div>
                        </div>

                        <div>
                          <label for="" class="form-group-label"
                            >Password<span class="text-red-600">* </span>
                            <span></span
                          ></label>
                          <div>
                            <input
                              type="password"
                              class="form-control-input"
                              placeholder="Nhập mật khẩu"
                              v-model="customerAccount.password"
                            />
                          </div>
                        </div>
                        <div>
                          <label for="" class="form-group-label"
                            >Nhập lại password<span class="text-red-600"
                              >*
                            </span>
                            <span></span
                          ></label>
                          <div>
                            <input
                              type="password"
                              class="form-control-input"
                              placeholder="Nhập lại mật khẩu"
                              v-model="password_confirmation"
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
      <a-button key="submit" type="primary" @click="createCustomerAccount()"
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
        <p>Cập nhật tài khoản khách hàng</p>
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
                            >Tên tài khoản<span class="text-red-600">* </span>
                            <span></span
                          ></label>
                          <div>
                            <input
                              type="text"
                              class="form-control-input"
                              placeholder="Nhập tên tài khoản"
                              v-model="detailCustomerAccount.username"
                            />
                          </div>
                        </div>
                        <div>
                          <label for="" class="form-group-label"
                            >Họ và tên<span class="text-red-600"></span
                          ></label>
                          <div>
                            <input
                              type="text"
                              class="form-control-input"
                              placeholder="Nhập họ và tên"
                              v-model="detailCustomerAccount.fullname"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-small">
                        <div>
                          <label for="" class="form-group-label"
                            >Ngày sinh<span class="text-red-600">* </span>
                            <span></span
                          ></label>
                          <div>
                            <a-space direction="vertical" :size="12">
                              <a-date-picker
                                v-model:value="birth_day_dd_mm_yy"
                                :format="dateFormat"
                              />
                            </a-space>
                          </div>
                        </div>
                        <div>
                          <label for="" class="form-group-label"
                            >Giới tính<span class="text-red-600">* </span>
                            <span></span
                          ></label>
                          <div>
                            <select
                              v-model="detailCustomerAccount.gender"
                              class="form-control-input"
                            >
                              <option disabled value="">Chọn giới tính</option>
                              <option value="1">Nam</option>
                              <option value="0">Nữ</option>
                              <option value="2">Khác</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label for="" class="form-group-label"
                            >Email<span class="text-red-600">* </span>
                            <span></span
                          ></label>
                          <div>
                            <input
                              type="text"
                              class="form-control-input"
                              placeholder="Nhập email"
                              v-model="detailCustomerAccount.email_personal"
                            />
                          </div>
                        </div>

                        <div>
                          <label for="" class="form-group-label"
                            >Số điện thoại<span class="text-red-600">* </span>
                            <span></span
                          ></label>
                          <div>
                            <input
                              type="text"
                              class="form-control-input"
                              placeholder="Nhập số điện thoại"
                              v-model="detailCustomerAccount.phone"
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
      <a-button key="submit" type="primary" @click="updateCustomerAccount()"
        >Xác nhận
      </a-button>
      <a-button key="back" @click="handleCloseUpdate">Hủy</a-button>
    </template>
    <loading-overlay :isLoading="isLoading"></loading-overlay>
  </a-modal>
  <!-- reset mk -->
  <a-modal
    :visible="isOpenResetPass"
    :footer="null"
    @cancel="handleCloseDetail"
    class="rounded-tl-lg rounded-tr-lg"
  >
    <div>
      <h1 class="header-modal">Reset mật khẩu - {{ fullnameReset }}</h1>
      <div class="text-left p-2 w-[520px]">
        <div class="form-small">
          <label for="" class="form-group-label"
            >Mật khẩu mới <span class="text-red-600">*</span></label
          >
          <div>
            <input
              type="password"
              id="password"
              name="password"
              class="form-control-input"
              placeholder="Ít nhất 4 ký tự"
              v-model="changePassword.password"
            />
          </div>
        </div>
        <div class="form-small">
          <label for="" class="form-group-label"
            >Xác nhận mật khẩu mới <span class="text-red-600">*</span></label
          >
          <div>
            <input
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              class="form-control-input"
              placeholder="Gõ lại mật khẩu mới"
              v-model="changePassword.password_confirmation"
            />
          </div>
        </div>
      </div>
      <div class="bg-button-modal">
        <button class="button-modal" @click="resetPassword()">Cập nhật</button>
        <button class="button-close-modal" @click="handleCloseDetail">
          Hủy bỏ
        </button>
      </div>
    </div>
  </a-modal>
  <!-- tạo mới đơn hàng-->
  <a-modal
    :visible="isOpenCreateOrderModal"
    @cancel="handleCloseCreateOrder"
    width="88%"
  >
    <div class="outer">
      <div class="p-4">
        <p>Tạo mới đơn hàng</p>
        <div class="w-full inner">
          <Transition :duration="550" name="nested">
            <div
              class="text-left p-1 w-full h-full format-scroll form-plus-over"
            >
              <div class="w-full">
                <Transition name="slide-up">
                  <div class="outer">
                    <div>
                      <div class="grid grid-cols-2 gap-2 form-small">
                        <div>
                          <label for="" class="form-group-label"
                            >Tên tài khoản<span class="text-red-600">* </span>
                            <span></span
                          ></label>
                          <div>
                            <input
                              disabled
                              type="text"
                              class="form-control-input disable-input"
                              placeholder="Nhập tên tài khoản"
                              v-model="customerOrder.username"
                            />
                          </div>
                        </div>
                        <div>
                          <label for="" class="form-group-label"
                            >Họ và tên<span class="text-red-600"></span
                          ></label>
                          <div>
                            <input
                              disabled
                              type="text"
                              class="form-control-input disable-input"
                              placeholder="Nhập họ và tên"
                              v-model="customerOrder.fullname"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-small">
                        <div class="grid grid-cols-2 gap-2 form-small">
                          <div>
                            <label for="" class="form-group-label"
                              >Giới tính<span class="text-red-600">* </span>
                              <span></span
                            ></label>
                            <div>
                              <select
                                disabled
                                v-model="customerOrder.gender"
                                class="form-control-input disable-input"
                              >
                                <option disabled value="">
                                  Chọn giới tính
                                </option>
                                <option value="1">Nam</option>
                                <option value="0">Nữ</option>
                                <option value="2">Khác</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <label for="" class="form-group-label"
                              >Ngày sinh<span class="text-red-600">* </span>
                              <span></span
                            ></label>
                            <div>
                              <a-space :size="14">
                                <a-date-picker
                                  class="form-control-input birth-day-customer disable-input"
                                  disabled
                                  v-model:value="birth_day_dd_mm_yy"
                                  :format="dateFormat"
                                />
                              </a-space>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label for="" class="form-group-label"
                            >Email<span class="text-red-600">* </span>
                            <span></span
                          ></label>
                          <div>
                            <input
                              disabled
                              type="text"
                              class="form-control-input disable-input"
                              placeholder="Nhập email"
                              v-model="customerOrder.email"
                            />
                          </div>
                        </div>

                        <div>
                          <label for="" class="form-group-label"
                            >Số điện thoại<span class="text-red-600">* </span>
                            <span></span
                          ></label>
                          <div>
                            <input
                              disabled
                              type="text"
                              class="form-control-input disable-input"
                              placeholder="Nhập số điện thoại"
                              v-model="customerOrder.phone"
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
      <a-button key="submit" type="primary" @click="createCustomerOrder()"
        >Xác nhận
      </a-button>
      <a-button key="back" @click="handleCloseCreate">Hủy</a-button>
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
  import { useCustomerAccount } from '../../../store/modules/customers/customerAccount'
  import { CustomerPasswordSetting } from '../../../store/modules/accounts/password-customer'
  //   import { storeToRefs } from 'pinia'
  import ModalDelete from '../../../components/modal/ModalConfirmDelelte.vue'
  import { storeToRefs } from 'pinia'
  import dayjs, { Dayjs } from 'dayjs'
  import {
    FormatModalX,
    FormatModalY,
  } from '../../../components/constants/FormatAll'
  import { usePasswordSetting } from '../../../store/modules/accounts/password'

  const route = useRoute()
  const router = useRouter()
  const toast = useToast()
  const dataCustomerAccount = useCustomerAccount()
  dataCustomerAccount.getAllCustomerAccountPaginateAction()
  const { listCustomerAccount, detailCustomerAccount, birth_day_dd_mm_yy } =
    storeToRefs(dataCustomerAccount)
  const isCheck = ref<boolean>(false)
  const isInfor = ref<boolean>(true)
  const isLoading = ref<boolean>(false)
  const isOpenConfirm = ref<boolean>(false)
  const isDeliveryAddress = ref<boolean>(true)
  const isOpenConfirmDefault = ref<boolean>(false)
  const isOpenCreateModal = ref<boolean>(false)
  const isOpenUpdateModal = ref<boolean>(false)
  const isOpenResetPass = ref<boolean>(false)
  const isActiveAdminGroup = ref<boolean>(false)
  const isOpenCreateOrderModal = ref<boolean>(false)
  const groupPermission = ref()
  const fullnameReset = ref()
  const role = localStorage.getItem('role')
  const passSetting = CustomerPasswordSetting()

  const dateFormat = 'DD/MM/YYYY'
  const dateFormatRequest = 'YYYY/MM/DD'
  const value_birth_day = ref<Dayjs>(dayjs('01/01/2015', dateFormat))

  const password_confirmation = ref('')
  const changePassword = reactive({
    password: '',
    password_confirmation: '',
  })

  const columns = [
    {
      title: 'Mã',
      dataIndex: 'code',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
    },
    {
      title: 'Tên tài khoản',
      dataIndex: 'username',
    },
    {
      title: 'Họ và tên',
      dataIndex: 'fullname',
      key: 'gender',
    },
    {
      title: 'mail cá nhân',
      dataIndex: 'email_personal',
    },
    {
      title: 'số điện thoại',
      dataIndex: 'phone',
    },
    {
      title: 'Thao tác',
      dataIndex: 'id',
      key: 'id',
    },
  ]

  const rightClick = (record: any) => {
    return {
      oncontextmenu: (event: MouseEvent) => {
        event.preventDefault()
        console.log('Right-clicked row:', record)
        groupPermission.value = record
        fullnameReset.value = record?.fullname
        idSelected.value = record?.id

        customerOrder.username = record?.username
        customerOrder.code = record?.code
        customerOrder.email = record?.email_personal
        customerOrder.fullname = record?.fullname
        customerOrder.phone = record?.phone
        customerOrder.gender = record?.gender

        dataCustomerAccount.getDetailCustomerAccountAction(record?.id)

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

  const addOptions = () => {
    const data = {
      title: '',
      address_country_id: '1',
      address_district_id: '',
      address_ward_id: '',
      address_state_id: '',
      address_detail: '',
      is_default: '',
    }
  }

  const navigateCreateOrder = () => {
    router.push('create-order')
  }

  const handleCloseCreateOrder = () => {
    isOpenCreateOrderModal.value = false
  }

  const handleCreateOrder = () => {
    isOpenCreateOrderModal.value = true
  }

  const handleOpenResetPass = () => {
    isOpenResetPass.value = true
  }

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
    dataCustomerAccount.getDetailCustomerAccountAction(id)
    isOpenUpdateModal.value = true
  }

  const handleCloseDetail = () => {
    isOpenResetPass.value = false
    changePassword.password = ''
    changePassword.password_confirmation = ''
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
    dataCustomerAccount.deleteCustomerAccountAction(
      Number(idSelected.value),
      toast,
      EndTimeLoading,
      handleCloseConfirm
    )
  }
  const openModalCreateCustomerAccount = () => {
    isOpenCreateModal.value = true
  }

  const handleCloseCreate = () => {
    isOpenCreateModal.value = false
  }

  const customerAccount = reactive({
    code: '',
    username: '',
    fullname: '',
    birth_day: '',
    gender: '',
    email: '',
    phone: '',
    password: '',
  })

  const createCustomerAccount = () => {
    isLoading.value = true
    let data = {
      code: customerAccount.code,
      username: customerAccount.username,
      fullname: customerAccount.fullname,
      birth_day: value_birth_day.value.format(dateFormatRequest),
      gender: customerAccount.gender,
      email_personal: customerAccount.email,
      phone: customerAccount.phone,
      password: customerAccount.password,
      password_confirmation: password_confirmation.value,
      web_code: 'HWK',
    }
    dataCustomerAccount.createCustomerAccountAction(
      data,
      toast,
      EndTimeLoading,
      handleCloseCreate
    )
  }

  const customerOrder = reactive({
    code: '',
    username: '',
    fullname: '',
    birth_day: '',
    gender: '',
    email: '',
    phone: '',
    password: '',
  })

  const createCustomerOrder = () => {
    isLoading.value = true
    let data = {
      code: customerOrder.code,
      username: customerOrder.username,
      fullname: customerOrder.fullname,
      birth_day: birth_day_dd_mm_yy.value.format(dateFormatRequest),
      gender: customerOrder.gender,
      email_personal: customerOrder.email,
      phone: customerOrder.phone,
      web_code: 'HWK',
    }
  }

  const updateCustomerAccount = () => {
    isLoading.value = true
    let id = detailCustomerAccount.value.id
    let data = {
      code: detailCustomerAccount.value.code,
      username: detailCustomerAccount.value.username,
      fullname: detailCustomerAccount.value.fullname,
      birth_day: birth_day_dd_mm_yy.value.format(dateFormatRequest),
      gender: detailCustomerAccount.value.gender,
      email_personal: detailCustomerAccount.value.email_personal,
      phone: detailCustomerAccount.value.phone,
      web_code: 'HWK',
    }
    dataCustomerAccount.updateCustomerAccountAction(
      id,
      data,
      toast,
      EndTimeLoading,
      handleCloseUpdate
    )
  }

  const changeStatusAccount = (id: number, status: string) => {
    isLoading.value = true
    let data = {
      user_id: id,
      status: status == 'BLOCK' ? 'ACTIVE' : 'BLOCK',
    }
    dataCustomerAccount.changeStatusAccountAction(data, toast, EndTimeLoading)
  }

  const resetPassword = () => {
    let data = {
      password: changePassword.password,
    }
    if (
      changePassword.password != '' &&
      changePassword.password == changePassword.password_confirmation
    ) {
      isLoading.value = true
      passSetting.resetPasswordAction(
        Number(idSelected.value),
        data,
        toast,
        EndTimeLoading,
        handleCloseDetail
      )
    } else if (changePassword.password == '') {
      toast.error('Vui lòng nhập mật khẩu')
    } else {
      toast.error('Xác nhận mật khẩu phải trùng với mật khẩu mới')
    }
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

  .birth-day-customer {
    height: 37px !important;
    width: 246px !important;
    background-color: #e5e7eb !important;
  }
  .disable-input {
    background-color: #e5e7eb;
    color: #111 !important;
  }
  .ant-picker-input > input[disabled] {
    color: #111 !important;
  }
</style>
