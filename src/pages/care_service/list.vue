<template>
  <div class="app-card">
    <div class="app-full-content p-[24px]">
      <ul class="v-breadcrumbs h-[77px] w-full items-center theme--light flex justify-between bg-slate-100">
        <h2 class="text-[1.5rem] font-medium ml-10">Danh sách dịch vụ chăm sóc</h2>
      </ul>
      <div class="grid grid-cols-6 gap-4">

        <div class="h-full mt-[20px] col-start-1 col-end-7 bg-gray-100 ...">
          <div class=" ">
            <div class="flex text-left m-3 h-full font-medium text-[1rem]">
              <div class=" hover:bg-cyan-400 mr-5 mt-2.5">
                <router-link :to="{name:'admin-careservice-create'}"
                             class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Thêm dịch vụ chăm sóc
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
              <th>Tên dịch vụ</th>
              <th>Mã số thuế</th>
              <th>Số điện thoại</th>
              <th>Tên giao dịch</th>
              <th>Tình trạng</th>
              <th>Hoạt động</th>
            </tr>
            </thead>
            <tbody>
            <tr class="m-10 mt-3 border" v-for="index in care_services.data" :key="index">
              <td>{{ index.id }}</td>
              <td>
                {{ index.name_care_service }}
              </td>
              <td> {{ index.tax_code }}</td>
              <td>{{ index.phone }}</td>
              <td>{{ index.name_trade }}</td>
              <td><input type="checkbox"> {{ (index.status == 1) ? ' Checked ' : '' }}</td>
              <td>
                <router-link :to="{name:'admin-careservice-edit',param:{id:index.id }}"

                             class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Sửa
                </router-link>
                <button @click="deleteCare_service(index.id)"
                        class="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Xóa
                </button>

              </td>
            </tr>

            </tbody>
          </table>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item" >
                <!--                v-bind="[{ disabled: !pagination.prev_page_url }]"-->
                <a class="page-link" href="#" @click="makePagination()" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useCare_service from "@/stores/care_service";
import {onMounted} from "vue";

export default {
  name: "list.vue",
  setup() {
    const {care_services, getCare_services, destroyCare_service} = useCare_service();
    onMounted(getCare_services)
    const deleteCare_service = async (id) => {
      await destroyCare_service(id)
      await getCare_services()
    }
    return {
      care_services,
      deleteCare_service
    }
  }
}
</script>

<style scoped>

</style>