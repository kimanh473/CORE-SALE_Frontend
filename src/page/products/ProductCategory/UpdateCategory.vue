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
          ><p class="pl-5 text-[16px]">Sửa ngành hàng</p></template
        >
      </Header>
    </template>
    <template v-slot:content class="relative flex">
      <Transition :duration="550" name="nested">
        <div
          class="text-left px-4 py-2 w-full h-full format-scroll form-plus-over flex"
        >
          <div>
            <div style="margin-bottom: 16px">
              showLine:
              <a-switch v-model:checked="showLine" />
              <br />
              <br />
              showIcon:
              <a-switch v-model:checked="showIcon" />
            </div>
            <a-tree
              :show-line="showLine"
              :show-icon="showIcon"
              :default-expanded-keys="['0-0-0']"
              :tree-data="treeData"
              @select="onSelect"
            >
              <template #icon><carry-out-outlined /></template>
              <template #title="{ dataRef }">
                <template v-if="dataRef.key === '0-0-0-1'">
                  <div>multiple line title</div>
                  <div>multiple line title</div>
                </template>
                <template v-else>{{ dataRef.title }}</template>
              </template>
              <template #switcherIcon="{ dataRef, defaultIcon }">
                <SmileTwoTone v-if="dataRef.key === '0-0-2'" />
                <component :is="defaultIcon" v-else />
              </template>
            </a-tree>
          </div>
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
                  <div class="grid grid-cols-2 gap-2 form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Tên ngành hàng<span class="text-red-600">* </span>
                        <span></span
                      ></label>
                      <div>
                        <input
                          type="text"
                          class="form-control-input"
                          placeholder="Nhập ngành hàng"
                          v-model="inventory.title"
                        />
                        <p v-if="messageError?.title" class="text-red-600">
                          {{ messageError?.title[0] }}
                        </p>
                      </div>
                    </div>
                    <div>
                      <label for="" class="form-group-label"
                        >Hiển thị ngành hàng<span class="text-red-600"></span
                      ></label>
                      <div>
                        <a-switch v-model:checked="checked" />
                        <p v-if="messageError?.code" class="text-red-600">
                          {{ messageError?.code[0] }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="form-small">
                    <label for="" class="form-group-label"
                      >Ngành hàng cha<span class="text-red-600">* </span>
                      <span></span
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
                      <p v-if="messageError?.type_code" class="text-red-600">
                        {{ messageError?.type_code[0] }}
                      </p>
                    </div>
                  </div>
                  <div class="form-small">
                    <label for="" class="form-group-label"
                      >Ngành hàng con<span class="text-red-600">* </span>
                      <span></span
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
                      <p v-if="messageError?.type_code" class="text-red-600">
                        {{ messageError?.type_code[0] }}
                      </p>
                    </div>
                  </div>
                  <div class="form-small">
                    <label for="" class="form-group-label"
                      >Hình ảnh<span class="text-red-600">* </span> <span></span
                    ></label>
                    <div class="clearfix">
                      <a-upload
                        v-model:file-list="fileList"
                        list-type="picture-card"
                        action="//jsonplaceholder.typicode.com/posts/"
                        @preview="handlePreview"
                      >
                        <div v-if="fileList.length < 8">
                          <plus-outlined />
                          <div style="margin-top: 8px">Upload</div>
                        </div>
                      </a-upload>
                      <a-modal
                        :visible="previewVisible"
                        :footer="null"
                        @cancel="handleCancelImage"
                      >
                        <img
                          alt="example"
                          style="width: 100%"
                          :src="previewImage"
                        />
                      </a-modal>
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
                    <!-- <div class="form-small">
                        <label for="" class="form-group-label">Điều kiện</label>
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
                      </div> -->
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
  import BaseLayout from '../../../layout/baseLayout.vue'
  import SideBar from '../../../components/common/SideBar.vue'
  import Header from '../../../components/common/Header.vue'
  // import type { SelectProps } from 'ant-design-vue'
  import { useLocation } from '../../../store/modules/location/location'
  import { useGroupInventory } from '../../../store/modules/inventory/group-inventory'
  import { useInventory } from '../../../store/modules/inventory/product-invetory'
  import { useCategory } from '../../../store/modules/store-setting/category'
  import { storeToRefs } from 'pinia'
  import { ref, reactive } from 'vue'
  import { useToast } from 'vue-toastification'
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
  import { CarryOutOutlined, SmileTwoTone } from '@ant-design/icons-vue'
  import type { TreeProps } from 'ant-design-vue'
  import { PlusOutlined } from '@ant-design/icons-vue'
  import type { UploadProps } from 'ant-design-vue'

  function getBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  const previewVisible = ref(false)
  const previewImage = ref('')
  const previewTitle = ref('')

  const fileList = ref<UploadProps['fileList']>([])

  const handleCancelImage = () => {
    previewVisible.value = false
    previewTitle.value = ''
  }
  const handlePreview = async (file: UploadProps['fileList'][number]) => {
    if (!file.url && !file.preview) {
      file.preview = (await getBase64(file.originFileObj)) as string
    }
    previewImage.value = file.url || file.preview
    previewVisible.value = true
    previewTitle.value =
      file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
  }
  const showLine = ref<boolean>(true)
  const showIcon = ref<boolean>(false)
  const treeData = ref<TreeProps['treeData']>([
    {
      title: 'parent 1',
      key: '0-0',
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          children: [
            { title: 'leaf', key: '0-0-0-0' },
            {
              key: '0-0-0-1',
            },
            {
              title: 'leaf',
              key: '0-0-0-2',
              children: [
                { title: 'leaf', key: '0-0-1-0' },
                { title: 'leaf 1', key: '0-0-2-0' },
              ],
            },
          ],
        },
        {
          title: 'parent 1-1',
          key: '0-0-1',
          children: [{ title: 'leaf', key: '0-0-1-0' }],
        },
        {
          title: 'parent 1-2',
          key: '0-0-2',
          children: [
            { title: 'leaf 1', key: '0-0-2-0' },
            {
              title: 'leaf 2',
              key: '0-0-2-1',
            },
          ],
        },
      ],
    },
    {
      title: 'parent 2',
      key: '0-1',
      children: [
        {
          title: 'parent 2-0',
          key: '0-1-0',
          children: [
            { title: 'leaf', key: '0-1-0-0' },
            { title: 'leaf', key: '0-1-0-1' },
          ],
        },
      ],
    },
  ])
  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info)
  }
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
  const dataDetailCategory = useCategory()
  dataDetailCategory.getDetailCategoryAction(12)
  const { detailCategory } = storeToRefs(dataDetailCategory)
  console.log(detailCategory)

  const dataInventory = useInventory()
  const { messageError } = storeToRefs(dataInventory)

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

    inventory.address = name.title + ', ' + 'Việt Nam'
  }
  const handleChangeDistrict = (value: number, name: any) => {
    dataLocation.getListAllWardAction(value)
    inventory.address = name.title + ', ' + inventory.address
  }
  const handleChangeWard = (value: number, name: any) => {
    inventory.address = name.title + ', ' + inventory.address
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
    dataInventory.createInventoryAction(data, toast, router, EndTimeLoading)
  }
</script>

<style scoped>
  /* you can make up upload button and sample style by using stylesheets */
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>
