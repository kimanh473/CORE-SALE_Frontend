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
            <a-anchor-link
              v-for="(item, index) in indexAttribute"
              :key="index"
              :href="'#' + item.title"
              :title="item.title"
            />
          </a-anchor>
          <div
            class="text-left px-4 py-2 w-full h-full format-scroll form-large-full bg-white"
          >
            <!-- <div id="infor-common">
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
                            </div>
                          </div>
                        </div>
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
            </div> -->
            <div>
              <label for="" class="form-group-label"
                >Nhóm thuộc tính<span class="text-red-600">* </span>
                <span></span
              ></label>
              <div>
                <a-select
                  class="form-control-input"
                  placeholder="Chọn nhóm thuộc tính"
                  :options="listSetAttributeGroup"
                  v-model:value="product.groupAttributeID"
                  :fieldNames="{ label: 'title', value: 'id' }"
                  @change="handleChangeAttributeGroup"
                >
                </a-select>
              </div>
            </div>
            <!-- <div class="form-large-full grid grid-cols-2 gap-2 pr-[30px]">
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
                </div>
              </div>
            </div> -->
            <div v-for="(item, index) in indexAttribute" :key="index">
              <h4
                class="form-section-title form-large-full cursor-pointer"
                @click="isInfor = !isInfor"
                :id="item.title"
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
                class="form-large-full"
              >
                <label for="" class="form-group-label"
                  >{{ item1.frontend_label
                  }}<span class="text-red-600">* </span> <span></span
                ></label>
                <div v-for="(map, mapIndex) in typeProduct">
                  <component
                    :is="`a-${map.type}`"
                    :options="item1.option_detail"
                    v-model:checked="item1.default_value"
                    v-model:file-list="fileList"
                    list-type="picture-card"
                    :fieldNames="{ label: 'title', value: 'id' }"
                    v-bind="{ ...map.attribute }"
                    v-show="map.code == item1.frontend_input"
                    @preview="handlePreview"
                    @change="handleChange($event, item1.attribute_code)"
                  >
                    <div v-if="item1.attribute_code == 'image'">
                      <plus-outlined />
                      <div style="margin-top: 8px">Upload</div>
                    </div>
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
                  </component>
                </div>
                <div
                  id="product_table"
                  v-show="item1.default_value == true"
                  v-if="item1.attribute_code == 'classify_product'"
                  class="bg-[#E8E9EB]"
                >
                  <div class="p-4 m-2">
                    <p class="pr-[180px]">
                      Nhóm phân loại <span class="text-red-600">*</span>
                    </p>
                    <div v-for="(item, index) in dataOption" :key="index">
                      <div class="form-large-full grid grid-cols-2 gap-2 !m-0">
                        <p class="m-0">Nhóm phân loại {{ index }}</p>
                        <p class="m-0">Phân loại</p>
                        <div class="pr-[100px]">
                          <!-- <a-checkbox
                          v-model:checked="item.status"
                          class="!pl-[16px]"
                        ></a-checkbox> -->
                          <a-input
                            v-model:value="item.title"
                            placeholder="Nhập tiêu đề"
                          ></a-input>
                        </div>

                        <div class="flex items-end">
                          <a-select
                            v-model:value="item.optionClassify"
                            mode="tags"
                            style="width: 400px"
                            :token-separators="[',']"
                            placeholder=""
                            @change="handleChangeClassify"
                          ></a-select>
                          <i
                            @click="removeOptions(index)"
                            class="fal fa-times icon-close"
                          ></i>
                        </div>
                      </div>
                    </div>
                    <div @click="addOptions" class="mt-2 w-fit">
                      <i class="fal fa-plus-circle icon-plus fa-lg"></i>
                    </div>
                    <div
                      @click="addClassify"
                      class="button-modal w-fit cursor-pointer"
                    >
                      Thêm vào danh sách phân loại
                    </div>
                  </div>
                </div>
                <div
                  id="product_table"
                  v-show="item1.default_value == true"
                  v-if="item1.attribute_code == 'unit_change'"
                  class="bg-[#E8E9EB]"
                >
                  <div class="p-4 m-2">
                    <div class="form-large-full grid grid-cols-3 gap-3 !m-0">
                      <p>Phân loại <span class="text-red-600">*</span></p>
                      <p>Đơn vị quy đổi</p>
                      <p>Số lượng</p>
                    </div>
                    <div
                      v-for="(item, index) in dataUnit"
                      :key="index"
                      class="form-large-full grid grid-cols-3 gap-3"
                    >
                      <div class="w-full">
                        <a-select
                          class="form-control-input"
                          placeholder="Chọn nhóm thuộc tính"
                          :options="lastGenerateList"
                          v-model:value="product.nameClassifyID"
                          :fieldNames="{ label: 'title', value: 'code' }"
                          @change="handleChangeAttributeGroup"
                        >
                        </a-select>
                      </div>
                      <div class="w-full">
                        <!-- <a-checkbox
                          v-model:checked="item.status"
                          class="!pl-[16px]"
                        ></a-checkbox> -->
                        <a-input
                          v-model:value="item.unit"
                          placeholder="Nhập đơn vị quy đổi"
                        ></a-input>
                      </div>
                      <div class="flex items-end w-full">
                        <a-input
                          v-model:value="item.quantity"
                          placeholder="Nhập số lượng"
                        ></a-input>
                        <i
                          @click="removeUnits(index)"
                          class="fal fa-times icon-close"
                        ></i>
                      </div>
                    </div>
                    <div @click="addUnits" class="mt-2 w-fit">
                      <i class="fal fa-plus-circle icon-plus fa-lg"></i>
                    </div>
                  </div>
                </div>
                <div
                  id="product_table"
                  v-show="item1.default_value == true"
                  v-if="item1.attribute_code == 'unit_change'"
                >
                  <p class="p-3 font-bold text-lg">Bảng cấu hình</p>
                  <a-table
                    :columns="columns"
                    :data-source="lastGenerateList"
                    :pagination="false"
                    bordered
                  >
                    <template #bodyCell="{ column, record }">
                      <template v-if="column.key === 'group_1'"
                        ><div>
                          <a-upload
                            class="form-group-label"
                            list-type="picture-card"
                            @preview="handlePreview"
                          >
                            <div>
                              <plus-outlined />
                              <div style="margin-top: 8px">Upload</div>
                            </div>
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
                          </a-upload>
                          <p class="m-0">{{ record.title }}</p>
                        </div>
                      </template>
                      <template v-if="column.key === 'group_2'"> </template>
                      <template v-if="column.key === 'name'">
                        <a-input></a-input>
                      </template>
                      <template v-if="column.key === 'sku'">
                        <a-input v-model:value="sku[record.code]"></a-input>
                        {{ sku[record.code] }}
                      </template>
                      <template v-if="column.key === 'bar_code'">
                        <a-input></a-input>
                      </template>

                      <template v-if="column.key === 'weight'">
                        <div class="flex">
                          <a-input></a-input>
                          <a-select
                            class="!ml-[4px]"
                            :options="weightUnit"
                          ></a-select>
                        </div>
                      </template>
                      <template v-if="column.key === 'minimum'">
                        <a-input></a-input>
                      </template>
                      <template v-if="column.key === 'maximum'">
                        <a-input></a-input>
                      </template> </template
                  ></a-table>
                </div>
                <div
                  id="product_table"
                  v-show="item1.default_value == true"
                  v-if="item1.attribute_code == 'specification'"
                >
                  <p class="p-3 font-bold text-lg">Bảng kích cỡ thông số</p>
                  <div>
                    <a-select
                      class="form-control-input"
                      placeholder="Chọn thông số"
                      :options="listSpecification"
                      v-model:value="product.specificationID"
                      :fieldNames="{ label: 'title', value: 'id' }"
                    >
                    </a-select>
                  </div>
                  <a-table
                    :columns="columnsSpec"
                    :data-source="lastGenerateList"
                    :pagination="false"
                    bordered
                  >
                    <template #bodyCell="{ column, record }">
                      <template v-if="column.key === 'group_1'"
                        ><div>
                          <a-upload
                            class="form-group-label"
                            list-type="picture-card"
                            @preview="handlePreview"
                          >
                            <div>
                              <plus-outlined />
                              <div style="margin-top: 8px">Upload</div>
                            </div>
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
                          </a-upload>
                          <p class="m-0">{{ record.title }}</p>
                        </div>
                      </template>
                      <template v-if="column.key === 'group_2'"> </template>
                      <template v-if="column.key === 'name'">
                        <a-input></a-input>
                      </template>
                      <template v-if="column.key === 'sku'">
                        <a-input v-model:value="sku[record.code]"></a-input>
                        {{ sku[record.code] }}
                      </template>
                      <template v-if="column.key === 'bar_code'">
                        <a-input></a-input>
                      </template>

                      <template v-if="column.key === 'weight'">
                        <div class="flex">
                          <a-input></a-input>
                          <a-select
                            class="!ml-[4px]"
                            :options="weightUnit"
                          ></a-select>
                        </div>
                      </template>
                      <template v-if="column.key === 'minimum'">
                        <a-input></a-input>
                      </template>
                      <template v-if="column.key === 'maximum'">
                        <a-input></a-input>
                      </template> </template
                  ></a-table>
                </div>
              </div>
            </div>

            <!-- <div id="infor-price" class="w-full ml-4">
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
                      class="form-large-full grid grid-cols-2 gap-2 pr-[30px]"
                    >
                      <div>
                        <label for="" class="form-group-label"
                          >Tồn kho tối đa<span class="text-red-600"></span
                        ></label>
                        <div>
                          <input type="text" class="form-control-input" />
                        </div>
                      </div>
                      <div>
                        <label for="" class="form-group-label"
                          >Tồn kho tối thiểu<span class="text-red-600"></span
                        ></label>
                        <div>
                          <input type="text" class="form-control-input" />
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
            </div> -->
          </div>
        </div>
      </Transition>
    </template>
    <template v-slot:footer
      ><div class="bg-slate-300">
        <div class="p-4 text-left">
          <button class="button-modal" @click="createProduct()">
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
  import { useProduct } from '../../store/modules/store-setting/products'
  import { useAttributeProduct } from '../../store/modules/store-setting/attribute-product'
  import { useListTax } from '../../store/modules/store-setting/tax'
  import { useListSpecification } from '../../store/modules/store-setting/specification'
  import { useAttributeGroup } from '../../store/modules/store-setting/attribute-group'
  import { useCategory } from '../../store/modules/store-setting/category'
  import { storeToRefs } from 'pinia'
  import { typeProduct } from '../../page/products/configProduct'
  import type { SelectProps } from 'ant-design-vue'
  import type { UploadProps } from 'ant-design-vue'
  import { TreeSelectProps, TreeSelect } from 'ant-design-vue'
  import IconAddImg from '../../assets/images/icon_add_image.png'
  const dataSpecification = useListSpecification()
  dataSpecification.getListSpecificationAction()
  const { listSpecification } = storeToRefs(dataSpecification)
  const dataTax = useListTax()
  dataTax.getListTaxAction()
  const { listTax } = storeToRefs(dataTax)
  const dataAttributeGroup = useAttributeGroup()
  dataAttributeGroup.getListAttributeGroupAction()
  const { listAttributeGroup, listSetAttributeGroup, listDefault } =
    storeToRefs(dataAttributeGroup)
  const img = ref(IconAddImg)
  const indexAttribute = ref()
  const options = ref<SelectProps['options']>([])
  const valueClassify = ref<string[]>([])
  dataAttributeGroup
    .getListSetAttributeGroupAction()
    .then(() => (indexAttribute.value = listDefault.value))
  const dataCategory = useCategory()
  dataCategory.getListCategoryTreeAction()
  const { listTreeCategory } = storeToRefs(dataCategory)
  const uploadStatus = ref('success')
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
  const weightUnit = ref<SelectProps['options']>([
    {
      value: 'g',
      label: 'g',
    },
    {
      value: 'kg',
      label: 'kg',
    },
  ])
  const columns = [
    {
      title: 'Phiên bản sản phẩm',
      key: 'group_1',
      align: 'center',
    },
    {
      title: 'Tên',
      key: 'name',
      align: 'center',
    },
    {
      title: 'SKU',
      key: 'sku',
      align: 'center',
    },
    {
      title: 'Barcode',
      key: 'bar_code',
      align: 'center',
    },
    {
      title: 'Khối lượng',
      key: 'weight',
      align: 'center',
    },
    {
      title: 'Tồn kho tối thiểu',
      key: 'minimum',
      align: 'center',
    },
    {
      title: 'Tồn kho tối đa',
      key: 'maximum',
      align: 'center',
    },
  ]
  const columnsSpec = [
    {
      title: 'Size (Quốc tế)',
      key: 'group_1',
      align: 'center',
    },
    {
      title: 'Size (US)',
      key: 'name',
      align: 'center',
    },
    {
      title: 'Size (Việt Nam)',
      key: 'sku',
      align: 'center',
    },
  ]
  const data = [{}]
  // const handleSelect = (value: any, node: any, extra: any) => {
  //   console.log(value)
  //   console.log(node)
  //   let str = ''
  //   str += node.title + '/' + node.title.children[0]?.title

  //   console.log(str)
  // }
  const dataCreateProduct = ref<any>({})
  const handleChangeAttributeGroup = (value: any, options: any) => {
    indexAttribute.value = options.json_group_attribute_detail.map(
      (item: any) => ({
        title: item.title,
        attribute: item.attribute_detail,
      })
    )
  }
  const url = ref()
  // const checkJPG = (file: any) => {
  //   const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
  //   if (!isJPG) {
  //     toast.error('You can only upload JPG or PNG file!')
  //     return false
  //   } else {
  //     return true
  //   }
  // }
  const handleChange = async (event: any, input_name: string) => {
    console.log(event)
    if (typeof event == 'number' || typeof event == 'boolean') {
      console.log(input_name)
      dataCreateProduct.value[input_name] = event
    } else if (input_name == 'image') {
      // let data: any[] = []
      if (!event.file.url && !event.preview) {
        event.file.preview = (await getBase64(
          event.file.originFileObj
        )) as string
        // console.log(event.file.preview)
      }
      dataCreateProduct.value[input_name] = fileList.value.map(
        (item: any) => item.preview
      )
    } else if (input_name.includes('date')) {
      dataCreateProduct.value[input_name] = event.$d
        .toISOString()
        .substring(0, 10)
    } else {
      dataCreateProduct.value[input_name] = event.target.value
    }
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
  const sku = ref([])
  const isConfig1 = ref(false)
  const isConfig2 = ref(false)
  const isConfig3 = ref(false)
  const isPrice = ref(true)
  const isConfig = ref(true)
  const isDetail = ref(true)
  const isInfor = ref(true)
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
  const res_1 = ref([])

  const frc = (arr: any) => {
    let result = []
    let i = 0
    let k = 0

    while (i < arr.length - 1) {
      while (k < 1) {
        for (let m = 0; m < arr[0].length; m++) {
          for (let j = 0; j < arr[1].length; j++) {
            let a = arr[0][m]
            let b = a + '_' + arr[1][j]
            result.push(b)
          }
        }
        arr[0] = result
        arr.splice(1, 1)
        res_1.value = result
        k++
      }
      frc(arr)
      i++
    }
    return res_1
  }
  const listGenerate = ref<any>([])
  const listGenerateMap = ref<any>([])
  const mapArr = ref<any>([])
  const nameArr = ref<any>([])
  const handleChangeClassify = (value: any) => {
    console.log(value)
    mapArr.value = dataOption.map((item: any) => item.optionClassify)
    console.log(mapArr.value)

    // listGenerate.value = res_1.value.map((item: any, index: any) => ({
    //   title: item,
    //   code: index,
    // }))
    // console.log(listGenerate.value)

    // listGenerate.value = value.map((item: any, index: any) => ({
    //   title: item,
    //   code: index,
    // }))
    // dataOption.push(
    //   value.map((item: any, index: any) => ({
    //     title: dataOption[0].title + ' ' + item,
    //     code: index,
    //   }))
    // )
  }

  const handlePreview = async (file: UploadProps['fileList'][number]) => {
    if (!file.url && !file.preview) {
      file.preview = (await getBase64(file.originFileObj)) as string
      console.log(file.preview)
    }
    previewImage.value = file.url || file.preview
    previewVisible.value = true
    previewTitle.value =
      file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
  }

  const dataOption = reactive([
    {
      optionClassify: <SelectProps['options']>[],
      title: '',
    },
  ])
  const addOptions = () => {
    const data = {
      optionClassify: <SelectProps['options']>[],
      title: '',
    }
    dataOption.push(data)
  }
  const removeOptions = (index: number) => {
    dataOption.splice(index, 1)
  }
  const dataUnit = reactive([
    {
      idClassify: '',
      unit: '',
      quantity: '',
    },
  ])
  const addUnits = () => {
    const data = {
      idClassify: '',
      unit: '',
      quantity: '',
    }
    dataUnit.push(data)
  }
  const removeUnits = (index: number) => {
    dataUnit.splice(index, 1)
  }
  const lastGenerateList = ref<any>([])
  const addClassify = async () => {
    nameArr.value = []
    listGenerate.value = []
    nameArr.value.push(dataCreateProduct.value.name)
    listGenerate.value.push(nameArr.value, ...mapArr.value)
    await frc(listGenerate.value)
    lastGenerateList.value = res_1.value.map((item: any, index: any) => ({
      title: item,
      code: index,
    }))
  }
  const dataProduct = useProduct()
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
    groupAttributeID: 1,
    taxID: null,
    specificationID: null,
    classifyID: null,
    nameClassifyID: null,
  })
  const createProduct = () => {
    // let data = {
    //   title: product.title,
    //   code: product.code,
    //   desc: product.desc,
    // }
    dataProduct.createProductAction(
      dataCreateProduct.value,
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
  #preview {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #preview img {
    max-width: 100%;
    max-height: 100px;
  }
  .ant-upload-list-picture .ant-upload-list-item-error,
  .ant-upload-list-picture-card .ant-upload-list-item-error {
    border-color: transparent;
  }
  .ant-tooltip-placement-top,
  .ant-tooltip-placement-topLeft,
  .ant-tooltip-placement-topRight {
    display: none;
  }
</style>
