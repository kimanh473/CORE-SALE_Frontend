<template>
  <div>
    <div class="app-card">
      <div class="app-full-content p-[24px]">
        <ul class="v-breadcrumbs h-[77px] w-full items-center theme--light flex justify-between bg-slate-100">
          <h2 class="text-[1.5rem] font-medium ml-10">Chỉnh sửa nhóm kho</h2>
        </ul>
        <form action="" class="mt-3 pt-[20px] ">
          <div class="col-md-6">
            <label  class="form-label pt-[20px] text-[1.3rem] font-medium">Mã Nhóm Kho Mới </label>
            <select class="form-control" name="">
              <option value="select"> -- Chọn mã nhóm mới --</option>
            </select>
          </div>
          <div class="col-md-6 pt-[20px] text-[1.2rem]">
            <label for="exampleInputEmail1" class="form-label">Tên nhóm mới</label>
            <input type="" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="col-md-6 pt-[20px] text-[1.2rem]">

            <label for="exampleInputPassword1" class="form-label">Tên nhóm 2</label>
            <input type="" class="form-control" id="exampleInputPassword1">
          </div>
          <div class="col-md-6 pt-[20px] text-[1.2rem]">
            <label class="form-label">Tình trạng </label>
            <select class="form-control" name="">
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
export default {
  name: "edit.vue"
}
</script>

<style scoped>

</style>
