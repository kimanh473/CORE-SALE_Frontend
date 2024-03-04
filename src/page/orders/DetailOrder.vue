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
              <p class="longText pl-5 mb-0">
                Chi tiết đơn hàng - {{ detailOrder.order_sn }}
              </p>
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
                <div>{{ detailOrder.buyer_username }} - SĐT</div>
                <div>30 Trương Định, Thịnh Liệt, Hoàng Mai, Hà Nội.</div></a-col
              >
              <a-col :span="12"
                ><div class="text-base font-bold">Địa chỉ thanh toán</div>
                <div>{{ detailOrder.buyer_username }} - SĐT</div>
                <div>30 Trương Định, Thịnh Liệt, Hoàng Mai, Hà Nội.</div></a-col
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
                  Phương thức thanh toán
                  <span class="pl-6">{{
                    FormatPayMethod(detailOrder.payment_method)
                  }}</span>
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
                <div>Nhà vận chuyển</div>
                <div>Khối lượng</div>
                <div>Kích thước (DxRxC)</div>
                <div>Yêu cầu</div>
              </a-col>
              <a-col :span="6">
                <div>
                  <span id="code" value="Test" class="pl-6 pr-4"
                    >: {{ detailOrder.order_sn }}</span
                  >
                  <i
                    @click="copy(detailOrder.order_sn)"
                    class="far fa-clone cursor-pointer pr-2"
                  ></i>
                  <span v-if="copied"><i class="far fa-check"></i></span>
                </div>
                <div>
                  <span
                    class="pl-6 pr-4"
                    v-if="detailOrder && detailOrder.package_list"
                    >:
                    {{ detailOrder?.package_list[0]?.shipping_carrier }}</span
                  >
                </div>
                <div>
                  <span
                    class="pl-6 pr-4"
                    v-if="detailOrder && detailOrder.package_list"
                    >:
                    {{
                      detailOrder?.package_list[0]
                        ?.parcel_chargeable_weight_gram
                    }}
                    g</span
                  >
                </div>
                <div>
                  <span class="pl-6 pr-4">: </span>
                </div>
                <div>
                  <span class="pl-6 pr-4">: </span>
                </div>
              </a-col>
              <a-col :span="4"> </a-col>
              <a-col :span="4">
                <div>
                  <span>Phí trả ĐTVC</span>
                </div>
                <div>Tổng tiền thu hộ COD</div>
                <div>Đối soát</div>
                <div>Hình thức giao hàng</div>
              </a-col>
              <a-col :span="6">
                <div>
                  <span class="pl-6 pr-4"
                    >:
                    {{
                      FormatPrice(Number(detailOrder.estimated_shipping_fee))
                    }}&#8363;
                  </span>
                </div>
                <div>
                  <span class="pl-6 pr-4"
                    >: {{ FormatPrice(Number(detailOrder.cod)) }}&#8363;
                  </span>
                </div>
                <div>
                  <span class="pl-6 pr-4">: Chưa đối soát</span>
                </div>
                <div>
                  <span class="pl-6 pr-4">: </span>
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
              :data-source="detailOrder.product_detail"
              :pagination="false"
              row-key="id"
            >
              <template #bodyCell="{ column, record, index }"
                ><template v-if="column.key === 'stt'">{{
                  index + 1
                }}</template>
                <template v-if="column.key === 'image' && record.image_info">
                  <img
                    :src="record.image_info.image_url"
                    alt=""
                    width="50"
                    height="50"
                  />
                </template>
                <template v-if="column.key === 'discount' && record.image_info">
                  {{
                    FormatPrice(
                      record.model_original_price -
                        record.model_discounted_price
                    )
                  }}&#8363;
                </template>
                <template
                  v-if="
                    column.key === 'model_original_price' && record.image_info
                  "
                >
                  {{ FormatPrice(record.model_original_price) }}&#8363;
                </template>
                <template
                  v-if="
                    column.key === 'model_discounted_price' && record.image_info
                  "
                >
                  {{ FormatPrice(record.model_discounted_price) }}&#8363;
                </template></template
              >
            </a-table>
          </div>
          <div class="pt-4">
            <div class="flex justify-end pr-8">
              <div class="pr-14">
                <div class="font-bold">
                  Tổng tiền sản phẩm ({{ detailOrder?.product_detail?.length }}
                  sản phẩm)
                </div>
                <div class="font-bold">Chiết khấu</div>
                <div class="font-bold">Tiền thuế (VAT)</div>
                <div class="font-bold">Phí vân chuyển (không tính trợ giá)</div>
                <div>Phí vận chuyển thực tế</div>
                <div>Phí vận chuyển được trợ giá từ sản TMĐT</div>
                <div class="font-bold">Phí giao dịch từ sàn TMĐT</div>
                <div>Phí cố định</div>
                <div>Phí thanh toán</div>
                <div class="font-bold">Doanh thu đơn hàng</div>
              </div>
              <div class="text-end">
                <div>{{ FormatPrice(totalOrigin) }}&#8363;</div>
                <div>- {{ FormatPrice(totalDiscount) }}&#8363;</div>
                <div>0&#8363;</div>
                <div>
                  {{
                    FormatPrice(Number(detailOrder.estimated_shipping_fee))
                  }}&#8363;
                </div>
                <div>0&#8363;</div>
                <div>0&#8363;</div>
                <div>0&#8363;</div>
                <div>0&#8363;</div>
                <div>0&#8363;</div>
                <div>
                  {{
                    FormatPrice(
                      totalOrigin -
                        totalDiscount +
                        Number(detailOrder.estimated_shipping_fee)
                    )
                  }}&#8363;
                </div>
              </div>
            </div>
          </div>
          <h4 class="form-section-title-order w-full m-0">
            <span class="pr-2">
              <i class="fal fa-exchange"></i>
            </span>
            Điều chỉnh đặt hàng
          </h4>
          <div class="rounded-md border-2">
            <a-table
              class="!p-[10px]"
              :columns="columnSetting"
              :data-source="detailOrder.product_detail"
              :pagination="false"
              row-key="id"
            >
              <template #bodyCell="{ column, record, index }"
                ><template v-if="column.key === 'model_discounted_price'"
                  >{{
                    FormatPrice(record.model_discounted_price)
                  }}&#8363;</template
                >
              </template>
            </a-table>
            <div class="p-4 grid grid-cols-4">
              <span></span>
              <span></span>
              <span class="font-bold pr-8">Tổng số tiền điều chỉnh</span
              ><span class="text-right"
                >{{
                  FormatPrice(
                    totalOrigin -
                      totalDiscount +
                      Number(detailOrder.estimated_shipping_fee)
                  )
                }}&#8363;</span
              >
            </div>
          </div>
          <h4 class="form-section-title-order w-full m-0">
            <span class="pr-2">
              <i class="fas fa-money-bill-wave"></i>
            </span>
            Số tiền cuối cùng
          </h4>
          <div class="rounded-md border-2">
            <div class="p-4 grid grid-cols-4">
              <span></span>
              <span></span>
              <span class="font-bold pr-8">Doanh thu đơn hàng (cuối cùng)</span
              ><span class="text-right"
                >{{
                  FormatPrice(
                    totalOrigin -
                      totalDiscount +
                      Number(detailOrder.estimated_shipping_fee)
                  )
                }}&#8363;</span
              >
            </div>
          </div>
          <h4 class="form-section-title-order w-full m-0">
            <span class="pr-2">
              <i class="fas fa-hand-holding-usd"></i>
            </span>
            Thanh toán người mua
          </h4>
          <div class="rounded-md border-2">
            <div class="p-4 grid grid-cols-4">
              <span></span>
              <span></span>
              <span class="font-bold pr-8">Tổng tiền thanh toán</span
              ><span class="text-right"
                >{{
                  FormatPrice(
                    totalOrigin -
                      totalDiscount +
                      Number(detailOrder.estimated_shipping_fee)
                  )
                }}&#8363;</span
              >
            </div>
          </div>
        </div>
        <div class="w-1/3 px-4">
          <div class="w-full bg-white p-4 mb-4">
            <h4 class="form-section-title-order w-full m-0">Kênh bán hàng</h4>
            Test
          </div>
          <div class="w-full bg-white p-4">
            <h4 class="form-section-title-order w-full m-0">Ghi chú</h4>
            <a-textarea
              class="form-control-input"
              v-model:value="detailOrder.note"
              placeholder="Nhập ghi chú"
            >
            </a-textarea>
          </div>
          <div class="w-full bg-white p-4">
            <div class="text-divider">Lịch sử đơn hàng</div>
            <a-steps
              v-if="
                detailOrder?.tracking_info &&
                detailOrder?.tracking_info?.length > 0
              "
              direction="vertical"
              progress-dot
            >
              <a-step
                v-for="(item, index) in detailOrder.tracking_info"
                :key="index"
                :title="item.description"
                :description="
                  new Date(item.update_time * 1000).toLocaleString()
                "
              />
            </a-steps>
            <a-empty v-else
              ><template #description>
                <span> Không có dữ liệu </span>
              </template></a-empty
            >
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
  import { useRoute } from 'vue-router'
  import { ref } from 'vue'
  import { useClipboard } from '@vueuse/core'
  import { useOrder } from '@/store/modules/orders/orders'
  import { storeToRefs } from 'pinia'
  import {
    FormatPrice,
    FormatPayMethod,
  } from '@/components/constants/FormatAll'
  // const UrlImg = import.meta.env.VITE_APP_IMAGE_URL
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  //   const router = useRouter()
  const route = useRoute()
  const dataOrder = useOrder()
  const totalOrigin = ref(0)
  const totalDiscount = ref(0)
  dataOrder
    .getDetailOrderAction(Number(route.params.id), EndTimeLoading)
    .then(() => {
      detailOrder.value.product_detail.map((item: any) => {
        totalOrigin.value += item.model_original_price
        totalDiscount.value +=
          item.model_original_price - item.model_discounted_price
      })
    })
  const { detailOrder } = storeToRefs(dataOrder)
  const { copy, copied } = useClipboard()
  // const { listWeb } = storeToRefs(dataWebsite)
  // function formatWeb(webcode: string) {
  //   const webName = listWeb.value.find((item: any) => item.code == webcode)
  //   return webName?.web_name
  // }

  // const listOrderTest = reactive([
  //   {
  //     id: 1,
  //     image:
  //       'https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg',
  //     name: 'sp1',
  //     unit_price: '1000',
  //     discount: '10',
  //     tax: '0',
  //     fixed_price: '900',
  //   },
  //   {
  //     id: 2,
  //     image:
  //       'https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg',
  //     name: 'sp2',
  //     unit_price: '2000',
  //     discount: '20',
  //     tax: '10',
  //     fixed_price: '1600',
  //   },
  //   {
  //     id: 3,
  //     image:
  //       'https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg',
  //     name: 'sp3',
  //     unit_price: '3000',
  //     discount: '30',
  //     tax: '15',
  //     fixed_price: '2000',
  //   },
  // ])
  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'stt',
    },
    {
      title: 'Ảnh',
      dataIndex: 'image_info',
      key: 'image',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'item_name',
    },
    {
      title: 'Đơn vị',
      dataIndex: '',
    },
    {
      title: 'Số lượng',
      dataIndex: 'model_quantity_purchased',
    },
    {
      title: 'Đơn giá',
      dataIndex: 'model_original_price',
      key: 'model_original_price',
    },
    {
      title: 'Chiết khấu',
      dataIndex: 'discount',
      key: 'discount',
    },
    {
      title: 'Thuế',
      dataIndex: 'tax',
    },
    {
      title: 'Thành tiền',
      dataIndex: 'model_discounted_price',
      key: 'model_discounted_price',
    },
  ]
  const columnSetting = [
    {
      title: 'Ngày hoàn thành điều chỉnh',
      dataIndex: 'discount',
      key: 'discount',
    },
    {
      title: 'Lý do điều chỉnh ',
      dataIndex: 'tax',
    },
    {
      title: 'Số tiền thanh toán',
      dataIndex: 'model_discounted_price',
      key: 'model_discounted_price',
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
