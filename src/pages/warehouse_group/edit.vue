<template>
  <Form :warehouse_groupId="id" />
</template>

<script>
import Form from "@/pages/warehouse_group/Form.vue";
export default {
  name: "edit.vue",
  props:{
    id:{
      required:true,
      type:String
    }
  },
  components:{
    Form
  }
}
</script>

<style scoped>

</style>
