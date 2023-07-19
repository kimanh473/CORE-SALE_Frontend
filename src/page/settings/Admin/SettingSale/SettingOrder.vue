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
          ><p class="pl-5 text-[16px]">Cài đặt mail thông báo</p></template
        ></Header
      >
    </template>
    <template v-slot:content class="relative">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="Xử lý đơn hàng">
          <div class="p-2 h-full">
            <h2 class="text-left uppercase font-semibold p-2">đơn hàng</h2>
            <div class="w-full p-2 border rounded-lg">
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">
                    Gửi Thông báo/email hủy đơn hàng khi khách hàng hủy đơn hàng
                  </h5>
                </div>
                <div>
                  <a-switch
                    v-model:checked="
                      dataSettingMail.mail_to_customer_when_deleted_order
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
                    Gửi Thông báo/email đến khách hàng khi khách hàng tạo đơn
                    hàng
                  </h5>
                </div>
                <div>
                  <a-switch
                    v-model:checked="
                      dataSettingMail.mail_to_customer_when_created_order
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
                    Gửi Thông báo/email đến khách hàng khi khách hàng khi bắt
                    đầu giao hàng
                  </h5>
                </div>
                <div>
                  <a-switch
                    v-model:checked="
                      dataSettingMail.mail_to_customer_when_start_shipping
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
                    Gửi Thông báo/email đến khách hàng khi thông tin giao hàng
                    bị thay đổi
                  </h5>
                </div>
                <div>
                  <a-switch
                    v-model:checked="
                      dataSettingMail.mail_to_customer_when_change_order
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
                    Gửi Thông báo/email đến khách hàng khi đơn hàng xác nhận
                    thanh toán
                  </h5>
                </div>
                <div>
                  <a-switch
                    v-model:checked="dataSettingMail.mail_to_customer_when_paid"
                    :checkedValue="1"
                    :unCheckedValue="0"
                  />
                </div>
              </div>
              <hr />
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">
                    Gửi Thông báo/email đến khách hàng đã mua hàng nhưng chưa
                    hoàn thành việc thanh toán đơn hàng
                  </h5>
                </div>
                <div>
                  <a-switch
                    v-model:checked="
                      dataSettingMail.mail_to_customer_when_hasnt_paid
                    "
                    :checkedValue="1"
                    :unCheckedValue="0"
                  />
                </div>
              </div>
              <hr />
              <div class="row-setting">
                <div class="ml-4 flex flex-col">
                  <h5 class="text-setting">
                    Sau
                    <input
                      type="number"
                      name=""
                      id=""
                      class="form-control-input !w-[50px]"
                      v-model="dataSettingMail.after_hour"
                    />
                    tiếng
                  </h5>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Phương thức giao hàng" force-render
          ><div class="p-2 h-full">
            <h2 class="text-left uppercase font-semibold p-2">đơn hàng</h2>
            <div class="w-full p-2 border rounded-lg">
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">
                    Nhận tại kho (Cho phép khách hàng có thể tự chọn kho để nhận
                    hàng)
                  </h5>
                </div>
                <div>
                  <a-switch v-model:checked="checkCancel" />
                </div>
              </div>
            </div></div
        ></a-tab-pane>
      </a-tabs>
    </template>
    <template v-slot:footer
      ><div class="bg-slate-300">
        <div class="p-4 text-left">
          <button class="button-modal" @click="updateOrderSetting()">
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
  systemSetting.detailSystemSettingAction('MAIL_TO_CUSTOMER')
  const { dataSettingMail } = storeToRefs(systemSetting)
  // const formatTrueFasle = (value: Number) => {
  //   if (value == 1) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  const checkCancel = ref<boolean>(false)
  // const checkCreate = ref<boolean>(
  //   formatTrueFasle(dataSettingMail.value.mail_to_customer_when_created_order)
  // )
  // const checkStart = ref<boolean>(
  //   formatTrueFasle(dataSettingMail.value.mail_to_customer_when_start_shipping)
  // )
  // const checkChange = ref<boolean>(
  //   formatTrueFasle(dataSettingMail.value.mail_to_customer_when_change_order)
  // )
  // const checkConfirm = ref<boolean>(
  //   formatTrueFasle(dataSettingMail.value.mail_to_customer_when_paid)
  // )
  // const checkUnpay = ref<boolean>(
  //   formatTrueFasle(dataSettingMail.value.mail_to_customer_when_hasnt_paid)
  // )
  const shipMethod = ref([])
  const afterHour = ref<Number>(0)

  const updateOrderSetting = () => {
    const data = {
      code: 'MAIL_TO_CUSTOMER',
      value: [
        {
          mail_to_customer_when_deleted_order:
            dataSettingMail.value.mail_to_customer_when_deleted_order,
          mail_to_customer_when_created_order:
            dataSettingMail.value.mail_to_customer_when_deleted_order,
          mail_to_customer_when_start_shipping:
            dataSettingMail.value.mail_to_customer_when_start_shipping,
          mail_to_customer_when_change_order:
            dataSettingMail.value.mail_to_customer_when_change_order,
          mail_to_customer_when_paid:
            dataSettingMail.value.mail_to_customer_when_paid,
          mail_to_customer_when_hasnt_paid:
            dataSettingMail.value.mail_to_customer_when_hasnt_paid,
          after_hour: dataSettingMail.value.after_hour,
          shipping_method: shipMethod.value,
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
