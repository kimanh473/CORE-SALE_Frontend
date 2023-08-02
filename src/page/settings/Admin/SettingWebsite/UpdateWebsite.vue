<template>
  <base-layout>
    <template v-slot:sidebar>
      <!-- <div class="logo">
            <img src="../assets/images/btp.png" />
          </div> -->
      <SideBar />
    </template>
    <template v-slot:header>
      <Header :is-show-search="false">
        <template v-slot:name><p class="pl-5 text-[16px]">Sửa web</p></template>
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
                  >Tên web<span class="text-red-600">* </span> <span></span
                ></label>
                <div>
                  <input
                    type="text"
                    class="form-control-input"
                    placeholder="Nhập tên web"
                    v-model="detailWeb.web_name"
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
                  >URL<span class="text-red-600">* </span> <span></span
                ></label>
                <div>
                  <input
                    type="text"
                    class="form-control-input"
                    placeholder="Nhập url web"
                    v-model="detailWeb.url"
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
                  >Mã web<span class="text-red-600">* </span> <span></span
                ></label>
                <div>
                  <input
                    type="text"
                    class="form-control-input"
                    placeholder="Nhập mã web"
                    v-model="detailWeb.code"
                  />
                  <!-- <p v-if="messageError?.title" class="text-red-600">
                  {{ messageError?.title[0] }}
                </p> -->
                </div>
              </div>
            </div>
            <a-switch
              v-model:checked="detailWeb.status"
              checkedValue="1"
              uncheckedValue="0"
            />
            &nbsp; Kích hoạt
          </div>
        </div>
      </Transition>
    </template>
    <template v-slot:footer
      ><div class="bg-slate-300">
        <div class="p-4 text-left">
          <button class="button-modal" @click="createInventory()">
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
  import BaseLayout from '../../../../layout/baseLayout.vue'
  import SideBar from '../../../../components/common/SideBar.vue'
  import Header from '../../../../components/common/Header.vue'
  import { useWebCatalog } from '../../../../store/modules/web-catalog/webcatalog'
  import { ref, reactive } from 'vue'
  import { useToast } from 'vue-toastification'
  import { useRoute, useRouter } from 'vue-router'
  import { storeToRefs } from 'pinia'
  const isLoading = ref<boolean>(false)
  const toast = useToast()
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const route = useRoute()
  const router = useRouter()
  const dataWeb = useWebCatalog()
  dataWeb.getDetailWebAction(Number(route.params.id))
  const { detailWeb } = storeToRefs(dataWeb)
  const createInventory = () => {
    let data = {
      web_name: detailWeb.value.web_name,
      code: detailWeb.value.code,
      url: detailWeb.value.url,
      status: detailWeb.value.status == true ? '1' : '0',
    }
    dataWeb.updateWebAction(
      Number(route.params.id),
      data,
      toast,
      router,
      EndTimeLoading
    )
  }
</script>

<style></style>
