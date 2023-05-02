<template>
  <div>
    <div>
      <div class="app-card">
        <div class="app-full-content p-[24px]">
          <ul class="v-breadcrumbs h-[77px] w-full items-center theme--light flex justify-between bg-slate-100">
            <h2 class="text-[1.5rem] font-medium ml-10">Danh sách kho</h2>
          </ul>
          <div class="grid grid-cols-6 gap-4">

            <div class="h-full mt-[20px] col-start-1 col-end-7 bg-gray-100 ...">
              <div class=" ">
                <div class="flex text-left m-3 h-full font-medium text-[1rem]">
                  <div class=" hover:bg-cyan-400 mr-5 mt-2.5">
                    <a href=""
                       class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Thêm kho
                    </a>
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
                  <th>Email</th>
                  <th>Tên kho</th>
                  <th>Tên kho 2</th>
                  <th>Đại lý</th>
                  <th>Điện thoại</th>
                  <th>Địa chỉ</th>
                  <th>Mã lộ trình</th>
                  <th>Nhóm kho</th>
                  <th>Tình trạng</th>
                  <th>Hoạt động</th>
                </tr>
                </thead>
                <tbody>
                <tr class="m-10 mt-3 border" v-for="index in warehouse.data" :key="index">
                  <td>STT</td>
                  <td>{{ index.email }}</td>
                  <td> {{ index.name_warehouse }}</td>
                  <td>{{ index.name_warehouse2 }}</td>
                  <td>
                  <span>
                      {{ index.sales_agent }}
                  </span>
                  </td>
                  <td>{{ index.phone }}</td>
                  <td>{{ index.address }}</td>
                  <td>{{ index.code_route }}</td>
                  <td>{{ index.type_warehouse_group }}</td>
                  <td>{{ (index.status == 1) ? ' Hoạt động ' : 'Không Hoạt động' }}</td>
                  <td>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Sửa
                    </button>
                    <button class="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                      Xóa
                    </button>
                  </td>

                </tr>

                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {usemenu} from "@/stores/usemenu";
import {ref} from "vue";
import axios from "@/ultis/axios";
import setAuthHeader from "@/ultis/setAuthHeader";

export default {
  setup() {
    const store = usemenu();
    store.onSelectedKeys(["warehouse-list"]);
    const warehouse = ref([]);
    const getWareHouse = () => {
      axios.get('http://127.0.0.1:8000/api/v1/warehouse', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
        }
      })
          .then(function (response) {
            warehouse.value = response.data
          })
          .catch(function (error) {
            console.log(error);
          });
    };
    getWareHouse();
    return {
      warehouse,
    }
  }
}
</script>

<style scoped>

</style>
