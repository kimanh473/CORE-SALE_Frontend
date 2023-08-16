<template>
  <base-layout>
    <template v-slot:sidebar>
      <SideBar />
    </template>
    <template v-slot:header>
      <Header :is-show-search="false">
        <template v-slot:name
          ><p class="pl-5 text-[16px]">Tạo mới loại thuế</p></template
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
                  >Tên loại thuế<span class="text-red-600">* </span>
                  <span></span
                ></label>
                <div>
                  <input
                    type="text"
                    class="form-control-input"
                    placeholder="Nhập tên loại thuế"
                    v-model="tax.title"
                  />
                  <!-- <p v-if="messageError?.title" class="text-red-600">
                        {{ messageError?.title[0] }}
                      </p> -->
                </div>
              </div>
            </div>
            <div class="form-small">
              <div>
                <label for="" class="form-group-label"
                  >Mã loại thuế<span class="text-red-600">* </span> <span></span
                ></label>
                <div>
                  <input
                    type="text"
                    class="form-control-input"
                    placeholder="Nhập mã loại thuế"
                    v-model="tax.code"
                  />
                  <!-- <p v-if="messageError?.title" class="text-red-600">
                        {{ messageError?.title[0] }}
                      </p> -->
                </div>
              </div>
            </div>
            <div class="form-small">
              <label for="" class="form-group-label"
                >Mức thuế suất<span class="text-red-600">* </span></label
              >
              <div>
                <input
                  type="number"
                  class="form-control-input"
                  placeholder="Nhập số"
                  v-model="tax.tax_rate"
                />
                <!-- <p v-if="messageError?.title" class="text-red-600">
                        {{ messageError?.title[0] }}
                      </p> -->
              </div>
            </div>
            <a-switch
              v-model:checked="tax.status"
              :checkedValue="1"
              :unCheckedValue="0"
            />
            &nbsp; Kích hoạt
            <div class="form-small">
              <div>
                <label for="" class="form-group-label"
                  >Mô tả<span class="text-red-600"> </span> <span></span
                ></label>
                <div>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    class="form-control-input"
                    v-model="tax.desc"
                  ></textarea>
                  <!-- <p v-if="messageError?.title" class="text-red-600">
                      {{ messageError?.title[0] }}
                    </p> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </template>
    <template v-slot:footer
      ><div class="bg-slate-300">
        <div class="p-4 text-left">
          <button class="button-modal" @click="createTax()">Cập nhật</button>
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
  import { ref, reactive } from 'vue'
  import { useToast } from 'vue-toastification'
  import { useListTax } from '../../../store/modules/store-setting/tax'
  import { useRouter } from 'vue-router'
  const dataTax = useListTax()
  dataTax.getListTaxAction()
  const isLoading = ref<boolean>(false)
  const status = ref<boolean>(false)
  const toast = useToast()
  const router = useRouter()
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const tax = reactive({
    title: '',
    code: '',
    tax_rate: '',
    status: '',
    desc: '',
  })
  const createTax = () => {
    let data = {
      title: tax.title,
      code: tax.code,
      tax_rate: tax.tax_rate.toString(),
      status: tax.status,
      desc: tax.desc,
    }
    dataTax.createTaxAction(data, toast, router, EndTimeLoading)
  }
</script>

<style></style>
