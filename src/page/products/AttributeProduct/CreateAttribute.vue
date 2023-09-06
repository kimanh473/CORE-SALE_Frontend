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
                          placeholder="Nhập tên thuộc tính"
                          v-model="attribute.frontend_label"
                        />
                        <!-- <p v-if="messageError?.title" class="text-red-600">
                          {{ messageError?.title[0] }}
                        </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Mã thuộc tính<span class="text-red-600">* </span>
                        <span></span
                      ></label>
                      <div>
                        <input
                          type="text"
                          class="form-control-input"
                          placeholder="Nhập mã thuộc tính"
                          v-model="attribute.attribute_code"
                        />
                        <!-- <p v-if="messageError?.title" class="text-red-600">
                          {{ messageError?.title[0] }}
                        </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Định dạng<span class="text-red-600">*</span></label
                      >
                      <div>
                        <a-select
                          class="form-control-input"
                          placeholder="Chọn định dạng"
                          :options="options1"
                          @change="handleChange"
                          :fieldNames="{
                            label: 'label',
                            value: 'frontend_input',
                          }"
                        >
                        </a-select>
                        <!-- <p v-if="messageError?.code" class="text-red-600">
                          {{ messageError?.code[0] }}
                        </p> -->
                      </div>
                    </div>
                  </div>
                  <div
                    class="border border-gray-800 w-[500px] p-4"
                    v-if="showManageChoice"
                  >
                    <h1>Quản lý lựa chọn</h1>
                    <div class="flex">
                      <p class="pr-[100px]">Ưu tiên</p>
                      <p>Tiêu đề</p>
                    </div>
                    <div
                      v-for="(item, index) in dataOption"
                      :key="index"
                      class="flex"
                    >
                      <div class="pr-[100px]">
                        <!-- <a-checkbox
                          v-model:checked="item.status"
                          class="!pl-[16px]"
                        ></a-checkbox> -->
                        <input
                          type="checkbox"
                          v-model="item.status"
                          class="ml-[14px]"
                          true-value="1"
                          false-value="0"
                        />
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
                Tên thuộc tính*, Định dạng *
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
                    <div class="flex">
                      <div class="pr-6">
                        <label for="" class="form-group-label"
                          >Giá trị duy nhất<span class="text-red-600"></span>
                          <span></span
                        ></label>
                        <div>
                          <a-switch
                            v-model:checked="attribute.is_unique"
                            checkedValue="1"
                            unCheckedValue="0"
                          />
                          <!-- <p
                          v-if="messageError?.contact_email"
                          class="text-red-600"
                        >
                          {{ messageError?.contact_email[0] }}
                        </p> -->
                        </div>
                      </div>
                      <div>
                        <label for="" class="form-group-label"
                          >Bắt buộc<span class="text-red-600"> </span>
                          <span></span
                        ></label>
                        <div>
                          <a-switch
                            v-model:checked="attribute.is_required"
                            checkedValue="1"
                            unCheckedValue="0"
                          />
                          <!-- <p
                          v-if="messageError?.contact_email"
                          class="text-red-600"
                        >
                          {{ messageError?.contact_email[0] }}
                        </p> -->
                        </div>
                      </div>
                    </div>
                    <div>
                      <label for="" class="form-group-label"
                        >Kiểm tra tính hợp lệ<span class="text-red-600"> </span>
                        <span></span
                      ></label>
                      <div>
                        <a-select
                          class="form-control-input"
                          placeholder="Chọn kiểu"
                          :options="options2"
                        >
                        </a-select>
                        <!-- <p
                          v-if="messageError?.contact_phone"
                          class="text-red-600"
                        >
                          {{ messageError?.contact_phone[0] }}
                        </p> -->
                      </div>
                    </div>
                    <div>
                      <label for="" class="form-group-label"
                        >Dạng thông số<span class="text-red-600"> </span>
                        <span></span
                      ></label>
                      <div>
                        <a-switch
                          v-model:checked="attribute.is_specification"
                          checkedValue="1"
                          unCheckedValue="0"
                        />
                        <!-- <p
                          v-if="messageError?.contact_email"
                          class="text-red-600"
                        >
                          {{ messageError?.contact_email[0] }}
                        </p> -->
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
                  Website áp dụng *, Giá trị duy nhất*, *Kiểm tra tính hợp lệ
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
          <button class="button-modal" @click="createAttribute()">
            Cập nhật
          </button>
          <button class="button-close-modal" @click="router.go(-1)">
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
  // import { useLocation } from '../../../store/modules/location/location'
  import { storeToRefs } from 'pinia'
  import { ref, reactive } from 'vue'
  import { useToast } from 'vue-toastification'
  import type { SelectProps } from 'ant-design-vue'
  import { useRouter } from 'vue-router'
  import { useWebCatalog } from '../../../store/modules/web-catalog/webcatalog'
  import { useAttributeProduct } from '../../../store/modules/store-setting/attribute-product'
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
  const webCatalog = useWebCatalog()
  const dataAttribute = useAttributeProduct()
  webCatalog.getAllWebCatalogAction()
  const { listWeb } = storeToRefs(webCatalog)
  // const isReInput = ref<boolean>(true)
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const options1 = ref<SelectProps['options']>([
    {
      label: 'Text',
      value: 'text',
      backend_type: 'text',
      frontend_input: 'text',
    },
    {
      label: 'TextArea',
      value: 'varchar',
      backend_type: 'varchar',
      frontend_input: 'textarea',
    },
    {
      label: 'Ngày giờ',
      value: 'date_time',
      backend_type: 'varchar',
      frontend_input: 'date-picker',
    },
    {
      label: 'Hình ảnh',
      value: 'gallery',
      backend_type: 'gallery',
      frontend_input: 'upload',
    },
    {
      label: 'Nút bật tắt',
      value: 'switch',
      backend_type: 'varchar',
      frontend_input: 'switch',
    },
    {
      label: 'Lựa chọn',
      value: 'selection',
      backend_type: 'selection',
      frontend_input: 'selection',
    },
    // {
    //   label: 'Nhiều lựa chọn',
    //   value: 'multiple_select',
    // },
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
    attribute_code: '',
    attribute_model: '',
    backend_model: '',
    backend_type: '',
    backend_table: '',
    frontend_model: '',
    frontend_input: '',
    frontend_label: '',
    frontend_class: '',
    source_model: '',
    is_required: '0',
    is_user_defined: '0',
    default_value: '',
    is_unique: '0',
    is_specification: '0',
    note: '',
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
  const showManageChoice = ref<Boolean>(false)
  const handleChange = (value: string, options: any) => {
    if (value == 'selection') {
      showManageChoice.value = true
    } else {
      showManageChoice.value = false
    }
    attribute.backend_type = options.backend_type
    attribute.frontend_input = options.frontend_input
  }
  const dataOption = reactive([])

  const addOptions = () => {
    const data = {
      title: '',
      status: '0',
    }
    dataOption.push(data)
  }
  const removeOptions = (index: number) => {
    dataOption.splice(index, 1)
  }
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
  // const dataLocation = useLocation()
  // const getDataCity = () => {
  //   dataLocation.getListAllCityAction()
  // }
  // const { listAllCity, listAllDistrict, listAllWard } =
  //   storeToRefs(dataLocation)
  // const handleChangeCity = (value: number, name: any) => {
  //   dataLocation.getListAllDistrictAction(value)

  //   attribute.address = name.title + ', ' + 'Việt Nam'
  // }
  // const handleChangeDistrict = (value: number, name: any) => {
  //   dataLocation.getListAllWardAction(value)
  //   attribute.address = name.title + ', ' + attribute.address
  // }
  // const handleChangeWard = (value: number, name: any) => {
  //   attribute.address = name.title + ', ' + attribute.address
  // }
  const createAttribute = () => {
    let data = {
      attribute_code: attribute.attribute_code,
      attribute_model: '',
      backend_model: '',
      backend_type: attribute.backend_type,
      backend_table: '',
      frontend_model: '',
      frontend_input: attribute.frontend_input,
      frontend_label: attribute.frontend_label,
      frontend_class: '',
      source_model: '',
      is_required: attribute.is_required,
      is_user_defined: '0',
      default_value: '',
      is_unique: attribute.is_unique,
      is_specification: attribute.is_specification,
      note: '',
      option_detail: dataOption,
    }
    dataAttribute.createAttributeAction(data, toast, router, EndTimeLoading)
    // dataInventory.createInventoryAction(data, toast, router, EndTimeLoading)
  }
</script>

<style></style>
