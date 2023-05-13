<template>
  <div class="app-card">
    <div class="app-full-content p-[24px]">
      <ul class="v-breadcrumbs h-[77px] w-full items-center theme--light flex justify-between bg-slate-100">
        <h2 class="text-[1.5rem] font-medium ml-10">Danh sách thuế</h2>
      </ul>
      <div class="grid grid-cols-6 gap-4">

        <div class="h-full mt-[20px] col-start-1 col-end-7 bg-gray-100 ...">
          <div class=" ">
            <div class="flex text-left m-3 h-full font-medium text-[1rem]">
              <div class=" hover:bg-cyan-400 mr-5 mt-2.5">
                <router-link :to="{name:'admin-tax-create'}"
                             class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Thêm thuế
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
              <th>Mã thuế</th>
              <th>Tên thuế</th>
              <th>Tên thuế 2</th>
              <th>Loại thuế</th>
              <th>Thuế suất</th>
              <th>Thuế dư</th>
              <th>Thuế nợ</th>
              <th>Tình trạng</th>
              <th>Hoạt động</th>
            </tr>
            </thead>
            <tbody>
            <tr class="m-10 mt-3 border" v-for="index in Taxes.data" :key="index.id">
              <td>{{ index.id }}</td>
              <td>
                {{ index.tax_code }}
              </td>
              <td> {{ index.name_tax }}</td>
              <td>{{ index.name_tax2 }}</td>
              <td>{{ index.type_tax }}</td>
              <td>{{ index.rate_tax }}</td>
              <td>{{ index.account_tax_residual }}</td>
              <td>{{ index.account_tax_debt }}</td>
              <td>{{ (index.status == 1) ? ' Hoạt động ' : 'Không Hoạt động' }}</td>
              <td>
                <router-link :to="{name:'admin-tax-edit',params:{ id:index.id}}"
                             class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Sửa
                </router-link>
                <button @click="deleteTax(index.id)"
                        class="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Xóa
                </button>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="overflow-auto">
            <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
            ></b-pagination>

            <p class="mt-3">Current Page: {{ Taxes }}</p>

            <b-table
                id="my-table"
                :items="items"
                :per-page="perPage"
                :current-page="warehouse_groups"
                small
            ></b-table>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import useSubsystem from "@/stores/subsystem";
import {onMounted} from "vue";
import useTax from "@/stores/Tax";

export default {
  name: "list.vue",
  setup() {
    const {Taxes, getTaxes, destroyTax} = useTax()

    onMounted(getTaxes)

    const deleteTax = async (id) => {
      await destroyTax(id);
      await getTaxes();
    }
    return {
      Taxes,
      deleteTax
    }
  }
}
</script>

<style scoped>

</style>