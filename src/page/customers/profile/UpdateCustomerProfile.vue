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
          ><p class="pl-5 text-[16px]">Sửa thông tin khác hàng</p></template
        >
      </Header>
    </template>
    <template v-slot:content class="relative">
      <Transition name="slide-up">
        <div>
          <a-tabs
            v-model:activeKey="activeKey"
            animated
            style="padding-left: 15px"
          >
            <a-tab-pane key="1" tab="Thông tin khách hàng">
              <div class="w-full inner">
                <Transition :duration="550" name="nested">
                  <div
                    class="text-left p-2 w-full h-full format-scroll form-plus-over"
                  >
                    <div class="w-full">
                      <Transition name="slide-up">
                        <div v-show="isInfor == true" class="outer">
                          <div>
                            <div class="grid grid-cols-2 gap-2 form-small">
                              <div>
                                <label for="" class="form-group-label"
                                  >Nhóm khách hàng
                                  <span class="text-red-600">* </span>
                                  <span></span
                                ></label>
                                <a-select
                                  show-search
                                  class="form-control-input"
                                  placeholder="Chọn nhóm khách hàng"
                                  :options="listGroupCustomer"
                                  v-model:value="
                                    detailCustomerProfile.customer_group
                                  "
                                  @change="handleChangeGroup"
                                  :fieldNames="{ label: 'code', value: 'id' }"
                                >
                                </a-select>

                                <label for="" class="form-group-label"
                                  >Mã<span class="text-red-600">* </span>
                                  <span> </span
                                ></label>
                                <div>
                                  <input
                                    type="text"
                                    class="form-control-input"
                                    placeholder="Nhập mã khách hàng"
                                    v-model="detailCustomerProfile.code"
                                  />
                                  <!--                                  <p v-if="messageError?.code" class="text-red-600">
                                    {{ messageError?.code[0] }}
                                  </p>-->
                                </div>
                              </div>
                              <div>
                                <label for="" class="form-group-label"
                                  >Tên<span class="text-red-600"></span
                                ></label>
                                <div>
                                  <input
                                    type="text"
                                    class="form-control-input"
                                    placeholder="Nhập tên khách hàng"
                                    v-model="detailCustomerProfile.name"
                                  />
                                  <!--                                  <p v-if="messageError?.name" class="text-red-600">
                                    {{ messageError?.name[0] }}
                                  </p>-->
                                </div>
                              </div>
                            </div>
                            <div class="form-small">
                              <div>
                                <label for="" class="form-group-label"
                                  >Ngày sinh<span class="text-red-600">* </span>
                                  <span></span
                                ></label>
                                <div>
                                  <a-space direction="vertical" :size="12">
                                    <a-date-picker
                                      v-model:value="birth_day_dd_mm_yy"
                                      :format="dateFormat"
                                    />
                                  </a-space>
                                  <!--                                  <p
                                      v-if="messageError?.birth_day"
                                      class="text-red-600"
                                  >
                                    {{ messageError?.birth_day[0] }}
                                  </p>-->
                                </div>
                              </div>
                              <div>
                                <label for="" class="form-group-label"
                                  >Giới tính<span class="text-red-600">* </span>
                                  <span></span
                                ></label>
                                <div>
                                  <select
                                    v-model="detailCustomerProfile.gender"
                                    class="form-control-input"
                                  >
                                    <option disabled value="">
                                      Please select one
                                    </option>
                                    <option value="1">Nam</option>
                                    <option value="0">Nữ</option>
                                    <option value="2">Khác</option>
                                  </select>
                                  <!--                                  <p
                                      v-if="messageError?.gender"
                                      class="text-red-600"
                                  >
                                    {{ messageError?.gender[0] }}
                                  </p>-->
                                </div>
                              </div>

                              <div>
                                <label for="" class="form-group-label"
                                  >Email<span class="text-red-600">* </span>
                                  <span></span
                                ></label>
                                <div>
                                  <input
                                    type="text"
                                    class="form-control-input"
                                    placeholder="Nhập email"
                                    v-model="detailCustomerProfile.email"
                                  />
                                  <!--                                  <p
                                      v-if="messageError?.email"
                                      class="text-red-600"
                                  >
                                    {{ messageError?.email[0] }}
                                  </p>-->
                                </div>
                              </div>

                              <div>
                                <label for="" class="form-group-label"
                                  >Số điện thoại<span class="text-red-600"
                                    >*
                                  </span>
                                  <span></span
                                ></label>
                                <div>
                                  <input
                                    type="number"
                                    class="form-control-input"
                                    placeholder="Nhập số điện thoại"
                                    v-model="detailCustomerProfile.phone"
                                  />
                                  <!--                                  <p
                                      v-if="messageError?.phone"
                                      class="text-red-600"
                                  >
                                    {{ messageError?.phone[0] }}
                                  </p>-->
                                </div>
                              </div>

                              <!-- <a-switch v-model:checked="checked" /> &nbsp; Sử dụng làm điểm
                                nhận -->
                            </div>
                          </div>
                        </div>
                      </Transition>
                    </div>
                  </div>
                </Transition>
              </div>
            </a-tab-pane>
            <a-tab-pane key="2" tab="Địa chỉ giao hàng">
              <div class="flex">
                <Transition name="slide-up">
                  <div v-show="isDeliveryAddress == true" class="outer">
                    <div>
                      <div
                        v-for="(
                          item, index
                        ) in detailCustomerProfile.detail_delivery_address"
                        :key="index"
                        class="flex"
                      >
                        <div class="form-large border-b-[1px] border-slate-300">
                          <div class="">
                            <label for="" class="form-group-label"
                              >Họ và tên người nhận<span class="text-red-600"
                                >*
                              </span>
                              <span></span
                            ></label>
                            <div>
                              <input
                                type="text"
                                class="form-control-input"
                                placeholder="Nhập tên địa chỉ"
                                v-model="item.title"
                              />
                              <!--                              <p
                                  v-if="messageError?.title"
                                  class="text-red-600"
                              >
                                {{ messageError?.title[0] }}
                              </p>-->
                            </div>
                          </div>

                          <div class="">
                            <div class="flex">
                              <div class="flex-1 mr-5">
                                <label for="" class="form-group-label"
                                  >Tỉnh/Thành phố{{ index
                                  }}<span class="text-red-600">* </span>
                                  <span></span
                                ></label>
                                <div>
                                  <a-select
                                    show-search
                                    class="form-control-input"
                                    placeholder="Chọn thành phố"
                                    v-model:value="
                                      detailCustomerProfile
                                        .detail_delivery_address[index]
                                        .address_state_id
                                    "
                                    :options="listAllCity"
                                    @change="
                                      handleChangeCity(
                                        Number(
                                          detailCustomerProfile
                                            .detail_delivery_address[index]
                                            .address_state_id
                                        ),
                                        listAllCity,
                                        index
                                      )
                                    "
                                    :fieldNames="{
                                      label: 'title',
                                      value: 'ID',
                                    }"
                                    :filter-option="filterOption"
                                  >
                                  </a-select>
                                  <!--                                  <p
                                      v-if="messageError?.address_state_id"
                                      class="text-red-600"
                                  >
                                    {{ messageError?.address_state_id[0] }}
                                  </p>-->
                                </div>
                              </div>
                              <div class="flex-1 mr-5">
                                <label for="" class="form-group-label"
                                  >Quận/Huyện<span class="text-red-600"
                                    >*
                                  </span>
                                  <span></span
                                ></label>
                                <div>
                                  <a-select
                                    show-search
                                    class="form-control-input"
                                    placeholder="Chọn quận huyện"
                                    v-model:value="
                                      detailCustomerProfile
                                        .detail_delivery_address[index]
                                        .address_district_id
                                    "
                                    :options="list_district_1"
                                    @change="
                                      handleChangeDistrict(
                                        Number(
                                          detailCustomerProfile
                                            .detail_delivery_address[index]
                                            .address_district_id
                                        ),
                                        list_district_1,
                                        index
                                      )
                                    "
                                    :fieldNames="{
                                      label: 'title',
                                      value: 'ID',
                                    }"
                                    :filter-option="filterOption"
                                  >
                                  </a-select>
                                  <!--                                  <p
                                      v-if="messageError?.address_district_id"
                                      class="text-red-600"
                                  >
                                    {{ messageError?.address_district_id[0] }}
                                  </p>-->
                                </div>
                              </div>
                              <div class="flex-1">
                                <label for="" class="form-group-label"
                                  >Xã/Phường/Thị trấn<span class="text-red-600"
                                    >*
                                  </span>
                                  <span></span
                                ></label>
                                <div>
                                  <a-select
                                    show-search
                                    class="form-control-input"
                                    placeholder="Chọn xã, phường, thị trấn"
                                    v-model:value="
                                      detailCustomerProfile
                                        .detail_delivery_address[index]
                                        .address_ward_id
                                    "
                                    :options="list_ward_1"
                                    @change="
                                      handleChangeWard(
                                        Number(
                                          detailCustomerProfile
                                            .detail_delivery_address[index]
                                            .address_ward_id
                                        ),
                                        list_ward_1,
                                        index
                                      )
                                    "
                                    :fieldNames="{
                                      label: 'title',
                                      value: 'ID',
                                    }"
                                    :filter-option="filterOption"
                                  >
                                  </a-select>
                                  <!--                                  <p
                                      v-if="messageError?.address_ward_id"
                                      class="text-red-600"
                                  >
                                    {{ messageError?.address_ward_id[0] }}
                                  </p>-->
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="mb-5">
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
                                v-model="item.address_detail"
                              ></textarea>
                            </div>
                          </div>
                          <div class="mb-5">
                            <a-radio-group
                              v-model:value="is_default"
                              name="radioGroup"
                              @change="handleChangeIsDefault(index)"
                            >
                              <a-radio :value="index.toString()"
                                >Đặt làm địa chỉ mặc định</a-radio
                              >
                            </a-radio-group>
                          </div>
                          <div class="float-right">
                            <i
                              @click="removeDetailDeliveryAddress(index)"
                              class="fal fa-times icon-close"
                            ></i>
                          </div>
                        </div>

                        <!-- <a-switch v-model:checked="checked" /> &nbsp; Sử dụng làm điểm
                          nhận -->
                      </div>
                    </div>
                    <div @click="addOptions">
                      <i class="fal fa-plus-circle icon-plus fa-lg"></i>
                    </div>
                  </div>
                </Transition>

                <!--                them moi-->
                <a-modal
                  :visible="isOpenConfirmDefault"
                  @cancel="handleClose"
                  width="660px"
                >
                  <div v-show="isDeliveryAddress == true" class="outer">
                    <div class="p-4">
                      <div
                        v-for="(item_new, index_new) in dataOption"
                        :key="index_new"
                        class="flex"
                      >
                        <div class="form-large border-b-[1px] border-slate-300">
                          <div class="">
                            <label for="" class="form-group-label"
                              >Họ và tên người nhận<span class="text-red-600"
                                >*
                              </span>
                              <span></span
                            ></label>
                            <div>
                              <input
                                type="text"
                                class="form-control-input"
                                placeholder="Nhập tên địa chỉ"
                                v-model="item_new.title"
                                required
                              />
                            </div>
                          </div>

                          <div class="">
                            <div class="flex">
                              <div class="flex-1 mr-5">
                                <label for="" class="form-group-label"
                                  >Tỉnh/Thành phố<span class="text-red-600"
                                    >*
                                  </span>
                                  <span></span
                                ></label>
                                <div>
                                  <a-select
                                    show-search
                                    class="form-control-input"
                                    placeholder="Chọn thành phố"
                                    v-model:value="
                                      dataOption[index_new].address_state_id
                                    "
                                    :options="listAllCity"
                                    @change="
                                      handleChangeCity_new(
                                        dataOption[index_new].address_state_id,
                                        listAllCity,
                                        index_new
                                      )
                                    "
                                    :fieldNames="{
                                      label: 'title',
                                      value: 'ID',
                                    }"
                                    :filter-option="filterOption"
                                  >
                                  </a-select>
                                </div>
                              </div>
                              <div class="flex-1 mr-5">
                                <label for="" class="form-group-label"
                                  >Quận/Huyện<span class="text-red-600"
                                    >*
                                  </span>
                                  <span></span
                                ></label>
                                <div>
                                  <a-select
                                    show-search
                                    class="form-control-input"
                                    placeholder="Chọn quận huyện"
                                    v-model:value="
                                      dataOption[index_new].address_district_id
                                    "
                                    :options="listAllDistrict"
                                    @change="
                                      handleChangeDistrict_new(
                                        dataOption[index_new]
                                          .address_district_id,
                                        listAllDistrict,
                                        index_new
                                      )
                                    "
                                    :fieldNames="{
                                      label: 'title',
                                      value: 'ID',
                                    }"
                                    :filter-option="filterOption"
                                  >
                                  </a-select>
                                </div>
                              </div>
                              <div class="flex-1">
                                <label for="" class="form-group-label"
                                  >Xã/Phường/Thị trấn<span class="text-red-600"
                                    >*
                                  </span>
                                  <span></span
                                ></label>
                                <div>
                                  <a-select
                                    show-search
                                    class="form-control-input"
                                    placeholder="Chọn xã, phường, thị trấn"
                                    v-model:value="
                                      dataOption[index_new].address_ward_id
                                    "
                                    :options="listAllWard"
                                    @change="
                                      handleChangeWard_new(
                                        dataOption[index_new].address_ward_id,
                                        listAllWard,
                                        index_new
                                      )
                                    "
                                    :fieldNames="{
                                      label: 'title',
                                      value: 'ID',
                                    }"
                                    :filter-option="filterOption"
                                  >
                                  </a-select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="">
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
                                v-model="item_new.address_detail"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <template #footer>
                    <a-button
                      key="submit"
                      type="primary"
                      :loading="isLoading"
                      @click="createNewDeCustomerProfile()"
                      >Xác nhận</a-button
                    >
                    <a-button key="back" @click="handleClose">Hủy</a-button>
                  </template>
                </a-modal>
              </div>
            </a-tab-pane>

            <a-tab-pane key="3" tab="Địa chỉ thanh toán">
              <div class="flex">
                <Transition name="slide-up">
                  <div v-show="isPayAddress == true" class="outer">
                    <div>
                      <div
                        v-for="(
                          item, index
                        ) in detailCustomerProfile.detail_pay_address"
                        :key="index"
                        class="flex"
                      >
                        <div class="form-large border-b-[1px] border-slate-300">
                          <div class="">
                            <label for="" class="form-group-label"
                              >Họ và tên người nhận<span class="text-red-600"
                                >*
                              </span>
                              <span></span
                            ></label>
                            <div>
                              <input
                                type="text"
                                class="form-control-input"
                                placeholder="Nhập tên địa chỉ"
                                v-model="item.title"
                              />
                              <!--                              <p
                                                                v-if="messageError?.title"
                                                                class="text-red-600"
                                                            >
                                                              {{ messageError?.title[0] }}
                                                            </p>-->
                            </div>
                          </div>

                          <div class="">
                            <div class="flex">
                              <div class="flex-1 mr-5">
                                <label for="" class="form-group-label"
                                  >Tỉnh/Thành phố{{ index
                                  }}<span class="text-red-600">* </span>
                                  <span></span
                                ></label>
                                <div>
                                  <a-select
                                    show-search
                                    class="form-control-input"
                                    placeholder="Chọn thành phố"
                                    v-model:value="
                                      detailCustomerProfile.detail_pay_address[
                                        index
                                      ].address_state_id
                                    "
                                    :options="listAllCity"
                                    @change="
                                      handleChangeCityPay(
                                        Number(
                                          detailCustomerProfile
                                            .detail_pay_address[index]
                                            .address_state_id
                                        ),
                                        listAllCity,
                                        index
                                      )
                                    "
                                    :fieldNames="{
                                      label: 'title',
                                      value: 'ID',
                                    }"
                                    :filter-option="filterOption"
                                  >
                                  </a-select>
                                  <!--                                  <p
                                                                        v-if="messageError?.address_state_id"
                                                                        class="text-red-600"
                                                                    >
                                                                      {{ messageError?.address_state_id[0] }}
                                                                    </p>-->
                                </div>
                              </div>
                              <div class="flex-1 mr-5">
                                <label for="" class="form-group-label"
                                  >Quận/Huyện<span class="text-red-600"
                                    >*
                                  </span>
                                  <span></span
                                ></label>
                                <div>
                                  <a-select
                                    show-search
                                    class="form-control-input"
                                    placeholder="Chọn quận huyện"
                                    v-model:value="
                                      detailCustomerProfile.detail_pay_address[
                                        index
                                      ].address_district_id
                                    "
                                    :options="list_district_1"
                                    @change="
                                      handleChangeDistrictPay(
                                        Number(
                                          detailCustomerProfile
                                            .detail_pay_address[index]
                                            .address_district_id
                                        ),
                                        list_district_1,
                                        index
                                      )
                                    "
                                    :fieldNames="{
                                      label: 'title',
                                      value: 'ID',
                                    }"
                                    :filter-option="filterOption"
                                  >
                                  </a-select>
                                  <!--                                  <p
                                                                        v-if="messageError?.address_district_id"
                                                                        class="text-red-600"
                                                                    >
                                                                      {{ messageError?.address_district_id[0] }}
                                                                    </p>-->
                                </div>
                              </div>
                              <div class="flex-1">
                                <label for="" class="form-group-label"
                                  >Xã/Phường/Thị trấn<span class="text-red-600"
                                    >*
                                  </span>
                                  <span></span
                                ></label>
                                <div>
                                  <a-select
                                    show-search
                                    class="form-control-input"
                                    placeholder="Chọn xã, phường, thị trấn"
                                    v-model:value="
                                      detailCustomerProfile.detail_pay_address[
                                        index
                                      ].address_ward_id
                                    "
                                    :options="list_ward_1"
                                    @change="
                                      handleChangeWardPay(
                                        Number(
                                          detailCustomerProfile
                                            .detail_pay_address[index]
                                            .address_ward_id
                                        ),
                                        list_ward_1,
                                        index
                                      )
                                    "
                                    :fieldNames="{
                                      label: 'title',
                                      value: 'ID',
                                    }"
                                    :filter-option="filterOption"
                                  >
                                  </a-select>
                                  <!--                                  <p
                                                                        v-if="messageError?.address_ward_id"
                                                                        class="text-red-600"
                                                                    >
                                                                      {{ messageError?.address_ward_id[0] }}
                                                                    </p>-->
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="mb-5">
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
                                v-model="item.pay_address_detail"
                              ></textarea>
                            </div>
                          </div>
                          <div class="mb-5">
                            <a-radio-group
                              v-model:value="is_default_pay"
                              name="radioGroup"
                              @change="handleChangeIsDefaultPay(index)"
                            >
                              <a-radio :value="index.toString()"
                                >Đặt làm địa chỉ mặc định</a-radio
                              >
                            </a-radio-group>
                          </div>
                          <div class="float-right">
                            <i
                              @click="removeDetailPayAddress(index)"
                              class="fal fa-times icon-close"
                            ></i>
                          </div>
                        </div>

                        <!-- <a-switch v-model:checked="checked" /> &nbsp; Sử dụng làm điểm
                          nhận -->
                      </div>
                    </div>
                    <div @click="payAddOptions">
                      <i class="fal fa-plus-circle icon-plus fa-lg"></i>
                    </div>
                  </div>
                </Transition>

                <!--                them moi-->
                <a-modal
                  :visible="isOpenCreatedPayAddress"
                  @cancel="handleCloseCreatePayAddress"
                  width="660px"
                >
                  <div v-show="isPayAddress == true" class="outer">
                    <div class="p-4">
                      <div
                        v-for="(item_new, index_new) in payDataOption"
                        :key="index_new"
                        class="flex"
                      >
                        <div class="form-large border-b-[1px] border-slate-300">
                          <div class="">
                            <label for="" class="form-group-label"
                              >Họ và tên người nhận<span class="text-red-600"
                                >*
                              </span>
                              <span></span
                            ></label>
                            <div>
                              <input
                                type="text"
                                class="form-control-input"
                                placeholder="Nhập tên địa chỉ"
                                v-model="item_new.title"
                              />
                              <!--                            <p
                                                              v-if="messageError?.title"
                                                              class="text-red-600"
                                                          >
                                                            {{ messageError?.title[0] }}
                                                          </p>-->
                            </div>
                          </div>

                          <div class="">
                            <div class="flex">
                              <div class="flex-1 mr-5">
                                <label for="" class="form-group-label"
                                  >Tỉnh/Thành phố<span class="text-red-600"
                                    >*
                                  </span>
                                  <span></span
                                ></label>
                                <div>
                                  <a-select
                                    show-search
                                    class="form-control-input"
                                    placeholder="Chọn thành phố"
                                    v-model:value="
                                      payDataOption[index_new].address_state_id
                                    "
                                    :options="listAllCity"
                                    @change="
                                      handleChangeCity_newpay(
                                        payDataOption[index_new]
                                          .address_state_id,
                                        listAllCity,
                                        index_new
                                      )
                                    "
                                    :fieldNames="{
                                      label: 'title',
                                      value: 'ID',
                                    }"
                                    :filter-option="filterOption"
                                  >
                                  </a-select>
                                  <!--                                <p
                                                                      v-if="messageError?.address_state_id"
                                                                      class="text-red-600"
                                                                  >
                                                                    {{ messageError?.address_state_id[0] }}
                                                                  </p>-->
                                </div>
                              </div>
                              <div class="flex-1 mr-5">
                                <label for="" class="form-group-label"
                                  >Quận/Huyện<span class="text-red-600"
                                    >*
                                  </span>
                                  <span></span
                                ></label>
                                <div>
                                  <a-select
                                    show-search
                                    class="form-control-input"
                                    placeholder="Chọn quận huyện"
                                    v-model:value="
                                      payDataOption[index_new]
                                        .address_district_id
                                    "
                                    :options="listAllDistrict"
                                    @change="
                                      handleChangeDistrict_newpay(
                                        payDataOption[index_new]
                                          .address_district_id,
                                        listAllDistrict,
                                        index_new
                                      )
                                    "
                                    :fieldNames="{
                                      label: 'title',
                                      value: 'ID',
                                    }"
                                    :filter-option="filterOption"
                                  >
                                  </a-select>
                                  <!--                                <p
                                                                      v-if="messageError?.address_district_id"
                                                                      class="text-red-600"
                                                                  >
                                                                    {{ messageError?.address_district_id[0] }}
                                                                  </p>-->
                                </div>
                              </div>
                              <div class="flex-1">
                                <label for="" class="form-group-label"
                                  >Xã/Phường/Thị trấn<span class="text-red-600"
                                    >*
                                  </span>
                                  <span></span
                                ></label>
                                <div>
                                  <a-select
                                    show-search
                                    class="form-control-input"
                                    placeholder="Chọn xã, phường, thị trấn"
                                    v-model:value="
                                      payDataOption[index_new].address_ward_id
                                    "
                                    :options="listAllWard"
                                    @change="
                                      handleChangeWard_newpay(
                                        payDataOption[index_new]
                                          .address_ward_id,
                                        listAllWard,
                                        index_new
                                      )
                                    "
                                    :fieldNames="{
                                      label: 'title',
                                      value: 'ID',
                                    }"
                                    :filter-option="filterOption"
                                  >
                                  </a-select>

                                  <!--                                <p
                                                                      v-if="messageError?.address_ward_id"
                                                                      class="text-red-600"
                                                                  >
                                                                    {{ messageError?.address_ward_id[0] }}
                                                                  </p>-->
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="">
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
                                v-model="item_new.pay_address_detail"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <template #footer>
                    <a-button
                      key="submit"
                      type="primary"
                      :loading="isLoading"
                      @click="createNewPayAddress()"
                      >Xác nhận</a-button
                    >
                    <a-button key="back" @click="handleCloseCreatePayAddress"
                      >Hủy</a-button
                    >
                  </template>
                </a-modal>
              </div>
            </a-tab-pane>
          </a-tabs>
        </div>
      </Transition>
    </template>
    <template v-slot:footer>
      <div class="bg-slate-300">
        <div class="p-4 text-left">
          <button class="button-modal" @click="updateCustomerProfile()">
            Cập nhật
          </button>
          <button class="button-close-modal" @click="router.go(-1)">
            Hủy bỏ
          </button>
        </div>
      </div>
    </template>
  </base-layout>
  <loading-overlay :isLoading="isLoading"></loading-overlay>
</template>

<script setup lang="ts">
  import BaseLayout from '../../../layout/baseLayout.vue'
  import SideBar from '../../../components/common/SideBar.vue'
  import Header from '../../../components/common/Header.vue'

  import dayjs, { Dayjs } from 'dayjs'
  import { storeToRefs } from 'pinia'
  import { ref, reactive, computed, toRaw } from 'vue'
  import { useToast } from 'vue-toastification'
  import { useRoute, useRouter } from 'vue-router'
  import { useLocation } from '../../../store/modules/location/location'
  import { useCustomerProfile } from '../../../store/modules/customers/customerProfile'
  import { useGroupCustomer } from '../../../store/modules/customers/customerGroup'

  const activeKey = ref('1')
  const route = useRoute()
  const router = useRouter()
  const toast = useToast()
  const isInfor = ref<boolean>(true)
  const isDeliveryAddress = ref<boolean>(true)
  const isPayAddress = ref<boolean>(true)
  const isContact = ref<boolean>(true)
  const checked = ref<boolean>(false)
  const isLoading = ref<boolean>(false)

  const isOpenConfirmDefault = ref<boolean>(false)
  const handleClose = () => {
    isOpenConfirmDefault.value = false
  }

  const isOpenCreatedPayAddress = ref<boolean>(false)

  const handleCloseCreatePayAddressWhenSS = () => {
    isOpenCreatedPayAddress.value = false
  }

  const handleCloseCreatePayAddress = () => {
    isOpenCreatedPayAddress.value = false
  }

  const radioStyle = reactive({
    display: 'flex',
    height: '30px',
    lineHeight: '30px',
  })

  const filterOption = (input: string, option: any) => {
    return option.title.toLowerCase().indexOf(input.toLowerCase()) >= 0
  }

  const dataCustomerProfile = useCustomerProfile()
  const dataLocation = useLocation()
  const dataGroupCustomer = useGroupCustomer()

  dataLocation.getListAllCityAction()
  dataCustomerProfile.getDetailCustomerProfileAction(Number(route.params.id))
  dataGroupCustomer.getAllGroupCustomerNoPaginateAction()
  dataCustomerProfile.getLastCodeCustomer()

  const {
    detailCustomerProfile,
    idState,
    is_default,
    birth_day_dd_mm_yy,
    last_code,
    is_default_pay,
  } = storeToRefs(dataCustomerProfile)
  const { listAllCity, listAllDistrict, listAllWard } =
    storeToRefs(dataLocation)
  const { listGroupCustomer } = storeToRefs(dataGroupCustomer)
  const dateFormat = 'DD/MM/YYYY'
  const dateFormatRequest = 'YYYY/MM/DD'
  let arr_district = ref([])

  let list_district_1 = JSON.parse(localStorage.getItem('list_district'))
  let list_ward_1 = JSON.parse(localStorage.getItem('list_ward'))

  const handleChangeCity = (value: number, option: any, index: number) => {
    let arr = option.filter((item: any) => item.ID == value)
    dataLocation.getListAllDistrictAction(value)
    detailCustomerProfile.value.detail_delivery_address[index].address_detail =
      arr[0].title + ', ' + 'Việt Nam'
  }

  const handleChangeCityPay = (value: number, option: any, index: number) => {
    let arr = option.filter((item: any) => item.ID == value)
    dataLocation.getListAllDistrictAction(value)
    detailCustomerProfile.value.detail_pay_address[index].pay_address_detail =
      arr[0].title + ', ' + 'Việt Nam'
  }

  const handleChangeDistrict = (value: number, option: any, index: number) => {
    let arr = option.filter((item: any) => item.ID == value)
    dataLocation.getListAllWardAction(value)
    detailCustomerProfile.value.detail_delivery_address[index].address_detail =
      arr[0].title +
      ', ' +
      detailCustomerProfile.value.detail_delivery_address[index].address_detail
  }

  const handleChangeDistrictPay = (
    value: number,
    option: any,
    index: number
  ) => {
    let arr = option.filter((item: any) => item.ID == value)
    dataLocation.getListAllWardAction(value)
    detailCustomerProfile.value.detail_pay_address[index].pay_address_detail =
      arr[0].title +
      ', ' +
      detailCustomerProfile.value.detail_pay_address[index].pay_address_detail
  }

  const handleChangeWard = (value: number, option: any, index: number) => {
    let arr = option.filter((item: any) => item.ID == value)
    detailCustomerProfile.value.detail_delivery_address[index].address_detail =
      arr[0].title +
      ', ' +
      detailCustomerProfile.value.detail_delivery_address[index].address_detail
  }

  const handleChangeWardPay = (value: number, option: any, index: number) => {
    let arr = option.filter((item: any) => item.ID == value)
    detailCustomerProfile.value.detail_pay_address[index].pay_address_detail =
      arr[0].title +
      ', ' +
      detailCustomerProfile.value.detail_pay_address[index].pay_address_detail
  }

  const handleChangeCity_new = (value: number, option: any, index: number) => {
    let arr = option.filter((item: any) => item.ID == value)
    dataLocation.getListAllDistrictAction(value)
    dataOption[index].address_detail = arr[0].title + ', ' + 'Việt Nam'
  }

  const handleChangeCity_newpay = (
    value: number,
    option: any,
    index: number
  ) => {
    let arr = option.filter((item: any) => item.ID == value)
    dataLocation.getListAllDistrictAction(value)
    payDataOption[index].pay_address_detail = arr[0].title + ', ' + 'Việt Nam'
  }

  const handleChangeDistrict_new = (
    value: number,
    option: any,
    index: number
  ) => {
    let arr = option.filter((item: any) => item.ID == value)
    dataLocation.getListAllWardAction(value)
    dataOption[index].address_detail =
      arr[0].title + ', ' + dataOption[index].address_detail
  }

  const handleChangeDistrict_newpay = (
    value: number,
    option: any,
    index: number
  ) => {
    let arr = option.filter((item: any) => item.ID == value)
    dataLocation.getListAllWardAction(value)
    payDataOption[index].pay_address_detail =
      arr[0].title + ', ' + payDataOption[index].pay_address_detail
  }

  const handleChangeWard_new = (value: number, option: any, index: number) => {
    let arr = option.filter((item: any) => item.ID == value)
    dataOption[index].address_detail =
      arr[0].title + ', ' + dataOption[index].address_detail
  }

  const handleChangeWard_newpay = (
    value: number,
    option: any,
    index: number
  ) => {
    let arr = option.filter((item: any) => item.ID == value)
    payDataOption[index].pay_address_detail =
      arr[0].title + ', ' + payDataOption[index].pay_address_detail
  }

  const handleChangeIsDefault = (index: any) => {
    detailCustomerProfile.value.detail_delivery_address[index].is_default = '1'
    let color = detailCustomerProfile.value.detail_delivery_address.filter(
      (c: any, i: any) => i != index
    )
    if (color) {
      color.map((item: any) => (item.is_default = 0))
    }
  }

  const handleChangeIsDefaultPay = (index: any) => {
    detailCustomerProfile.value.detail_pay_address[index].is_default_pay = '1'
    let color = detailCustomerProfile.value.detail_pay_address.filter(
      (c: any, i: any) => i != index
    )
    if (color) {
      color.map((item: any) => (item.is_default_pay = 0))
    }
  }

  const handleChangeGroup = (value: number, option: any) => {
    detailCustomerProfile.value.customer_group = option.code
    detailCustomerProfile.value.code =
      option.code + last_code.value.substring(3).padStart(8, '0')
  }

  const dataOption = reactive([])

  const addOptions = () => {
    isOpenConfirmDefault.value = true
    let data_1 = {
      title: '',
      address_country_id: '1',
      address_district_id: '',
      address_ward_id: '',
      address_state_id: '',
      address_detail: '',
      is_default: '0',
    }
    dataOption.push(data_1)
  }

  const payDataOption = reactive([])

  const payAddOptions = () => {
    isOpenCreatedPayAddress.value = true
    let data = {
      title: '',
      address_country_id: '1',
      address_district_id: '',
      address_ward_id: '',
      address_state_id: '',
      pay_address_detail: '',
      is_default_pay: '0',
    }
    payDataOption.push(data)
  }

  const removeDetailDeliveryAddress = (index: number) => {
    detailCustomerProfile.value.detail_delivery_address.splice(index, 1)
  }

  const removeDetailPayAddress = (index: number) => {
    detailCustomerProfile.value.detail_pay_address.splice(index, 1)
  }

  const removeOptions = (index: number) => {
    dataOption.splice(index, 1)
  }

  const arrayInvent = ref([])
  const arrayWeb = ref([])

  const getListWeb = (webList: string[], inventList: string[]) => {
    arrayWeb.value = webList
    arrayInvent.value = inventList
  }

  const checkedInvent = (code: string) => {
    if (arrayInvent?.value?.indexOf(code) > -1) {
      return true
    } else {
      return false
    }
  }

  const EndTimeLoading = () => {
    isLoading.value = false
  }

  const arr_address_pay = ref([])
  const arr_address_de = ref([])

  const createNewDeCustomerProfile = () => {
    isOpenConfirmDefault.value = false
    arr_address_de.value = dataOption
    let data = {
      customer_group: detailCustomerProfile.value.customer_group,
      code: detailCustomerProfile.value.code,
      name: detailCustomerProfile.value.name,
      birth_day: birth_day_dd_mm_yy.value.format(dateFormatRequest),
      gender: detailCustomerProfile.value.gender,
      email: detailCustomerProfile.value.email,
      phone: detailCustomerProfile.value.phone,
      detail_delivery_address_old: JSON.parse(
        JSON.stringify(detailCustomerProfile.value.detail_delivery_address)
      ),
      detail_delivery_address_new: dataOption,
      detail_pay_address_old: JSON.parse(
        JSON.stringify(detailCustomerProfile.value.detail_pay_address)
      ),
      detail_pay_address_new: payDataOption,
    }
    dataCustomerProfile.createPayAddressAction(
      Number(route.params.id),
      data,
      toast,
      router,
      EndTimeLoading,
      handleCloseCreatePayAddressWhenSS
    )
  }

  const createNewPayAddress = () => {
    isOpenCreatedPayAddress.value = false
    arr_address_pay.value = payDataOption
    let data = {
      customer_group: detailCustomerProfile.value.customer_group,
      code: detailCustomerProfile.value.code,
      name: detailCustomerProfile.value.name,
      birth_day: birth_day_dd_mm_yy.value.format(dateFormatRequest),
      gender: detailCustomerProfile.value.gender,
      email: detailCustomerProfile.value.email,
      phone: detailCustomerProfile.value.phone,
      detail_delivery_address_old: JSON.parse(
        JSON.stringify(detailCustomerProfile.value.detail_delivery_address)
      ),
      detail_delivery_address_new: dataOption,
      detail_pay_address_old: JSON.parse(
        JSON.stringify(detailCustomerProfile.value.detail_pay_address)
      ),
      detail_pay_address_new: payDataOption,
    }
    dataCustomerProfile.createPayAddressAction(
      Number(route.params.id),
      data,
      toast,
      router,
      EndTimeLoading,
      handleCloseCreatePayAddressWhenSS
    )
  }

  const updateCustomerProfile = () => {
    let data = {
      customer_group: detailCustomerProfile.value.customer_group,
      code: detailCustomerProfile.value.code,
      name: detailCustomerProfile.value.name,
      birth_day: birth_day_dd_mm_yy.value.format(dateFormatRequest),
      gender: detailCustomerProfile.value.gender,
      email: detailCustomerProfile.value.email,
      phone: detailCustomerProfile.value.phone,
      detail_delivery_address_old: JSON.parse(
        JSON.stringify(detailCustomerProfile.value.detail_delivery_address)
      ),
      detail_pay_address_old: JSON.parse(
        JSON.stringify(detailCustomerProfile.value.detail_pay_address)
      ),
    }
    dataCustomerProfile.updateCustomerProfileAction(
      Number(route.params.id),
      data,
      toast,
      router,
      EndTimeLoading
    )
  }
</script>

<style></style>
