<template>
<!--<div>-->
<!--  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">-->
<!--    <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">-->
<!--      <div class="flex items-center justify-center">-->

<!--        <span class="text-2xl font-semibold text-gray-700">Cove Admin</span>-->
<!--      </div>-->

<!--      <form class="mt-5" @submit.prevent="LoginData">-->
<!--        <label class="block">-->
<!--          <span class="text-sm text-gray-700">Email</span>-->
<!--          <input type="email" v-model="student.email" class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500" />-->
<!--        </label>-->

<!--        <label class="block mt-3">-->
<!--          <span class="text-sm text-gray-700">Password</span>-->
<!--          <input type="password" v-model="student.password" class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"/>-->
<!--        </label>-->

<!--        <div class="flex items-center justify-between mt-4">-->
<!--          <div>-->
<!--            <label class="inline-flex items-center">-->
<!--              <input type="checkbox" class="text-indigo-600 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500" />-->
<!--              <span class="mx-2 text-sm text-gray-600">Remember me</span>-->
<!--            </label>-->
<!--          </div>-->

<!--          <div>-->
<!--            <a class="block text-sm text-indigo-700 fontme hover:underline" href="#">Forgot your password?</a>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="mt-6">-->
<!--          <button type="submit" @click="LoginData()" class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500">-->
<!--            Login-->
<!--          </button>-->
<!--        </div>-->
<!--      </form>-->
<!--    </div>-->
<!--  </div>-->
<!--</div>-->

  <div class="grid grid-cols-3 gap-4">
    <div class="...">

    </div>
    <div class="col-span-2 ...">

    </div>
  </div>

</template>

<script>
// import { createApp} from 'vue';
// import axios from 'axios';
// import router from "@/router";
//
// // Vue.use(axios)
// export default {
//   name: 'Login',
//   data () {
//     return {
//       result: {},
//       student:{
//         email: '',
//         password: ''
//       }
//     }
//   },
//   created() {
//   },
//   mounted() {
//     console.log("mounted() called.......");
//     // this.LoginData();
//   },
//   methods: {
//     LoginData()
//     {
//       axios.post("http://127.0.0.1:8000/api/auth/login", this.student)
//           .then(
//               ({data})=>{
//                 console.log(data);
//                 try {
//                   this.result = data;
//                   localStorage.setItem('jwtToken', data.access_token)
//                   console.log(this.result);
//                   router.push('/')
//                 } catch (err) {
//                   alert("Error, please try again");
//                   router.push('/login');
//                 }
//               }
//           )
//     }
//   }
// }
</script>

<style scoped>

</style>
