<template>
  <div class="app-card">
    <div class="app-full-content p-[24px]">
      <ul class="v-breadcrumbs h-[77px] w-full items-center theme--light flex justify-between bg-slate-100">
        <h2 class="text-[1.5rem] font-medium ml-10">{{ TaxId ? 'Cập nhập thuế' : ' Thêm thuế' }}</h2>
      </ul>
      <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
        {{ errors }}
      </div>
      <form action="" class="mt-3 pt-[20px]" @submit.prevent="saveTax">
        <div class="col-md-6">
          <label for="type_subsystem" class="form-label pt-[20px] text-[1.3rem] font-medium">Mã số thuế</label>
          <input type="text" class="form-control" v-model="form.tax_code">
        </div>

        <div class="col-md-6">
          <label for="code_subsystem" class="form-label pt-[20px] text-[1.3rem] font-medium">Tên thuế </label>
          <input type="text" class="form-control" v-model="form.name_tax">
        </div>
        <div class="col-md-6 pt-[20px] text-[1.2rem]">
          <label for="name_subsystem" class="form-label">Tên thuế 2</label>
          <input type="text" class="form-control" v-model="form.name_tax2">
        </div>
        <div class="col-md-6 pt-[20px] text-[1.2rem]">
          <label for="name_subsystem" class="form-label">Loại thuế</label>
          <input type="text" class="form-control" v-model="form.type_tax">
        </div>
        <div class="col-md-6 pt-[20px] text-[1.2rem]">
          <label for="name_subsystem" class="form-label">Thuế suất</label>
          <input type="text" class="form-control" v-model="form.rate_tax">
        </div>

        <div class="col-md-6 pt-[20px] text-[1.2rem]">
          <label for="status" class="form-label"> Tài khoản Thuế dư </label>
          <input type="text" class="form-control" v-model="form.account_tax_residual">
        </div>

        <div class="col-md-6 pt-[20px] text-[1.2rem]">
          <label for="status" class="form-label">Tài khoản Thuế nợ </label>
          <input type="text" class="form-control" v-model="form.account_tax_debt">
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
            {{ TaxId ? 'Update' : 'Create' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {onMounted, reactive} from "vue";
import useTax from "@/stores/Tax";
export default {
  name: "Form",
  props: {
    TaxId: {
      required: false,
      type: String
    }
  },
  setup(props) {
    let form = reactive({
      'id': '',
      'tax_code': '',
      'name_tax': '',
      'name_tax2': '',
      'type_tax': '',
      'rate_tax': '',
      'account_tax_residual': '',
      'account_tax_debt': '',
      'status': ''
    })
    const {errors, Tax, getTax,storeTax,updateTax} = useTax();
    if (props.TaxId){
      onMounted(getTax(props.TaxId))
      form=Tax
    }
    const saveTax = async () =>{
      props.TaxId ? updateTax(props.TaxId) : storeTax({...form})
    }

    return {
      form,
      saveTax,
      errors,
    }
  }
}
</script>

<style scoped>

</style>