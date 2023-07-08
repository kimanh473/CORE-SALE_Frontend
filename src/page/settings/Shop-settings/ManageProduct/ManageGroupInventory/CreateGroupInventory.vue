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
          ><p class="pl-5 text-[16px]">Tạo nhóm kho</p></template
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
                  >Tên nhóm kho<span class="text-red-600">* </span> <span></span
                ></label>
                <div>
                  <input
                    type="text"
                    class="form-control-input"
                    placeholder="Nhập tên kho"
                    v-model="invent.title"
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
                  >Mã nhóm kho<span class="text-red-600">* </span> <span></span
                ></label>
                <div>
                  <input
                    type="text"
                    class="form-control-input"
                    placeholder="Nhập mã kho"
                    v-model="invent.code"
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
                  v-model="invent.desc"
                ></textarea>
              </div>
            </div>
            <!-- <a-switch v-model:checked="web.status" /> &nbsp; Kích hoạt -->
          </div>
        </div>
      </Transition>
    </template>
    <template v-slot:footer
      ><div class="bg-slate-300">
        <div class="p-4 text-left">
          <button class="button-modal" @click="createGroupInventory()">
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
  import BaseLayout from '../../../../../layout/baseLayout.vue'
  import SideBar from '../../../../../components/common/SideBar.vue'
  import Header from '../../../../../components/common/Header.vue'
  import { ref, reactive } from 'vue'
  import { useToast } from 'vue-toastification'
  import { useGroupInventory } from '../../../../../store/modules/inventory/group-inventory'
  import { useRouter } from 'vue-router'
  const dataGroupInventory = useGroupInventory()
  const isLoading = ref<boolean>(false)
  const toast = useToast()
  const router = useRouter()
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const invent = reactive({
    title: '',
    code: '',
    desc: '',
  })
  const createGroupInventory = () => {
    let data = {
      title: invent.title,
      code: invent.code,
      desc: invent.desc,
    }
    dataGroupInventory.createGroupInventoryAction(
      data,
      toast,
      router,
      EndTimeLoading
    )
  }
</script>

<style></style>
