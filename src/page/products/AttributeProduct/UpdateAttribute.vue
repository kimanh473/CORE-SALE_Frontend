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
        <template v-slot:name
          ><p class="pl-5 text-[16px]">Tạo mới thuộc tính</p></template
        >
      </Header>
    </template>
    <template v-slot:content class="relative flex">
      <Transition :duration="550" name="nested">
        <div
          class="text-left px-4 py-2 w-full h-full format-scroll form-plus-over flex"
        >
          <!-- <a-anchor class="w-[200px] h-[300px] border-2">
            <a-anchor-link href="#infor-common" title="Thông tin chung" />
            <a-anchor-link href="#infor-contact" title="Thông tin liên lạc" />
            <a-anchor-link href="#address" title="Địa chỉ" />
          </a-anchor> -->
          <div id="infor-common" class="w-full ml-4">
            <h4
              class="form-section-title form-small cursor-pointer"
              @click="isInfor = !isInfor"
            >
              <span v-show="isInfor == true">
                <i class="fas fa-chevron-down cursor-pointer"></i>
              </span>
              <span v-show="isInfor == false"
                ><i class="fas fa-chevron-right cursor-pointer"></i
              ></span>
              Cơ bản
            </h4>
            <Transition name="slide-up">
              <div v-show="isInfor == true" class="outer">
                <div>
                  <div class="form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Tên thuộc tính<span class="text-red-600">* </span>
                        <span></span
                      ></label>
                      <div>
                        <input
                          type="text"
                          class="form-control-input"
                          placeholder="Nhập tên kho"
                        />
                        <p v-if="messageError?.title" class="text-red-600">
                          {{ messageError?.title[0] }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Định dạng<span class="text-red-600"></span
                      ></label>
                      <div>
                        <a-select
                          class="form-control-input"
                          placeholder="Chọn định dạng"
                          :options="options1"
                          @change="handleChange"
                        >
                        </a-select>
                        <p v-if="messageError?.code" class="text-red-600">
                          {{ messageError?.code[0] }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="border border-gray-800 w-[500px] p-4"
                    v-if="showManageChoice"
                  >
                    <h1>Quản lý lựa chọn</h1>
                    <div class="flex">
                      <p class="pr-[100px]">Tiêu đề</p>
                      <p>Mặc định</p>
                    </div>
                    <div
                      v-for="(item, index) in dataOption"
                      :key="index"
                      class="flex"
                    >
                      <div class="pr-[100px]">
                        <a-checkbox
                          v-model="item.defaultOption"
                          class="!pl-[16px]"
                        ></a-checkbox>
                      </div>
                      <div class="flex items-end">
                        <a-input
                          v-model:value="item.title"
                          placeholder="Nhập tiêu đề"
                        ></a-input>
                        <i
                          @click="removeOptions(index)"
                          class="fal fa-times icon-close"
                        ></i>
                      </div>
                    </div>
                    <div @click="addOptions">
                      <i class="fal fa-plus-circle icon-plus fa-lg"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
            <div v-show="isInfor == false">
              <h2
                @click="isInfor = !isInfor"
                class="cursor-pointer form-group-label"
              >
                Tên nguồn*, Mã *, Mặc định ( nút bật tắt) Mô tả
              </h2>
            </div>

            <div id="infor-contact" class="inner">
              <h4
                class="form-section-title form-small cursor-pointer"
                @click="isContact = !isContact"
              >
                <span v-show="isContact == true">
                  <i class="fas fa-chevron-down cursor-pointer"></i>
                </span>
                <span v-show="isContact == false"
                  ><i class="fas fa-chevron-right cursor-pointer"></i
                ></span>
                Nâng cao
              </h4>
              <Transition name="slide-up">
                <div v-show="isContact == true">
                  <div class="form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Website áp dụng<span class="text-red-600">* </span>
                        <span></span
                      ></label>
                      <div>
                        <input type="text" class="form-control-input" />
                        <p
                          v-if="messageError?.contact_name"
                          class="text-red-600"
                        >
                          {{ messageError?.contact_name[0] }}
                        </p>
                      </div>
                    </div>
                    <div>
                      <label for="" class="form-group-label"
                        >Giá trị duy nhất<span class="text-red-600">* </span>
                        <span></span
                      ></label>
                      <div>
                        <a-switch v-model:checked="is_unique" />
                        <p
                          v-if="messageError?.contact_email"
                          class="text-red-600"
                        >
                          {{ messageError?.contact_email[0] }}
                        </p>
                      </div>
                    </div>
                    <div>
                      <label for="" class="form-group-label"
                        >Kiểm tra tính hợp lệ<span class="text-red-600"
                          >*
                        </span>
                        <span></span
                      ></label>
                      <div>
                        <a-select
                          class="form-control-input"
                          placeholder="Chọn kiểu"
                          :options="options2"
                          @change="handleChange"
                        >
                        </a-select>
                        <p
                          v-if="messageError?.contact_phone"
                          class="text-red-600"
                        >
                          {{ messageError?.contact_phone[0] }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
              <div v-show="isContact == false">
                <h2
                  @click="isContact = !isContact"
                  class="cursor-pointer form-group-label"
                >
                  Tên liên lạc *, Email*, *Số điện thoại
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </template>
    <template v-slot:footer
      ><div class="bg-slate-300">
        <div class="p-4 text-left">
          <button class="button-modal" @click="updateAttribute()">
            Cập nhật
          </button>
          <button class="button-close-modal" @click="this.$router.go(-1)">
            Hủy bỏ
          </button>
        </div>
      </div></template
    >
  </base-layout>
  <loading-overlay :isLoading="isLoading"></loading-overlay>
</template>

<script setup lang="ts">
  import BaseLayout from '../../../layout/baseLayout.vue'
  import SideBar from '../../../components/common/SideBar.vue'
  import Header from '../../../components/common/Header.vue'
  // import type { SelectProps } from 'ant-design-vue'
  import { useLocation } from '../../../store/modules/location/location'
  import { useGroupInventory } from '../../../store/modules/inventory/group-inventory'
  import { useInventory } from '../../../store/modules/inventory/product-invetory'
  import { storeToRefs } from 'pinia'
  import { ref, reactive } from 'vue'
  import { useToast } from 'vue-toastification'
  import type { SelectProps } from 'ant-design-vue'
  import { useRouter } from 'vue-router'
  // const selectedGroupInventory = ref(null)
  // const selectedCity = ref(null)
  // const selectedDistrict = ref(null)
  // const selectedWard = ref(null)
  const router = useRouter()
  const toast = useToast()
  const isAddress = ref(true)
  const isInfor = ref(true)
  const isContact = ref(true)
  const checked = ref(false)
  const isLoading = ref<boolean>(false)
  // const isReInput = ref<boolean>(true)

  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const options1 = ref<SelectProps['options']>([
    {
      label: 'Text',
      value: 'text',
    },
    {
      label: 'Ngày giờ',
      value: 'time',
    },
    {
      label: 'Hình ảnh',
      value: 'image',
    },
    {
      label: 'Nút bật tắt',
      value: 'switch',
    },
    {
      label: 'Nhiều lựa chọn',
      value: 'multiple',
    },
  ])
  const options2 = ref<SelectProps['options']>([
    {
      label: 'Không',
      value: 'invalid',
    },
    {
      label: 'Email',
      value: 'email',
    },
    {
      label: 'Url',
      value: 'url',
    },
    {
      label: 'Kí tự',
      value: 'char',
    },
    {
      label: 'Số nguyên',
      value: 'integer',
    },
    {
      label: 'Số thập phân',
      value: 'decimal',
    },
    {
      label: 'Kí tự hoặc số',
      value: 'charOrNumber',
    },
  ])
  const attribute = reactive({
    title: '',
    type_code: [],
    latitude: '',
    longitude: '',
    contact_name: '',
    contact_email: '',
    contact_phone: '',
    address: null,
    address_country_id: '1',
    address_district_id: null,
    address_ward_id: null,
    address_state_id: null,
    address_detail: '',
    code: '',
    desc: '',
  })
  // if (
  //   inventory.title != '' ||
  //   inventory.latitude != '' ||
  //   inventory.longitude != '' ||
  //   inventory.contact_name != '' ||
  //   inventory.contact_email != '' ||
  //   inventory.contact_phone != ''
  // ) {
  //   isReInput.value = false
  // }
  const dataInventory = useInventory()
  const { messageError } = storeToRefs(dataInventory)
  const showManageChoice = ref<Boolean>(false)
  const handleChange = (value: string) => {
    if (value == 'multiple') {
      showManageChoice.value = true
    } else {
      showManageChoice.value = false
    }
  }
  const is_unique = ref<boolean>(false)
  const dataOption = reactive([
    {
      defaultOption: false,
      title: '',
    },
  ])

  const addOptions = () => {
    const data = {
      defaultOption: false,
      title: '',
    }
    dataOption.push(data)
  }
  const removeOptions = (index: number) => {
    dataOption.splice(index, 1)
  }
  const dataGroupInventory = useGroupInventory()
  const getListGroupInventory = () => {
    dataGroupInventory.getListGroupInventoryAction()
  }
  const { listGroupInventory } = storeToRefs(dataGroupInventory)
  // let options2 = ref<SelectProps['options']>([])
  //   const sourceProduct = reactive({
  //     title: 'nguồn A1',
  //     code: 'SOURCEA',
  //     latitude: '11',
  //     longitude: '11',
  //     contact: 'hoangthiyen',
  //     contact_email: 'ttb@gmail.com',
  //     contact_phone: '0123456789',
  //     address_country_id: null,
  //     address_district_id: null,
  //     address_ward_id: null,
  //     address_state_id: 1,
  //     address_detail: 'viet nam',
  //     desc: 'nguồn A tại hà nội',
  //     use_direct: '0',
  //   })
  const dataLocation = useLocation()
  const getDataCity = () => {
    dataLocation.getListAllCityAction()
  }
  const { listAllCity, listAllDistrict, listAllWard } =
    storeToRefs(dataLocation)
  const handleChangeCity = (value: number, name: any) => {
    dataLocation.getListAllDistrictAction(value)

    attribute.address = name.title + ', ' + 'Việt Nam'
  }
  const handleChangeDistrict = (value: number, name: any) => {
    dataLocation.getListAllWardAction(value)
    attribute.address = name.title + ', ' + attribute.address
  }
  const handleChangeWard = (value: number, name: any) => {
    attribute.address = name.title + ', ' + attribute.address
  }
  const updateAttribute = () => {
    let data = {
      title: attribute.title,
      code: attribute.code,
      type_code: attribute.type_code,
      latitude: attribute.latitude,
      longitude: attribute.longitude,
      contact_name: attribute.contact_name,
      contact_email: attribute.contact_email,
      contact_phone: attribute.contact_phone,
      address: attribute.address,
      address_country_id: attribute.address_country_id,
      address_district_id: attribute.address_district_id,
      address_ward_id: attribute.address_ward_id,
      address_state_id: attribute.address_state_id,
      address_detail: attribute.address_detail,
      desc: attribute.desc,
    }
    dataInventory.createInventoryAction(data, toast, router, EndTimeLoading)
  }
</script>

<style></style>
