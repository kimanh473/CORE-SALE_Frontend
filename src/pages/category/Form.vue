<template>
  <div class="app-card">
    <div class="app-full-content p-[24px]">
      <ul class="v-breadcrumbs h-[77px] w-full items-center theme--light flex justify-between bg-slate-100">
        <h2 class="text-[1.5rem] font-medium ml-10">Tiêu đề</h2>
      </ul>
      <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
        {{ errors }}
      </div>

      <form action="" class="mt-3 pt-[20px]" @submit.prevent="saveCategory" >

        <div class="col-md-6">
          <label for="type_subsystem" class="form-label pt-[20px] text-[1.3rem] font-medium">Tên danh mục</label>
          <input type="text" class="form-control" >
        </div>
        <div class="col-md-6">
          <label for="code_subsystem" class="form-label pt-[20px] text-[1.3rem] font-medium">Danh mục cha</label>
          <input type="text"  class="form-control" >
        </div>

        <div class="col-md-6 pt-[20px] text-[1.2rem]">
          <label for="status" class="form-label"> Tình trạng </label>
          <select class="form-control" >
            <option disabled value="select"> -- Trạng thái --</option>
            <option value="1"> -- Hoạt động --</option>
            <option value="0"> -- Không Hoạt động --</option>
          </select>
        </div>
        <div class="col-md-6 mt-3 pt-[20px] text-[1.3rem]">
          <button type="submit" class="btn btn-primary bg-cyan-400">
            Button
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form.vue"
}
</script>

<style scoped>

</style>