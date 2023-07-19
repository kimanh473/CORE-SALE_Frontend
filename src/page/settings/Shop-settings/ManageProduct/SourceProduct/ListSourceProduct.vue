<template>
  <base-layout>
    <template v-slot:sidebar>
      <!-- <div class="logo">
                  <img src="../assets/images/btp.png" />
                </div> -->
      <SideBar />
    </template>
    <template v-slot:header>
      <Header :is-show-search="false">
        <div class="flex grow">
          <div class="flex items-center">
            <div class="flex items-center">
              <Transition name="slide-fade"> </Transition>
              <p class="longText text-[#fff] mb-0">Danh sách kho</p>
              <div class="icon-filter-approval relative group"></div>
            </div>
          </div>
        </div>
      </Header>
    </template>
    <template v-slot:content class="relative">
      <div
        class="!my-4 !py-[10px] !mx-[10px] bg-slate-500 rounded flex justify-between"
      >
        <div></div>
        <div
          class="button-create-new relative group rounded-md px-2"
          title="Tạo mới nguồn hàng"
          @click="CreateSourceProduct()"
        >
          <p class="text-[14px] mt-1 px-1">Tạo mới nguồn hàng</p>
        </div>
      </div>
      <a-table
        class="!p-[10px]"
        :columns="columns"
        :data-source="listSourceProduct"
        bordered
        ><template #bodyCell="{ column }">
          <template v-if="column.key === 'action'">
            <a>Sửa</a>&nbsp;|&nbsp;<a>Xóa</a>
          </template>
        </template></a-table
      ></template
    >
    <template v-slot:footer>footer</template>
  </base-layout>
</template>

<script setup lang="ts">
  import BaseLayout from '../../../../../layout/baseLayout.vue'
  import SideBar from '../../../../../components/common/SideBar.vue'
  import Header from '../../../../../components/common/Header.vue'
  //   import TableResponsive from '../../../components/common/TableResponsive.vue'
  import { useSourceProduct } from '../../../../../store/modules/source-products/source-product'
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  //   import { Table } from 'ant-design-vue'
  import { storeToRefs } from 'pinia'
  const router = useRouter()
  const dataSourceProduct = useSourceProduct()
  dataSourceProduct.getListSourceProductAction()
  const { listSourceProduct } = storeToRefs(dataSourceProduct)
  console.log(listSourceProduct)

  const columns = [
    {
      title: 'Mã nguồn hàng',
      dataIndex: 'code',
    },
    {
      title: 'Tên nguồn hàng',
      dataIndex: 'title',
    },
    {
      title: 'Kích hoạt',
      key: '',
    },
    {
      title: 'Địa điểm lấy',
      key: '',
    },
  ]

  interface DataItem {
    title: number
    is_admin: any
  }

  const CreateSourceProduct = () => {
    router.push('/create-source-product')
  }
  //   const selectedRowKeys = ref<DataItem['key'][]>([])
  //   const onSelectChange = (changableRowKeys: string[]) => {
  //     console.log('selectedRowKeys changed: ', changableRowKeys)
  //     selectedRowKeys.value = changableRowKeys
  //   }
  //   const rowSelection = computed(() => {
  //     return {
  //       selectedRowKeys: unref(selectedRowKeys),
  //       onChange: onSelectChange,
  //       hideDefaultSelections: true,
  //       selections: [
  //         Table.SELECTION_ALL,
  //         Table.SELECTION_INVERT,
  //         Table.SELECTION_NONE,
  //         {
  //           key: 'odd',
  //           text: 'Select Odd Row',
  //           onSelect: (changableRowKeys: string[]) => {
  //             let newSelectedRowKeys = []
  //             newSelectedRowKeys = changableRowKeys.filter((_key, index) => {
  //               if (index % 2 !== 0) {
  //                 return false
  //               }
  //               return true
  //             })
  //             selectedRowKeys.value = newSelectedRowKeys
  //           },
  //         },
  //         {
  //           key: 'even',
  //           text: 'Select Even Row',
  //           onSelect: (changableRowKeys: string[]) => {
  //             let newSelectedRowKeys = []
  //             newSelectedRowKeys = changableRowKeys.filter((_key, index) => {
  //               if (index % 2 !== 0) {
  //                 return true
  //               }
  //               return false
  //             })
  //             selectedRowKeys.value = newSelectedRowKeys
  //           },
  //         },
  //       ],
  //     }
  //   })
  //   import { useRouter } from 'vue-router'
  //   const router = useRouter()
</script>
<style>
  #components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }

  .site-layout .site-layout-background {
    background: #fff;
  }

  .ant-layout-header {
    height: 60px;
  }

  .modal-menu-box {
    position: absolute;
    top: 50px;
    right: 0px;
    z-index: 9999;
    justify-items: center;
  }
</style>
