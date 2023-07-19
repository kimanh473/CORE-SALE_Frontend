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
          ><p class="pl-5 text-[16px]">Cập nhật sản phẩm</p></template
        >
      </Header>
    </template>
    <template v-slot:content class="relative">
      <Transition :duration="550" name="nested">
        <div
          class="text-left px-4 py-2 w-full h-full format-scroll form-plus-over"
        >
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
                  <div class="w-full">
                    <div class="form-small">
                      <div>
                        <label for="" class="form-group-label"
                          >Tên sản phẩm<span class="text-red-600">* </span>
                          <span></span
                        ></label>
                        <div>
                          <input
                            type="text"
                            class="form-control-input"
                            placeholder="Nhập tên sản phẩm"
                            v-model="product.title"
                          />
                          <!-- <p v-if="messageError?.title" class="text-red-600">
                      {{ messageError?.title[0] }}
                    </p> -->
                        </div>
                      </div>
                    </div>
                    <div class="form-large grid grid-cols-2 gap-2">
                      <div>
                        <label for="" class="form-group-label"
                          >SKU<span class="text-red-600">* </span> <span></span
                        ></label>
                        <div>
                          <input
                            type="text"
                            class="form-control-input"
                            placeholder="Nhập mã"
                            v-model="product.code"
                          />
                          <!-- <p v-if="messageError?.title" class="text-red-600">
                      {{ messageError?.title[0] }}
                    </p> -->
                        </div>
                      </div>
                      <div>
                        <label for="" class="form-group-label"
                          >Barcode<span class="text-red-600">* </span>
                          <span></span
                        ></label>
                        <div>
                          <input
                            type="text"
                            class="form-control-input"
                            placeholder="Nhập barcode"
                            v-model="product.code"
                          />
                          <!-- <p v-if="messageError?.title" class="text-red-600">
                      {{ messageError?.title[0] }}
                    </p> -->
                        </div>
                      </div>
                    </div>

                    <div class="form-small">
                      <label for="" class="form-group-label"
                        >Hình ảnh<span class="text-red-600">* </span>
                        <span></span
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
                    <div class="form-large grid grid-cols-2 gap-2">
                      <div>
                        <label for="" class="form-group-label"
                          >Ngành hàng<span class="text-red-600">* </span>
                          <span></span
                        ></label>
                        <div>
                          <input
                            type="text"
                            class="form-control-input"
                            v-model="product.code"
                          />
                          <!-- <p v-if="messageError?.title" class="text-red-600">
                      {{ messageError?.title[0] }}
                    </p> -->
                        </div>
                      </div>
                      <div>
                        <label for="" class="form-group-label"
                          >Nhóm thuộc tính<span class="text-red-600">* </span>
                          <span></span
                        ></label>
                        <div>
                          <input
                            type="text"
                            class="form-control-input"
                            v-model="product.code"
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
                          >Thuế<span class="text-red-600">* </span> <span></span
                        ></label>
                        <div>
                          <input
                            type="text"
                            class="form-control-input"
                            placeholder="Nhập thuế"
                            v-model="product.title"
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
                          ></textarea>
                          <!-- <p v-if="messageError?.title" class="text-red-600">
                      {{ messageError?.title[0] }}
                    </p> -->
                        </div>
                      </div>
                    </div>
                    <!-- <a-switch v-model:checked="web.status" /> &nbsp; Kích hoạt -->
                  </div>
                </div>
              </div>
            </Transition>
          </div>
          <div id="infor-detail" class="w-full ml-4">
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
              <div v-show="isDetail == true" class="outer">
                <div class="w-full">
                  <div class="form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Thuộc web<span class="text-red-600">* </span>
                        <span></span
                      ></label>
                      <div>
                        <a-select
                          class="form-control-input"
                          placeholder="Chọn web"
                        >
                          <a-select-option
                            v-for="(item, index) in listWeb"
                            :key="index"
                            :value="item.code"
                            >{{ item.web_name }}</a-select-option
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
                        >Tên<span class="text-red-600"></span
                      ></label>
                      <div>
                        <input
                          type="text"
                          class="form-control-input"
                          placeholder="Nhập tên nhóm thuộc tính"
                        />
                        <!-- <p v-if="messageError?.code" class="text-red-600">
                            {{ messageError?.code[0] }}
                          </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Dựa trên<span class="text-red-600"></span
                      ></label>
                      <div>
                        <a-select
                          class="form-control-input"
                          placeholder="Chọn thuộc tính"
                          mode="multiple"
                        >
                          <a-select-option
                            v-for="(item, index) in listAttributeProduct"
                            :key="index"
                            >{{ item.attribute_code }}</a-select-option
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
          </div>
        </div>
      </Transition>
    </template>
    <template v-slot:footer
      ><div class="bg-slate-300">
        <div class="p-4 text-left">
          <button class="button-modal" @click="createGroupInventory()">
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
  import BaseLayout from '../../layout/baseLayout.vue'
  import SideBar from '../../components/common/SideBar.vue'
  import Header from '../../components/common/Header.vue'
  import { ref, reactive } from 'vue'
  import { useToast } from 'vue-toastification'
  import { useGroupInventory } from '../../store/modules/inventory/group-inventory'
  import { useRouter } from 'vue-router'
  import { PlusOutlined } from '@ant-design/icons-vue'
  import { useWebCatalog } from '../../store/modules/web-catalog/webcatalog'
  import { useAttributeProduct } from '../../store/modules/store-setting/attribute-product'
  import { storeToRefs } from 'pinia'
  import type { UploadProps } from 'ant-design-vue'

  function getBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }
  const previewVisible = ref<boolean>(false)
  const previewImage = ref('')
  const previewTitle = ref('')
  const isInfor = ref(true)
  const isDetail = ref(true)
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
  const webCatalog = useWebCatalog()
  webCatalog.getAllWebCatalogAction()
  const { listWeb } = storeToRefs(webCatalog)
  const dataAttribute = useAttributeProduct()
  dataAttribute.getListAttributeAction()
  const { listAttributeProduct } = storeToRefs(dataAttribute)
  const showManageChoice = ref<Boolean>(false)
  const dataGroupInventory = useGroupInventory()
  const isLoading = ref<boolean>(false)
  const toast = useToast()
  const router = useRouter()
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const product = reactive({
    title: '',
    code: '',
    desc: '',
  })
  const createGroupInventory = () => {
    let data = {
      title: product.title,
      code: product.code,
      desc: product.desc,
    }
    dataGroupInventory.createGroupInventoryAction(
      data,
      toast,
      router,
      EndTimeLoading
    )
  }
</script>

<style scoped>
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>
