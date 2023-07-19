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
          ><p class="pl-5 text-[16px]">Cài đặt sản phẩm</p></template
        ></Header
      >
    </template>
    <template v-slot:content class="relative">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="Sản phẩm">
          <div class="p-2 h-full">
            <h2 class="text-left uppercase font-semibold p-2">Sản phẩm</h2>
            <div class="w-full p-2 border rounded-lg">
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">
                    Cài sản phẩm là sản phẩm mới
                    <input
                      type="number"
                      name=""
                      id=""
                      class="form-control-input !w-[50px]"
                      v-model="dataSettingMail.TIME_NEW_PRODUCT"
                    />
                    ngày kể từ khi hiển thị trên web bán
                  </h5>
                </div>
              </div>
              <hr />
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">
                    Cho phép khách hàng viết đánh giá
                  </h5>
                </div>
                <div>
                  <a-switch
                    v-model:checked="dataSettingMail.CUSTOMER_COMMENT"
                    :checkedValue="1"
                    :unCheckedValue="0"
                  />
                </div>
              </div>
              <hr />
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">
                    Chuyển trạng thái của sản phẩm thành còn hàng khi đơn hàng
                    bị hủy <br />
                    (Khi sản phẩm đang ở trạng thái hết hàng nhưng đơn bị hủy
                    thì có thể đổi sang trạng thái còn hàng)
                  </h5>
                </div>
                <div>
                  <a-switch
                    v-model:checked="
                      dataSettingMail.CHANGE_TOTAL_WHEN_DELETE_ORDER
                    "
                    :checkedValue="1"
                    :unCheckedValue="0"
                  />
                </div>
              </div>
              <hr />
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">
                    Mức hết hàng
                    <input
                      type="number"
                      name=""
                      id=""
                      class="form-control-input !w-[50px]"
                      v-model="dataSettingMail.TOTAL_PRODUCT_MIN"
                    />
                  </h5>
                </div>
              </div>
              <hr />
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">
                    Cảnh báo hết hàng khi tồn kho còn
                    <input
                      type="number"
                      name=""
                      id=""
                      class="form-control-input !w-[50px]"
                      v-model="dataSettingMail.WARNING_WHEN_TOTAL_IS"
                    />
                    sản phẩm
                  </h5>
                </div>
              </div>
              <hr />
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">
                    Số lượng sản phẩm tối đa trong giỏ hàng
                    <input
                      type="number"
                      name=""
                      id=""
                      class="form-control-input !w-[50px]"
                      v-model="dataSettingMail.TOTAL_MAX_PRODUCT_IN_CART"
                    />
                  </h5>
                </div>
              </div>
              <hr />
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">
                    Số lượng tối thiểu được phép trong giỏ hàng
                    <input
                      type="number"
                      name=""
                      id=""
                      class="form-control-input !w-[50px]"
                      v-model="dataSettingMail.TOTAL_MIN_PRODUCT_IN_CART"
                    />
                  </h5>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </a-tab-pane>
      </a-tabs>
    </template>
    <template v-slot:footer
      ><div class="bg-slate-300">
        <div class="p-4 text-left">
          <button class="button-modal" @click="updateProductSetting()">
            Cập nhật
          </button>
          <button class="button-close-modal" @click="this.$router.go(-1)">
            Hủy bỏ
          </button>
        </div>
      </div></template
    >
  </base-layout>
</template>

<script setup lang="ts">
  import BaseLayout from '../../../../layout/baseLayout.vue'
  import SideBar from '../../../../components/common/SideBar.vue'
  import Header from '../../../../components/common/Header.vue'
  import { useSystemSetting } from '../../../../store/modules/admin-setting/systemsetting'
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useToast } from 'vue-toastification'
  const toast = useToast()
  const activeKey = ref('1')
  const systemSetting = useSystemSetting()
  systemSetting.detailSystemSettingAction('SETTING_PRODUCT')
  const { dataSettingMail } = storeToRefs(systemSetting)
  const checkEvaluate = ref<boolean>(false)
  const checkChangeStatus = ref<boolean>(false)
  const updateProductSetting = () => {
    const data = {
      code: 'SETTING_PRODUCT',
      value: [
        {
          TIME_NEW_PRODUCT: dataSettingMail.value.TIME_NEW_PRODUCT,
          CUSTOMER_COMMENT: dataSettingMail.value.CUSTOMER_COMMENT,
          CHANGE_TOTAL_WHEN_DELETE_ORDER:
            dataSettingMail.value.CHANGE_TOTAL_WHEN_DELETE_ORDER,
          TOTAL_PRODUCT_MIN: dataSettingMail.value.TOTAL_PRODUCT_MIN,
          WARNING_WHEN_TOTAL_IS: dataSettingMail.value.WARNING_WHEN_TOTAL_IS,
          TOTAL_MAX_PRODUCT_IN_CART:
            dataSettingMail.value.TOTAL_MAX_PRODUCT_IN_CART,
          TOTAL_MIN_PRODUCT_IN_CART:
            dataSettingMail.value.TOTAL_MIN_PRODUCT_IN_CART,
        },
      ],
    }
    systemSetting.updateSystemSettingAction(data, toast)
  }
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
