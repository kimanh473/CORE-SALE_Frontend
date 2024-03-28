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
          ><p class="pl-5 text-[16px] font-bold">Cấu hình sàn</p></template
        ></Header
      >
    </template>
    <template v-slot:content class="relative">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="Shopee">
          <div class="p-2 h-full">
            <div class="flex justify-between">
              <h2 class="text-left uppercase font-semibold pl-2">
                Danh sách shop
              </h2>
              <div
                class="button-create-new relative group rounded-md px-2"
                title="Kết nối gian hàng mới"
                @click="handleCreatePlatformShopee"
              >
                <p class="text-[14px] mt-1 px-1">Kết nối gian hàng mới</p>
              </div>
            </div>
            <div class="w-full flex justify-between p-2 relative">
              <div class="bg-white w-[32%] p-4">
                <!-- <div v-for="item in dataShopShopee" :key=item.id> -->
                <div class="w-[100%] hover:bg-gray-200 bg-gray-100 flex p-2">
                  <div class="img w-[30%] bg-orange-300 mr-4"></div>
                  <div class="w-full flex justify-between">
                    <div class="">
                      <span class="font-bold">Hawonkoo</span
                      ><span
                        v-if="'trang thai xac thuc'"
                        class="font-bold ml-4 text-blue-500 hover:cursor-pointer"
                        >Xác thực</span
                      >
                      <div>ID: 5864531</div>
                      <div>Thời điểm kết nối: 28/03/2024 5:00 CH</div>
                    </div>
                    <div class="flex items-center mr-4">
                      <i
                        class="far fa-unlink fa-lg text-slate-500 hover:text-red-600 hover:cursor-pointer"
                      ></i>
                    </div>
                  </div>
                </div>
                <!-- </div> -->
              </div>
              <div class="bg-white w-[67%] p-2">
                <div class="p-2">
                  <h4>Đồng bộ giá</h4>
                  <a-switch
                    v-model:checked="value4"
                    :checkedValue="1"
                    :unCheckedValue="0"
                  />
                  <Transition v-if="value4 == 1" name="nested">
                    <div class="w-[80%] pt-2">
                      <label class="form-group-label"
                        >Chính sách giá đồng bộ</label
                      >
                      <div class="flex">
                        <a-select
                          v-model:value="value3"
                          class="form-control-input"
                          placeholder="Chọn phương án"
                          :options="list_price_sync"
                        >
                        </a-select>
                        <div></div>
                      </div>
                    </div>
                  </Transition>
                </div>
                <div class="p-2">
                  <h4>Đồng bộ đơn hàng</h4>
                  <a-switch
                    v-model:checked="value3"
                    :checkedValue="1"
                    :unCheckedValue="0"
                  />
                  <Transition v-if="value3 == 1" name="nested">
                    <div class="w-[80%] pt-2">
                      <label class="form-group-label">Kho đồng bộ </label>
                      <div class="flex">
                        <a-select
                          v-model:value="value1"
                          class="form-control-input"
                          placeholder="Chọn phương án đồng bộ"
                          :options="list_price_sync"
                        >
                        </a-select>
                        <div></div>
                      </div>
                      <div class="flex w-full">
                        <div class="w-full">
                          <label class="form-group-label pt-2"
                            >Phương án đồng bộ
                          </label>

                          <a-select
                            v-model:value="selected_option_sync"
                            class="form-control-input"
                            placeholder="Chọn phương án đồng bộ"
                            :options="list_option_sync"
                          >
                          </a-select>
                        </div>
                        <div
                          v-if="selected_option_sync == '2'"
                          class="ml-4 w-[20%]"
                        >
                          <label class="form-group-label pt-2"
                            >Mỗi phiên
                          </label>
                          <a-input
                            allow-clear
                            v-model:value="value5"
                            class="form-control-input"
                            placeholder=""
                          >
                          </a-input>
                        </div>
                        <!-- <Transition
                          v-if="selected_option_sync.value == 2"
                          name="nested"
                        >
                          <label class="form-group-label pt-2"
                            >Mỗi phiên
                          </label>
                        </Transition> -->
                        <div></div>
                      </div>
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Tiktok" force-render
          ><div class="p-2 h-full">
            <div class="flex w-full">
              <h2 class="text-left uppercase font-semibold p-2">tiktok</h2>
              <div></div>
            </div>
            <div class="w-full p-2 border rounded-lg">
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">
                    Cho phép áp dụng nhiều chương trình khuyến mãi cùng 1 lúc
                  </h5>
                </div>
                <div>
                  <a-switch
                    v-model:checked="dataSettingMail.MULTIPLE_PROMOTION"
                    :checkedValue="1"
                    :unCheckedValue="0"
                  />
                </div>
              </div>
              <hr />
              <Transition
                v-if="dataSettingMail.MULTIPLE_PROMOTION == 1"
                name="nested"
              >
                <div>
                  <div class="row-setting">
                    <div class="ml-4 flex flex-col">
                      <h5 class="text-setting">
                        Số lượng chương trình khuyến mãi
                        <input
                          type="number"
                          name=""
                          id=""
                          class="form-control-input !w-[50px]"
                          v-model="dataSettingMail.MULTIPLE_PROMOTION_COUNT"
                        />
                      </h5>
                    </div>
                  </div>
                  <hr />
                </div>
              </Transition>
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">
                    Cho phép áp dụng cả mã giảm giá và chương trình khuyến mãi
                    cùng lúc
                  </h5>
                </div>
                <div>
                  <a-switch
                    v-model:checked="
                      dataSettingMail.MULTIPLE_PROMOTION_DISCOUNT
                    "
                    :checkedValue="1"
                    :unCheckedValue="0"
                  />
                </div>
              </div>
              <hr />
            </div></div
        ></a-tab-pane>
      </a-tabs>
    </template>
    <template v-slot:footer
      ><div class="bg-slate-300">
        <div class="p-4 text-left">
          <button class="button-modal" @click="updateDiscountSetting()">
            Cập nhật
          </button>
          <button class="button-close-modal" @click="router.go(-1)">
            Hủy bỏ
          </button>
        </div>
      </div></template
    >
  </base-layout>
  <a-modal
    :visible="isOpenModalCreatePlatform"
    @cancel="handleCloseModalCreatePlatform"
    title="Kết nối gian hàng"
    width="550px"
  >
    <template #footer>
      <a-button
        key="submit"
        type="primary"
        @click="handleCreatNewShopShopee"
        :loading="isLoading"
        >Xác nhận</a-button
      >
      <a-button key="back" @click="handleCloseModalCreatePlatform"
        >Hủy</a-button
      >
    </template>
    <div class="p-[24px]">
      <div class="form-small">
        <label class="form-group-label"
          >Chọn sàn xác thực<span class="text-red-600">* </span> <span></span
        ></label>
        <div>
          <a-select
            show-search
            v-model:value="newPlatform.platform"
            class="form-control-input"
            placeholder="Chọn sàn TMĐT"
            :options="list_platform"
          >
          </a-select>
        </div>
      </div>
      <div class="form-small">
        <label class="form-group-label"
          >ID xác thực<span class="text-red-600">* </span> <span></span
        ></label>
        <div>
          <a-input
            allow-clear
            v-model:value="newPlatform.partner_id"
            class="form-control-input"
            placeholder="Nhập ID xác thực"
          >
          </a-input>
        </div>
      </div>
      <div class="form-small">
        <label class="form-group-label"
          >Mã xác thực<span class="text-red-600">* </span> <span></span
        ></label>
        <div>
          <a-input
            allow-clear
            v-model:value="newPlatform.partner_key"
            class="form-control-input"
            placeholder="Nhập mã xác thực"
          >
          </a-input>
        </div>
      </div>
      <div class="form-small">
        <label class="form-group-label"
          >ID gian hàng<span class="text-red-600">* </span> <span></span
        ></label>
        <div>
          <a-input
            allow-clear
            v-model:value="newPlatform.shop_id"
            class="form-control-input"
            placeholder="Nhập ID gian hàng"
          >
          </a-input>
        </div>
      </div>
      <div class="form-small">
        <label class="form-group-label"
          >Tên gian hàng<span class="text-red-600">* </span> <span></span
        ></label>
        <div>
          <a-input
            allow-clear
            v-model:value="newPlatform.shop_name"
            class="form-control-input"
            placeholder="Nhập tên gian hàng"
          >
          </a-input>
        </div>
      </div>
      <div class="form-small">
        <label for="" class="form-group-label"
          >Mô tả<span class="text-red-600"></span
        ></label>
        <div>
          <a-textarea
            type="text"
            placeholder="Nhập mô tả"
            v-model:value="newPlatform.decs"
            :rows="2"
          >
          </a-textarea>
        </div>
      </div>
      <div class="form-small">
        <a-radio-group v-model:value="newPlatform.env">
          <a-radio :value="1">Live</a-radio>
          <a-radio :value="2">Test</a-radio>
        </a-radio-group>
      </div>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
  import BaseLayout from '@/layout/baseLayout.vue'
  import SideBar from '@/components/common/SideBar.vue'
  import Header from '@/components/common/Header.vue'
  import { useSystemSetting } from '@/store/modules/admin-setting/systemsetting'
  import { ref, reactive } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useToast } from 'vue-toastification'
  import { useRouter } from 'vue-router'
  import type { SelectProps } from 'ant-design-vue'
  const router = useRouter()
  const toast = useToast()
  const activeKey = ref('1')
  const systemSetting = useSystemSetting()
  systemSetting.detailSystemSettingAction('SETTING_PROMOTION')
  const { dataSettingMail } = storeToRefs(systemSetting)
  const updateDiscountSetting = () => {
    const data = {
      code: 'SETTING_PROMOTION',
      value: [
        {
          MULTIPLE_DISCOUNT: dataSettingMail.value.MULTIPLE_DISCOUNT,
          MULTIPLE_DISCOUNT_COUNT:
            dataSettingMail.value.MULTIPLE_DISCOUNT_COUNT,
          CHANGE_VALUE_AFTER_EDIT_DELETE_DISCOUNT:
            dataSettingMail.value.CHANGE_VALUE_AFTER_EDIT_DELETE_DISCOUNT,
          MULTIPLE_PROMOTION: dataSettingMail.value.MULTIPLE_PROMOTION,
          MULTIPLE_PROMOTION_COUNT:
            dataSettingMail.value.MULTIPLE_PROMOTION_COUNT,
          MULTIPLE_PROMOTION_DISCOUNT:
            dataSettingMail.value.MULTIPLE_PROMOTION_DISCOUNT,
        },
      ],
    }
    systemSetting.updateSystemSettingAction(data, toast)
  }
  const isLoading = ref<boolean>(false)
  const selected_option_sync = ref()
  const value1 = ref<string>()
  // const value2 = ref(1)
  const value3 = ref(0)
  const value4 = ref(0)
  const value5 = ref('')
  const list_price_sync = ref<SelectProps['options']>([
    {
      value: '1',
      label: 'Giá lẻ',
    },
    {
      value: '2',
      label: 'Giá sỉ',
    },
    {
      value: '3',
      label: 'Giá niêm yết',
    },
  ])
  const list_option_sync = ref<SelectProps['options']>([
    {
      value: '1',
      label: 'Đồng bộ liên tục',
    },
    {
      value: '2',
      label: 'Đồng bộ theo phiên',
    },
  ])
  const list_platform = ref<SelectProps['options']>([
    {
      value: 'shopee',
      label: 'Shopee',
    },
    {
      value: 'tiktok',
      label: 'Tiktok',
    },
    {
      value: 'tiki',
      label: 'Tiki',
    },
    {
      value: 'lazada',
      label: 'Lazada',
    },
    {
      value: 'web',
      label: 'Website',
    },
  ])

  const isOpenModalCreatePlatform = ref<boolean>(false)
  const handleCreatePlatformShopee = () => {
    isOpenModalCreatePlatform.value = true
    console.log(selected_option_sync)
  }
  const handleCloseModalCreatePlatform = () => {
    isOpenModalCreatePlatform.value = false
  }
  const newPlatform = reactive({
    platform: '',
    partner_id: '',
    partner_key: '',
    shop_id: '',
    shop_name: '',
    decs: '',
    env: 1,
  })
  const handleCreatNewShopShopee = () => {}
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
</style>
