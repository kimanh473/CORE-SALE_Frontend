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
          ><p class="pl-5 text-[16px]">
            Cập nhật bảng điều chỉnh giá
          </p></template
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
              Thông tin chung
            </h4>
            <Transition name="slide-up">
              <div v-show="isInfor == true" class="outer">
                <div>
                  <div class="form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Tiêu đề<span class="text-red-600">* </span>
                        <span></span
                      ></label>
                      <div>
                        <input
                          type="text"
                          class="form-control-input"
                          placeholder="Nhập tiêu đề"
                          v-model="detailAdjustPrice.title"
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
                        >Website<span class="text-red-600">* </span>
                        <span></span
                      ></label>
                      <div>
                        <a-select
                          class="form-control-input"
                          placeholder="Chọn website"
                          v-model:value="listCodeWeb"
                          :options="listWeb"
                          @change="handleChange"
                          :fieldNames="{
                            label: 'title',
                            value: 'code',
                          }"
                          mode="multiple"
                        >
                        </a-select>
                        <!-- <p v-if="messageError?.title" class="text-red-600">
                              {{ messageError?.title[0] }}
                            </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Ngành hàng<span class="text-red-600">*</span></label
                      >
                      <div>
                        <a-tree-select
                          placeholder="Chọn ngành hàng"
                          style="width: 100%"
                          :tree-data="listTreeCategory"
                          v-model:value="listCodeCategory"
                          :fieldNames="{
                            children: 'children',
                            label: 'title',
                            value: 'code',
                          }"
                          :show-checked-strategy="SHOW_PARENT"
                          tree-checkable
                          treeDefaultExpandAll
                          multiple
                        >
                        </a-tree-select>
                        <!-- <p v-if="messageError?.code" class="text-red-600">
                              {{ messageError?.code[0] }}
                            </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Sản phẩm<span class="text-red-600">*</span></label
                      >
                      <div>
                        <a-select
                          class="form-control-input"
                          placeholder="Chọn sản phẩm"
                          :options="listAllProduct"
                          v-model:value="
                            detailAdjustPrice.json_product_code_list
                          "
                          @change="handleChange"
                          :fieldNames="{
                            label: 'name',
                            value: 'code',
                          }"
                          mode="multiple"
                        >
                        </a-select>
                        <!-- <p v-if="messageError?.code" class="text-red-600">
                              {{ messageError?.code[0] }}
                            </p> -->
                      </div>
                    </div>
                  </div>
                  <div>
                    <button class="button-modal">Lọc sản phẩm</button>
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
                Thời gian điều chỉnh giá
              </h4>
              <Transition name="slide-up">
                <div v-show="isContact == true">
                  <div class="form-large-plus">
                    <div
                      v-for="(item, index) in listPeriod"
                      :key="index"
                      class="grid grid-cols-6 gap-6"
                    >
                      <div>
                        <label for="" class="form-group-label"
                          >Ngày bắt đầu<span class="text-red-600"></span>
                          <span></span
                        ></label>
                        <div>
                          <a-date-picker
                            placeholder="Chọn ngày"
                            class="form-control-input"
                            v-model:value="item.date_start"
                            :format="dateFormatRequest"
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
                          >Ngày kết thúc<span class="text-red-600"> </span>
                          <span></span
                        ></label>
                        <div>
                          <a-date-picker
                            placeholder="Chọn ngày"
                            class="form-control-input"
                            v-model:value="item.date_end"
                            :format="dateFormatRequest"
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
                          >Giá niêm yết<span class="text-red-600"> </span>
                          <span></span
                        ></label>
                        <div>
                          <a-input
                            class="form-control-input"
                            placeholder="Nhập giá niêm yết"
                            v-model:value="item.listed_price"
                          >
                          </a-input>
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
                          >Giá sỉ<span class="text-red-600"> </span>
                          <span></span
                        ></label>
                        <div>
                          <a-input
                            class="form-control-input"
                            placeholder="Nhập giá sỉ"
                            v-model:value="item.wholesale_price"
                          >
                          </a-input>
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
                          >Giá lẻ<span class="text-red-600"> </span>
                          <span></span
                        ></label>
                        <div>
                          <a-input
                            class="form-control-input"
                            placeholder="Nhập giá lẻ"
                            v-model:value="item.retail_price"
                          >
                          </a-input>
                          <!-- <p
                              v-if="messageError?.contact_email"
                              class="text-red-600"
                            >
                              {{ messageError?.contact_email[0] }}
                            </p> -->
                        </div>
                      </div>
                      <div class="mt-[35px]">
                        <i
                          @click="removeTime(index)"
                          class="fal fa-times icon-close"
                        ></i>
                      </div>
                    </div>
                    <div @click="addTime" class="mt-2 w-fit">
                      <i class="fal fa-plus-circle icon-plus fa-lg"></i>
                    </div>
                  </div>
                  <div>
                    <button class="button-modal" @click="filterProduct()">
                      Lấy chi tiết điều chỉnh giá
                    </button>
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
            <div id="infor-contact" class="inner">
              <h4
                class="form-section-title form-small cursor-pointer"
                @click="isDetail = !isDetail"
              >
                <span v-show="isDetail == true">
                  <i class="fas fa-chevron-down cursor-pointer"></i>
                </span>
                <span v-show="isDetail == false"
                  ><i class="fas fa-chevron-right cursor-pointer"></i
                ></span>
                Thông tin chi tiết
              </h4>
              <Transition name="slide-up">
                <div v-show="isDetail == true">
                  <a-table
                    class="!p-[10px]"
                    :columns="columns"
                    :data-source="listTableDetail"
                    bordered
                    row-key="id"
                  >
                    <template #bodyCell="{ column, text, record }">
                      <template v-if="column.key === 'key'">
                        {{ record.key }}
                      </template>
                      <template
                        v-if="
                          [
                            'date_start',
                            'date_end',
                            'listed_price',
                            'wholesale_price',
                            'retail_price',
                          ].includes(column.dataIndex)
                        "
                      >
                        <div
                          v-for="(item, index) in record.detail"
                          :key="index"
                        >
                          <a-input
                            v-if="editableData[record.key]"
                            v-model:value="item[column.dataIndex]"
                            style="margin: 5px 0"
                          />
                          <template v-else>
                            {{ item[column.dataIndex] }}
                          </template>
                        </div>
                      </template>
                      <template v-else-if="column.dataIndex === 'operation'">
                        <div class="editable-row-operations">
                          <span v-if="editableData[record.key]">
                            <a-typography-link @click="save(record.key)"
                              >Lưu
                            </a-typography-link>
                            <a-popconfirm
                              title="Bạn có muốn hủy?"
                              @confirm="cancel(record.key)"
                            >
                              <a>Hủy</a>
                            </a-popconfirm>
                          </span>
                          <span v-else>
                            <a @click="edit(record.key)">Sửa</a>
                          </span>
                        </div>
                      </template>
                    </template>
                  </a-table>
                </div>
              </Transition>
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
  import BaseLayout from '@/layout/baseLayout.vue'
  import SideBar from '@/components/common/SideBar.vue'
  import Header from '@/components/common/Header.vue'
  // import type { SelectProps } from 'ant-design-vue'
  // import { useLocation } from '@/store/modules/location/location'
  import { storeToRefs } from 'pinia'
  import { ref, reactive } from 'vue'
  import { useToast } from 'vue-toastification'
  import type { TableColumnType } from 'ant-design-vue'
  import { useRouter, useRoute } from 'vue-router'
  import { useWebCatalog } from '@/store/modules/web-catalog/webcatalog'
  import { useCategory } from '@/store/modules/store-setting/category'
  import { useProduct } from '@/store/modules/store-setting/products'
  import { useAdjustPrice } from '@/store/modules/store-setting/adjust-price'
  // import { useAttributeProduct } from '@/store/modules/store-setting/attribute-product'
  import { cloneDeep } from 'lodash-es'
  import type { UnwrapRef } from 'vue'
  import dayjs from 'dayjs'

  import { TreeSelect } from 'ant-design-vue'
  const SHOW_PARENT = TreeSelect.SHOW_ALL
  // const selectedGroupInventory = ref(null)
  // const selectedCity = ref(null)
  // const selectedDistrict = ref(null)
  // const selectedWard = ref(null)
  const router = useRouter()
  const route = useRoute()
  const toast = useToast()
  const isInfor = ref(true)
  const isContact = ref(true)
  const isDetail = ref(true)
  const isLoading = ref<boolean>(false)
  const webCatalog = useWebCatalog()
  const dataCategory = useCategory()
  const dataProduct = useProduct()
  webCatalog.getAllWebCatalogAction()
  const { listWeb } = storeToRefs(webCatalog)
  dataCategory.getListCategoryTreeAction()
  const { listTreeCategory } = storeToRefs(dataCategory)
  dataProduct.getListProductNoPagingAction()
  const { listAllProduct } = storeToRefs(dataProduct)
  const dataAdjustPrice = useAdjustPrice()
  dataAdjustPrice.getDetailAdjustPriceAction(Number(route.params.id))
  const {
    detailAdjustPrice,
    listPeriod,
    listCodeWeb,
    listCodeCategory,
    listTableDetail,
  } = storeToRefs(dataAdjustPrice)

  // const isReInput = ref<boolean>(true)
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const dateFormatRequest = 'DD/MM/YYYY'
  const columns: TableColumnType[] = [
    {
      title: 'STT',
      key: 'key',
      dataIndex: 'key',
      // customCell: (record, rowIndex, column) => {
      //   console.log(record)
      //   console.log(rowIndex)
      //   console.log(column)
      //   if (record.key == 0) return { rowSpan: 2 }
      //   else return { rowSpan: 1 }
      // },
    },
    {
      title: 'Sản phẩm/Phiên bản',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: 'SKU',
      key: 'sku',
      dataIndex: 'sku',
    },
    {
      title: 'Đơn vị tính',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: 'Ngày bắt đầu',
      dataIndex: 'date_start',
    },
    {
      title: 'Ngày kết thúc',
      dataIndex: 'date_end',
    },
    {
      title: 'Giá niêm yết',
      dataIndex: 'listed_price',
    },
    {
      title: 'Giá sỉ',
      dataIndex: 'wholesale_price',
    },
    {
      title: 'Giá lẻ',
      dataIndex: 'retail_price',
    },
    {
      title: 'Tùy chỉnh',
      key: 'edit',
      dataIndex: 'operation',
      align: 'center',
    },
  ]
  // const options1 = ref<SelectProps['options']>([
  //   {
  //     label: 'Text',
  //     value: 'text',
  //     backend_type: 'text',
  //     frontend_input: 'text',
  //   },
  //   {
  //     label: 'TextArea',
  //     value: 'varchar',
  //     backend_type: 'varchar',
  //     frontend_input: 'textarea',
  //   },
  //   {
  //     label: 'Ngày giờ',
  //     value: 'date_time',
  //     backend_type: 'varchar',
  //     frontend_input: 'date-picker',
  //   },
  //   {
  //     label: 'Hình ảnh',
  //     value: 'gallery',
  //     backend_type: 'gallery',
  //     frontend_input: 'upload',
  //   },
  //   {
  //     label: 'Nút bật tắt',
  //     value: 'switch',
  //     backend_type: 'varchar',
  //     frontend_input: 'switch',
  //   },
  //   {
  //     label: 'Lựa chọn',
  //     value: 'selection',
  //     backend_type: 'selection',
  //     frontend_input: 'selection',
  //   },
  //   // {
  //   //   label: 'Nhiều lựa chọn',
  //   //   value: 'multiple_select',
  //   // },
  // ])
  // const options2 = ref<SelectProps['options']>([
  //   {
  //     label: 'Không',
  //     value: 'invalid',
  //   },
  //   {
  //     label: 'Email',
  //     value: 'email',
  //   },
  //   {
  //     label: 'Url',
  //     value: 'url',
  //   },
  //   {
  //     label: 'Kí tự',
  //     value: 'char',
  //   },
  //   {
  //     label: 'Số nguyên',
  //     value: 'integer',
  //   },
  //   {
  //     label: 'Số thập phân',
  //     value: 'decimal',
  //   },
  //   {
  //     label: 'Kí tự hoặc số',
  //     value: 'charOrNumber',
  //   },
  // ])
  // const adjust = reactive({
  //   title: '',
  //   website: [],
  //   category: [],
  //   product: [],
  // })
  // const timeAdjustPrice = reactive([
  //   {
  //     date_start: '',
  //     date_end: '',
  //     listed_price: '',
  //     wholesale_price: '',
  //     retail_price: '',
  //   },
  // ])
  const addTime = () => {
    const data = {
      title: '',
      date_start: '',
      date_end: '',
      listed_price: '',
      wholesale_price: '',
      retail_price: '',
    }
    listPeriod.value.push(data)
  }
  const removeTime = (index: number) => {
    listPeriod.value.splice(index, 1)
  }
  // const sharedOnCell = (_, index) => {
  //   if (index === 4) {
  //     return { colSpan: 0 }
  //   }
  // }
  // const listProduct = ref([])
  const filterProduct = () => {
    let arrProduct = []
    arrProduct = listTableDetail.value.map((item: any) => ({
      name: item.name,
      sku: item.sku,
      unit: item.unit,
      code: item.code,
    }))
    const arrAll = arrProduct.map((item: any, index: number) => {
      return {
        ...item,
        key: index,
        detail: listPeriod.value.map((item2: any) => ({
          date_start: dayjs(item2.date_start).format('DD/MM/YYYY'),
          date_end: dayjs(item2.date_end).format('DD/MM/YYYY'),
          listed_price: item2.listed_price,
          wholesale_price: item2.wholesale_price,
          retail_price: item2.retail_price,
        })),
        has_custom: '0',
      }
    })

    // for (let i = 0; i < arrProduct.length; i++) {
    //   const item1 = arrProduct[i]

    //   for (let j = 0; j < timeAdjustPrice.length; j++) {
    //     const item2 = timeAdjustPrice[j]

    //     const newItem = {
    //       key: i.toString(),
    //       name: item1.name,
    //       sku: item1.sku,
    //       date_start: dayjs(item2.date_start).format('YYYY/MM/DD'),
    //       date_end: dayjs(item2.date_end).format('YYYY/MM/DD'),
    //       listed_price: item2.listed_price,
    //       wholesale_price: item2.wholesale_price,
    //       retail_price: item2.retail_price,
    //     }

    //     arrAll.push(newItem)
    //   }
    // }
    listTableDetail.value = arrAll
  }
  const editableData: UnwrapRef<Record<any, any>> = reactive({})

  const edit = (key: string) => {
    editableData[key] = cloneDeep(
      listTableDetail.value.filter((item: any) => key === item.key)[0]
    )
    console.log(editableData)
  }
  const save = (key: string) => {
    Object.assign(
      listTableDetail.value.filter((item: any) => key === item.key),
      editableData[key]
    )
    delete editableData[key]
  }
  const cancel = (key: string) => {
    delete editableData[key]
  }
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

  const showManageChoice = ref<boolean>(false)
  const handleChange = (value: string, options: any) => {
    if (value == 'selection') {
      showManageChoice.value = true
    } else {
      showManageChoice.value = false
    }
    listTableDetail.value = options.map((item: any) => ({
      name: item.name,
      sku: item.sku,
      code: item.code,
      unit: item.unit_code,
    }))
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
    const data = {
      title: detailAdjustPrice.value.title,
      website_list: listCodeWeb.value,
      nganh_hang_list: listCodeCategory.value,
      product_code_list: detailAdjustPrice.value.json_product_code_list,
      period: listPeriod.value.map((item: any) => ({
        date_start: dayjs(item.date_start).format('YYYY/MM/DD'),
        date_end: dayjs(item.date_end).format('YYYY/MM/DD'),
        listed_price: item.listed_price,
        wholesale_price: item.wholesale_price,
        retail_price: item.retail_price,
      })),
      product_price_detail: listTableDetail.value.map((item: any) => ({
        name: item.name,
        sku: item.sku,
        code: item.code,
        unit: item.unit,
        has_custom: item.has_custom,
        detail: item.detail.map((itemDetail: any) => ({
          date_start: dayjs(itemDetail.date_start, 'DD-MM-YYYY').format(
            'YYYY-MM-DD'
          ),
          date_end: dayjs(itemDetail.date_end, 'DD-MM-YYYY').format(
            'YYYY-MM-DD'
          ),
          listed_price: itemDetail.listed_price,
          wholesale_price: itemDetail.wholesale_price,
          retail_price: itemDetail.retail_price,
        })),
      })),
    }

    dataAdjustPrice.updateAdjustPriceAction(
      Number(route.params.id),
      data,
      router,
      toast,
      EndTimeLoading
    )
    // dataInventory.createInventoryAction(data, toast, router, EndTimeLoading)
  }
</script>

<style></style>
