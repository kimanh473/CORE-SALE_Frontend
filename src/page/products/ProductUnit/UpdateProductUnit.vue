<template>
  <base-layout>
    <template v-slot:sidebar>
      <SideBar />
    </template>
    <template v-slot:header>
      <Header :is-show-search="false">
        <template v-slot:name
          ><p class="pl-5 text-[16px]">Sửa đơn vị tính</p></template
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
                  >Tên đơn vị<span class="text-red-600">* </span> <span></span
                ></label>
                <div>
                  <input
                    type="text"
                    class="form-control-input"
                    placeholder="Nhập tên đơn vị"
                    v-model="detailProductUnit.title"
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
                  >Mã đơn vị<span class="text-red-600">* </span> <span></span
                ></label>
                <div>
                  <input
                    type="text"
                    class="form-control-input"
                    placeholder="Nhập mã đơn vị"
                    v-model="detailProductUnit.code"
                  />
                  <!-- <p v-if="messageError?.title" class="text-red-600">
                    {{ messageError?.title[0] }}
                  </p> -->
                </div>
              </div>
            </div>
            <div class="form-small">
              <label for="" class="form-group-label">Mô tả</label>
              <div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  class="form-control-input"
                ></textarea>
              </div>
            </div>

            <a-switch
              v-model:checked="detailProductUnit.status"
              :checkedValue="'1'"
              :unCheckedValue="'0'"
            />
            &nbsp; Kích hoạt
          </div>
        </div>
      </Transition>
    </template>
    <template v-slot:footer
      ><div class="bg-slate-300">
        <div class="p-4 text-left">
          <button class="button-modal" @click="createProductUnit()">
            Cập nhật
          </button>
          <button class="button-close-modal" @click="this.$router.go(-1)">
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
  import { useProductUnit } from '../../../store/modules/store-setting/product-unit'
  import { useRouter, useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  const dataUnit = useProductUnit()
  const isLoading = ref<boolean>(false)
  const status = ref<boolean>(false)
  const toast = useToast()
  const router = useRouter()
  const route = useRoute()
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  dataUnit.getDetailProductUnitAction(Number(route.params.id))
  const { detailProductUnit } = storeToRefs(dataUnit)

  const unit = reactive({
    title: '',
    code: '',
    desc: '',
  })
  const createProductUnit = () => {
    isLoading.value = true
    let data = {
      title: detailProductUnit.value.title,
      code: detailProductUnit.value.code,
      status: detailProductUnit.value.status,
    }
    dataUnit.updateProductUnitAction(
      Number(route.params.id),
      data,
      toast,
      router,
      EndTimeLoading
    )
  }
</script>

<style></style>
