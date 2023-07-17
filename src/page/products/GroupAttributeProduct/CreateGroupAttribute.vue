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
          ><p class="pl-5 text-[16px]">Tạo mới nhóm thuộc tính</p></template
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
              Cơ bản
            </h4>
            <Transition name="slide-up">
              <div v-show="isInfor == true" class="outer">
                <div>
                  <div class="form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Thuộc web<span class="text-red-600">* </span>
                        <span></span
                      ></label>
                      <div>
                        <a-select
                          class="form-control-input"
                          placeholder="Chọn web"
                        >
                          <a-select-option
                            v-for="(item, index) in listWeb"
                            :key="index"
                            :value="item.code"
                            >{{ item.web_name }}</a-select-option
                          >
                        </a-select>
                        <p v-if="messageError?.title" class="text-red-600">
                          {{ messageError?.title[0] }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Tên<span class="text-red-600"></span
                      ></label>
                      <div>
                        <input
                          type="text"
                          class="form-control-input"
                          placeholder="Nhập tên nhóm thuộc tính"
                          v-model="attribute.title"
                        />
                        <p v-if="messageError?.code" class="text-red-600">
                          {{ messageError?.code[0] }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="form-small">
                    <div>
                      <label for="" class="form-group-label"
                        >Dựa trên<span class="text-red-600"></span
                      ></label>
                      <div>
                        <a-select
                          class="form-control-input"
                          placeholder="Chọn thuộc tính"
                          mode="multiple"
                        >
                          <a-select-option
                            v-for="(item, index) in listAttributeProduct"
                            :key="index"
                            >{{ item.attribute_code }}</a-select-option
                          >
                        </a-select>
                        <p v-if="messageError?.code" class="text-red-600">
                          {{ messageError?.code[0] }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="border border-gray-800 w-[500px] p-4"
                    v-if="showManageChoice"
                  >
                    <h1>Quản lý lựa chọn</h1>
                    <div class="flex">
                      <p class="pr-[100px]">Tiêu đề</p>
                      <p>Mặc định</p>
                    </div>
                    <div
                      v-for="(item, index) in dataOption"
                      :key="index"
                      class="flex"
                    >
                      <div class="pr-[100px]">
                        <a-checkbox
                          v-model="item.defaultOption"
                          class="!pl-[16px]"
                        ></a-checkbox>
                      </div>
                      <div class="flex items-end">
                        <a-input
                          v-model:value="item.title"
                          placeholder="Nhập tiêu đề"
                        ></a-input>
                        <i
                          @click="removeOptions(index)"
                          class="fal fa-times icon-close"
                        ></i>
                      </div>
                    </div>
                    <div @click="addOptions">
                      <i class="fal fa-plus-circle icon-plus fa-lg"></i>
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
                Tên nguồn*, Mã *, Mặc định ( nút bật tắt) Mô tả
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
                Nâng cao
              </h4>
              <Transition name="slide-up">
                <div v-show="isContact == true">
                  <a-transfer
                    v-model:target-keys="targetKeys"
                    class="tree-transfer"
                    :data-source="dataSource"
                    :render="(item:any) => item.title"
                    :show-select-all="false"
                  >
                    <template
                      #children="{ direction, selectedKeys, onItemSelect }"
                    >
                      <a-tree
                        v-if="direction === 'left'"
                        draggable
                        block-node
                        checkable
                        check-strictly
                        default-expand-all
                        :checked-keys="[...selectedKeys, ...targetKeys]"
                        :tree-data="treeData"
                        @dragenter="onDragEnter"
                        @drop="onDrop"
                        @check="
                          (_ : any, props:any) => {
                            onChecked(
                              props,
                              [...selectedKeys, ...targetKeys],
                              onItemSelect
                            )
                          }
                        "
                        @select="
                          (_ : any, props:any) => {
                            onChecked(
                              props,
                              [...selectedKeys, ...targetKeys],
                              onItemSelect
                            )
                          }
                        "
                      />
                    </template>
                  </a-transfer>
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
          <button class="button-modal" @click="createAttribute()">
            Cập nhật
          </button>
          <button class="button-close-modal" @click="this.$router.go(-1)">
            Hủy bỏ
          </button>
        </div>
      </div></template
    >
  </base-layout>
  <loading-overlay :isLoading="isLoading"></loading-overlay>
</template>

<script setup lang="ts">
  import BaseLayout from '../../../layout/baseLayout.vue'
  import SideBar from '../../../components/common/SideBar.vue'
  import Header from '../../../components/common/Header.vue'
  // import type { SelectProps } from 'ant-design-vue'
  import { useLocation } from '../../../store/modules/location/location'
  import { useGroupInventory } from '../../../store/modules/inventory/group-inventory'
  import { useInventory } from '../../../store/modules/inventory/product-invetory'
  import { storeToRefs } from 'pinia'
  import { ref, reactive, computed } from 'vue'
  import { useToast } from 'vue-toastification'
  import { useRouter } from 'vue-router'
  import { useWebCatalog } from '../../../store/modules/web-catalog/webcatalog'
  import { useAttributeProduct } from '../../../store/modules/store-setting/attribute-product'
  import type { TransferProps } from 'ant-design-vue'
  import type {
    AntTreeNodeDragEnterEvent,
    AntTreeNodeDropEvent,
    TreeProps,
  } from 'ant-design-vue/es/tree'
  const tData: TransferProps['dataSource'] = [
    { key: '0-0', title: '0-0' },
    {
      key: '0-1',
      title: '0-1',
      children: [
        { key: '0-1-0', title: '0-1-0' },
        { key: '0-1-1', title: '0-1-1' },
      ],
    },
    { key: '0-2', title: '0-3' },
  ]

  const transferDataSource: TransferProps['dataSource'] = []
  function flatten(list: TransferProps['dataSource'] = []) {
    list.forEach((item) => {
      transferDataSource.push(item)
      flatten(item.children)
    })
  }
  flatten(JSON.parse(JSON.stringify(tData)))

  function isChecked(
    selectedKeys: (string | number)[],
    eventKey: string | number
  ) {
    return selectedKeys.indexOf(eventKey) !== -1
  }
  //@ts-ignore
  function handleTreeData(
    treeNodes: TransferProps['dataSource'],
    targetKeys: string[] = []
  ) {
    return treeNodes.map(({ children, ...props }) => ({
      ...props,
      disabled: targetKeys.includes(props.key as string),
      children: handleTreeData(children ?? [], targetKeys),
    }))
  }
  const targetKeys = ref<string[]>([])

  const dataSource = ref(transferDataSource)

  const treeData = computed(() => {
    return handleTreeData(tData, targetKeys.value)
  })
  const gData = ref<TreeProps['treeData']>(treeData.value)
  console.log(gData)

  const onChecked = (
    e:
      | Parameters<TreeProps['onCheck']>[1]
      | Parameters<TreeProps['onSelect']>[1],
    checkedKeys: string[],
    onItemSelect: (n: any, c: boolean) => void
  ) => {
    const { eventKey } = e.node
    onItemSelect(eventKey, !isChecked(checkedKeys, eventKey))
  }
  const onDragEnter = (info: AntTreeNodeDragEnterEvent) => {
    console.log(info)
    // expandedKeys 需要展开时
    // expandedKeys.value = info.expandedKeys;
  }
  const onDrop = (info: AntTreeNodeDropEvent) => {
    console.log(info)
    const dropKey = info.node.key
    const dragKey = info.dragNode.key
    const dropPos = info.node.pos.split('-')
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1])
    const loop = (
      data: TreeProps['treeData'],
      key: string | number,
      callback: any
    ) => {
      data.forEach((item, index) => {
        if (item.key === key) {
          return callback(item, index, data)
        }
        if (item.children) {
          return loop(item.children, key, callback)
        }
      })
    }
    const data = [...gData.value]

    // Find dragObject
    let dragObj: TreeProps
    loop(
      data,
      dragKey,
      (item: TreeProps, index: number, arr: TreeProps['treeData']) => {
        arr.splice(index, 1)
        dragObj = item
      }
    )
    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item: TreeProps) => {
        item.children = item.children || []
        /// where to insert 示例添加到头部，可以是随意位置
        item.children.unshift(dragObj)
      })
    } else if (
      (info.node.children || []).length > 0 && // Has children
      info.node.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, (item: TreeProps) => {
        item.children = item.children || []
        // where to insert 示例添加到头部，可以是随意位置
        item.children.unshift(dragObj)
      })
    } else {
      let ar: TreeProps['treeData'] = []
      let i = 0
      loop(
        data,
        dropKey,
        (_item: TreeProps, index: number, arr: TreeProps['treeData']) => {
          ar = arr
          i = index
        }
      )
      if (dropPosition === -1) {
        //@ts-ignore
        ar.splice(i, 0, dragObj)
      } else {
        //@ts-ignore
        ar.splice(i + 1, 0, dragObj)
      }
    }
    gData.value = data
  }
  // const selectedGroupInventory = ref(null)
  // const selectedCity = ref(null)
  // const selectedDistrict = ref(null)
  // const selectedWard = ref(null)
  const router = useRouter()
  const toast = useToast()
  const isAddress = ref(true)
  const isInfor = ref(true)
  const isContact = ref(true)
  const checked = ref(false)
  const isLoading = ref<boolean>(false)
  const webCatalog = useWebCatalog()
  webCatalog.getAllWebCatalogAction()
  const { listWeb } = storeToRefs(webCatalog)
  const dataAttribute = useAttributeProduct()
  dataAttribute.getListAttributeAction()
  const { listAttributeProduct } = storeToRefs(dataAttribute)
  console.log(listAttributeProduct)

  // const isReInput = ref<boolean>(true)
  const EndTimeLoading = () => {
    isLoading.value = false
  }
  const attribute = reactive({
    title: '',
    type_code: [],
    latitude: '',
    longitude: '',
    contact_name: '',
    contact_email: '',
    contact_phone: '',
    address: null,
    address_country_id: '1',
    address_district_id: null,
    address_ward_id: null,
    address_state_id: null,
    address_detail: '',
    code: '',
    desc: '',
  })
  // if (
  //   inventory.title != '' ||
  //   inventory.latitude != '' ||
  //   inventory.longitude != '' ||
  //   inventory.contact_name != '' ||
  //   inventory.contact_email != '' ||
  //   inventory.contact_phone != ''
  // ) {
  //   isReInput.value = false
  // }
  const dataInventory = useInventory()
  const { messageError } = storeToRefs(dataInventory)
  const showManageChoice = ref<Boolean>(false)
  const handleChange = (value: string) => {
    if (value == 'multiple') {
      showManageChoice.value = true
    } else {
      showManageChoice.value = false
    }
  }
  const is_unique = ref<boolean>(false)
  const dataOption = reactive([
    {
      defaultOption: false,
      title: '',
    },
  ])

  const addOptions = () => {
    const data = {
      defaultOption: false,
      title: '',
    }
    dataOption.push(data)
  }
  const removeOptions = (index: number) => {
    dataOption.splice(index, 1)
  }
  const dataGroupInventory = useGroupInventory()
  const getListGroupInventory = () => {
    dataGroupInventory.getListGroupInventoryAction()
  }
  const { listGroupInventory } = storeToRefs(dataGroupInventory)
  // let options2 = ref<SelectProps['options']>([])
  //   const sourceProduct = reactive({
  //     title: 'nguồn A1',
  //     code: 'SOURCEA',
  //     latitude: '11',
  //     longitude: '11',
  //     contact: 'hoangthiyen',
  //     contact_email: 'ttb@gmail.com',
  //     contact_phone: '0123456789',
  //     address_country_id: null,
  //     address_district_id: null,
  //     address_ward_id: null,
  //     address_state_id: 1,
  //     address_detail: 'viet nam',
  //     desc: 'nguồn A tại hà nội',
  //     use_direct: '0',
  //   })
  const dataLocation = useLocation()
  const getDataCity = () => {
    dataLocation.getListAllCityAction()
  }
  const { listAllCity, listAllDistrict, listAllWard } =
    storeToRefs(dataLocation)
  const handleChangeCity = (value: number, name: any) => {
    dataLocation.getListAllDistrictAction(value)

    attribute.address = name.title + ', ' + 'Việt Nam'
  }
  const handleChangeDistrict = (value: number, name: any) => {
    dataLocation.getListAllWardAction(value)
    attribute.address = name.title + ', ' + attribute.address
  }
  const handleChangeWard = (value: number, name: any) => {
    attribute.address = name.title + ', ' + attribute.address
  }
  const createAttribute = () => {
    let data = {
      title: attribute.title,
      code: attribute.code,
      type_code: attribute.type_code,
      latitude: attribute.latitude,
      longitude: attribute.longitude,
      contact_name: attribute.contact_name,
      contact_email: attribute.contact_email,
      contact_phone: attribute.contact_phone,
      address: attribute.address,
      address_country_id: attribute.address_country_id,
      address_district_id: attribute.address_district_id,
      address_ward_id: attribute.address_ward_id,
      address_state_id: attribute.address_state_id,
      address_detail: attribute.address_detail,
      desc: attribute.desc,
    }
    dataInventory.createInventoryAction(data, toast, router, EndTimeLoading)
  }
</script>

<style></style>
