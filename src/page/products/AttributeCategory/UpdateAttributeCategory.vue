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
        <template v-slot:name
          ><p class="pl-5 text-[16px]">Cập nhật bộ thuộc tính</p></template
        >
      </Header>
    </template>
    <template v-slot:content class="relative flex">
      <Transition :duration="550" name="nested">
        <div
          class="text-left px-4 py-2 w-full h-full format-scroll form-plus-over flex"
        >
          <!-- <a-anchor class="w-[200px] h-[300px] border-2">
                  <a-anchor-link href="#infor-common" title="Thông tin chung" />
                  <a-anchor-link href="#infor-contact" title="Thông tin liên lạc" />
                  <a-anchor-link href="#address" title="Địa chỉ" />
                </a-anchor> -->
          <div id="infor-common" class="w-full ml-4">
            <h4
              class="form-section-title form-small cursor-pointer"
              @click="isInfor = !isInfor"
            >
              <span v-show="isInfor == true">
                <i class="fas fa-chevron-down cursor-pointer"></i>
              </span>
              <span v-show="isInfor == false"
                ><i class="fas fa-chevron-right cursor-pointer"></i
              ></span>
              Thông tin chung
            </h4>
            <Transition name="slide-up">
              <div v-show="isInfor == true" class="outer">
                <div>
                  <div class="form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Tên bộ thuộc tính<span class="text-red-600"
                          >*</span
                        ></label
                      >
                      <div>
                        <input
                          type="text"
                          class="form-control-input"
                          placeholder="Nhập tên bộ thuộc tính"
                          v-model="detailAttributeCategory.title"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Mã bộ thuộc tính<span class="text-red-600"
                          >*</span
                        ></label
                      >
                      <div>
                        <input
                          type="text"
                          class="form-control-input"
                          placeholder="Nhập mã bộ thuộc tính"
                          v-model="detailAttributeCategory.code"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Trạng thái<span class="text-red-600">*</span></label
                      >
                      <div>
                        <a-switch
                          v-model:checked="detailAttributeCategory.status"
                          checkedValue="1"
                          unCheckedValue="0"
                        />
                        &nbsp; Kích hoạt
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
            <div v-show="isInfor == false">
              <h2
                @click="isInfor = !isInfor"
                class="cursor-pointer form-group-label"
              >
                Tên bộ thuộc tính*
              </h2>
            </div>

            <div id="infor-contact" class="inner">
              <h4
                class="form-section-title form-small cursor-pointer"
                @click="isContact = !isContact"
              >
                <span v-show="isContact == true">
                  <i class="fas fa-chevron-down cursor-pointer"></i>
                </span>
                <span v-show="isContact == false"
                  ><i class="fas fa-chevron-right cursor-pointer"></i
                ></span>
                Thông tin chi tiết
              </h4>
              <Transition name="slide-up">
                <div v-show="isContact == true">
                  <div class="flex grid-wrapper ag-theme-alpine">
                    <div
                      class="panel panel-primary ml-0"
                      style="margin: 10px; text-align: left"
                    >
                      <div class="panel-body">
                        <ag-grid-vue
                          style="height: 500px; width: 475px"
                          :defaultColDef="defaultColDef"
                          rowSelection="multiple"
                          :rowDragMultiRow="true"
                          :getRowId="getRowId"
                          :rowDragManaged="true"
                          v-model="leftRowData"
                          :columnDefs="leftColumns"
                          @grid-ready="onGridReady($event, 0)"
                        >
                        </ag-grid-vue>
                      </div>
                    </div>
                    <div
                      class="panel panel-primary"
                      style="margin: 10px 10px 20px 0px; text-align: left"
                    >
                      <div class="panel-body">
                        <ag-grid-vue
                          style="height: 500px; width: 475px"
                          :defaultColDef="defaultColDef"
                          rowSelection="multiple"
                          :getRowId="getRowId"
                          :rowDragMultiRow="true"
                          :rowDragManaged="true"
                          :animateRows="true"
                          v-model="rightRowData"
                          :columnDefs="rightColumns"
                          @grid-ready="onGridReady($event, 1)"
                          @row-drag-end="onRowDragEnd"
                        >
                        </ag-grid-vue>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
              <div v-show="isContact == false">
                <h2
                  @click="isContact = !isContact"
                  class="cursor-pointer form-group-label"
                >
                  Tên liên lạc *, Email*, *Số điện thoại
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </template>
    <template v-slot:footer
      ><div class="bg-slate-300">
        <div class="p-4 text-left">
          <button class="button-modal" @click="updateAttributeCategory()">
            Cập nhật
          </button>
          <button class="button-close-modal" @click="router.go(-1)">
            Hủy bỏ
          </button>
        </div>
      </div></template
    >
  </base-layout>
  <loading-overlay :isLoading="isLoading"></loading-overlay>
</template>

<script setup lang="ts">
  import BaseLayout from '@/layout/baseLayout.vue'
  import SideBar from '@/components/common/SideBar.vue'
  import Header from '@/components/common/Header.vue'
  // import type { SelectProps } from 'ant-design-vue'
  import { storeToRefs } from 'pinia'
  import { ref, reactive, computed } from 'vue'
  import { useToast } from 'vue-toastification'
  import { useRoute, useRouter } from 'vue-router'
  import { useAttributeProduct } from '@/store/modules/store-setting/attribute-product'
  import { useAttributeGroup } from '@/store/modules/store-setting/attribute-group'
  import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
  import 'ag-grid-community/styles/ag-theme-alpine.css'
  // Register the required feature modules with the Grid
  import { AgGridVue } from 'ag-grid-vue3'
  const router = useRouter()
  const route = useRoute()
  const toast = useToast()
  const isInfor = ref(true)
  const isContact = ref(true)
  const isLoading = ref<boolean>(false)
  // const isReInput = ref<boolean>(true)
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const dataAttribute = useAttributeProduct()
  const groupAttribute = useAttributeGroup()
  const { listAttributeProductOption } = storeToRefs(dataAttribute)
  dataAttribute.getListAttributeAction()
  groupAttribute.getListAttributeGroupAction()

  const { listAttributeGroupOption, detailAttributeCategory } =
    storeToRefs(groupAttribute)
  console.log(detailAttributeCategory)
  const leftRowData = computed(() => listAttributeGroupOption.value)
  const rightRowData = ref([])
  const leftApi = ref(null)
  const rightApi = ref(null)
  const leftColumnApi = ref(null)
  const rightColumnApi = ref(null)
  const defaultColDef = reactive({
    flex: 1,
    minWidth: 100,
    filter: true
  })
  groupAttribute
    .getDetailSetAttributeGroupAction(Number(route.params.id))
    .then(() => {
      rightRowData.value = [
        ...detailAttributeCategory?.value.json_group_attribute_detail.map(
          (item: any) => ({
            id: item.id,
            key: item.id.toString(),
            code: item.code,
            title: item.title
          })
        )
      ]
    })
  const leftColumns = reactive([
    {
      rowDrag: true,
      maxWidth: 50,
      suppressMenu: true,
      rowDragText: (params: any, dragItemCount: any) => {
        if (dragItemCount > 1) {
          return dragItemCount
        }
        return params.rowNode.data.title
      }
    },
    {
      colId: 'checkbox',
      maxWidth: 50,
      checkboxSelection: true,
      suppressMenu: true,
      headerCheckboxSelection: true
    },
    {
      field: 'title',
      headerName: 'Nhóm thuộc tính có thể chọn',
      filterParams: {
        filterOptions: [
          {
            displayKey: 'search',
            displayName: 'Tìm kiếm',
            predicate: ([filterValue]: any[], cellValue: any) => {
              return (
                cellValue.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0
              )
            }
          }
        ],
        filterPlaceholder: 'Nhập để tìm',
        maxNumConditions: 1
      }
    }
  ])
  const rightColumns = [
    {
      rowDrag: true,
      maxWidth: 50,
      suppressMenu: true,
      rowDragText: (params: any, dragItemCount: any) => {
        if (dragItemCount > 1) {
          return dragItemCount
        }
        return params.rowNode.data.title
      }
    },
    {
      colId: 'checkbox',
      maxWidth: 50,
      checkboxSelection: true,
      suppressMenu: true,
      headerCheckboxSelection: true
    },
    {
      field: 'title',
      headerName: 'Nhóm thuộc tính đã chọn',
      filterParams: {
        filterOptions: [
          {
            displayKey: 'search',
            displayName: 'Tìm kiếm',
            predicate: ([filterValue]: any[], cellValue: any) => {
              return (
                cellValue.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0
              )
            }
          }
        ],
        filterPlaceholder: 'Nhập để tìm',
        maxNumConditions: 1
      }
    }
  ]
  const onRowDragEnd = () => {
    let rowData: any = []
    rightApi.value.forEachNode((node: any) => rowData.push(node.data))
    rightRowData.value = rowData
  }
  const getRowId = (params: any) => {
    return params.data.title
  }
  const addGridDropZone = () => {
    const dropZoneParams1 = rightApi.value.getRowDropZoneParams({
      onDragStop: (params: any) => {
        // console.log(rightRowData.value)
        var nodes = params.nodes
        leftApi.value.applyTransaction({
          remove: nodes.map(function (node: any) {
            return node.data
          })
        })
      },
      onRowDragEnter(e: any) {
        console.log('onRowDragEnter', e)
      },
      onRowDragEnd(e: any) {
        console.log('onRowDragEnd', e)
      }
    })
    const dropZoneParams2 = leftApi.value.getRowDropZoneParams({
      onDragStop: (params: any) => {
        var nodes = params.nodes
        rightApi.value.applyTransaction({
          remove: nodes.map(function (node: any) {
            return node.data
          })
        })
      },
      onRowDragEnter(e: any) {
        console.log('onRowDragEnter', e)
      },
      onRowDragEnd(e: any) {
        console.log('onRowDragEnd', e)
      }
    })
    leftApi.value.addRowDropZone(dropZoneParams1)
    rightApi.value.addRowDropZone(dropZoneParams2)
  }
  const onGridReady = (params: any, side: any) => {
    if (side === 0) {
      leftApi.value = params.api
      leftColumnApi.value = params.columnApi
    }

    if (side === 1) {
      rightApi.value = params.api
      rightColumnApi.value = params.columnApi
      addGridDropZone()
    }
  }

  const attribute = reactive({
    title: '',
    code: '',
    status: '0',
    json_group_attribute: [],
    json_group_specification: []
  })
  const updateAttributeCategory = () => {
    let data = {
      title: detailAttributeCategory.value.title,
      code: detailAttributeCategory.value.code,
      status: detailAttributeCategory.value.status,
      json_group_attribute: rightRowData.value.map((item: any) => item.code),
      json_group_specification: <any>[]
    }
    groupAttribute.updateAttributeCategoryAction(
      Number(route.params.id),
      data,
      toast,
      router,
      EndTimeLoading
    )
  }
</script>

<style></style>
