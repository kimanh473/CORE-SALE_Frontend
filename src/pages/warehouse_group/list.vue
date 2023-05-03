<template>

  <div class="app-card">
    <div class="app-full-content p-[24px]">
      <ul class="v-breadcrumbs h-[77px] w-full items-center theme--light flex justify-between bg-slate-100">
        <h2 class="text-[1.5rem] font-medium ml-10">Danh sách nhóm kho</h2>
      </ul>
      <div class="grid grid-cols-6 gap-4">

        <div class="h-full mt-[20px] col-start-1 col-end-7 bg-gray-100 ...">
          <div class=" ">
            <div class="flex text-left m-3 h-full font-medium text-[1rem]">
              <div class=" hover:bg-cyan-400 mr-5 mt-2.5">
                <router-link :to="{name:'admin-warehouse-group-create'}"
                             class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Thêm nhóm kho
                </router-link>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
                <select
                    class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">All Type</option>
                  <option value="for-rent">For Rent</option>
                  <option value="for-sale">For Sale</option>
                </select>
                <select
                    class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">Bathrooms</option>
                  <option value="1">1 space</option>
                  <option value="2">2 space</option>
                  <option value="3">3 space</option>
                </select>

                <select
                    class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">Bathrooms</option>
                  <option value="1">1 space</option>
                  <option value="2">2 space</option>
                  <option value="3">3 space</option>
                </select>
              </div>
            </div>
          </div>

          <table class="w-full h-full mt-[20px]">
            <thead>
            <tr class="">
              <th>STT</th>
              <th>Mã nhóm</th>
              <th>Tên nhóm</th>
              <th>Tên nhóm 2</th>
              <th>Tình trạng</th>
              <th>Hoạt động</th>
            </tr>
            </thead>
            <tbody>
            <tr class="m-10 mt-3 border" v-for="index in warehouse_group.data" :key="index.id">
              <td>{{ index.id }}</td>
              <td>
                {{ index.type_warehouse_group }}
              </td>
              <td> {{ index.name_warehouse_group }}</td>
              <td>{{ index.name_warehouse_group2 }}</td>
              <td>{{ (index.status == 1) ? ' Hoạt động ' : 'Không Hoạt động' }}</td>
              <td>
                <router-link :to="{name:'admin-warehouse-group-edit'}"
                             class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Sửa
                </router-link>
                <button @click="deleteWarehouseGroup"
                        class="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Xóa
                </button>
              </td>

            </tr>

            </tbody>
          </table>
          <Bootstrap5Pagination
              :data="paginate"
              @pagination-change-page="getWareHouseGroup"
          />
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import {ref} from "vue";
import {usemenu} from "@/stores/usemenu.js";
import setAuthHeader from "@/ultis/setAuthHeader.js";
import axios from "@/ultis/axios";
import {Bootstrap5Pagination} from 'laravel-vue-pagination';

export default {
  setup() {
    usemenu().onSelectedKeys(["warehouse-group-list"]);
    const warehouse_group = ref([]);
    const paginate = {}
    const getWareHouseGroup = (page = 1) => {
      // Make a request for a user with a given ID
      axios.get(`http://127.0.0.1:8000/api/v1/warehouse-group?page=${page}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
        }
      })
          .then(function (response) {
            setAuthHeader(response.apiToken);
            warehouse_group.value = response.data
            paginate.laravelData = response.data.data.map(e => ({
                  id: e.id
                })
            )
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    };
    getWareHouseGroup();

    return {
      warehouse_group,
    }

  },
}
</script>

<style>

</style>
