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
              <div class="border border-gray-800 w-[500px] p-4">
                <h1>Quản lý lựa chọn</h1>
                <div class="flex">
                  <p class="pr-[100px]">Ưu tiên</p>
                  <p>Tiêu đề</p>
                </div>
                <div
                  v-for="(item, index) in dataOption"
                  :key="index"
                  class="flex"
                >
                  <div class="pr-[100px]">
                    <!-- <a-checkbox
                          v-model:checked="item.status"
                          class="!pl-[16px]"
                        ></a-checkbox> -->
                    <input
                      type="checkbox"
                      v-model="item.status"
                      class="ml-[14px]"
                      true-value="1"
                      false-value="0"
                    />
                  </div>
                  <div class="flex items-end">
                    <a-input
                      v-model:value="item.title"
                      placeholder="Nhập tiêu đề"
                    ></a-input>
                    <i
                      @click="removeOptions(index)"
                      class="fal fa-times icon-close"
                    ></i>
                  </div>
                </div>
                <div @click="addOptions">
                  <i class="fal fa-plus-circle icon-plus fa-lg"></i>
                </div>
              </div>
            </div>
            <a-switch
              v-model:checked="invent.status"
              checkedValue="1"
              unCheckedValue="0"
            />
            &nbsp; Kích hoạt
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
  const dataOption = reactive([])

  const addOptions = () => {
    const data = {
      title: '',
      status: '0',
    }
    dataOption.push(data)
  }
  const removeOptions = (index: number) => {
    dataOption.splice(index, 1)
  }

  const invent = reactive({
    title: '',
    code: '',
    desc: '',
    status: '0',
  })
  const createGroupInventory = () => {
    let data = {
      title: invent.title,
      code: invent.code,
      desc: invent.desc,
      status: invent.status,
      options: dataOption,
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
