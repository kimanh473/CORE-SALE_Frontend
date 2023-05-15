<template>
  <div class="app-card">
    <div class="app-full-content p-[24px]">
      <ul class="v-breadcrumbs h-[77px] w-full items-center theme--light flex justify-between bg-slate-100">
        <h2 class="text-[1.5rem] font-medium ml-10">{{ careserviceId ? 'Cập nhập dịch vụ chăm sóc' : 'Thêm dịch vụ chăm sóc' }}</h2>
      </ul>
      <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
        {{ errors }}
      </div>

      <form action="" class="mt-3 pt-[20px]" @submit.prevent="saveCareservice" >
        <div class="col-md-6">
          <label for="type_subsystem" class="form-label pt-[20px] text-[1.3rem] font-medium">Tên dịch vụ </label>
          <input type="text" class="form-control" v-model="form.name_care_service">
        </div>

        <div class="col-md-6">
          <label for="type_subsystem" class="form-label pt-[20px] text-[1.3rem] font-medium">Tên dịch vụ 2</label>
          <input type="text" class="form-control" v-model="form.name_care_service2">
        </div>

        <div class="col-md-6">
          <label for="type_subsystem" class="form-label pt-[20px] text-[1.3rem] font-medium">Ngày </label>
          <input type="date" class="form-control" v-model="form.day_control">
        </div>

        <div class="col-md-6">
          <label for="code_subsystem" class="form-label pt-[20px] text-[1.3rem] font-medium">Mã số thuế </label>
          <input type="text"  class="form-control" v-model="form.tax_code">
        </div>
        <div class="col-md-6">
          <label for="code_subsystem" class="form-label pt-[20px] text-[1.3rem] font-medium">Tên giao dịch</label>
          <input type="text"  class="form-control" v-model="form.name_trade">
        </div>
        <div class="col-md-6 pt-[20px] text-[1.2rem]">
          <label for="name_subsystem2" class="form-label">Tên người dùng</label>
          <input type="text"  class="form-control" v-model="form.maxuser">
        </div>
        <div class="col-md-6 pt-[20px] text-[1.2rem]">
          <label for="name_subsystem" class="form-label">Số điện thoại</label>
          <input type="text" class="form-control" v-model="form.phone">
        </div>
        <div class="col-md-6 pt-[20px] text-[1.2rem]">
          <label for="name_subsystem2" class="form-label">Tài khoản ngân hàng</label>
          <input type="text"  class="form-control" v-model="form.bank_account">
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
          {{careserviceId}} 1
          <button type="submit" class="btn btn-primary bg-cyan-400">
            {{ careserviceId ? 'Update' : 'Create' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {onMounted, reactive} from "vue";
import useCare_service from "@/stores/care_service";

export default {
  name: "Form.vue",
  props:{
    careserviceId:{
      required:false,
      type:String,
    },
  },
  setup: function (props){
    let form = reactive({
      'id':'',
      'name_care_service':'',
      'name_care_service2':'',
      'day_control':'',
      'tax_code':'',
      'phone':'',
      'bank_account':'',
      'collaborative_inventory':'',
      'name_trade':'',
      'ten_ktt':'',
      'ten_tq':'',
      'maxuser':'',
      'status':'',
    })

    const { errors,care_service,getCare_service, storeCare_service,updateCare_service  } = useCare_service()
    if (props.careserviceId) {
      onMounted(getCare_service(props.careserviceId))
      form=care_service
    }
    const saveCareservice = async ()  =>{
      props.careserviceId ? await updateCare_service(props.careserviceId) : storeCare_service({...form})
    }
    return {
      form,
      saveCareservice,
      errors
    }
  }
}
</script>

<style scoped>

</style>