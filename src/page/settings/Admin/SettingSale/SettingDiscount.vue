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
          ><p class="pl-5 text-[16px]">Cài đặt tiếp thị</p></template
        ></Header
      >
    </template>
    <template v-slot:content class="relative">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="Mã giảm giá">
          <div class="p-2 h-full">
            <h2 class="text-left uppercase font-semibold p-2">tiếp thị</h2>
            <div class="w-full p-2 border rounded-lg">
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">
                    Cho phép áp dụng nhiều mã giảm giá cùng lúc
                  </h5>
                </div>
                <div>
                  <a-switch v-model:checked="checkCode" />
                </div>
              </div>
              <hr />
              <Transition v-if="checkCode == true" name="nested">
                <div>
                  <div class="row-setting">
                    <div class="ml-4 flex flex-col">
                      <h5 class="text-setting">
                        Số lượng mã giảm giá
                        <input
                          type="number"
                          name=""
                          id=""
                          class="form-control-input !w-[50px]"
                          value="0"
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
                    Cho phép sửa/ xóa mã giảm giá sau khi
                    <input
                      type="number"
                      name=""
                      id=""
                      class="form-control-input !w-[50px]"
                      value="0"
                    />
                    đơn hàng đã áp dụng <br />(Nếu đơn hàng đã áp dụng mã giảm
                    giá trước khi thay đổi thì sẽ không thay đổi khi mã giảm giá
                    bị sửa, xóa)
                  </h5>
                </div>
                <div></div>
              </div>
              <hr />
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Chương trình khuyến mãi" force-render
          ><div class="p-2 h-full">
            <h2 class="text-left uppercase font-semibold p-2">tiếp thị</h2>
            <div class="w-full p-2 border rounded-lg">
              <div class="row-setting">
                <div class="flex flex-col text-left">
                  <h5 class="text-setting">
                    Cho phép áp dụng nhiều chương trình khuyến mãi cùng 1 lúc
                  </h5>
                </div>
                <div>
                  <a-switch v-model:checked="checkPromotions" />
                </div>
              </div>
              <hr />
              <Transition v-if="checkPromotions == true" name="nested">
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
                          value="0"
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
                  <a-switch v-model:checked="checkBoth" />
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
  const checkCode = ref<boolean>(false)
  const checkPromotions = ref<boolean>(false)
  const checkBoth = ref<boolean>(false)
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
