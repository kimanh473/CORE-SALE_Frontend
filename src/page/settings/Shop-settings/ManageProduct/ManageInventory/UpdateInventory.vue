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
          ><p class="pl-5 text-[16px]">Sửa thông tin kho</p></template
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
                          v-model="detailInventory.title"
                        />
                        <p v-if="messageError?.title" class="text-red-600">
                          {{ messageError?.title[0] }}
                        </p>
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
                          v-model="detailInventory.code"
                        />
                        <p v-if="messageError?.code" class="text-red-600">
                          {{ messageError?.code[0] }}
                        </p>
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
                        v-model:value="detailInventory.json_type_code"
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
                      <p v-if="messageError?.type_code" class="text-red-600">
                        {{ messageError?.type_code[0] }}
                      </p>
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
                          v-model="detailInventory.desc"
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
                Tên nguồn*, Mã *, Mặc định ( nút bật tắt), Mô tả
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
                          v-model="detailInventory.contact_name"
                        />
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
                        >Email<span class="text-red-600">* </span> <span></span
                      ></label>
                      <div>
                        <input
                          type="email"
                          class="form-control-input"
                          placeholder="Nhập tên email"
                          v-model="detailInventory.contact_email"
                        />
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
                        >Số điện thoại<span class="text-red-600">* </span>
                        <span></span
                      ></label>
                      <div>
                        <input
                          type="number"
                          class="form-control-input"
                          placeholder="Nhập số điện thoại"
                          v-model="detailInventory.contact_phone"
                        />
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
                            v-model="detailInventory.longitude"
                          />
                          <p
                            v-if="messageError?.longitude"
                            class="text-red-600"
                          >
                            {{ messageError?.longitude[0] }}
                          </p>
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
                            v-model="detailInventory.latitude"
                          />
                          <p v-if="messageError?.latitude" class="text-red-600">
                            {{ messageError?.latitude[0] }}
                          </p>
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
                          v-model:value="detailInventory.address_state_id"
                        >
                          <a-select-option
                            v-for="(item, index) in listAllCity"
                            :key="index"
                            :value="item.ID"
                            :title="item.title"
                            >{{ item.title }}</a-select-option
                          >
                        </a-select>
                        <p
                          v-if="messageError?.address_state_id"
                          class="text-red-600"
                        >
                          {{ messageError?.address_state_id[0] }}
                        </p>
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
                          v-model:value="detailInventory.address_district_id"
                        >
                          <a-select-option
                            v-for="(item, index) in listAllDistrict"
                            :key="index"
                            :value="item.ID"
                            :title="item.title"
                            >{{ item.title }}</a-select-option
                          ></a-select
                        >
                        <p
                          v-if="messageError?.address_district_id"
                          class="text-red-600"
                        >
                          {{ messageError?.address_district_id[0] }}
                        </p>
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
                          v-model:value="detailInventory.address_ward_id"
                          @change="handleChangeWard"
                        >
                          <a-select-option
                            v-for="(item, index) in listAllWard"
                            :key="index"
                            :value="item.ID"
                            :title="item.title"
                            >{{ item.title }}</a-select-option
                          ></a-select
                        >
                        <p
                          v-if="messageError?.address_ward_id"
                          class="text-red-600"
                        >
                          {{ messageError?.address_ward_id[0] }}
                        </p>
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
                          v-model="detailInventory.address_detail"
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
                  Vĩ độ*, Kinh độ*, Quốc gia*, Tỉnh/Thành phố*, Quận/Huyện*, Địa
                  chỉ cụ thể*
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
          <button class="button-modal" @click="updateInventory()">
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
  import { ref, reactive, computed } from 'vue'
  import { useToast } from 'vue-toastification'
  import { useRouter, useRoute } from 'vue-router'
  // const selectedGroupInventory = ref(null)
  // const selectedCity = ref(null)
  // const selectedDistrict = ref(null)
  // const selectedWard = ref(null)
  const router = useRouter()
  const route = useRoute()
  const toast = useToast()
  const isAddress = ref(true)
  const isInfor = ref(true)
  const isContact = ref(true)
  // const checked = ref(false)
  const isLoading = ref<boolean>(false)
  // const isReInput = ref<boolean>(true)
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  // const inventory = reactive({
  //   title: '',
  //   type_code: [],
  //   latitude: '',
  //   longitude: '',
  //   contact_name: '',
  //   contact_email: '',
  //   contact_phone: '',
  //   address: null,
  //   address_country_id: '1',
  //   address_district_id: null,
  //   address_ward_id: null,
  //   address_state_id: null,
  //   address_detail: '',
  //   code: '',
  //   desc: '',
  // })
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
  dataInventory.getDetailInventoryAction(Number(route.params.id))
  const { messageError, detailInventory } = storeToRefs(dataInventory)

  // const inventData: DetailInvent = computed(()=>det)

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
  dataLocation.getListAllCityAction()
  dataLocation.getListAllDistrictAction(
    Number(detailInventory.value?.address_state_id)
  )
  dataLocation.getListAllWardAction(
    Number(detailInventory.value?.address_district_id)
  )
  const getDataCity = () => {
    dataLocation.getListAllCityAction()
  }
  const { listAllCity, listAllDistrict, listAllWard } =
    storeToRefs(dataLocation)
  const handleChangeCity = (value: number, name: any) => {
    dataLocation.getListAllDistrictAction(value)

    detailInventory.value.address = name.title + ', ' + 'Việt Nam'
  }
  const handleChangeDistrict = (value: number, name: any) => {
    dataLocation.getListAllWardAction(value)
    detailInventory.value.address =
      name.title + ', ' + detailInventory.value.address
  }
  const handleChangeWard = (value: number, name: any) => {
    detailInventory.value.address =
      name.title + ', ' + detailInventory.value.address
  }
  const updateInventory = () => {
    let data = {
      title: detailInventory.value.title,
      code: detailInventory.value.code,
      type_code: detailInventory.value.json_type_code,
      latitude: detailInventory.value.latitude,
      longitude: detailInventory.value.longitude,
      contact_name: detailInventory.value.contact_name,
      contact_email: detailInventory.value.contact_email,
      contact_phone: detailInventory.value.contact_phone,
      address: detailInventory.value.address,
      address_country_id: detailInventory.value.address_country_id,
      address_district_id: detailInventory.value.address_district_id,
      address_ward_id: detailInventory.value.address_ward_id,
      address_state_id: detailInventory.value.address_state_id,
      address_detail: detailInventory.value.address_detail,
      desc: detailInventory.value.desc,
    }
    dataInventory.updateInventoryAction(
      Number(detailInventory.value.id),
      data,
      toast,
      EndTimeLoading
    )
  }
</script>

<style></style>
