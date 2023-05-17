<template>

  <div class="app-card">
    <div class="app-full-content p-[24px]">
      <ul class="v-breadcrumbs h-[77px] w-full items-center theme--light flex justify-between bg-slate-100">
        <h2 class="text-[1.5rem] font-medium ml-10">Danh sách nhóm người dùng</h2>
      </ul>
      <div class="grid grid-cols-6 gap-4">

        <div class="h-full mt-[20px] col-start-1 col-end-7 bg-gray-100 ...">
          <div class=" ">
            <div class="flex text-left m-3 h-full font-medium text-[1rem]">
              <div class=" hover:bg-cyan-400 mr-5 mt-2.5">
                <router-link :to="{name:'admin-group-create'}"
                             class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Thêm nhóm
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
              <th></th>
              <th>Đối tượng</th>
              <th>Quản lý</th>
              <th>Xem</th>
              <th>Tạo mới</th>
              <th>Sửa</th>
              <th>Xóa</th>
              <th>In</th>
              <th>Import</th>
              <th>Export</th>
            </tr>
            </thead>
            <tbody>
            <tr class="m-10 mt-3 border" v-for="index in groups.data" :key="index.id">
              <td>
                <label class="container">
                  <input type="checkbox" checked="checked">
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>{{ index.title }}</td>
              <td>
                <select>
                  <option disabled value="">-- Chọn quyền --</option>
                  <option value="">Quản lý tất cả</option>
                  <option value="">Quản lý công ty</option>
                  <option value="">Quản lý chi nhánh</option>
                  <option value="">Quản lý phòng ban</option>
                </select>
              </td>
              <td>
                <select>
                  <option disabled value="">-- Chọn quyền --</option>
                  <option value="">Quản lý tất cả</option>
                  <option value="">Quản lý công ty</option>
                  <option value="">Quản lý chi nhánh</option>
                  <option value="">Quản lý phòng ban</option>
                </select>
              </td>
              <td><input type="checkbox"></td>
              <td><input type="checkbox"></td>
              <td><input type="checkbox"></td>
              <td><input type="checkbox"></td>
              <td><input type="checkbox"></td>
              <td><input type="checkbox"></td>

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
import useGroup from "@/stores/group";
import {onMounted} from "vue";

export default {
  name: "list.vue",
  setup() {
    const {groups, getGroups, destroyGroup} = useGroup()
    onMounted(getGroups)

    return {
      groups
    }
  }

}
</script>
<style scoped>
/* The container */
.container {
position: relative;
padding-left: 35px;
margin-bottom: 12px;
cursor: pointer;
font-size: 22px;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
position: absolute;
opacity: 0;
cursor: pointer;
height: 0;
width: 0;
}

/* Create a custom checkbox */
.checkmark {
position: absolute;
top: 0;
left: 0;
height: 25px;
width: 25px;
background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
content: "";
position: absolute;
display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
left: 9px;
top: 5px;
width: 5px;
height: 10px;
border: solid white;
border-width: 0 3px 3px 0;
-webkit-transform: rotate(45deg);
-ms-transform: rotate(45deg);
transform: rotate(45deg);
}
</style>