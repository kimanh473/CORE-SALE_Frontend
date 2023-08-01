<template>
  <base-layout>
    <template v-slot:sidebar>
      <!-- <div class="logo">
            <img src="../assets/images/btp.png" />
          </div> -->
      <SideBar />
    </template>
    <template v-slot:header>
      <Header :is-show-search="false"
        ><template v-slot:name
          ><p class="pl-5 text-[16px]">Tạo mới nhóm người dùng</p></template
        ></Header
      >
    </template>
    <template v-slot:content class="relative">
      <Transition
        ><div class="mt-1 text-left" v-show="isInfor == true">
          <div class="w-[500px] pl-2 outer">
            <div class="form-small">
              <div>
                <label for="" class="form-group-label"
                  >Tên nhóm<span class="text-red-600">*</span></label
                >
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control-input"
                    placeholder="Nhóm nhân sự"
                    v-model="groupAdmin.title"
                  />
                </div>
              </div>
            </div>
            <div class="mt-[12px]">
              <div class="flex items-center">
                <input
                  id="isAdminGroup"
                  true-value="yes"
                  false-value="no"
                  type="checkbox"
                  value=""
                  class="w-4 h-4"
                  v-model="groupAdmin.is_admin"
                />
                <label
                  for="isAdminGroup"
                  class="ml-2 text-[12.6px] text-gray-900 cursor-pointer"
                  >Cho phép quản trị hệ thống</label
                >
              </div>
            </div>
            <div class="mt-[12px]">
              <div class="flex items-center">
                <input
                  id="defaultGroup"
                  true-value="yes"
                  false-value="no"
                  type="checkbox"
                  class="w-4 h-4"
                  v-model="groupAdmin.is_default"
                />
                <label
                  for="defaultGroup"
                  class="ml-2 text-[12.6px] text-gray-900 cursor-pointer"
                  >Nhóm mặc định</label
                >
              </div>
            </div>
          </div>
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
                            v-model="role.storeSetting"
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
                            v-model="role.product"
                            :disabled="role.storeSetting != 'STORE_SETTING'"
                          />
                        </td>
                        <td>Danh mục sản phẩm</td>

                        <td class="cellTable text-center">
                          <input
                            type="checkbox"
                            true-value="CATALOG_PRODUCT_CREATE"
                            false-value=""
                            v-model="role.createProduct"
                            :disabled="
                              role.storeSetting != 'STORE_SETTING' ||
                              role.product != 'CATALOG_PRODUCT'
                            "
                          />
                        </td>
                        <td class="cellTable text-center">
                          <input
                            type="checkbox"
                            true-value="CATALOG_PRODUCT_UPDATE"
                            false-value=""
                            v-model="role.updateProduct"
                            :disabled="
                              role.storeSetting != 'STORE_SETTING' ||
                              role.product != 'CATALOG_PRODUCT'
                            "
                          />
                        </td>
                        <td class="cellTable text-center">
                          <input
                            type="checkbox"
                            true-value="CATALOG_PRODUCT_DELETE"
                            false-value=""
                            v-model="role.deleteProduct"
                            :disabled="
                              role.storeSetting != 'STORE_SETTING' ||
                              role.product != 'CATALOG_PRODUCT'
                            "
                          />
                        </td>
                        <td class="cellTable text-center">
                          <input
                            type="checkbox"
                            true-value="CATALOG_PRODUCT_PRINT"
                            false-value=""
                            v-model="role.printProduct"
                            :disabled="
                              role.storeSetting != 'STORE_SETTING' ||
                              role.product != 'CATALOG_PRODUCT'
                            "
                          />
                        </td>
                        <td class="cellTable text-center">
                          <input
                            type="checkbox"
                            true-value="CATALOG_PRODUCT_IMPORT"
                            false-value=""
                            v-model="role.importProduct"
                            :disabled="
                              role.storeSetting != 'STORE_SETTING' ||
                              role.product != 'CATALOG_PRODUCT'
                            "
                          />
                        </td>
                        <td class="cellTable text-center">
                          <input
                            type="checkbox"
                            true-value="CATALOG_PRODUCT_EXPORT"
                            false-value=""
                            v-model="role.exportProduct"
                            :disabled="
                              role.storeSetting != 'STORE_SETTING' ||
                              role.product != 'CATALOG_PRODUCT'
                            "
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
                            :disabled="role.storeSetting != 'STORE_SETTING'"
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
                            :disabled="role.storeSetting != 'STORE_SETTING'"
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
                            :disabled="role.storeSetting != 'STORE_SETTING'"
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
                            :disabled="role.storeSetting != 'STORE_SETTING'"
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
                            :disabled="role.storeSetting != 'STORE_SETTING'"
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
                        <td class="cellTable font-medium pl-0">NỘI DUNG</td>
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
                    @change="checkWeb(item.code, $event)"
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
                    @change="checkInventory(item.code, $event)"
                  />
                </div></div
            ></a-tab-pane>
          </a-tabs></div
      ></Transition>
    </template>
    <template class="p-0" v-slot:footer
      ><div class="bg-gray-100 pb-2 pl-2">
        <div class="text-left">
          <button class="button-modal" @click="createGroupAdmin">
            Tạo mới
          </button>
          <button class="button-close-modal">Hủy bỏ</button>
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
  import TableResponsive from '../../../../components/common/TableResponsive.vue'
  import { useWebCatalog } from '../../../../store/modules/web-catalog/webcatalog'
  import { useInventory } from '../../../../store/modules/inventory/product-invetory'
  import { useAdminSetting } from '../../../../store/modules/admin-setting/adminsetting'
  import { useRouter } from 'vue-router'
  import { useToast } from 'vue-toastification'
  import { reactive, ref } from 'vue'
  import { storeToRefs } from 'pinia'
  const router = useRouter()
  const toast = useToast()
  const isLoading = ref<boolean>(false)
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const isInfor = ref(true)
  const activeKey = ref('1')
  const webCatalog = useWebCatalog()
  webCatalog.getAllWebCatalogAction()
  const { listWeb } = storeToRefs(webCatalog)
  const dataInventory = useInventory()
  dataInventory.getListInventoryAction()
  const { listInventory } = storeToRefs(dataInventory)
  const dataAdminSetting = useAdminSetting()
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
  const role = reactive({
    //store
    storeSetting: '',
    product: '',
    createProduct: '',
    updateProduct: '',
    deleteProduct: '',
    printProduct: '',
    importProduct: '',
    exportProduct: '',
  })
  const groupAdmin = reactive({
    title: '',
    is_admin: 'no',
    is_default: 'no',
    string_roles: [],
    web_list: [],
    inventory_list: [],
  })
  const arrayInvent = ref([])
  const arrayWeb = ref([])
  const checkInventory = (code: any, event: any) => {
    if (event.target.checked == true) {
      arrayInvent.value.push(code)
    } else if (event.target.checked == false) {
      arrayInvent.value = groupAdmin.inventory_list.filter(
        (item) => item != code
      )
    }
  }
  const checkWeb = (code: any, event: any) => {
    if (event.target.checked == true) {
      arrayWeb.value.push(code)
    } else if (event.target.checked == false) {
      arrayWeb.value = groupAdmin.web_list.filter((item) => item != code)
    }
  }
  const createGroupAdmin = () => {
    groupAdmin.string_roles.push(
      role.storeSetting,
      role.product,
      role.createProduct,
      role.updateProduct,
      role.deleteProduct,
      role.printProduct,
      role.importProduct,
      role.exportProduct
    )
    let arr = groupAdmin.string_roles.filter(
      (item) => item != '' && item != null
    )
    let data = {
      title: groupAdmin.title,
      is_admin: groupAdmin.is_admin,
      is_default: groupAdmin.is_default,
      string_roles: arr,
      web_list: arrayWeb.value,
      inventory_list: arrayInvent.value,
    }
    dataAdminSetting.createPermissionAction(data, toast, router, EndTimeLoading)
  }
  // const listView = [
  //   {
  //     code: 'PERSONNEL_PROFILE_VIEW_ALL',
  //     name: 'Xem tất cả',
  //   },
  //   {
  //     code: 'PERSONNEL_PROFILE_VIEW_COMPANY',
  //     name: 'Xem công ty',
  //   },
  //   {
  //     code: 'PERSONNEL_PROFILE_VIEW_BRANCH',
  //     name: 'Xem chi nhánh',
  //   },
  //   {
  //     code: 'PERSONNEL_PROFILE_VIEW_DEPARTMENT',
  //     name: 'Xem phòng ban',
  //   },
  // ]
</script>
<style>
  #components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }

  .site-layout .site-layout-background {
    background: #fff;
  }

  .ant-layout-header {
    height: 60px;
  }

  .modal-menu-box {
    position: absolute;
    top: 50px;
    right: 0px;
    z-index: 9999;
    justify-items: center;
  }
  .disabledInput {
    background-color: rgb(221, 221, 221);
  }
  .select-aa {
    width: 240px;
    height: 40px;
    overflow: hidden;
    border: 1px solid #ccc;
  }
  thead th:nth-child(2) {
    text-align: left;
  }
</style>
