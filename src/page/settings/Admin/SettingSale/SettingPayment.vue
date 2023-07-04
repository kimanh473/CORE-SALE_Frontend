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
          ><p class="pl-5 text-[16px]">
            Cài đặt phương thức thanh toán
          </p></template
        ></Header
      >
    </template>
    <template v-slot:content class="relative">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="Thanh toán">
          <div class="p-2 h-full">
            <h2 class="text-left uppercase font-semibold p-2">
              phương thức thanh toán
            </h2>
            <div class="w-full p-2 border rounded-lg">
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">
                    Cho phép khách hàng thanh toán bằng tiền mặt
                  </h5>
                  <h5 class="sub-setting"></h5>
                </div>
                <div>
                  <a-switch v-model:checked="checkPayCash" />
                </div>
              </div>
              <hr />
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">
                    Cho phép khách hàng thanh toán bằng thẻ tín dụng
                  </h5>
                  <h5 class="sub-setting"></h5>
                </div>
                <div>
                  <a-switch v-model:checked="checkCredit" />
                </div>
              </div>
              <hr />
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">
                    Cho phép khách hàng thanh toán bằng ví điện tử
                  </h5>
                  <h5 class="sub-setting"></h5>
                </div>
                <div>
                  <a-switch v-model:checked="checkWallet" />
                </div>
              </div>
              <hr />
              <Transition v-if="checkWallet == true" name="nested">
                <div>
                  <div class="row-setting">
                    <div>
                      <div class="check">
                        <input
                          id="checkAbsence"
                          type="checkbox"
                          true-value="1"
                          false-value="0"
                        />
                        <label for="checkAbsence"> VN Pay</label>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </Transition>
            </div>
          </div>
        </a-tab-pane>
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
  const checkReceive = ref<boolean>(false)
  const checkCredit = ref<boolean>(false)
  const checkPayCash = ref<boolean>(false)
  const checkWallet = ref<boolean>(false)
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
