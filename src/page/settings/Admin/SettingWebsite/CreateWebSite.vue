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
        <template v-slot:name
          ><p class="pl-5 text-[16px]">Tạo mới web</p></template
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
                  >Tên web<span class="text-red-600">* </span> <span></span
                ></label>
                <div>
                  <input
                    type="text"
                    class="form-control-input"
                    placeholder="Nhập tên web"
                    v-model="web.web_name"
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
                    v-model="web.url"
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
                    v-model="web.code"
                  />
                  <!-- <p v-if="messageError?.title" class="text-red-600">
                {{ messageError?.title[0] }}
              </p> -->
                </div>
              </div>
            </div>
            <a-switch v-model:checked="web.status" /> &nbsp; Kích hoạt
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
  import { useRouter } from 'vue-router'
  const isLoading = ref<boolean>(false)
  const toast = useToast()
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const router = useRouter()
  const dataWeb = useWebCatalog()
  const web = reactive({
    web_name: '',
    code: '',
    url: '',
    status: false,
  })
  const createInventory = () => {
    let data = {
      web_name: web.web_name,
      code: web.code,
      url: web.url,
      status: web.status,
    }
    dataWeb.createWebAction(data, toast, router, EndTimeLoading)
  }
</script>

<style></style>
