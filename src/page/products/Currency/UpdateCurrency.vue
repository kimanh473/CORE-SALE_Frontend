<template>
  <base-layout>
    <template v-slot:sidebar>
      <SideBar />
    </template>
    <template v-slot:header>
      <Header :is-show-search="false">
        <template v-slot:name
          ><p class="pl-5 text-[16px]">Tạo mới tiền tệ</p></template
        >
      </Header>
    </template>
    <template v-slot:content class="relative">
      <Transition :duration="550" name="nested">
        <div
          class="text-left px-4 py-2 w-full h-full format-scroll form-plus-over"
        >
          <div class="w-full">
            <div class="form-small">
              <div>
                <label for="" class="form-group-label"
                  >Đơn vị tiền tệ<span class="text-red-600">* </span>
                  <span></span
                ></label>
                <div>
                  <a-select
                    show-search
                    class="form-control-input"
                    placeholder="Chọn đơn vị"
                    :options="listCurrencyInternational"
                    v-model:value="detailCurrency.title"
                    @click.once="getDataCurrency"
                    @change="handleChange"
                  >
                    <!-- <a-select-option
                            v-for="(item, index) in listCategory"
                            :key="index"
                            :value="item.id"
                            >{{ item.title }}</a-select-option
                          > -->
                  </a-select>
                  <!-- <p v-if="messageError?.title" class="text-red-600">
                            {{ messageError?.title[0] }}
                          </p> -->
                </div>
              </div>
            </div>
            <div class="form-small">
              <div>
                <label for="" class="form-group-label"
                  >Ký hiệu<span class="text-red-600">* </span> <span></span
                ></label>
                <div>
                  <input
                    type="text"
                    class="form-control-input"
                    v-model="detailCurrency.code"
                    disabled
                  />
                  <!-- <p v-if="messageError?.title" class="text-red-600">
                            {{ messageError?.title[0] }}
                          </p> -->
                </div>
              </div>
            </div>
            <!-- <div class="form-small">
                <label for="" class="form-group-label">Mức thuế suất</label>
                <div>
                  <input
                    type="number"
                    class="form-control-input"
                    placeholder="Nhập số"
                    v-model="currency.rate"
                  />
                  <p v-if="messageError?.title" class="text-red-600">
                            {{ messageError?.title[0] }}
                          </p>
                </div>
              </div> -->
            <a-switch
              v-model:checked="detailCurrency.status"
              checkedValue="1"
              unCheckedValue="0"
            />
            &nbsp; Kích hoạt &nbsp;
            <a-switch
              v-model:checked="detailCurrency.is_default"
              checkedValue="1"
              unCheckedValue="0"
            />
            &nbsp; Đặt làm mặc định

            <!-- <div class="form-small pt-2">
                <div>
                  <label for="" class="form-group-label"
                    >Mô tả<span class="text-red-600">* </span> <span></span
                  ></label>
                  <div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      class="form-control-input"
                      v-model="currency.desc"
                    ></textarea>
                    <p v-if="messageError?.title" class="text-red-600">
                          {{ messageError?.title[0] }}
                        </p>
                  </div>
                </div>
              </div> -->
          </div>
        </div>
      </Transition>
    </template>
    <template v-slot:footer
      ><div class="bg-slate-300">
        <div class="p-4 text-left">
          <button class="button-modal" @click="createCurrency()">
            Cập nhật
          </button>
          <button class="button-close-modal" @click="router.go(-1)">
            Hủy bỏ
          </button>
        </div>
      </div></template
    >
  </base-layout>
  <loading-overlay :isLoading="isLoading"></loading-overlay>
</template>

<script setup lang="ts">
  import BaseLayout from '../../../layout/baseLayout.vue'
  import SideBar from '../../../components/common/SideBar.vue'
  import Header from '../../../components/common/Header.vue'
  import { ref, reactive, computed } from 'vue'
  import { useToast } from 'vue-toastification'
  import { useListCurrency } from '../../../store/modules/store-setting/currency'
  import { useRouter, useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  const dataCurrency = useListCurrency()
  dataCurrency.getListCurrencyAction()
  const getDataCurrency = () => {
    dataCurrency.getListCurrencyInternationalAction()
  }
  const { listCurrencyInternational, detailCurrency } =
    storeToRefs(dataCurrency)
  const isLoading = ref<boolean>(false)
  const status = ref<boolean>(false)
  const toast = useToast()
  const router = useRouter()
  const route = useRoute()
  dataCurrency.getDetailCurrencyAction(Number(route.params.id))

  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const handleChange = (value: string, option: any) => {
    console.log(option)
    detailCurrency.value.code = option.value
    detailCurrency.value.title = option.value
  }
  const currency = reactive({
    title: '',
    code: '',
    status: 0,
    is_default: 0,
  })
  const createCurrency = () => {
    let data = {
      title: detailCurrency.value.title,
      code: detailCurrency.value.code,
      status: detailCurrency.value.status,
      is_default: detailCurrency.value.is_default,
    }
    dataCurrency.updateCurrencyAction(
      Number(route.params.id),
      data,
      toast,
      router,
      EndTimeLoading
    )
  }
</script>

<style></style>
