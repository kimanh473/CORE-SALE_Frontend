<template>
  <div class="app-card">
    <div class="app-full-content p-[24px]">
      <ul class="v-breadcrumbs h-[77px] w-full items-center theme--light flex justify-between bg-slate-100">
        <h2 class="text-[1.5rem] font-medium ml-10">Danh sách phân hệ</h2>
      </ul>
      <div class="grid grid-cols-6 gap-4">

        <div class="h-full mt-[20px] col-start-1 col-end-7 bg-gray-100 ...">
          <div class=" ">
            <div class="flex text-left m-3 h-full font-medium text-[1rem]">
              <div class=" hover:bg-cyan-400 mr-5 mt-2.5">
                <router-link :to="{name:'admin-subsystem-create'}"
                             class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Thêm phân hệ
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
              <th>Loại phân hệ</th>
              <th>Mã phân hệ</th>
              <th>Tên phân hệ</th>
              <th>Tên phân hệ 2</th>
              <th>Tình trạng</th>
              <th>Hoạt động</th>
            </tr>
            </thead>
            <tbody>
            <tr class="m-10 mt-3 border" v-for="index in subsystems.data" :key="index.id">
              <td>{{ index.id }}</td>
              <td>
                {{ index.type_subsystem }}
              </td>
              <td> {{ index.code_subsystem }}</td>
              <td>{{ index.name_subsystem }}</td>
              <td>{{ index.name_subsystem2 }}</td>
              <td>{{ (index.status == 1) ? ' Hoạt động ' : 'Không Hoạt động' }}</td>
              <td>
                <router-link :to="{name:'admin-subsystem-edit',params:{ id:index.id} }"
                             class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Sửa
                </router-link>
                <button @click="deleteSubsystem(index.id)"
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
import useSubsystem from "@/stores/subsystem.js";
import { onMounted, reactive} from "vue";
import {Bootstrap5Pagination} from 'laravel-vue-pagination';

export default {
  name: "list.vue",
  setup() {
    const {subsystems, getSubsystems, destroySubsystem} = useSubsystem()
    // const param = reactive({
    //   'type_subsystem':'',
    //   'code_subsystem':'',
    //   'name_subsystem':'',
    //   'name_subsystem2':'',
    //   'status':'',
    // })
    onMounted(getSubsystems)

    const deleteSubsystem = async (id) => {
      await destroySubsystem(id);
      await getSubsystems();
    }
    return {
      subsystems,
      deleteSubsystem
    }
  }
}
</script>

<style scoped>

</style>