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
          ><p class="pl-5 text-[16px]">Tạo mới kho</p></template
        >
      </Header>
    </template>
    <template v-slot:content class="relative">
      <Transition :duration="550" name="nested">
        <div
          class="text-left px-4 py-2 w-full h-full format-scroll form-plus-over"
        >
          <div class="w-full">
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
              Thông tin chung
            </h4>
            <Transition name="slide-up">
              <div v-show="isInfor == true" class="outer">
                <div>
                  <div class="grid grid-cols-2 gap-2 form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Tên kho<span class="text-red-600">* </span>
                        <span></span
                      ></label>
                      <div>
                        <input
                          type="text"
                          class="form-control-input"
                          placeholder="Nhập tên kho"
                          v-model="inventory.title"
                        />
                      </div>
                    </div>
                    <div>
                      <label for="" class="form-group-label"
                        >Mã kho<span class="text-red-600"></span
                      ></label>
                      <div>
                        <input
                          type="text"
                          class="form-control-input"
                          placeholder="Nhập mã kho"
                          v-model="inventory.code"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-small">
                    <label for="" class="form-group-label"
                      >Nhóm kho<span class="text-red-600">* </span> <span></span
                    ></label>
                    <div>
                      <a-select
                        class="form-control-input"
                        placeholder="Chọn nhóm kho"
                        v-model:value="inventory.type_code"
                        @click.once="getListGroupInventory"
                        mode="multiple"
                      >
                        <a-select-option
                          v-for="(item, index) in listGroupInventory"
                          :key="index"
                          :value="item.code"
                          >{{ item.title }}</a-select-option
                        >
                      </a-select>
                    </div>
                  </div>

                  <!-- <a-switch v-model:checked="checked" /> &nbsp; Sử dụng làm điểm
                  nhận -->
                  <div>
                    <div class="form-small">
                      <label for="" class="form-group-label">Mô tả</label>
                      <div>
                        <textarea
                          name=""
                          id=""
                          cols="30"
                          rows="5"
                          class="form-control-input"
                          v-model="inventory.desc"
                        ></textarea>
                      </div>
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
                Tên nguồn*, Mã *, Mặc định ( nút bật tắt) Mô tả Vĩ độ* Kinh độ*
                Sử dụng làm điểm nhận ( nút bật tắt)
              </h2>
            </div>

            <div class="inner">
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
                Thông tin liên lạc
              </h4>
              <Transition name="slide-up">
                <div v-show="isContact == true">
                  <div class="form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Tên liên lạc<span class="text-red-600">* </span>
                        <span></span
                      ></label>
                      <div>
                        <input
                          type="text"
                          class="form-control-input"
                          placeholder="Nhập tên liên lạc"
                          v-model="inventory.contact_name"
                        />
                      </div>
                    </div>
                    <div>
                      <label for="" class="form-group-label"
                        >Email<span class="text-red-600">* </span> <span></span
                      ></label>
                      <div>
                        <input
                          type="text"
                          class="form-control-input"
                          placeholder="Nhập tên nguồn hàng"
                          v-model="inventory.contact_email"
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
                          type="number"
                          class="form-control-input"
                          placeholder="Nhập số điện thoại"
                          v-model="inventory.contact_phone"
                        />
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
            <div class="inner">
              <h4
                class="form-section-title form-small cursor-pointer"
                @click="isAddress = !isAddress"
              >
                <span v-show="isAddress == true">
                  <i class="fas fa-chevron-down cursor-pointer"></i>
                </span>
                <span v-show="isAddress == false"
                  ><i class="fas fa-chevron-right cursor-pointer"></i
                ></span>
                Địa chỉ
              </h4>
              <Transition name="slide-up">
                <div v-show="isAddress == true">
                  <div class="form-small">
                    <!-- <div>
                      <label for="" class="form-group-label"
                        >Quốc gia<span class="text-red-600">* </span>
                        <span></span
                      ></label>
                      <div>
                        <a-select
                          class="form-control-input"
                          :options="options2"
                          placeholder="Chọn quốc gia"
                          disabled
                        ></a-select>
                      </div>
                    </div> -->
                    <div class="grid grid-cols-2 gap-2 form-small">
                      <div>
                        <label for="" class="form-group-label"
                          >Kinh độ <span class="text-red-600">*</span></label
                        >
                        <div>
                          <input
                            type="number"
                            class="form-control-input"
                            placeholder="Nhập kinh độ"
                            v-model="inventory.longitude"
                          />
                        </div>
                      </div>
                      <div>
                        <label for="" class="form-group-label"
                          >Vĩ độ<span class="text-red-600">*</span></label
                        >
                        <div>
                          <input
                            type="number"
                            class="form-control-input"
                            placeholder="Nhập vĩ độ"
                            v-model="inventory.latitude"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label for="" class="form-group-label"
                        >Tỉnh/Thành phố<span class="text-red-600">* </span>
                        <span></span
                      ></label>
                      <div>
                        <a-select
                          class="form-control-input"
                          placeholder="Chọn tỉnh/thành phố"
                          @change="handleChangeCity"
                          @click.once="getDataCity"
                          v-model:value="inventory.address_state_id"
                        >
                          <a-select-option
                            v-for="(item, index) in listAllCity"
                            :key="index"
                            :value="item.ID"
                            >{{ item.title }}</a-select-option
                          >
                        </a-select>
                      </div>
                    </div>
                    <div>
                      <label for="" class="form-group-label"
                        >Quận/Huyện<span class="text-red-600">* </span>
                        <span></span
                      ></label>
                      <div>
                        <a-select
                          class="form-control-input"
                          placeholder="Chọn quận/huyện"
                          @change="handleChangeDistrict"
                          v-model:value="inventory.address_district_id"
                        >
                          <a-select-option
                            v-for="(item, index) in listAllDistrict"
                            :key="index"
                            :value="item.ID"
                            >{{ item.title }}</a-select-option
                          ></a-select
                        >
                      </div>
                    </div>
                    <div>
                      <label for="" class="form-group-label"
                        >Xã/Phường/Thị trấn<span class="text-red-600">* </span>
                        <span></span
                      ></label>
                      <div>
                        <a-select
                          class="form-control-input"
                          placeholder="Chọn xã/phường/thị trấn"
                          v-model:value="inventory.address_ward_id"
                        >
                          <a-select-option
                            v-for="(item, index) in listAllWard"
                            :key="index"
                            :value="item.ID"
                            >{{ item.title }}</a-select-option
                          ></a-select
                        >
                      </div>
                    </div>
                    <div>
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
                          v-model="inventory.address_detail"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
              <div v-show="isAddress == false">
                <h2
                  @click="isAddress = !isAddress"
                  class="cursor-pointer form-group-label"
                >
                  Quốc gia*, Tỉnh/Thành phố*, Quận/Huyện*, Địa chỉ cụ thể*
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
          <button class="button-modal" @click="createInventory()">
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
  import BaseLayout from '../../../../../layout/baseLayout.vue'
  import SideBar from '../../../../../components/common/SideBar.vue'
  import Header from '../../../../../components/common/Header.vue'
  // import type { SelectProps } from 'ant-design-vue'
  import { useLocation } from '../../../../../store/modules/location/location'
  import { useGroupInventory } from '../../../../../store/modules/inventory/group-inventory'
  import { useInventory } from '../../../../../store/modules/inventory/product-invetory'
  import { storeToRefs } from 'pinia'
  import { ref, reactive } from 'vue'
  import { useToast } from 'vue-toastification'
  // const selectedGroupInventory = ref(null)
  // const selectedCity = ref(null)
  // const selectedDistrict = ref(null)
  // const selectedWard = ref(null)
  const toast = useToast()
  const isAddress = ref(true)
  const isInfor = ref(true)
  const isContact = ref(true)
  // const checked = ref(false)
  const isLoading = ref<boolean>(false)
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const inventory = reactive({
    title: '',
    type_code: [],
    latitude: '',
    longitude: '',
    contact_name: '',
    contact_email: '',
    contact_phone: '',
    address: '',
    address_country_id: '1',
    address_district_id: null,
    address_ward_id: null,
    address_state_id: null,
    address_detail: '',
    code: '',
    desc: '',
  })
  const dataInventory = useInventory()
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
  const handleChangeCity = (value: number) => {
    dataLocation.getListAllDistrictAction(value)
    // inventory.address = value.title
  }
  const handleChangeDistrict = (value: number) => {
    dataLocation.getListAllWardAction(value)
  }
  const createInventory = () => {
    let data = {
      title: inventory.title,
      code: inventory.code,
      type_code: inventory.type_code,
      latitude: inventory.latitude,
      longitude: inventory.longitude,
      contact_name: inventory.contact_name,
      contact_email: inventory.contact_email,
      contact_phone: inventory.contact_phone,
      address: inventory.address,
      address_country_id: inventory.address_country_id,
      address_district_id: inventory.address_district_id,
      address_ward_id: inventory.address_ward_id,
      address_state_id: inventory.address_state_id,
      address_detail: inventory.address_detail,
      desc: inventory.desc,
    }
    dataInventory.createInventoryAction(data, toast, EndTimeLoading)
  }
</script>

<style></style>
