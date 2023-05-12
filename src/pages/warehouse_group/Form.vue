<template>
  <div class="app-card">
    <div class="app-full-content p-[24px]">
      <ul class="v-breadcrumbs h-[77px] w-full items-center theme--light flex justify-between bg-slate-100">
        <h2 class="text-[1.5rem] font-medium ml-10">{{ warehousegroupId ? 'Cập nhập nhóm kho' : 'Thêm nhóm kho' }}</h2>
      </ul>
      <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
        {{ errors }}
      </div>
      <form action="" class="mt-3 pt-[20px]" @submit.prevent="saveWarehouse_group">
        <div class="col-md-6">
          <label for="type_subsystem" class="form-label pt-[20px] text-[1.3rem] font-medium">Loại nhóm kho </label>
          <input type="text" class="form-control" v-model="form.type_warehouse_group">
        </div>

        <div class="col-md-6">
          <label for="code_subsystem" class="form-label pt-[20px] text-[1.3rem] font-medium">Tên nhóm kho </label>
          <input type="text" class="form-control" v-model="form.name_warehouse_group">
        </div>
        <div class="col-md-6 pt-[20px] text-[1.2rem]">
          <label for="name_subsystem" class="form-label">Tên nhóm kho 2</label>
          <input type="text" class="form-control" v-model="form.name_warehouse_group2">
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
            {{ warehousegroupId ? 'Update' : 'Create' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {reactive, onMounted} from "vue";
import useWarehouse_group from "@/stores/warehouse_group.js";

export default {
  name: "Form.vue",
  props: {
    warehousegroupId: {
      required: false,
      // type:String
    },
  },
  setup(props) {
    let form = reactive({
      'id': '',
      'type_warehouse_group': '',
      'name_warehouse_group': '',
      'name_warehouse_group2': '',
      'status': ''
    })
    const {
      errors,
      warehouse_group,
      getWarehouse_group,
      storeWarehouse_group,
      updateWarehouse_group
    } = useWarehouse_group()
    if (props.warehousegroupId) {
      onMounted(getWarehouse_group(props.warehousegroupId))
      form = warehouse_group
    }
    const saveWarehouse_group = async () => {
      props.warehousegroupId ? await updateWarehouse_group(props.warehousegroupId) : storeWarehouse_group({...form})
    }
    return {
      form,
      saveWarehouse_group,
      errors
    }
  }
}
</script>

<style scoped>

</style>