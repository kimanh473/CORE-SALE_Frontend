<template>
  <base-layout>
    <template v-slot:sidebar>
      <SideBar />
    </template>
    <template v-slot:header>
      <Header :is-show-search="false">
        <template v-slot:name
          ><p class="pl-5 text-[16px]">Sửa thông số</p></template
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
                  >Tên thông số<span class="text-red-600">* </span> <span></span
                ></label>
                <div>
                  <input
                    type="text"
                    class="form-control-input"
                    placeholder="Nhập thông số"
                    v-model="detailSpecification.title"
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
                  >Mã thông số<span class="text-red-600">* </span> <span></span
                ></label>
                <div>
                  <input
                    type="text"
                    class="form-control-input"
                    placeholder="Nhập mã thông số"
                    v-model="detailSpecification.code"
                  />
                  <!-- <p v-if="messageError?.title" class="text-red-600">
                        {{ messageError?.title[0] }}
                      </p> -->
                </div>
              </div>
            </div>
            <div class="form-small">
              <label for="" class="form-group-label">Đơn vị</label>
              <div>
                <input
                  type="text"
                  class="form-control-input"
                  placeholder="Nhập đơn vị"
                  v-model="detailSpecification.unit"
                />
                <!-- <p v-if="messageError?.title" class="text-red-600">
                        {{ messageError?.title[0] }}
                      </p> -->
              </div>
            </div>
            <div class="form-small">
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
                    v-model="detailSpecification.desc"
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
          <button class="button-modal" @click="updateSpecification()">
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
  import BaseLayout from '@/layout/baseLayout.vue'
  import SideBar from '@/components/common/SideBar.vue'
  import Header from '@/components/common/Header.vue'
  import { ref } from 'vue'
  import { useToast } from 'vue-toastification'
  import { useListSpecification } from '@/store/modules/store-setting/specification'
  import { useRouter, useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  const dataSpecification = useListSpecification()
  const route = useRoute()
  dataSpecification.getDetailSpecificationAction(Number(route.params.id))
  const { detailSpecification } = storeToRefs(dataSpecification)

  const isLoading = ref<boolean>(false)
  const toast = useToast()
  const router = useRouter()
  const EndTimeLoading = () => {
    isLoading.value = false
  }

  const updateSpecification = () => {
    const data = {
      title: detailSpecification.value.title,
      code: detailSpecification.value.code,
      unit: detailSpecification.value.unit,
      desc: detailSpecification.value.desc,
    }
    dataSpecification.updateSpecificationAction(
      Number(route.params.id),
      data,
      toast,
      router,
      EndTimeLoading
    )
  }
</script>

<style></style>
