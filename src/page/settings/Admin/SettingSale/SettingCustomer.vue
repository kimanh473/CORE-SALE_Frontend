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
          ><p class="pl-5 text-[16px]">Cài đặt khách hàng</p></template
        ></Header
      >
    </template>
    <template v-slot:content class="relative">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="Khách hàng mới">
          <div class="p-2 h-full">
            <h2 class="text-left uppercase font-semibold p-2">Khách hàng</h2>
            <div class="w-full p-2 border rounded-lg">
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">
                    Tự động gán nhóm mặc định cho khách hàng mới
                  </h5>
                </div>
                <div>
                  <a-switch v-model:checked="checkAutoGroup" />
                </div>
              </div>
              <hr />
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">
                    Gửi email xác nhận cho khách hàng mới
                  </h5>
                </div>
                <div>
                  <a-switch v-model:checked="checkSendConfirm" />
                </div>
              </div>
              <hr />
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">Yêu cầu xác thực email</h5>
                </div>
                <div>
                  <a-switch v-model:checked="checkConfirmMail" />
                </div>
              </div>
              <hr />
              <Transition v-if="checkConfirmMail == true" name="nested">
                <div>
                  <div class="row-setting">
                    <div class="ml-4 flex flex-col">
                      <h5 class="text-setting">
                        Thời hạn email xác thực có hiệu lực
                        <input
                          type="number"
                          name=""
                          id=""
                          class="form-control-input !w-[50px]"
                          value="0"
                        />
                        tiếng
                      </h5>
                    </div>
                  </div>
                  <hr />
                </div>
              </Transition>

              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">
                    Gửi thông báo/ email chào mừng khách hàng mới
                  </h5>
                </div>
                <div>
                  <a-switch v-model:checked="checkNewCustomer" />
                </div>
              </div>
              <hr />
              <hr />
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Tùy chỉnh tài khoản" force-render
          ><div class="p-2 h-full">
            <h2 class="text-left uppercase font-semibold p-2">đơn hàng</h2>
            <div class="w-full p-2 border rounded-lg">
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">Vô hiệu hóa chức năng tài khoản</h5>
                </div>
                <div>
                  <a-switch v-model:checked="checkDisableAccount" />
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
  import { ref } from 'vue'
  const activeKey = ref('1')
  const checkAutoGroup = ref<boolean>(false)
  const checkSendConfirm = ref<boolean>(false)
  const checkConfirmMail = ref<boolean>(false)
  const checkNewCustomer = ref<boolean>(false)
  const checkDisableAccount = ref<boolean>(false)
  const updateOrderSetting = () => {}
  defineProps<{ isShowSearch: boolean }>()
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
