<template>
  <div class="container-fluid">
    <div class="row no-gutter">
      <div class="col-md-6 d-none d-md-flex bg-image"></div>
      <div class="col-md-6 bg-light">
        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 col-xl-7 mx-auto">
                <h3 class="display-6 text-center">PHẦN MỀM TẬP ĐOÀN BÁCH TƯỜNG PHÁT</h3>
                <h3 class="text-muted mb-4 text-center">ĐĂNG NHẬP</h3>
                <form @submit.prevent="LoginData">
                  <div class="mb-3">
                    <input type="email" name="email" id="email" v-model="student.email" placeholder="Email address" required="" autofocus=""
                           class="form-control rounded-pill border-0 shadow-sm px-4"/>
                  </div>
                  <div class="mb-3">
                    <input type="password" name="password" id="password" v-model="student.password" placeholder="Password" required=""
                           class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                  </div>
                  <div class="form-check">
                    <input id="customCheck1" type="checkbox" checked class="form-check-input"/>
                    <label for="customCheck1" class="form-check-label">Remember password</label>
                  </div>
                  <div class="d-grid gap-2 mt-2">
                    <button type="submit" @click="LoginData()" class="btn btn-primary bg-cyan-500 btn-block text-uppercase mb-3 rounded-pill shadow-sm">
                      Sign in
                    </button>
                  </div>

                  <div class="text-center d-flex justify-content-between mt-4"><p> © 2023 BTP HOLDINGS - All Rights Reserved. </p></div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>

</template>

<script>

import {createApp} from 'vue';
import setAuthHeader from "../ultis/setAuthHeader";

import axios from 'axios';

import router from "@/router";

// Vue.use(axios)
export default {
  name: 'Login',
  data() {
    return {
      result: {},
      student: {
        email: '',
        password: ''
      }
    }
  },
  created() {

  },
  mounted() {
    console.log("mounted() called.......");
  },
  methods: {
    LoginData() {
      axios.post("http://127.0.0.1:8000/api/v1/auth/login", this.student)
          .then(
              ({data}) => {
                try {
                  this.result = data;
                  localStorage.setItem('jwtToken', data.apiToken);

                  router.push('/admin/home');

                  setAuthHeader(data.apiToken);

                } catch (err) {
                  alert("Error, please try again");
                  router.push('/login');
                }
              }
          )
    }
  }
}
</script>

<style scoped>

</style>
