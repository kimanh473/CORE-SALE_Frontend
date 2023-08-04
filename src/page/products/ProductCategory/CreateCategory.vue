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
          ><p class="pl-5 text-[16px]">Ngành hàng</p></template
        >
      </Header>
    </template>
    <template v-slot:content class="relative flex">
      <div
        class="!my-4 !py-[10px] !mx-[10px] bg-slate-500 rounded flex justify-end"
      >
        <div
          class="button-delete relative group rounded-md px-2"
          title="Xóa"
          @click="handleOpenDelete()"
          v-if="idSelected != undefined"
        >
          <p class="text-[14px] mt-1 px-1">Xóa ngành hàng</p>
        </div>
        <div
          class="button-create-new relative group rounded-md px-2"
          title="Tạo mới"
          @click="openModalCreate()"
        >
          <p class="text-[14px] mt-1 px-1">Tạo mới ngành hàng con</p>
        </div>
      </div>
      <Transition :duration="550" name="nested">
        <div
          class="text-left px-4 py-2 w-full h-full format-scroll form-plus-over flex"
        >
          <div>
            <div style="margin-bottom: 16px">
              <!-- showLine:
              <a-switch v-model:checked="showLine" />
              <br />
              <br />
              showIcon:
              <a-switch v-model:checked="showIcon" /> -->
              <!-- <div
                class="button-create-new relative group rounded-md px-2"
                title="Tạo mới"
                @click="openModalCreate"
              >
                <p class="text-[14px] mt-1 px-1">Tạo mới ngành hàng</p>
              </div> -->
            </div>
            <a-tree
              class="w-[200px]"
              block-node
              :show-line="showLine"
              :show-icon="showIcon"
              :default-expanded-keys="['0-0-0']"
              :tree-data="listTreeCategory"
              @select="onSelect"
            >
              <template #icon><carry-out-outlined /></template>
              <template #title="{ dataRef }">
                {{ dataRef.title }}
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
                          v-model="category.title"
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
                        show-search
                        class="form-control-input"
                        placeholder="Chọn ngành hàng"
                        :options="listCategory"
                        :filter-option="filterOption"
                        v-model:value="parentSelected"
                        @click.once="getListCategory"
                        @change="handleChange"
                      >
                        <!-- <a-select-option
                          v-for="(item, index) in listCategory"
                          :key="index"
                          :value="item.id"
                          >{{ item.title }}</a-select-option
                        > -->
                      </a-select>
                      <p v-if="messageError?.type_code" class="text-red-600">
                        {{ messageError?.type_code[0] }}
                      </p>
                    </div>
                  </div>
                  <!-- <div class="form-small">
                    <label for="" class="form-group-label"
                      >Ngành hàng con<span class="text-red-600">* </span>
                      <span></span
                    ></label>
                    <div>
                      <a-select
                        class="form-control-input"
                        placeholder="Chọn nhóm kho"
                        v-model:value="category.type_code"
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
                  </div> -->
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
                          v-model="category.desc"
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
                          v-model="category.desc"
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
          <button class="button-modal" @click="updateCategory">Cập nhật</button>
          <button class="button-close-modal" @click="this.$router.go(-1)">
            Hủy bỏ
          </button>
        </div>
      </div></template
    >
  </base-layout>
  <a-modal
    :visible="isOpenCreateCategory"
    @cancel="handleClose"
    title="Tạo mới ngành hàng"
    width="550px"
  >
    <template #footer>
      <a-button
        key="submit"
        type="primary"
        @click="createCategory"
        :loading="isLoading"
        >Tạo</a-button
      >
      <a-button key="back" @click="handleClose">Hủy</a-button>
    </template>
    <div>
      <div class="grid grid-cols-2 gap-2 form-small">
        <div>
          <label for="" class="form-group-label"
            >Tên ngành hàng<span class="text-red-600">* </span> <span></span
          ></label>
          <div>
            <input
              type="text"
              class="form-control-input"
              placeholder="Nhập ngành hàng"
              v-model="category.titleCreate"
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
          >Ngành hàng cha<span class="text-red-600">* </span> <span></span
        ></label>
        <div>
          <a-select
            show-search
            class="form-control-input"
            placeholder="Chọn ngành hàng"
            :options="listCategory"
            :filter-option="filterOption"
            v-model:value="category.parentSelectedCreate"
            @click.once="getListCategory"
            @change="handleChangeCreate"
          >
            <!-- <a-select-option
                          v-for="(item, index) in listCategory"
                          :key="index"
                          :value="item.id"
                          >{{ item.title }}</a-select-option
                        > -->
          </a-select>
          <p v-if="messageError?.type_code" class="text-red-600">
            {{ messageError?.type_code[0] }}
          </p>
        </div>
      </div>
      <!-- <div class="form-small">
                    <label for="" class="form-group-label"
                      >Ngành hàng con<span class="text-red-600">* </span>
                      <span></span
                    ></label>
                    <div>
                      <a-select
                        class="form-control-input"
                        placeholder="Chọn nhóm kho"
                        v-model:value="category.type_code"
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
                  </div> -->
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
            <img alt="example" style="width: 100%" :src="previewImage" />
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
              v-model="category.descCreate"
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
                          v-model="category.desc"
                        ></textarea>
                      </div>
                    </div> -->
      </div>
    </div>
  </a-modal>
  <modal-delete
    :isOpen="isOpenConfirm"
    :handleCloseDetail="handleCloseConfirm"
    :ConfirmDelete="deleteCategory"
  >
  </modal-delete>
  <loading-overlay :isLoading="isLoading"></loading-overlay>
</template>

<script setup lang="ts">
  import BaseLayout from '../../../layout/baseLayout.vue'
  import SideBar from '../../../components/common/SideBar.vue'
  import Header from '../../../components/common/Header.vue'
  // import type { SelectProps } from 'ant-design-vue'
  import { useCategory } from '../../../store/modules/store-setting/category'
  import ModalDelete from '../../../components/modal/ModalConfirmDelelte.vue'
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
  const isInfor = ref(true)
  const checked = ref(false)
  const isLoading = ref<boolean>(false)
  const isOpenCreateCategory = ref<boolean>(false)
  const handleClose = () => {
    isOpenCreateCategory.value = false
  }

  const openModalCreate = () => {
    isOpenCreateCategory.value = true
  }
  const isOpenConfirm = ref<boolean>(false)
  const handleCloseConfirm = () => {
    isOpenConfirm.value = false
  }
  const handleOpenDelete = () => {
    isOpenConfirm.value = true
  }
  const deleteCategory = () => {
    dataCategory.deleteCategoryAction(
      idSelected.value,
      toast,
      EndTimeLoading,
      handleCloseConfirm
    )
  }
  // const isReInput = ref<boolean>(true)
  import { CarryOutOutlined, SmileTwoTone } from '@ant-design/icons-vue'
  import type { TreeProps } from 'ant-design-vue'
  import { PlusOutlined } from '@ant-design/icons-vue'
  import type { UploadProps } from 'ant-design-vue'
  const filterOption = (input: string, option: any) => {
    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
  }
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
  const showIcon = ref<boolean>(true)
  const dataCategory = useCategory()
  dataCategory.getListCategoryTreeAction()
  const { listCategory, listTreeCategory } = storeToRefs(dataCategory)
  // const treeData = [
  //   {
  //     title: 'parent 1',
  //     key: '0-1',
  //     children: [
  //       {
  //         title: 'parent 2-0',
  //         key: '0-1-0',
  //       },
  //     ],
  //   },
  // ]
  const category = reactive({
    title: '',
    parent_id: '',
    parent_id_create: '',
    desc: '',
    titleCreate: '',
    descCreate: '',
    parentSelectedCreate: '',
  })
  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info)
    category.parent_id = info.node.parent_id
    category.title = info.node.title
    category.desc = info.node.desc
    parentSelected.value = info.node.parent.node.title
    category.parentSelectedCreate = info.node.title
    idSelected.value = info.node.id
    category.parent_id_create = info.node.id
  }
  const EndTimeLoading = () => {
    isLoading.value = false
  }

  const parentIdSelectChange = ref()
  const handleChange = (value: string) => {
    parentIdSelectChange.value = value
  }
  const handleChangeCreate = (value: string) => {
    category.parent_id_create = value
    console.log(category.parent_id_create)
  }
  const idSelected = ref()
  const parentSelected = ref()

  const messageError = ref()
  const getListCategory = () => {
    dataCategory.getListCategoryAction()
  }
  const updateCategory = () => {
    let data = {
      title: category.title,
      desc: category.desc,
      parent_id: parentIdSelectChange.value,
    }
    dataCategory.updateCategoryAction(
      idSelected.value,
      data,
      toast,
      EndTimeLoading
    )
  }
  const createCategory = () => {
    let data = {
      title: category.titleCreate,
      desc: category.descCreate,
      parent_id: category.parent_id_create,
    }
    dataCategory.createCategoryAction(data, toast, handleClose, EndTimeLoading)
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
