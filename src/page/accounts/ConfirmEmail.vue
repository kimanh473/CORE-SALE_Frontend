<template>
  <section class="flex flex-col md:flex-row h-screen items-center">
    <div class="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <img :src="img" alt="" class="w-full h-full object-cover" />
    </div>
    <div
      class="bg-white w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center"
      v-if="isLoading == false"
    >
      <div class="w-full h-100">
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-10 uppercase">
          Xác thực email
        </h1>
        <form class="mt-6" @submit.prevent="confirm">
          <div>
            <label class="block text-gray-700 text-left">Email cá nhân</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Nhập email cá nhân"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autocomplete
              autofocus
              required
              v-model="personEmail"
            />
          </div>
          <div class="flex justify-between mt-2">
            <div class="flex items-center"></div>
            <a
              href="/login"
              class="text-sm font-medium text-gray-700 hover:text-red-500 hover:underline cursor-pointer"
              >Đăng nhập</a
            >
          </div>
          <button
            type="submit"
            class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
          >
            Xác thực
          </button>
        </form>
        <p class="text-sm text-gray-500 mt-12">
          &copy; 2022 BTP HOLDINGS - All Rights Reserved.
        </p>
      </div>
    </div>
  </section>
  <loading-overlay
    :isLoading="isLoading"
    :handleEndLoading="EndTimeLoading"
  ></loading-overlay>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  import bg_BTP from '../../assets/images/bg-BTP.jpg'
  import { usePasswordSetting } from '../../store/modules/accounts/password'
  import { useToast } from 'vue-toastification'
  const router = useRouter()
  const toast = useToast()
  const isLoading = ref(true)
  const img = ref(bg_BTP)
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const passSetting = usePasswordSetting()
  setTimeout(() => {
    isLoading.value = false
  }, 500)

  const personEmail = ref('')

  const confirm = () => {
    isLoading.value = true
    let data = {
      email: personEmail.value,
    }
    passSetting.sendEmailForgotPassAction(data, toast, router)
  }
</script>
