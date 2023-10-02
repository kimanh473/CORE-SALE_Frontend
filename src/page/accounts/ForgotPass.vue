<template>
  <section class="flex flex-col md:flex-row h-screen items-center">
    <div class="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <img :src="img" alt="" class="w-full h-full object-cover" />
    </div>
    <div
      class="bg-white w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center"
    >
      <div class="w-full h-100">
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-5 uppercase">
          đặt lại mật khẩu
        </h1>
        <form class="mt-4">
          <div>
            <label class="block text-gray-700 text-left">Email cá nhân:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Nhập email cá nhân"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              v-model="personEmail"
              required
            />
          </div>
          <div class="mt-2">
            <label class="block text-gray-700 text-left">Mật khẩu mới:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Nhập mật khẩu"
              minlength="6"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              v-model="resetPassword.password"
              required
            />
          </div>
          <div class="mt-2">
            <label class="block text-gray-700 text-left"
              >Nhập lại mật khẩu mới:</label
            >
            <input
              type="password"
              name="returnPassword"
              id="returnPassword"
              placeholder="Nhập lại mật khẩu"
              minlength="6"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              v-model="resetPassword.password_confirmation"
              required
            />
          </div>
          <div class="mt-2">
            <label class="block text-gray-700 text-left"
              >Nhập mã xác thực (được gửi về email cá nhân):</label
            >
            <input
              type="text"
              name="capcha"
              id="capcha"
              placeholder="Nhập mã xác thực"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              v-model="resetPassword.code"
              required
            />
          </div>
          <div class="text-right mt-2">
            <a
              href="/login"
              class="text-sm font-medium text-gray-700 hover:text-red-500 hover:underline"
              >Quay lại trang đăng nhập</a
            >
          </div>
          <button
            @click.prevent="onSubmit"
            class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-4"
          >
            Xác nhận
          </button>
        </form>
        <p class="text-sm text-gray-500 mt-12">
          &copy; 2022 BTP HOLDINGS - All Rights Reserved.
        </p>
      </div>
    </div>
  </section>
  <!-- <loading-overlay :isLoading="isLoading"></loading-overlay> -->
</template>

<script setup lang="ts">
  import { ref, reactive, computed } from 'vue'
  //   import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  import { useToast } from 'vue-toastification'
  import bg_BTP from '../../assets/images/bg-BTP.jpg'
  import { storeToRefs } from 'pinia'
  import { usePasswordSetting } from '../../store/modules/accounts/password'
  //   const store = useStore()
  const router = useRouter()
  const toast = useToast()
  const img = ref(bg_BTP)
  // const format = ref(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  // )
  const isLoading = ref<boolean>(false)
  const passSetting = usePasswordSetting()
  const { personEmail } = storeToRefs(passSetting)
  const resetPassword = reactive({
    password: '',
    password_confirmation: '',
    code: '',
  })
  const onSubmit = () => {
    const data = {
      email: personEmail.value,
      password: resetPassword.password,
      password_confirmation: resetPassword.password_confirmation,
      code: resetPassword.code,
    }
    passSetting.changePassByEmailConfirmAction(data, toast, router)
    // if (format.value.test(data.password)) {
    //   if (data.password == data.password_confirmation) {
    //     store.dispatch('ForgotPassword/ChangePasswordAction', {
    //       data: data,
    //       router,
    //       toast,
    //     })
    //   } else {
    //     toast.error('Nhập lại mật khẩu không đúng')
    //   }
    // } else {
    //   toast.error(
    //     'Mật khẩu tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt'
    //   )
    // }
  }
</script>
