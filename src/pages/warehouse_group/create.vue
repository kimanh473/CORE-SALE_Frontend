<template>
  <div>
    <div class="app-card">
      <div class="app-full-content p-[24px]">
        <ul class="v-breadcrumbs h-[77px] w-full items-center theme--light flex justify-between bg-slate-100">
          <h2 class="text-[1.5rem] font-medium ml-10">Tạo nhóm kho</h2>
        </ul>

        <div>
          <form action="" class="mt-3">
            <div class="col-md-6 ">
              <label for="exampleFormControlInput1" class="form-label">Loại Nhóm </label>
              <select class="form-control" name="">
                <option value="select"> -- Chọn loại nhóm --</option>
              </select>
            </div>
            <div class="col-md-6 ">
              <label for="exampleFormControlInput1" class="form-label">Tên nhóm 1</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="col-md-6 ">
              <label for="exampleFormControlInput1" class="form-label">Tên nhóm 2</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="col-md-6 ">
              <label for="exampleFormControlInput1" class="form-label">Tình trạng </label>
              <select class="form-control" name="">
                <option value="select"> -- Trạng thái --</option>
                <option value="select"> -- Hoạt động --</option>
                <option value="select"> -- Không Hoạt động --</option>
              </select>
            </div>
            <div class="col-md-6 mt-3 ">
              <button type="submit" class="btn btn-primary bg-cyan-400">Thêm nhóm kho</button>
            </div>

          </form>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "create.vue"
}
</script>

<style scoped>

</style>