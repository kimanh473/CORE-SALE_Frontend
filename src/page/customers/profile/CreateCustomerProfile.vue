<template>
  <base-layout>
    <template v-slot:sidebar>
      <!-- <div class="logo">
          <img src="../assets/images/btp.png" />
        </div> -->
      <SideBar/>
    </template>
    <template v-slot:header>
      <Header :is-show-search="false">
        <template v-slot:name
        ><p class="pl-5 text-[16px]">Tạo mới thông tin khác hàng</p></template
        >
      </Header>
    </template>
    <template v-slot:content class="relative">
      <Transition name="slide-up">
        <div>
          <a-tabs
              v-model:activeKey="activeKey"
              animated
              style="padding-left: 15px"
          >
            <a-tab-pane key="1" tab="Thông tin khách hàng"
            >
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
                                >Mã<span class="text-red-600">* </span>
                                  <span></span
                                  ></label>
                                <div>
                                  <input
                                      type="text"
                                      class="form-control-input"
                                      placeholder="Nhập mã khách hàng"
                                      v-model="customerProfile.code"
                                  />
<!--                                  <p v-if="messageError?.code" class="text-red-600">
                                    {{ messageError?.code[0] }}
                                  </p>-->
                                </div>
                              </div>
                              <div>
                                <label for="" class="form-group-label"
                                >Tên<span class="text-red-600"></span
                                ></label>
                                <div>
                                  <input
                                      type="text"
                                      class="form-control-input"
                                      placeholder="Nhập tên khách hàng"
                                      v-model="customerProfile.name"
                                  />
<!--                                  <p v-if="messageError?.name" class="text-red-600">
                                    {{ messageError?.name[0] }}
                                  </p>-->
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
                                    <a-date-picker v-model:value="value_birth_day" :format="dateFormat"/>
                                  </a-space>
<!--                                  <p
                                      v-if="messageError?.birth_day"
                                      class="text-red-600"
                                  >
                                    {{ messageError?.birth_day[0] }}
                                  </p>-->
                                </div>
                              </div>
                              <div>
                                <label for="" class="form-group-label"
                                >Giới tính<span class="text-red-600">* </span>
                                  <span></span
                                  ></label>
                                <div>
                                  <select v-model="customerProfile.gender" class="form-control-input">
                                    <option disabled value="">Chọn giới tính</option>
                                    <option value="1">Nam</option>
                                    <option value="0">Nữ</option>
                                    <option value="2">Khác</option>
                                  </select>
<!--                                  <p
                                      v-if="messageError?.gender"
                                      class="text-red-600"
                                  >
                                    {{ messageError?.gender[0] }}
                                  </p>-->
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
                                      v-model="customerProfile.email"
                                  />
<!--                                  <p
                                      v-if="messageError?.email"
                                      class="text-red-600"
                                  >
                                    {{ messageError?.email[0] }}
                                  </p>-->
                                </div>
                              </div>

                              <div>
                                <label for="" class="form-group-label"
                                >Số điện thoại<span class="text-red-600">* </span>
                                  <span></span
                                  ></label>
                                <div>
                                  <input
                                      type="number"
                                      class="form-control-input"
                                      placeholder="Nhập số điện thoại"
                                      v-model="customerProfile.phone"
                                  />
<!--                                  <p
                                      v-if="messageError?.phone"
                                      class="text-red-600"
                                  >
                                    {{ messageError?.phone[0] }}
                                  </p>-->
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
            </a-tab-pane>
            <a-tab-pane key="2" tab="Địa chỉ giao hàng">
              <div class="flex">
                <Transition name="slide-up">
                  <div v-show="isDeliveryAddress == true" class="outer">
                    <div>
                      <div
                          v-for="(item, index) in dataOption"
                          :key="index"
                          class="flex"
                      >
                        <div class="form-large border-b-[1px] border-slate-300 ">

                          <div class="">
                            <label for="" class="form-group-label"
                            >Họ và tên người nhận<span class="text-red-600">* </span>
                              <span></span
                              ></label>
                            <div>
                              <input
                                  type="text"
                                  class="form-control-input"
                                  placeholder="Nhập tên địa chỉ"
                                  v-model="item.title"
                              />
<!--                              <p
                                  v-if="messageError?.title"
                                  class="text-red-600"
                              >
                                {{ messageError?.title[0] }}
                              </p>-->
                            </div>
                          </div>

                          <div class="">
                            <div class="flex ">
                              <div class="flex-1 mr-5">
                                <label for="" class="form-group-label"
                                >Tỉnh/Thành phố{{ index }}<span class="text-red-600">* </span>
                                  <span></span
                                  ></label>
                                <div>
                                  <a-select
                                      show-search
                                      class="form-control-input"
                                      placeholder="Chọn thành phố"
                                      :options="listAllCity"
                                      v-model:value="dataOption[index].address_state_id"
                                      @change="handleChangeCity(Number(dataOption[index].address_state_id),listAllCity,index)"
                                      :fieldNames="{ label: 'title', value: 'ID' }"
                                  >
                                  </a-select>
<!--                                  <p
                                      v-if="messageError?.address_state_id"
                                      class="text-red-600"
                                  >
                                    {{ messageError?.address_state_id[0] }}
                                  </p>-->
                                </div>
                              </div>
                              <div class="flex-1 mr-5">
                                <label for="" class="form-group-label"
                                >Quận/Huyện<span class="text-red-600">* </span>
                                  <span></span
                                  ></label>
                                <div>
                                  <a-select
                                      show-search
                                      class="form-control-input"
                                      placeholder="Chọn thành phố"
                                      :options="listAllDistrict"
                                      v-model:value="dataOption[index].address_district_id"
                                      @change="handleChangeDistrict(Number(dataOption[index].address_district_id),listAllDistrict,index)"
                                      :fieldNames="{ label: 'title', value: 'ID' }"
                                  >
                                  </a-select>
<!--                                  <p
                                      v-if="messageError?.address_district_id"
                                      class="text-red-600"
                                  >
                                    {{ messageError?.address_district_id[0] }}
                                  </p>-->
                                </div>
                              </div>
                              <div class="flex-1">
                                <label for="" class="form-group-label"
                                >Xã/Phường/Thị trấn<span class="text-red-600">* </span>
                                  <span></span
                                  ></label>
                                <div>

                                  <a-select
                                      show-search
                                      class="form-control-input"
                                      placeholder="Chọn xã, phường, thị trấn"
                                      :options="listAllWard"
                                      v-model:value="dataOption[index].address_ward_id"
                                      @change="handleChangeWard(Number(dataOption[index].address_ward_id),listAllWard,index)"
                                      :fieldNames="{ label: 'title', value: 'ID' }"
                                  >
                                  </a-select>

<!--                                  <p
                                      v-if="messageError?.address_ward_id"
                                      class="text-red-600"
                                  >
                                    {{ messageError?.address_ward_id[0] }}
                                  </p>-->
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="mb-5">
                            <label for="" class="form-group-label"
                            >Địa chỉ cụ thể<span class="text-red-600"> </span>
                              <span></span
                              ></label>
                            <div>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="5"
                            class="form-control-input"
                            v-model="item.address_detail"
                        ></textarea>
                            </div>
                          </div>
                        </div>

                        <!-- <a-switch v-model:checked="checked" /> &nbsp; Sử dụng làm điểm
                          nhận -->
                      </div>
                    </div>
                    <div @click="addOptions">
                      <i class="fal fa-plus-circle icon-plus fa-lg"></i>
                    </div>
                  </div>
                </Transition>

              </div>
            </a-tab-pane>
          </a-tabs>
        </div>
      </Transition>
    </template>
    <template v-slot:footer
    >
      <div class="bg-slate-300">
        <div class="p-4 text-left">
          <button class="button-modal" @click="createCustomerProfile()">Tạo mới</button>
          <button class="button-close-modal" @click="router.go(-1)">
            Hủy bỏ
          </button>
        </div>
      </div>
    </template
    >
  </base-layout>
  <loading-overlay :isLoading="isLoading"></loading-overlay>
</template>

<script setup lang="ts">
import BaseLayout from '../../../layout/baseLayout.vue'
import SideBar from '../../../components/common/SideBar.vue'
import Header from '../../../components/common/Header.vue'

import dayjs, {Dayjs} from 'dayjs';
import {storeToRefs} from 'pinia'
import {ref, reactive} from 'vue'
import {useToast} from 'vue-toastification'
import {useRouter} from 'vue-router'
import {useLocation} from "../../../store/modules/location/location";
import {useCustomerProfile} from "../../../store/modules/customers/customerProfile";

const router = useRouter()
const toast = useToast()
const isInfor = ref<boolean>(true)
const isDeliveryAddress = ref<boolean>(true)
const isContact = ref<boolean>(true)
const checked = ref<boolean>(false)
const isLoading = ref<boolean>(false)
const activeKey = ref('1')

const dateFormat = 'DD/MM/YYYY';
const dateFormatRequest = 'YYYY/MM/DD';
const value_birth_day = ref<Dayjs>(dayjs('01/01/2015', dateFormat));

const dataCustomerProfile = useCustomerProfile();
const dataLocation = useLocation()

dataLocation.getListAllCityAction()

const {listAllCity, listAllDistrict, listAllWard} = storeToRefs(dataLocation)

//const { messageError } = storeToRefs(dataCustomerProfile)

// const handleAdd = ()

const handleChangeCity = (value:number,option:any,index:number) => {
  let arr = option.filter((item:any)=>item.ID ==value)
  dataLocation.getListAllDistrictAction(value)
  dataOption[index].address_detail = arr[0].title + ', ' + 'Việt Nam'
}

const handleChangeDistrict = (value:number,option:any,index:number) => {
  let arr = option.filter((item:any)=>item.ID ==value)
  dataLocation.getListAllWardAction(value)
  dataOption[index].address_detail = arr[0].title + ', ' + dataOption[index].address_detail
}

const handleChangeWard = (value:number,option:any,index:number) => {
  let arr = option.filter((item:any)=>item.ID ==value)
  dataOption[index].address_detail = arr[0].title + ', ' + dataOption[index].address_detail
}

const dataOption = reactive([
  {
    title:'',
    address_country_id: '1',
    address_district_id: '',
    address_ward_id: '',
    address_state_id: '',
    address_detail: '',
  },
])

const addOptions = () => {
  const data = {
    title: '',
    address_country_id: '1',
    address_district_id: '',
    address_ward_id: '',
    address_state_id: '',
    address_detail: '',
  }
  dataOption.push(data)
}

const removeOptions = (index: number) => {
  dataOption.splice(index, 1)
}

const arrayInvent = ref([])
const arrayWeb = ref([])

const getListWeb = (webList: string[], inventList: string[]) => {
  arrayWeb.value = webList
  arrayInvent.value = inventList
}

const checkedInvent = (code: string) => {
  if (arrayInvent?.value?.indexOf(code) > -1) {
    return true
  } else {
    return false
  }
}

const EndTimeLoading = () => {
  isLoading.value = false
}

const customerProfile = reactive({
  code: '',
  name: '',
  birth_day: '',
  gender: '',
  email: '',
  phone: '',
  address_country_id: '1',
  address_district_id: '',
  address_ward_id: '',
  address_state_id: '',
  address_detail: '',
  delivery_address: ''
})

const createCustomerProfile = () => {
  let data = {
    code: customerProfile.code,
    name: customerProfile.name,
    birth_day: value_birth_day.value.format(dateFormatRequest),
    gender: customerProfile.gender,
    email: customerProfile.email,
    phone: customerProfile.phone,
    detail_delivery_address: dataOption,
  }
  dataCustomerProfile.createCustomerProfileAction(data, toast, router, EndTimeLoading)
}

</script>

<style></style>
