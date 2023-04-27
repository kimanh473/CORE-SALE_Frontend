<template>

  <div class="container-fluid bg-gray-100 h-screen w-screen">
    <div class="grid grid-cols-3 gap-1">
      <div class="bg-white h-full w-full">
        <div>

        </div>
      </div>
      <div class="col-span-2 bg-white h-[100vh] w-full">
        <div class="m-20" style="text-align: -webkit-center">
          <div class="">
            <img src="https://vuely.theironnetwork.org/static/img/session.png ">
            <h2 class="text-[1.5rem] mb-[16px] font-bold mt-3">Login To Admin</h2>
            <p class="font-medium">Enter username and password to access control panel of Vuely.</p>
          </div>
          <div>
            <form @submit.prevent="LoginData">
              <div class="relative z-0 w-[50%] mb-10 mt-10 group">
                <input type="email" name="email" id="email" v-model="student.email"
                       class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder="" required/>
                <label for="email"
                       class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                  address</label>
              </div>
              <div class="relative z-0 w-[50%] mb-10 group">
                <input type="password" name="password" id="password" v-model="student.password"
                       class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder=" " required/>
                <label for="password"
                       class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
              </div>
              <div class="">
                <div class="v-input-control">
                  <div class="v-input-slot">

                  </div>
                  <div class="v-massage">
                    <p>remember me</p>
                  </div>
                </div>
              </div>
              <div>
                <button type="submit"
                        class="text-white bg-cyan-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-[50%] mt-[10px] px-5 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  LOGIN NOW
                </button>
                <br>
                <button type="submit" @click="LoginData()"
                        class="text-white bg-yellow-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-[50%] mt-[10px] px-5 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  CREATE ACCOUNT
                </button>

              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>

import { createApp } from 'vue';
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
    // this.LoginData();
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
