<template>
  <div class="app-card">
<!--    <div class="app-full-content p-[24px]">-->
<!--      <ul class="v-breadcrumbs h-[77px] w-full items-center theme&#45;&#45;light flex justify-between bg-slate-100">-->
<!--        <h2 class="text-[1.5rem] font-medium ml-10">{{ TaxId ? 'Cập nhập thuế' : ' Thêm thuế' }}</h2>-->
<!--      </ul>-->
<!--      <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">-->
<!--        {{ errors }}-->
<!--      </div>-->
<!--      <form action="" class="mt-3 pt-[20px]" @submit.prevent="saveTax">-->
<!--        <div class="col-md-6">-->
<!--          <label for="type_subsystem" class="form-label pt-[20px] text-[1.3rem] font-medium">Email kho </label>-->
<!--          <input type="text" class="form-control" v-model="form.email">-->
<!--        </div>-->

<!--        <div class="col-md-6">-->
<!--          <label for="code_subsystem" class="form-label pt-[20px] text-[1.3rem] font-medium">Tên kho </label>-->
<!--          <input type="text" class="form-control" v-model="form.name_warehouse">-->
<!--        </div>-->
<!--        <div class="col-md-6 pt-[20px] text-[1.2rem]">-->
<!--          <label for="name_subsystem" class="form-label">Tên kho 2</label>-->
<!--          <input type="text" class="form-control" v-model="form.name_warehouse2">-->
<!--        </div>-->
<!--        <div class="col-md-6 pt-[20px] text-[1.2rem]">-->
<!--          <label for="name_subsystem" class="form-label">Số điện thoại liên hệ kho</label>-->
<!--          <input type="text" class="form-control" v-model="form.phone">-->
<!--        </div>-->
<!--        <div class="col-md-6 pt-[20px] text-[1.2rem]">-->
<!--          <label for="name_subsystem" class="form-label">Mã lộ trình</label>-->
<!--          <input type="text" class="form-control" v-model="form.code_route">-->
<!--        </div>-->
<!--        <div class="col-md-6 pt-[20px] text-[1.2rem]">-->
<!--          <label for="status" class="form-label"> Mã vận chuyển của kho </label>-->
<!--          <select class="form-control" v-model="form.transport_id">-->
<!--            <option disabled value=""> &#45;&#45; Mã Vận chuyển &#45;&#45;</option>-->
<!--          </select>-->
<!--        </div>-->

<!--        <div class="col-md-6 pt-[20px] text-[1.2rem]">-->
<!--          <label for="status" class="form-label"> Mã dịch vụ chăm sóc của kho </label>-->
<!--          <select class="form-control" v-model="form.care_service_id">-->
<!--            <option disabled value=""> &#45;&#45; Mã chăm sóc &#45;&#45;</option>-->
<!--          </select>-->
<!--        </div>-->

<!--        <div class="col-md-6 pt-[20px] text-[1.2rem]">-->
<!--          <label for="status" class="form-label"> Mã nhóm kho </label>-->
<!--          <select class="form-control" v-model="form.type_warehouse_group">-->
<!--            <option disabled value=""> &#45;&#45; Mã dịch vụ chăm sóc &#45;&#45;</option>-->
<!--          </select>-->
<!--        </div>-->

<!--        <div class="col-md-6 pt-[20px] text-[1.2rem]">-->
<!--          <label for="status" class="form-label"> Tình trạng </label>-->
<!--          <select class="form-control" v-model="form.status">-->
<!--            <option disabled value=""> &#45;&#45; Trạng thái &#45;&#45;</option>-->
<!--            <option value="1"> &#45;&#45; Hoạt động &#45;&#45;</option>-->
<!--            <option value="0"> &#45;&#45; Không Hoạt động &#45;&#45;</option>-->
<!--          </select>-->
<!--        </div>-->
<!--        <div class="col-md-6 mt-3 pt-[20px] text-[1.3rem]">-->
<!--          <button type="submit" class="btn btn-primary bg-cyan-400">-->
<!--            {{ TaxId ? 'Update' : 'Create' }}-->
<!--          </button>-->
<!--        </div>-->
<!--      </form>-->
<!--    </div>-->
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