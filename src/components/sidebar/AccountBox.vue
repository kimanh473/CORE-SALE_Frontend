<template>
  <div class="options-body">
    <div class="flex flex-col items-center p-4 mt-2">
      <div class="py-2">
        <img
          src="@/assets/images/t.png"
          style="
            height: 50px;
            width: 50px;
            border-radius: 50%;
            border-color: var(--color-primary);
          "
          class="border"
        />
      </div>
      <div class="uppercase font-medium" style="color: var(--color-primary)">
        {{ detailUser.fullname }}
      </div>
      <div class="text-xs">
        {{ detailUser?.position_title }} - {{ detailUser?.department_title }}
      </div>
    </div>
    <hr />
    <!--<a
      class="options-item hover:bg-slate-200 hover:rounded-lg flex items-center"
      href=""
      @click.prevent="handleToSetting"
      ><span class="mr-2"><i class="fal fa-cog text-base"></i></span>
      <div class="title">Cài đặt hệ thống</div> </a
    ><a
      class="options-item hover:bg-slate-200 hover:rounded-lg flex items-center no-popstate"
      href=""
      @click.prevent="handleToTutorial"
      ><span class="mr-2"><i class="fal fa-book text-base"></i></span>
      <div class="title">Hướng dẫn sử dụng</div> </a
    >
  --><a
      class="options-item hover:bg-slate-200 hover:rounded-lg flex items-center pop-done pop-control pop-control-mousemove pop-connect"
      rel="theme"
      ><span class="mr-2"><i class="fal fa-brush text-base"></i></span>
      <div class="title">Đổi màu giao diện</div>
      <span class="badge"
        ><div class="theme-selected cyan" style="margin-left: 20px"></div
      ></span>
      <div class="input-color-container">
        <input
          id="input-color"
          class="input-color cursor-pointer"
          type="color"
          @change="changeColor()"
        />
      </div>
      <label class="input-color-label" for="input-color"> </label></a
    ><a
      class="options-item hover:bg-slate-200 hover:rounded-lg flex items-center pop-done pop-control pop-control-mousemove pop-connect"
      rel="language"
      ><span class="mr-2"><i class="fal fa-language text-base"></i></span>
      <div class="title">Ngôn ngữ</div>
      <span class="badge">VN</span></a
    >
    <hr />
    <a
      class="options-item hover:bg-slate-200 hover:rounded-lg flex items-center"
      href=""
      @click.prevent="handleOpenDetail"
      ><span class="mr-2"><i class="fal fa-key text-base"></i></span>
      <div class="title">Đổi mật khẩu</div> </a
    ><a
      href=""
      class="options-item hover:bg-slate-200 hover:rounded-lg flex items-center no-popstate"
      @click.prevent="logout"
    >
      <span class="mr-2"><i class="fal fa-sign-out-alt text-base"></i></span>
      <div class="title">Thoát đăng nhập</div>
    </a>
  </div>
  <teleport to="#app">
    <ModalView
      class="hidden"
      :isOpen="isOpenDetail"
      :handleCloseDetail="handleCloseDetail"
    >
    </ModalView>
  </teleport>
  <div class="modal-custom">
    <a-modal
      :visible="isOpenDetail"
      :footer="null"
      @cancel="handleCloseDetail"
      class="rounded-tl-lg rounded-tr-lg"
    >
      <div>
        <h1 class="header-modal">Đổi mật khẩu đăng nhập</h1>
        <div class="text-left p-2 w-[520px]">
          <div class="form-small">
            <label for="" class="form-group-label"
              >Mật khẩu hiện tại <span class="text-red-600">*</span></label
            >
            <div>
              <input
                type="password"
                id="current_password"
                name="current_password"
                class="form-control-input"
                placeholder="Mật khẩu bạn đang sử dụng"
                v-model="changePassword.current_password"
              />
            </div>
          </div>
          <div class="form-small">
            <label for="" class="form-group-label"
              >Mật khẩu mới <span class="text-red-600">*</span></label
            >
            <div>
              <input
                type="password"
                id="password"
                name="password"
                class="form-control-input"
                placeholder="Ít nhất 4 ký tự"
                v-model="changePassword.password"
              />
            </div>
          </div>
          <div class="form-small">
            <label for="" class="form-group-label"
              >Xác nhận mật khẩu mới <span class="text-red-600">*</span></label
            >
            <div>
              <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                class="form-control-input"
                placeholder="Gõ lại mật khẩu mới"
                v-model="changePassword.password_confirmation"
              />
            </div>
          </div>
        </div>
        <div class="bg-button-modal">
          <button class="button-modal" @click="changePasswordSocial()">
            Cập nhật
          </button>
          <button class="button-close-modal" @click="handleCloseDetail">
            Hủy bỏ
          </button>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  // import { useStore } from 'vuex'
  import { useToast } from 'vue-toastification'
  import { useUserSetting } from '@/store/modules/users/users'
  import { storeToRefs } from 'pinia'
  import { userLogin } from '@/store/modules/accounts/userLogin'
  import { usePasswordSetting } from '@/store/modules/accounts/password'
  // const store = useStore()
  const userlog = userLogin()
  const router = useRouter()
  const toast = useToast()
  const isOpenDetail = ref(false)
  const passSetting = usePasswordSetting()
  const profile = useUserSetting()
  const { detailUser } = storeToRefs(profile)
  const user_id = localStorage.getItem('ID')
  profile.GetUserProfileAction(Number(user_id))
  // console.log(detailUser)

  const changePassword = reactive({
    current_password: '',
    password: '',
    password_confirmation: '',
  })
  const logout = () => {
    // store.dispatch('userLogin/UserLogoutAction')
    userlog.UserLogoutAction()
    router.push('/login')
    // localStorage.removeItem('TOKEN')
    // localStorage.removeItem('authenticated')
    // localStorage.removeItem('role')
  }
  const handleOpenDetail = () => {
    isOpenDetail.value = true
  }
  const handleCloseDetail = () => {
    isOpenDetail.value = false
  }
  // const handleToSetting = () => {
  //   router.push({
  //     path: '/setting-menu',
  //   })
  // }
  // const handleToTutorial = () => {
  //   // router.push('/user-manual/timekeep/tab=1')
  // }
  const changeColor = () => {
    // let color = e.target.value
    // const data = {
    //   style: color,
    // }
    // profile.ChangeColorAction({ data, toast })
    // var rootStyle = document.documentElement.style
    // rootStyle.setProperty('--color-primary', color)
  }
  const changePasswordSocial = () => {
    const data = {
      current_password: changePassword.current_password,
      password: changePassword.password,
      password_confirmation: changePassword.password_confirmation,
    }

    if (data.password == data.password_confirmation) {
      passSetting.changePassAction(data, toast, router, handleCloseDetail)
    } else {
      toast.error('Xác nhận mật khẩu không đúng')
    }
  }
</script>

<style>
  .options-body {
    flex-grow: 1;
    overflow: auto;
    padding: 10px 0;
    left: 10px;
  }
  .options-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0 10px 3px 10px;
    padding: 10px;
    color: black;
    font-size: 14px;
    /* transition: background 0.2s;*/
  }
  .options-item i {
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    margin-right: 5px;
    padding-right: 0 !important;
  }
  .options-item .title {
    flex-grow: 1;
    margin-left: 5px;
    margin-right: 5px;
  }
  .input-color-container {
    position: relative;
    overflow: hidden;
    width: 30px;
    height: 30px;
    border: solid 2px #ddd;
    border-radius: 40px;
  }
  .input-color {
    position: absolute;
    right: -8px;
    top: -8px;
    width: 56px;
    height: 56px;
    border: none;
  }
  .input-color-label {
    cursor: pointer;
    text-decoration: underline;
    color: #3498db;
  }
</style>
