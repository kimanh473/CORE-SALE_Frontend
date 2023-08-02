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
          ><p class="pl-5 text-[16px]">Tạo mới nhân sự</p></template
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
              Thông tin nhân sự
            </h4>
            <Transition name="slide-up">
              <div v-show="isInfor == true" class="outer">
                <div>
                  <div class="grid grid-cols-2 gap-2 form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Mã nhân sự<span class="text-red-600">* </span>
                        <span></span
                      ></label>
                      <div>
                        <input
                          type="text"
                          class="form-control-input"
                          placeholder="Nhập tên kho"
                          v-model="user.title"
                        />
                        <p v-if="messageError?.title" class="text-red-600">
                          {{ messageError?.title[0] }}
                        </p>
                      </div>
                    </div>
                    <div>
                      <label for="" class="form-group-label"
                        >Tên nhân sự<span class="text-red-600"></span
                      ></label>
                      <div>
                        <input
                          type="text"
                          class="form-control-input"
                          placeholder="Nhập mã kho"
                          v-model="user.code"
                        />
                        <p v-if="messageError?.code" class="text-red-600">
                          {{ messageError?.code[0] }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-2 form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Vị trí<span class="text-red-600">* </span> <span></span
                      ></label>
                      <a-select
                        class="form-control-input"
                        placeholder="Chọn vị trí"
                        v-model:value="user.type_code"
                        @click.once="getListGroupInventory"
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
                    <div>
                      <label for="" class="form-group-label"
                        >Phòng ban<span class="text-red-600">* </span>
                        <span></span
                      ></label>
                      <a-select
                        class="form-control-input"
                        placeholder="Chọn phòng ban"
                        v-model:value="user.type_code"
                        @click.once="getListGroupInventory"
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
                    <div>
                      <label for="" class="form-group-label"
                        >Email<span class="text-red-600">* </span> <span></span
                      ></label>
                      <div>
                        <input
                          type="email"
                          class="form-control-input"
                          placeholder="Nhập email"
                          v-model="user.contact_email"
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
                          v-model="user.contact_phone"
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
                  <!-- <a-switch v-model:checked="checked" /> &nbsp; Sử dụng làm điểm
                    nhận -->
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
                Thông tin tài khoản
              </h4>
              <Transition name="slide-up">
                <div v-show="isContact == true">
                  <div class="form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Tài khoản<span class="text-red-600">* </span>
                        <span></span
                      ></label>
                      <div>
                        <input
                          type="text"
                          class="form-control-input"
                          placeholder="Nhập tên liên lạc"
                          v-model="user.contact_name"
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
                        >Mật khẩu<span class="text-red-600">* </span>
                        <span></span
                      ></label>
                      <div>
                        <input
                          type="password"
                          class="form-control-input"
                          placeholder="Nhập mật khẩu"
                          v-model="user.contact_email"
                        />
                        <p
                          v-if="messageError?.contact_email"
                          class="text-red-600"
                        >
                          {{ messageError?.contact_email[0] }}
                        </p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-2 form-small">
                      <div>
                        <label for="" class="form-group-label"
                          >Nhóm<span class="text-red-600">* </span> <span></span
                        ></label>
                        <a-select
                          class="form-control-input"
                          placeholder="Chọn nhóm"
                          v-model:value="user.type_code"
                        >
                          <a-select-option
                            v-for="(item, index) in listGroupPermission"
                            :key="index"
                            >{{ item.title }}</a-select-option
                          >
                        </a-select>
                        <p
                          v-if="messageError?.contact_phone"
                          class="text-red-600"
                        >
                          {{ messageError?.contact_phone[0] }}
                        </p>
                      </div>
                      <div>
                        <label for="" class="form-group-label"
                          >Website<span class="text-red-600">* </span>
                          <span></span
                        ></label>
                        <a-select
                          class="form-control-input"
                          placeholder="Chọn website"
                          v-model:value="user.type_code"
                          @click.once="getListGroupInventory"
                        >
                          <a-select-option
                            v-for="(item, index) in listGroupInventory"
                            :key="index"
                            :value="item.code"
                            >{{ item.title }}</a-select-option
                          >
                        </a-select>
                        <p
                          v-if="messageError?.contact_phone"
                          class="text-red-600"
                        >
                          {{ messageError?.contact_phone[0] }}
                        </p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-2 form-small">
                      <div>
                        <label for="" class="form-group-label"
                          >Kho<span class="text-red-600">* </span> <span></span
                        ></label>
                        <a-select
                          class="form-control-input"
                          placeholder="Chọn kho"
                          v-model:value="user.type_code"
                        >
                          <a-select-option
                            v-for="(item, index) in listInventory"
                            :key="index"
                            :value="item.code"
                            >{{ item.title }}</a-select-option
                          >
                        </a-select>
                        <p
                          v-if="messageError?.contact_phone"
                          class="text-red-600"
                        >
                          {{ messageError?.contact_phone[0] }}
                        </p>
                      </div>
                    </div>
                    <a-switch v-model:checked="checked" /> &nbsp; Quản trị hệ
                    thống
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
                Thông tin quyền
              </h4>
              <Transition name="slide-up">
                <div v-show="isAddress == true">
                  <a-tabs
                    v-model:activeKey="activeKey"
                    animated
                    style="padding-left: 15px"
                  >
                    <a-tab-pane key="1" tab="Phân quyền nhóm người dùng"
                      ><div class="w-full inner">
                        <div class="w-full py-4">
                          <div class="w-full">
                            <table-responsive :table="table">
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    class="mr-4"
                                    type="checkbox"
                                    true-value="STORE_SETTING"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable font-medium pl-0">
                                  CÀI ĐẶT CỬA HÀNG
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="CATALOG_PRODUCT"
                                    false-value=""
                                  />
                                </td>
                                <td>Danh mục sản phẩm</td>

                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="CATALOG_PRODUCT_CREATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="CATALOG_PRODUCT_UPDATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="CATALOG_PRODUCT_DELETE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="CATALOG_PRODUCT_PRINT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="CATALOG_PRODUCT_IMPORT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="CATALOG_PRODUCT_EXPORT"
                                    false-value=""
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE"
                                    false-value=""
                                  />
                                </td>
                                <td>Khách hàng</td>

                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_CREATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_UPDATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_DELETE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_PRINT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_IMPORT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_EXPORT"
                                    false-value=""
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE"
                                    false-value=""
                                  />
                                </td>
                                <td>Bán hàng</td>

                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_CREATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_UPDATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_DELETE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_PRINT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_IMPORT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_EXPORT"
                                    false-value=""
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE"
                                    false-value=""
                                  />
                                </td>
                                <td>Marketing</td>

                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_CREATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_UPDATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_DELETE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_PRINT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_IMPORT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_EXPORT"
                                    false-value=""
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE"
                                    false-value=""
                                  />
                                </td>
                                <td>Giỏ hàng</td>

                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_CREATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_UPDATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_DELETE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_PRINT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_IMPORT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_EXPORT"
                                    false-value=""
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE"
                                    false-value=""
                                  />
                                </td>
                                <td>Cài đặt gian hàng</td>

                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_CREATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_UPDATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_DELETE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_PRINT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_IMPORT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_EXPORT"
                                    false-value=""
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>

                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    class="mr-4"
                                    type="checkbox"
                                    true-value="PERSONNEL"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable font-medium pl-0">
                                  PHÂN HỆ SẢN PHẨM
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE"
                                    false-value=""
                                  />
                                </td>
                                <td>Quản lý sản phẩm</td>

                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_CREATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_UPDATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_DELETE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_PRINT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_IMPORT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_EXPORT"
                                    false-value=""
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE"
                                    false-value=""
                                  />
                                </td>
                                <td>Quản lý ngành hàng</td>

                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_CREATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_UPDATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_DELETE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_PRINT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_IMPORT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_EXPORT"
                                    false-value=""
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    class="mr-4"
                                    type="checkbox"
                                    true-value="PERSONNEL"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable font-medium pl-0">
                                  CÀI ĐẶT KHÁCH HÀNG
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE"
                                    false-value=""
                                  />
                                </td>
                                <td>Danh sách khách hàng</td>

                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_CREATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_UPDATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_DELETE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_PRINT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_IMPORT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_EXPORT"
                                    false-value=""
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE"
                                    false-value=""
                                  />
                                </td>
                                <td>Chăm sóc khách hàng</td>

                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_CREATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_UPDATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_DELETE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_PRINT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_IMPORT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_EXPORT"
                                    false-value=""
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>

                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    class="mr-4"
                                    type="checkbox"
                                    true-value="PERSONNEL"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable font-medium pl-0">
                                  PHÂN HỆ BÁN HÀNG
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE"
                                    false-value=""
                                  />
                                </td>
                                <td>Quản lý đơn hàng</td>

                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_CREATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_UPDATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_DELETE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_PRINT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_IMPORT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_EXPORT"
                                    false-value=""
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE"
                                    false-value=""
                                  />
                                </td>
                                <td>Hóa đơn</td>

                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_CREATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_UPDATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_DELETE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_PRINT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_IMPORT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_EXPORT"
                                    false-value=""
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE"
                                    false-value=""
                                  />
                                </td>
                                <td>Hóa đơn vận chuyển</td>

                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_CREATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_UPDATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_DELETE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_PRINT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_IMPORT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_EXPORT"
                                    false-value=""
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE"
                                    false-value=""
                                  />
                                </td>
                                <td>Công nợ</td>

                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_CREATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_UPDATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_DELETE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_PRINT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_IMPORT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_EXPORT"
                                    false-value=""
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    class="mr-4"
                                    type="checkbox"
                                    true-value="PERSONNEL"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable font-medium pl-0">
                                  KÊNH MARKETING
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE"
                                    false-value=""
                                  />
                                </td>
                                <td>Mã giảm giá</td>

                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_CREATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_UPDATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_DELETE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_PRINT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_IMPORT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_EXPORT"
                                    false-value=""
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE"
                                    false-value=""
                                  />
                                </td>
                                <td>Chiến dịch khuyến mãi</td>

                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_CREATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_UPDATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_DELETE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_PRINT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_IMPORT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_EXPORT"
                                    false-value=""
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE"
                                    false-value=""
                                  />
                                </td>
                                <td>Quảng cáo</td>

                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_CREATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_UPDATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_DELETE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_PRINT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_IMPORT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_EXPORT"
                                    false-value=""
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE"
                                    false-value=""
                                  />
                                </td>
                                <td>Đánh giá</td>

                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_CREATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_UPDATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_DELETE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_PRINT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_IMPORT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_EXPORT"
                                    false-value=""
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE"
                                    false-value=""
                                  />
                                </td>
                                <td>Kết nối</td>

                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_CREATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_UPDATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_DELETE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_PRINT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_IMPORT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_EXPORT"
                                    false-value=""
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    class="mr-4"
                                    type="checkbox"
                                    true-value="PERSONNEL"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable font-medium pl-0">
                                  NỘI DUNG
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE"
                                    false-value=""
                                  />
                                </td>
                                <td>Danh sách nội dung</td>

                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_CREATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_UPDATE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_DELETE"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_PRINT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_IMPORT"
                                    false-value=""
                                  />
                                </td>
                                <td class="cellTable text-center">
                                  <input
                                    type="checkbox"
                                    true-value="PERSONNEL_PROFILE_EXPORT"
                                    false-value=""
                                  />
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                            </table-responsive>
                          </div>
                        </div></div
                    ></a-tab-pane>
                    <a-tab-pane key="2" tab="Phân quyền website">
                      <div class="flex">
                        <div
                          v-for="(item, index) in listWeb"
                          :key="index"
                          class="flex pr-[30px]"
                        >
                          <p class="pr-[5px]">{{ item.web_name }}</p>
                          <input
                            class="mt-[3px]"
                            type="checkbox"
                            true-value="PERSONNEL_PROFILE_IMPORT"
                            false-value=""
                          />
                        </div>
                      </div>
                    </a-tab-pane>
                    <a-tab-pane key="3" tab="Phân quyền kho"
                      ><div class="flex">
                        <div
                          v-for="(item, index) in listInventory"
                          :key="index"
                          class="flex pr-[30px]"
                        >
                          <p class="pr-[5px]">{{ item.title }}</p>
                          <input
                            class="mt-[3px]"
                            type="checkbox"
                            true-value="PERSONNEL_PROFILE_IMPORT"
                            false-value=""
                          />
                        </div></div
                    ></a-tab-pane>
                  </a-tabs>
                </div>
              </Transition>
              <div v-show="isAddress == false">
                <h2
                  @click="isAddress = !isAddress"
                  class="cursor-pointer form-group-label"
                >
                  Vĩ độ* Kinh độ* Quốc gia*, Tỉnh/Thành phố*, Quận/Huyện*, Địa
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
  import BaseLayout from '../../../../layout/baseLayout.vue'
  import SideBar from '../../../../components/common/SideBar.vue'
  import Header from '../../../../components/common/Header.vue'
  // import type { SelectProps } from 'ant-design-vue'
  import TableResponsive from '../../../../components/common/TableResponsive.vue'
  import { useLocation } from '../../../../store/modules/location/location'
  import { useGroupInventory } from '../../../../store/modules/inventory/group-inventory'
  import { useInventory } from '../../../../store/modules/inventory/product-invetory'
  import { useWebCatalog } from '../../../../store/modules/web-catalog/webcatalog'
  import { useAdminSetting } from '../../../../store/modules/admin-setting/adminsetting'
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
  const isAddress = ref<boolean>(true)
  const isInfor = ref<boolean>(true)
  const isContact = ref<boolean>(true)
  const checked = ref<boolean>(false)
  const activeKey = ref('1')
  const isLoading = ref<boolean>(false)
  const webCatalog = useWebCatalog()
  webCatalog.getAllWebCatalogAction()
  const { listWeb } = storeToRefs(webCatalog)
  const dataAdminSetting = useAdminSetting()
  dataAdminSetting.getAllPermissionGroupsAction(10, 1)
  const { listGroupPermission } = storeToRefs(dataAdminSetting)
  console.log(listGroupPermission)

  // const isReInput = ref<boolean>(true)
  const table = reactive({
    header: [
      '',
      'Đối tượng',
      'Tạo mới',
      'Sửa',
      'Xóa',
      'In',
      'Import',
      'Export',
      '',
      '',
    ],
    checkAll: Function,
    isCheck: true,
    isShow: true,
  })
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const user = reactive({
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
  //   user.title != '' ||
  //   user.latitude != '' ||
  //   user.longitude != '' ||
  //   user.contact_name != '' ||
  //   user.contact_email != '' ||
  //   user.contact_phone != ''
  // ) {
  //   isReInput.value = false
  // }

  const dataInventory = useInventory()
  dataInventory.getListInventoryAction()
  const { messageError, listInventory } = storeToRefs(dataInventory)
  console.log(messageError)

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

    user.address = name.title + ', ' + 'Việt Nam'
  }
  const handleChangeDistrict = (value: number, name: any) => {
    dataLocation.getListAllWardAction(value)
    user.address = name.title + ', ' + user.address
  }
  const handleChangeWard = (value: number, name: any) => {
    user.address = name.title + ', ' + user.address
  }
  const createInventory = () => {
    let data = {
      title: user.title,
      code: user.code,
      type_code: user.type_code,
      latitude: user.latitude,
      longitude: user.longitude,
      contact_name: user.contact_name,
      contact_email: user.contact_email,
      contact_phone: user.contact_phone,
      address: user.address,
      address_country_id: user.address_country_id,
      address_district_id: user.address_district_id,
      address_ward_id: user.address_ward_id,
      address_state_id: user.address_state_id,
      address_detail: user.address_detail,
      desc: user.desc,
    }
    dataInventory.createInventoryAction(data, toast, router, EndTimeLoading)
  }
</script>

<style></style>
