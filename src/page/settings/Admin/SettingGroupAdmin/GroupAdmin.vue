<template>
  <base-layout>
    <template v-slot:sidebar>
      <!-- <div class="logo">
          <img src="../assets/images/btp.png" />
        </div> -->
      <SideBar />
    </template>
    <template v-slot:header>
      <Header :is-show-search="false" />
    </template>
    <template v-slot:content class="relative">
      <!-- <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>User</a-breadcrumb-item>
        <a-breadcrumb-item>Bill</a-breadcrumb-item>
      </a-breadcrumb> -->
      <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
        <div class="m-auto">
          <div class="container bg-slate-300 w-1/2 mx-auto rounded-lg mt-10">
            <div class="p-2">
              <h2 class="uppercase text-left font-semibold py-2 ml-4">
                hệ thống
              </h2>
              <hr />
              <div class="grid grid-cols-10">
                <div
                  class="flex flex-col items-center col-span-2 mt-5 cursor-pointer hover:text-red-500 hover:font-medium"
                  @click.prevent="handleToAdmin"
                >
                  <img class="w-10 h-10" :src="img_1" alt="" />
                  <p class="text-sm mt-1">Hệ thống</p>
                </div>
                <div
                  class="flex flex-col items-center col-span-2 mt-5 cursor-pointer hover:text-red-500 hover:font-medium"
                  @click.prevent="router.push('/error')"
                >
                  <img class="w-10 h-10" :src="img_11" alt="" />
                  <p class="text-sm mt-1">Tự động</p>
                </div>
                <div
                  class="flex flex-col items-center col-span-2 mt-5 cursor-pointer hover:text-red-500 hover:font-medium"
                  @click.prevent="router.push('/setting-mail')"
                >
                  <img class="w-10 h-10" :src="img_1" alt="" />
                  <p class="text-sm mt-1">Email/SMS</p>
                </div>
                <div
                  class="flex flex-col items-center col-span-2 mt-5 cursor-pointer hover:text-red-500 hover:font-medium"
                  @click.prevent="router.push('/error')"
                >
                  <img class="w-10 h-10" :src="img_1" alt="" />
                  <p class="text-sm mt-1">Biểu mẫu</p>
                </div>
              </div>
            </div>
          </div>
          <div class="container bg-slate-300 w-1/2 mx-auto rounded-lg mt-8">
            <div class="p-2">
              <h2 class="uppercase text-left font-semibold py-2 ml-4">
                workplace
              </h2>
              <hr />
              <div class="grid grid-cols-10">
                <div
                  class="flex flex-col items-center col-span-2 mt-5 cursor-pointer hover:text-red-500 hover:font-medium"
                >
                  <img class="w-10 h-10" :src="img_1" alt="" />
                  <p class="text-sm mt-1">Social</p>
                </div>
                <div
                  class="flex flex-col items-center col-span-2 mt-5 cursor-pointer hover:text-red-500 hover:font-medium"
                  @click.prevent="router.push('/error')"
                >
                  <img class="w-10 h-10" :src="img_2" alt="" />
                  <p class="text-sm mt-1">Công việc</p>
                </div>
                <div
                  class="flex flex-col items-center col-span-2 mt-5 cursor-pointer hover:text-red-500 hover:font-medium"
                  @click.prevent="router.push('/error')"
                >
                  <img class="w-10 h-10" :src="img_9" alt="" />
                  <p class="text-sm mt-1">Văn bản</p>
                </div>
                <div
                  class="flex flex-col items-center col-span-2 mt-5 cursor-pointer hover:text-red-500 hover:font-medium"
                  @click.prevent="router.push('/error')"
                >
                  <img class="w-10 h-10" :src="img_10" alt="" />
                  <p class="text-sm mt-1">Lịch biểu</p>
                </div>
              </div>
            </div>
          </div>
          <div class="container bg-slate-300 w-1/2 mx-auto rounded-lg mt-8">
            <div class="p-2">
              <h2 class="uppercase text-left font-semibold py-2 ml-4">hrm</h2>
              <hr />
              <div class="grid grid-cols-10">
                <div
                  class="flex flex-col items-center col-span-2 mt-5 cursor-pointer hover:text-red-500 hover:font-medium"
                  @click.prevent="router.push('/approval-general-setting')"
                >
                  <img class="w-10 h-10" :src="img_9" alt="" />
                  <p class="text-sm mt-1">Đơn từ</p>
                </div>
                <div
                  class="flex flex-col items-center col-span-2 mt-5 cursor-pointer hover:text-red-500 hover:font-medium"
                  @click="router.push('/asset-settings-category-currency')"
                >
                  <img class="w-10 h-10" :src="img_12" alt="" />
                  <p class="text-sm mt-1">Tài sản</p>
                </div>
                <div
                  class="flex flex-col items-center col-span-2 mt-5 cursor-pointer hover:text-red-500 hover:font-medium"
                  @click="router.push('/setting/recruitment-settings-general')"
                >
                  <img class="w-10 h-10" :src="img_6" alt="" />
                  <p class="text-sm mt-1">Tuyển dụng</p>
                </div>
                <div
                  class="flex flex-col items-center col-span-2 mt-5 cursor-pointer hover:text-red-500 hover:font-medium"
                >
                  <router-link to="./personnel-profile-settings-general"
                    ><img class="w-10 h-10" :src="img_7" alt="" />
                    <p class="text-sm mt-1">Nhân sự</p></router-link
                  >
                </div>
                <div
                  class="flex flex-col items-center col-span-2 mt-5 cursor-pointer hover:text-red-500 hover:font-medium"
                  @click.prevent="router.push('/timekeep-setting-shift')"
                >
                  <img class="w-10 h-10" :src="img_5" alt="" />
                  <p class="text-sm mt-1">Chấm công</p>
                </div>
                <div
                  class="flex flex-col items-center col-span-2 mt-5 cursor-pointer hover:text-red-500 hover:font-medium"
                  @click.prevent="router.push('/settings/wage-settings-type')"
                >
                  <img class="w-10 h-10" :src="img_3" alt="" />
                  <p class="text-sm mt-1">Bảng lương</p>
                </div>
                <div
                  class="flex flex-col items-center col-span-2 mt-5 cursor-pointer hover:text-red-500 hover:font-medium"
                  @click.prevent="router.push('/error')"
                  v-if="false"
                >
                  <img class="w-10 h-10" :src="img_8" alt="" />
                  <p class="text-sm mt-1">KPI</p>
                </div>
                <div
                  class="flex flex-col items-center col-span-2 mt-5 cursor-pointer hover:text-red-500 hover:font-medium"
                  @click.prevent="router.push('/error')"
                  v-if="false"
                >
                  <img class="w-10 h-10" :src="img_4" alt="" />
                  <p class="text-sm mt-1">Đào tạo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:footer>Footer</template>
  </base-layout>
</template>

<script setup lang="ts">
  import BaseLayout from '../../../../layout/baseLayout.vue'
  import SideBar from '../../../../components/common/SideBar.vue'
  import Header from '../../../../components/common/Header.vue'
  import img_1 from '../../../../assets/module-icons/document.svg'
  import img_2 from '../../../../assets/module-icons/work.svg'
  import img_3 from '../../../../assets/module-icons/wage.svg'
  import img_4 from '../../../../assets/module-icons/training.svg'
  import img_5 from '../../../../assets/module-icons/timekeep.svg'
  import img_6 from '../../../../assets/module-icons/recruitment.svg'
  import img_7 from '../../../../assets/module-icons/personnel.svg'
  import img_8 from '../../../../assets/module-icons/evaluation.svg'
  import img_9 from '../../../../assets/module-icons/diploma.svg'
  import img_10 from '../../../../assets/module-icons/calendar.svg'
  import img_11 from '../../../../assets/module-icons/automation.svg'
  import img_12 from '../../../../assets/module-icons/asset.svg'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const handleToAdmin = () => {
    router.push('/setting-admin-view')
  }
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
</style>
