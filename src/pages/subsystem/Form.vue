<template>
  <div class="app-card">
    <div class="app-full-content p-[24px]">
      <ul class="v-breadcrumbs h-[77px] w-full items-center theme--light flex justify-between bg-slate-100">
        <h2 class="text-[1.5rem] font-medium ml-10">{{ subsystemId ? 'Cập nhập phân hệ' : 'Thêm phân hệ' }}</h2>
      </ul>
      <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
        {{ errors }}
      </div>

      <form action="" class="mt-3 pt-[20px]" @submit.prevent="saveSubsystem" >
        <div class="col-md-6">
          <label for="type_subsystem" class="form-label pt-[20px] text-[1.3rem] font-medium">Loại phân hệ </label>
          <input type="text" class="form-control" v-model="form.type_subsystem">
        </div>
        <div class="col-md-6">
          <label for="code_subsystem" class="form-label pt-[20px] text-[1.3rem] font-medium">Mã phân hệ </label>
          <input type="text"  class="form-control" v-model="form.code_subsystem">
        </div>
        <div class="col-md-6 pt-[20px] text-[1.2rem]">
          <label for="name_subsystem" class="form-label">Tên phân hệ</label>
          <input type="text" class="form-control" v-model="form.name_subsystem">
        </div>
        <div class="col-md-6 pt-[20px] text-[1.2rem]">
          <label for="name_subsystem2" class="form-label">Tên phân hệ 2</label>
          <input type="text"  class="form-control" v-model="form.name_subsystem2">
        </div>
        <div class="col-md-6 pt-[20px] text-[1.2rem]">
          <label for="status" class="form-label"> Tình trạng </label>
          <select class="form-control" v-model="form.status">
            <option disabled value="select"> -- Trạng thái --</option>
            <option value="1"> -- Hoạt động --</option>
            <option value="0"> -- Không Hoạt động --</option>
          </select>
        </div>
        <div class="col-md-6 mt-3 pt-[20px] text-[1.3rem]">
          <button type="submit" class="btn btn-primary bg-cyan-400">
            {{ subsystemId ? 'Update' : 'Create' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive,onMounted } from "vue";
import useSubsystem from "@/stores/subsystem.js";
export default {
  name: "Form.vue",
  props:{
    subsystemId:{
      required:false,
      // type:String,
    },
  },
  setup(props) {
    let form = reactive({
      id:'',
      type_subsystem:'',
      code_subsystem:'',
      name_subsystem:'',
      name_subsystem2:'',
      status:''
    })
    const { errors, subsystem, getSubsystem, storeSubsystem, updateSubsystem  } = useSubsystem()
    if (props.subsystemId) {
      onMounted(getSubsystem(props.subsystemId))
      form = subsystem
    }
    const saveSubsystem = async () =>{
      props.subsystemId ? await updateSubsystem(props.subsystemId) : storeSubsystem({...form})
    }
    return {
      form,
      saveSubsystem,
      errors
    }
  }
}
</script>

<style scoped>

</style>