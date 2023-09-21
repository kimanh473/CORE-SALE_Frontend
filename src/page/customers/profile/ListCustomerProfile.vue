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
              <p class="longText pl-5 mb-0">
                Danh sách khách hàng {{ account_exist }}
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
          title="Tạo mới web"
          @click="CreateCustomerProfile()"
        >
          <p class="text-[14px] mt-1 px-1">Tạo mới thông tin khách hàng</p>
        </div>
      </div>
      <a-table
        class="!p-[10px]"
        :columns="columns"
        :data-source="listCustomerProfile"
        :custom-row="rightClick"
        bordered
        row-key="id"
        ><template #bodyCell="{ column, record }">
          <template v-if="column.key === 'birth_day'">
            {{ dayjs(record.birth_day).format(dateFormat) }}
          </template>
          <template v-if="column.key === 'gender'">
            <p v-if="record.gender == '1'">Nam</p>
            <p v-if="record.gender == '0'">Nữ</p>
            <p v-if="record.gender == '2'">Khác</p>
          </template>
          <template v-if="column.key === 'id'">
            <a @click="navigateUpdate(record.id)">Sửa</a>&nbsp;|&nbsp;<a
              @click="handleOpenDelete(record)"
              >Xóa</a
            >
          </template>
        </template>
        <template #switch="{ text }">
          <a-switch v-model:checked="isCheck" />
        </template> </a-table
    ></template>

    <template v-slot:footer>footer</template>
  </base-layout>

  <div>
    <context-menu :isActive="isActiveAdminGroup"
      ><ul>
        <li
          @click.prevent="handleOpenCreateAccount"
          v-if="account_exist == '0' && role == 'ADMIN'"
        >
          <i class="fal fa-key"></i><a href="#">Tạo mới tài khoản</a>
        </li>
      </ul>
    </context-menu>
  </div>

  <!-- tao moi tai khoan -->
  <a-modal
    :visible="isOpenCreateAccount"
    @cancel="handleCloseCreateAccount"
    width="540px"
  >
    <div class="outer">
      <div class="p-4">
        <p>Tạo mới tài khoản khách hàng</p>
        <div class="w-full inner">
          <Transition :duration="550" name="nested">
            <div
              class="text-left p-2 w-full h-full format-scroll form-plus-over"
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
      <a-button key="back" @click="handleCloseCreateAccount">Hủy</a-button>
    </template>
    <loading-overlay :isLoading="isLoading"></loading-overlay>
  </a-modal>

  <modal-delete
    :isOpen="isOpenConfirm"
    :handleCloseDetail="handleCloseConfirm"
    :ConfirmDelete="handleDelete"
  >
  </modal-delete>
  <loading-overlay :isLoading="isLoading"></loading-overlay>
</template>

<script setup lang="ts">
  import BaseLayout from '../../../layout/baseLayout.vue'
  import SideBar from '../../../components/common/SideBar.vue'
  import Header from '../../../components/common/Header.vue'
  import ContextMenu from '../../../components/common/ContextMenu.vue'
  import { useRoute, useRouter } from 'vue-router'
  import { ref, reactive } from 'vue'
  import { useToast } from 'vue-toastification'
  import { useCustomerProfile } from '../../../store/modules/customers/customerProfile'
  //   import { storeToRefs } from 'pinia'
  import ModalDelete from '../../../components/modal/ModalConfirmDelelte.vue'
  import { storeToRefs } from 'pinia'
  import { useLocation } from '../../../store/modules/location/location'
  import {
    FormatModalX,
    FormatModalY,
  } from '../../../components/constants/FormatAll'
  import dayjs, { Dayjs } from 'dayjs'
  import { useCustomerAccount } from '../../../store/modules/customers/customerAccount'
  const route = useRoute()
  const router = useRouter()
  const toast = useToast()
  const dataCustomerProfile = useCustomerProfile()
  const dataLocation = useLocation()
  const dataCustomerAccount = useCustomerAccount()
  const groupPermission = ref()
  const isActiveAdminGroup = ref<boolean>(false)
  const isOpenCreateAccount = ref<boolean>(false)
  const fullnameReset = ref()
  const checkAccountExist = ref()
  const role = localStorage.getItem('role')
  const password_confirmation = ref('')
  const dateFormat = 'DD/MM/YYYY'
  const dateFormatRequest = 'YYYY/MM/DD'

  dataCustomerProfile.getAllCustomerProfilePaginateAction()

  const { listCustomerProfile, birth_day_dd_mm_yy, account_exist } =
    storeToRefs(dataCustomerProfile)
  console.log(listCustomerProfile.value)

  const isCheck = ref<boolean>(false)
  const isLoading = ref<boolean>(false)
  const isOpenConfirm = ref<boolean>(false)
  const columns = [
    {
      title: 'Mã',
      dataIndex: 'code',
    },
    {
      title: 'Tên',
      dataIndex: 'name',
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'birth_day',
      key: 'birth_day',
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Địa chỉ nhận hàng',
      dataIndex: 'list_address',
    },
    {
      title: 'Địa chỉ thanh toán',
      dataIndex: 'list_pay_address',
    },
    {
      title: 'Thao tác',
      dataIndex: 'id',
      key: 'id',
    },
  ]

  const customerAccount = reactive({
    code: '',
    profile_code: '',
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
      profile_code: customerAccount.profile_code,
      username: customerAccount.username,
      fullname: customerAccount.fullname,
      birth_day: birth_day_dd_mm_yy.value.format(dateFormatRequest),
      gender: customerAccount.gender,
      email_personal: customerAccount.email,
      phone: customerAccount.phone,
      password: customerAccount.password,
      password_confirmation: password_confirmation.value,
      web_code: 'HWK',
    }
    dataCustomerAccount.createCustomerAccountInListProfileAction(
      data,
      toast,
      EndTimeLoading,
      handleCloseCreateAccount
    )
  }

  const rightClick = (record: any) => {
    return {
      oncontextmenu: (event: MouseEvent) => {
        event.preventDefault()
        console.log('Right-clicked row:', record)
        groupPermission.value = record
        fullnameReset.value = record?.fullname
        customerAccount.username = record?.phone
        customerAccount.email = record?.email
        customerAccount.phone = record?.phone
        customerAccount.gender = record?.gender
        customerAccount.fullname = record?.name
        customerAccount.profile_code = record?.code

        idSelected.value = record?.id

        dataCustomerProfile.getCheckAccountCustomerExist(record?.code)

        dataCustomerProfile.getDetailCustomerProfileAction(Number(record?.id))

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

  const handleOpenCreateAccount = () => {
    isOpenCreateAccount.value = true
  }

  const handleCloseCreateAccount = () => {
    isOpenCreateAccount.value = false
  }

  const handleCloseConfirm = () => {
    isOpenConfirm.value = false
  }
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const CreateCustomerProfile = () => {
    router.push('/create-customer-profile')
  }
  const navigateUpdate = (id: number) => {
    router.push(`/update-customer-profile/${id}`)
  }
  const idSelected = ref()
  const handleOpenDelete = (record: any) => {
    isOpenConfirm.value = true
    idSelected.value = record.id
  }
  const handleDelete = () => {
    isLoading.value = true
    dataCustomerProfile.deleteCustomerProfileAction(
      Number(idSelected.value),
      toast,
      EndTimeLoading,
      handleCloseConfirm
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
