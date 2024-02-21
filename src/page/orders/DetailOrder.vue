<template>
  <base-layout>
    <template v-slot:sidebar>
      <SideBar />
    </template>
    <template v-slot:header>
      <Header :is-show-search="false">
        <div class="flex grow">
          <div class="flex items-center">
            <div class="flex items-center">
              <Transition name="slide-fade"> </Transition>
              <p class="longText pl-5 mb-0">Chi tiết đơn hàng</p>
            </div>
          </div>
        </div>
      </Header>
    </template>
    <template v-slot:content class="relative">
      <h4 class="form-section-title-order form-large-full">
        <span class="pr-2">
          <i class="fal fa-user"></i>
        </span>
        Thông tin khách hàng
      </h4>
      <div class="w-2/3 rounded-md border-2">
        <a-row class="p-4">
          <a-col :span="12"
            ><div class="text-base font-bold">Địa chỉ giao hàng</div>
            <div>Test-232313123 <a class="pl-6">Thay đổi</a></div>
            <div>Copyright © 2024 Tailwind Labs Inc.</div></a-col
          >
          <a-col :span="12"
            ><div class="text-base font-bold">Địa chỉ thanh toán</div>
            <div>Test-232313123<a class="pl-6">Thay đổi</a></div>
            <div>Copyright © 2024 Tailwind Labs Inc.</div></a-col
          >
        </a-row>
      </div>
      <h4 class="form-section-title-order form-large-full">
        <span class="pr-2">
          <i class="far fa-credit-card-blank"></i>
        </span>
        Thông tin thanh toán
      </h4>
      <div class="w-2/3 rounded-md border-2">
        <a-row class="p-4">
          <a-col :span="12">
            <div>Phương thức thanh toán <a class="pl-6">Chuyển khoản</a></div>
          </a-col>
        </a-row>
      </div>
      <h4 class="form-section-title-order form-large-full">
        <span class="pr-2">
          <i class="far fa-truck"></i>
        </span>
        Vận chuyển
      </h4>
      <div class="w-2/3 rounded-md border-2">
        <a-row class="p-4">
          <a-col :span="4">
            <div>
              <span>Mã đơn hàng</span>
            </div>
            <div>Mã vận đơn</div>
            <div>Nhà vận chuyển</div>
            <div>Khối lượng</div>
            <div>Kích thước (DxRxC)</div>
            <div>Yêu cầu</div>
          </a-col>
          <a-col :span="6">
            <div>
              <a id="code" value="Test" class="pl-6 pr-4">: Test</a>
              <i class="far fa-clone cursor-pointer"></i>
            </div>
            <div><a class="pl-6 pr-4">: Test</a></div>
            <div>
              <a class="pl-6 pr-4">: Tiki Trader</a>
            </div>
            <div>
              <span class="pl-6 pr-4">: 1000 g</span>
            </div>
            <div>
              <span class="pl-6 pr-4">: 10 x 10 x 10 (cm)</span>
            </div>
            <div>
              <span class="pl-6 pr-4">: Không cho xem hàng</span>
            </div>
          </a-col>
          <a-col :span="4"> </a-col>
          <a-col :span="4">
            <div>
              <span>Phí trả ĐTVC</span>
            </div>
            <div>Tổng tiền thu hộ COD</div>
            <div>Nhà vận chuyển</div>
            <div>Đối soát</div>
            <div>Hình thức giao hàng</div>
            <div>Yêu cầu</div>
          </a-col>
          <a-col :span="6">
            <div>
              <a id="code" value="Test" class="pl-6 pr-4">: Test</a>
              <i class="far fa-clone cursor-pointer"></i>
            </div>
            <div><a class="pl-6 pr-4">: Test</a></div>
            <div>
              <a class="pl-6 pr-4">: Tiki Trader</a>
            </div>
            <div>
              <span class="pl-6 pr-4">: 1000 g</span>
            </div>
            <div>
              <span class="pl-6 pr-4">: 10 x 10 x 10 (cm)</span>
            </div>
            <div>
              <span class="pl-6 pr-4">: Không cho xem hàng</span>
            </div>
          </a-col>
        </a-row>
      </div>
    </template>
    <template v-slot:footer> </template>
  </base-layout>
  <loading-overlay :isLoading="isLoading"></loading-overlay>
</template>

<script setup lang="ts">
  import BaseLayout from '@/layout/baseLayout.vue'
  import SideBar from '@/components/common/SideBar.vue'
  import Header from '@/components/common/Header.vue'
  //   import { useRoute, useRouter } from 'vue-router'
  import { ref } from 'vue'
  import { useWebCatalog } from '@/store/modules/web-catalog/webcatalog'
  // const UrlImg = import.meta.env.VITE_APP_IMAGE_URL

  //   const router = useRouter()
  //   const route = useRoute()
  const dataWebsite = useWebCatalog()
  dataWebsite.getAllWebCatalogAction()
  // const { listWeb } = storeToRefs(dataWebsite)
  // function formatWeb(webcode: string) {
  //   const webName = listWeb.value.find((item: any) => item.code == webcode)
  //   return webName?.web_name
  // }
  //   const EndTimeLoading = () => {
  //     isLoading.value = false
  //   }

  const isLoading = ref<boolean>(false)
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
