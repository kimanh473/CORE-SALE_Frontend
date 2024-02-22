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
      <div class="flex">
        <div class="w-2/3 bg-white p-4">
          <h4 class="form-section-title-order w-full m-0">
            <span class="pr-2">
              <i class="fal fa-user"></i>
            </span>
            Thông tin khách hàng
          </h4>
          <div class="rounded-md border-2">
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
          <h4 class="form-section-title-order w-full m-0">
            <span class="pr-2">
              <i class="far fa-credit-card-blank"></i>
            </span>
            Thông tin thanh toán
          </h4>
          <div class="rounded-md border-2">
            <a-row class="p-4">
              <a-col :span="12">
                <div>
                  Phương thức thanh toán <a class="pl-6">Chuyển khoản</a>
                </div>
              </a-col>
            </a-row>
          </div>
          <h4 class="form-section-title-order w-full m-0">
            <span class="pr-2">
              <i class="far fa-truck"></i>
            </span>
            Vận chuyển
          </h4>
          <div class="rounded-md border-2">
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
          <h4 class="form-section-title-order w-full m-0">
            <span class="pr-2">
              <i class="fal fa-gift"></i>
            </span>
            Thông tin sản phẩm
          </h4>
          <div class="rounded-md border-2">
            <a-table
              class="!p-[10px]"
              :columns="columns"
              :data-source="listOrderTest"
              :pagination="false"
              row-key="id"
            >
              <template #bodyCell="{ column, record, index }"
                ><template v-if="column.key === 'image' && record.image">
                  <img
                    :src="record.image"
                    alt=""
                    width="50"
                    height="50"
                  /> </template
              ></template>
            </a-table>
          </div>
          <div class="pt-4">
            <div class="flex justify-end pr-8">
              <div class="pr-14">
                <div>Tổng tiền (1 sản phẩm)</div>
                <div>Chiết khấu</div>
                <div>Phí giao hàng</div>
                <div>Mã giảm giá</div>
                <div class="font-bold">Khách phải trả</div>
              </div>
              <div class="text-end">
                <div>900</div>
                <div>0</div>
                <div>1000</div>
                <div>0</div>
                <div>1900</div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/3 px-4">
          <div class="w-full bg-white p-4 mb-4">
            <h4 class="form-section-title-order w-full m-0">Kênh bán hàng</h4>
            <a-select
              show-search
              class="form-control-input"
              placeholder="Chọn kênh"
              :fieldNames="{ label: 'code', value: 'id' }"
            >
            </a-select>
          </div>
          <div class="w-full bg-white p-4">
            <h4 class="form-section-title-order w-full m-0">Ghi chú</h4>
            <a-textarea class="form-control-input" placeholder="Nhập ghi chú">
            </a-textarea>
          </div>
          <div class="w-full bg-white p-4">
            <div class="text-divider">Lịch sử đơn hàng</div>
          </div>
        </div>
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
  import { ref, reactive } from 'vue'
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
  const listOrderTest = reactive([
    {
      id: 1,
      image:
        'https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg',
      name: 'sp1',
      unit_price: '1000',
      discount: '10',
      tax: '0',
      fixed_price: '900',
    },
    {
      id: 2,
      image:
        'https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg',
      name: 'sp2',
      unit_price: '2000',
      discount: '20',
      tax: '10',
      fixed_price: '1600',
    },
    {
      id: 3,
      image:
        'https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg',
      name: 'sp3',
      unit_price: '3000',
      discount: '30',
      tax: '15',
      fixed_price: '2000',
    },
  ])
  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
    },
    {
      title: 'Ảnh',
      dataIndex: 'image',
      key: 'image',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
    },
    {
      title: 'Đơn giá',
      dataIndex: 'unit_price',
    },
    {
      title: 'Chiết khấu',
      dataIndex: 'discount',
    },
    {
      title: 'Thuế',
      dataIndex: 'tax',
    },
    {
      title: 'Thành tiền',
      dataIndex: 'fixed_price',
    },
  ]
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
  .text-divider {
    display: flex;
    align-items: center;
    --text-divider-gap: 1rem;
  }
  .text-divider::before,
  .text-divider::after {
    content: '';
    height: 1px;
    background-color: #333;
    flex-grow: 1;
  }
  .text-divider::before {
    margin-right: var(--text-divider-gap);
  }
  .text-divider::after {
    margin-left: var(--text-divider-gap);
  }
</style>
