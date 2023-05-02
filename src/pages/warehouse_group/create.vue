<template>
  <div>
    <div class="app-card">
      <div class="app-full-content p-[24px]">
        <ul class="v-breadcrumbs h-[77px] w-full items-center theme--light flex justify-between bg-slate-100">
          <h2 class="text-[1.5rem] font-medium ml-10">Tạo nhóm kho</h2>
        </ul>
          <div class="alert alert-danger" v-if="errors.length ">
            <ul class="mb-0">
              <li v-for="(error,index) in errors" :key="index"> {{error}}</li>
            </ul>
          </div>
          <form action="" class="mt-3 pt-[20px]" @submit.prevent="CreateWarehouseGroup()">
            <div class="col-md-6">
              <label  class="form-label pt-[20px] text-[1.3rem] font-medium">Mã Nhóm Kho </label>
              <input type="text" v-model="warehouse_group.type_warehouse_group" class="form-control" >
            </div>
            <div class="col-md-6 pt-[20px] text-[1.2rem]">
              <label  class="form-label">Tên nhóm</label>
              <input type="text" v-model="warehouse_group.name_warehouse_group" class="form-control" >
            </div>
            <div class="col-md-6 pt-[20px] text-[1.2rem]">

              <label class="form-label">Tên nhóm 2</label>
              <input type="text" v-model="warehouse_group.name_warehouse_group2" class="form-control" >
            </div>
            <div class="col-md-6 pt-[20px] text-[1.2rem]">
              <label class="form-label"> Tình trạng </label>
              <select class="form-control" v-model="warehouse_group.status">
                <option value="select"> -- Trạng thái --</option>
                <option value="select"> -- Hoạt động --</option>
                <option value="select"> -- Không Hoạt động --</option>
              </select>
            </div>
            <div class="col-md-6 mt-3 pt-[20px] text-[1.3rem]">
              <button type="submit" class="btn btn-primary bg-cyan-400">Thêm nhóm kho</button>
            </div>

          </form>

      </div>


    </div>
  </div>
</template>

<script>
import axios from "../../ultis/axios";
import router from "@/router";
export default {
  name: "create.vue",
  data() {
    return {
      warehouse_group:{},
      type_warehouse_group:'',
      name_warehouse_group:'',
      name_warehouse_group2:'',
      status:'',
      errors:[]
    }
  },
  methods: {
   async CreateWarehouseGroup() {
      this.errors = [];
      if (!this.warehouse_group.type_warehouse_group){
        this.errors.push("Vui lòng nhập mã nhóm")
      }
      if (!this.warehouse_group.name_warehouse_group){
        this.errors.push("Vui lòng nhập tên nhóm")
      }
      if (!this.warehouse_group.name_warehouse_group2){
        this.errors.push("Vui lòng nhập tên nhóm")
      }
      if (!this.warehouse_group.status){
        this.errors.push("Vui lòng chọn tình trạng")
      }
      if (!this.errors.length){
        let formData = new FormData();
        formData.append('type_warehouse_group',this.warehouse_group.type_warehouse_group);
        formData.append('name_warehouse_group',this.warehouse_group.name_warehouse_group);
        formData.append('name_warehouse_group2',this.warehouse_group.name_warehouse_group2);
        formData.append('status',this.warehouse_group.status);
        let url = 'http://127.0.0.1:8000/api/v1/warehouse-group';
        await axios.post(url,formData).then((res)=> {
          if (res.status == 200) {
            this.warehouse_group.type_warehouse_group = '';
            this.warehouse_group.name_warehouse_group = '';
            this.warehouse_group.name_warehouse_group2 = '';
            this.warehouse_group.status = '';
            router.push({name:'admin-warehouse-group-list'});
          } else {
            console.log('error');
          }
        }).catch( error => {
          this.errors.push(error.res)
        });

      }

    }
  }
}
</script>

<style scoped>

</style>
