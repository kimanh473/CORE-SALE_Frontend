<template>
  <div class="app-card">
    <div class="app-full-content p-[24px]">
      <ul class="v-breadcrumbs h-[77px] w-full items-center theme--light flex justify-between bg-slate-100">
        <h2 class="text-[1.5rem] font-medium ml-10">{{ warehouseId ? 'Cập nhập kho' : 'Thêm kho' }}</h2>
      </ul>
      <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
        {{ errors }}
      </div>
      <form action="" class="mt-3 pt-[20px]" @submit.prevent="saveWarehouse">
        <div class="col-md-6">
          <label for="type_subsystem" class="form-label pt-[20px] text-[1.3rem] font-medium">Email kho </label>
          <input type="text" class="form-control" v-model="form.email">
        </div>

        <div class="col-md-6">
          <label for="code_subsystem" class="form-label pt-[20px] text-[1.3rem] font-medium">Tên kho </label>
          <input type="text" class="form-control" v-model="form.name_warehouse">
        </div>
        <div class="col-md-6 pt-[20px] text-[1.2rem]">
          <label for="name_subsystem" class="form-label">Tên kho 2</label>
          <input type="text" class="form-control" v-model="form.name_warehouse2">
        </div>
        <div class="col-md-6 pt-[20px] text-[1.2rem]">
          <label for="name_subsystem" class="form-label">Số điện thoại liên hệ kho</label>
          <input type="text" class="form-control" v-model="form.phone">
        </div>
        <div class="col-md-6 pt-[20px] text-[1.2rem]">
          <label for="name_subsystem" class="form-label">Mã lộ trình</label>
          <input type="text" class="form-control" v-model="form.code_route">
        </div>
        <div class="col-md-6 pt-[20px] text-[1.2rem]">
          <label for="status" class="form-label"> Mã vận chuyển của kho </label>
          <select class="form-control" v-model="form.transport_id">
            <option disabled value=""> -- Mã Vận chuyển --</option>
          </select>
        </div>

        <div class="col-md-6 pt-[20px] text-[1.2rem]">
          <label for="status" class="form-label"> Mã dịch vụ chăm sóc của kho </label>
          <select class="form-control" v-model="form.care_service_id">
            <option disabled value=""> -- Mã chăm sóc --</option>
          </select>
        </div>

        <div class="col-md-6 pt-[20px] text-[1.2rem]">
          <label for="status" class="form-label"> Mã nhóm kho </label>
          <select class="form-control" v-model="form.type_warehouse_group">
            <option disabled value=""> -- Mã dịch vụ chăm sóc --</option>
          </select>
        </div>

        <div class="col-md-6 pt-[20px] text-[1.2rem]">
          <label for="status" class="form-label"> Tình trạng </label>
          <select class="form-control" v-model="form.status">
            <option disabled value=""> -- Trạng thái --</option>
            <option value="1"> -- Hoạt động --</option>
            <option value="0"> -- Không Hoạt động --</option>
          </select>
        </div>
        <div class="col-md-6 mt-3 pt-[20px] text-[1.3rem]">
          <button type="submit" class="btn btn-primary bg-cyan-400">
            {{ warehouseId ? 'Update' : 'Create' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {reactive, onMounted} from "vue";
import useWarehouse from "@/stores/warehouse";

export default {
  name: "Form.vue",
  props: {
    warehouseId: {
      required: false,
      type: String
    },
  },
  setup(props) {
    let form = reactive({
      id: '',
      email: '',
      name_warehouse: '',
      name_warehouse2: '',
      phone: '',
      code_route: '',
      transport_id: '',
      care_service_id: '',
      type_warehouse_group: '',
      status: '',
    })
    const {errors, warehouse, getWarehouse, storeWarehouse, updateWarehouse} = useWarehouse();
    if (props.warehouseId) {
      onMounted(getWarehouse(props.warehouseId))
      form = warehouse
    }
    const saveWarehouse = async () => {
      props.warehouseId ? await updateWarehouse(props.warehouseId) : storeWarehouse({...form})
    }
    return {
      form,
      saveWarehouse,
      errors
    }
  }
}
</script>

<style scoped>

</style>