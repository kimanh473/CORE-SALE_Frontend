<template>
  <Form :taxId="id"/>
</template>

<script>
import Form from "@/pages/Tax/Form.vue";

export default {
  name: "edit.vue",
  props:{
    id:{
      required:true,
      type:String
    },
  },
  components: {
    Form
  }
}
</script>

<style scoped>

</style>