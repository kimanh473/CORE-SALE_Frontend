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
          ><p class="pl-5 text-[16px]">Tạo mới sản phẩm</p></template
        >
      </Header>
    </template>
    <template v-slot:content class="relative">
      <!-- <div
        class="!my-4 !py-[10px] !mx-[10px] bg-slate-500 rounded flex justify-between"
      >
        <div></div>
        <div
          class="button-create-new relative group rounded-md px-2"
          title="Hủy tạo"
        >
          <p class="text-[14px] mt-1 px-1">Hủy</p>
        </div>
      </div> -->
      <Transition :duration="550" name="nested">
        <div class="flex form-large-70 pl-[150px]">
          <a-anchor
            :wrapperStyle="{
              width: '200px',
              height: 'fit-content',
              position: 'fixed',
              padding: '0',
              margin: '0',
              top: '72px',
              background: 'white',
              textAlign: 'center',
            }"
            :showInkInFixed="true"
            class="min-w-[200px] min-h-full mr-[10px]"
          >
            <a-anchor-link href="#infor-common" title="Thông tin chung" />
            <a-anchor-link href="#infor-detail" title="Thông tin chi tiết" />
          </a-anchor>
          <div
            class="text-left px-4 py-2 w-full h-full format-scroll form-large-full bg-white"
          >
            <div id="infor-common">
              <div class="w-full ml-4">
                <div class="pr-[30px]">
                  <label for="" class="form-group-label"
                    >Nhóm thuộc tính<span class="text-red-600">* </span>
                    <span></span
                  ></label>
                  <div>
                    <a-select
                      class="form-control-input"
                      placeholder="Chọn nhóm thuộc tính"
                      :options="listAttributeGroup"
                      v-model:value="product.groupAttributeID"
                      :fieldNames="{ label: 'title', value: 'code' }"
                      @change="handleChangeAttributeGroup"
                    >
                    </a-select>
                    <!-- <p v-if="messageError?.title" class="text-red-600">
                    {{ messageError?.title[0] }}
                  </p> -->
                  </div>
                </div>
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
                        <div
                          class="form-large-full grid grid-cols-2 gap-2 pr-[30px]"
                        >
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
                          <div>
                            <label for="" class="form-group-label"
                              >Website<span class="text-red-600">* </span>
                              <span></span
                            ></label>
                            <div>
                              <a-select
                                class="form-control-input"
                                placeholder="Chọn web"
                                :options="listWeb"
                                v-model:value="product.webID"
                                :fieldNames="{ label: 'title', value: 'code' }"
                              >
                              </a-select>
                              <!-- <p v-if="messageError?.title" class="text-red-600">
                    {{ messageError?.title[0] }}
                  </p> -->
                            </div>
                          </div>
                        </div>
                        <div class="form-large-full pr-[30px]">
                          <div>
                            <label for="" class="form-group-label"
                              >Ngành hàng<span class="text-red-600">* </span>
                              <span></span
                            ></label>
                            <div>
                              <a-tree-select
                                placeholder="Chọn ngành hàng"
                                style="width: 100%"
                                v-model:value="valueTree"
                                :tree-data="listTreeCategory"
                                :show-checked-strategy="TreeSelect.SHOW_ALL"
                                :fieldNames="{
                                  children: 'children',
                                  label: 'title',
                                  value: 'id',
                                }"
                                tree-checkable
                                treeDefaultExpandAll
                                multiple
                              >
                              </a-tree-select>
                              <!-- <p v-if="messageError?.title" class="text-red-600">
                    {{ messageError?.title[0] }}
                  </p> -->
                            </div>
                          </div>
                        </div>
                        <div
                          class="form-large-full grid grid-cols-2 gap-2 pr-[30px]"
                        >
                          <div>
                            <label for="" class="form-group-label"
                              >Thuế<span class="text-red-600">* </span>
                              <span></span
                            ></label>
                            <div>
                              <a-select
                                class="form-control-input"
                                placeholder="Chọn loại thuế"
                                :options="listTax"
                                v-model:value="product.taxID"
                                :fieldNames="{ label: 'title', value: 'code' }"
                              >
                              </a-select>
                              <!-- <p v-if="messageError?.title" class="text-red-600">
                    {{ messageError?.title[0] }}
                  </p> -->
                            </div>
                          </div>
                        </div>
                        <div
                          class="form-large-full grid grid-cols-2 gap-2 pr-[30px]"
                        >
                          <div>
                            <label for="" class="form-group-label"
                              >SKU<span class="text-red-600">* </span>
                              <span></span
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
                        <div
                          class="form-large-full grid grid-cols-2 gap-2 pr-[30px]"
                        >
                          <div>
                            <label for="" class="form-group-label"
                              >Khối lượng<span class="text-red-600">* </span>
                              <span></span
                            ></label>
                            <div>
                              <input
                                type="text"
                                class="form-control-input"
                                placeholder="Nhập khối lượng"
                                v-model="product.code"
                              />
                              <!-- <p v-if="messageError?.title" class="text-red-600">
                    {{ messageError?.title[0] }}
                  </p> -->
                            </div>
                          </div>
                          <div>
                            <label for="" class="form-group-label"
                              >Đơn vị tính<span class="text-red-600">* </span>
                              <span></span
                            ></label>
                            <div>
                              <a-select
                                class="form-control-input"
                                placeholder="Chọn đơn vị tinh"
                                :options="listSpecification"
                                v-model:value="product.specificationID"
                                :fieldNames="{ label: 'title', value: 'code' }"
                              >
                              </a-select>
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
            <a-select
              class="form-control-input"
              placeholder="Chọn nhóm thuộc tính"
              :options="listSetAttributeGroup"
              v-model:value="product.groupAttributeID"
              :fieldNames="{ label: 'title', value: 'code' }"
              @change="handleChangeAttributeGroup"
            >
            </a-select>
            <div class="form-large-full grid grid-cols-2 gap-2 pr-[30px]">
              <div>
                <label for="" class="form-group-label"
                  >Tên sản phẩm<span class="text-red-600">* </span> <span></span
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
              <div>
                <label for="" class="form-group-label"
                  >Website<span class="text-red-600">* </span> <span></span
                ></label>
                <div>
                  <a-select
                    class="form-control-input"
                    placeholder="Chọn web"
                    :options="listWeb"
                    v-model:value="product.webID"
                    :fieldNames="{ label: 'title', value: 'code' }"
                  >
                  </a-select>
                  <!-- <p v-if="messageError?.title" class="text-red-600">
                    {{ messageError?.title[0] }}
                  </p> -->
                </div>
              </div>
            </div>
            <div class="form-large-full pr-[30px]">
              <div>
                <label for="" class="form-group-label"
                  >Ngành hàng<span class="text-red-600">* </span> <span></span
                ></label>
                <div>
                  <a-tree-select
                    placeholder="Chọn ngành hàng"
                    style="width: 100%"
                    v-model:value="valueTree"
                    :tree-data="listTreeCategory"
                    :show-checked-strategy="TreeSelect.SHOW_ALL"
                    :fieldNames="{
                      children: 'children',
                      label: 'title',
                      value: 'id',
                    }"
                    tree-checkable
                    treeDefaultExpandAll
                    multiple
                  >
                  </a-tree-select>
                  <!-- <p v-if="messageError?.title" class="text-red-600">
                    {{ messageError?.title[0] }}
                  </p> -->
                </div>
              </div>
            </div>
            <div v-for="(item, index) in indexAttribute" :key="index">
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
                {{ item.title.toUpperCase() }}
              </h4>
              <div
                v-show="isInfor == true"
                v-for="(item1, index1) in item.attribute"
                :key="index1"
                class="form-small"
              >
                <label for="" class="form-group-label"
                  >{{ item1.frontend_label
                  }}<span class="text-red-600">* </span> <span></span
                ></label>
                <div v-for="(map, mapIndex) in typeProduct">
                  <keep-alive>
                    <component
                      :is="`a-${map.type}`"
                      :options="item1.option_detail"
                      v-model:checked="item1.default_value"
                      v-model:value="item1.default_value"
                      :fieldNames="{ label: 'title', value: 'id' }"
                      v-bind="{ ...map.attribute }"
                      v-show="map.code == item1.backend_type"
                      :ref="item1.attribute_code"
                      @change="handleChange($event, Object.keys($refs))"
                    ></component>
                  </keep-alive>
                </div>
              </div>
            </div>
            <div id="infor-price" class="w-full ml-4">
              <h4
                class="form-section-title form-small cursor-pointer"
                @click="isPrice = !isPrice"
              >
                <span v-show="isPrice == true">
                  <i class="fas fa-chevron-down cursor-pointer"></i>
                </span>
                <span v-show="isPrice == false"
                  ><i class="fas fa-chevron-right cursor-pointer"></i
                ></span>
                Giá & Tồn kho
              </h4>
              <Transition name="slide-up">
                <div v-show="isPrice == true" class="outer">
                  <div class="w-full">
                    <div
                      class="form-large-full grid grid-cols-3 gap-3 pr-[30px]"
                    >
                      <div>
                        <label for="" class="form-group-label"
                          >Giá sỉ<span class="text-red-600">* </span>
                          <span></span
                        ></label>
                        <div>
                          <input type="text" class="form-control-input" />
                          <!-- <p v-if="messageError?.title" class="text-red-600">
                          {{ messageError?.title[0] }}
                        </p> -->
                        </div>
                      </div>
                      <div>
                        <label for="" class="form-group-label"
                          >Giá lẻ<span class="text-red-600"></span
                        ></label>
                        <div>
                          <input type="text" class="form-control-input" />
                          <!-- <p v-if="messageError?.code" class="text-red-600">
                          {{ messageError?.code[0] }}
                        </p> -->
                        </div>
                      </div>
                    </div>
                    <div
                      class="form-large-full grid grid-cols-3 gap-3 pr-[30px]"
                    >
                      <div>
                        <label for="" class="form-group-label"
                          >Tổn tổng kho<span class="text-red-600">* </span>
                          <span></span
                        ></label>
                        <div>
                          <input type="text" class="form-control-input" />
                          <!-- <p v-if="messageError?.title" class="text-red-600">
                          {{ messageError?.title[0] }}
                        </p> -->
                        </div>
                      </div>
                      <div>
                        <label for="" class="form-group-label"
                          >Tồn kho tối đa<span class="text-red-600"></span
                        ></label>
                        <div>
                          <input type="text" class="form-control-input" />
                          <!-- <p v-if="messageError?.code" class="text-red-600">
                          {{ messageError?.code[0] }}
                        </p> -->
                        </div>
                      </div>
                      <div>
                        <label for="" class="form-group-label"
                          >Tồn kho tối thiểu<span class="text-red-600"></span
                        ></label>
                        <div>
                          <input type="text" class="form-control-input" />
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
            <div id="infor-price" class="w-full ml-4">
              <h4
                class="form-section-title form-small cursor-pointer"
                @click="isConfig = !isConfig"
              >
                <span v-show="isConfig == true">
                  <i class="fas fa-chevron-down cursor-pointer"></i>
                </span>
                <span v-show="isConfig == false"
                  ><i class="fas fa-chevron-right cursor-pointer"></i
                ></span>
                Cấu hình sản phẩm
              </h4>
              <Transition name="slide-up">
                <div v-show="isConfig == true" class="outer">
                  <div class="w-full">
                    <div>
                      Phân loại hàng <a-switch v-model:checked="isConfig1" />
                    </div>
                    <div>
                      Đơn vị tính <a-switch v-model:checked="isConfig2" />
                    </div>
                    <div>
                      Bảng kích cỡ thông số
                      <a-switch v-model:checked="isConfig3" />
                    </div>
                  </div>
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
          <button class="button-modal" @click="createGroupInventory()">
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
  import BaseLayout from '../../layout/baseLayout.vue'
  import SideBar from '../../components/common/SideBar.vue'
  import Header from '../../components/common/Header.vue'
  import { ref, reactive, watch } from 'vue'
  import { useToast } from 'vue-toastification'
  import { useGroupInventory } from '../../store/modules/inventory/group-inventory'
  import { useRouter } from 'vue-router'
  import { PlusOutlined } from '@ant-design/icons-vue'
  import { useWebCatalog } from '../../store/modules/web-catalog/webcatalog'
  import { useAttributeProduct } from '../../store/modules/store-setting/attribute-product'
  import { useListTax } from '../../store/modules/store-setting/tax'
  import { useListSpecification } from '../../store/modules/store-setting/specification'
  import { useAttributeGroup } from '../../store/modules/store-setting/attribute-group'
  import { useCategory } from '../../store/modules/store-setting/category'
  import { storeToRefs } from 'pinia'
  import { typeProduct } from '../../page/products/configProduct'
  import type { UploadProps } from 'ant-design-vue'
  import { TreeSelectProps, TreeSelect } from 'ant-design-vue'
  const dataSpecification = useListSpecification()
  dataSpecification.getListSpecificationAction()
  const { listSpecification } = storeToRefs(dataSpecification)
  const dataTax = useListTax()
  dataTax.getListTaxAction()
  const { listTax } = storeToRefs(dataTax)
  const dataAttributeGroup = useAttributeGroup()
  dataAttributeGroup.getListAttributeGroupAction()
  dataAttributeGroup.getListSetAttributeGroupAction()
  const { listAttributeGroup, listSetAttributeGroup } =
    storeToRefs(dataAttributeGroup)
  const dataCategory = useCategory()
  dataCategory.getListCategoryTreeAction()
  const { listTreeCategory } = storeToRefs(dataCategory)
  console.log(listSetAttributeGroup)

  const valueTree = ref([])
  const treeData = ref([
    {
      title: 'Node1',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-1',
          key: '0-0-1',
        },
        {
          title: 'Child Node2',
          value: '0-0-2',
          key: '0-0-2',
        },
      ],
    },
  ])
  // const handleSelect = (value: any, node: any, extra: any) => {
  //   console.log(value)
  //   console.log(node)
  //   let str = ''
  //   str += node.title + '/' + node.title.children[0]?.title

  //   console.log(str)
  // }
  const dataCreateProduct = ref({})

  const indexAttribute = ref()
  const handleChangeAttributeGroup = (value: any, options: any) => {
    console.log(value)
    console.log(options)
    indexAttribute.value = options.json_group_attribute_detail.map(
      (item: any) => ({
        title: item.title,
        attribute: item.attribute_detail,
      })
    )
    console.log(indexAttribute.value)
  }
  const handleChange = (event: any, code: any) => {
    console.log(event)
    console.log(code)
    let obj = code.reduce((accumulator: any, value: any) => {
      return { ...accumulator, [value]: event.target.value }
    }, {})
    // code = dataCreateProduct.value
    dataCreateProduct.value = Object.assign({}, obj)
    console.log(dataCreateProduct.value)
  }
  function getBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }
  const checked = ref<boolean>(false)
  const previewVisible = ref<boolean>(false)
  const previewImage = ref('')
  const previewTitle = ref('')
  const isConfig1 = ref(false)
  const isConfig2 = ref(false)
  const isConfig3 = ref(false)
  const isPrice = ref(true)
  const isConfig = ref(true)
  const isInfor = ref(true)
  const isDetail = ref(true)
  const fileList = ref<UploadProps['fileList']>([])
  const handleCancelImage = () => {
    previewVisible.value = false
    previewTitle.value = ''
  }
  const formatType = (type: string) => {
    if (type == 'text') {
      return 'text'
    } else if (type == 'varchar') {
      return 'checkbox'
    } else {
      return ''
    }
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
    webID: null,
    groupAttributeID: null,
    taxID: null,
    specificationID: null,
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

<style>
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
  .ant-anchor-ink {
    font-family: 'Font Awesome 5 Pro';
    /* content: '\f055'; */
    font-weight: 500;
    margin-left: 30px;
  }
  .ant-anchor-link {
    padding: 7px 0 7px 0px;
  }
</style>
