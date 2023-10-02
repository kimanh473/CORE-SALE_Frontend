<template>
  <div class="flex flex-nowrap">
    <div
      class="sidebarChange format-scroll h-screen"
      :style="{ width: sidebarWidth }"
      style="background-color: var(--color-bg-menu)"
    >
      <div
        class="flex-column w-full"
        style="background-color: var(--color-bg-menu)"
      >
        <div class="flex justify-center text-white items-center pt-3">
          <a
            href=""
            class="flex items-center text-white"
            @click.prevent="handleToSocial"
            v-show="collapsed === true"
          >
            <img
              src="../../assets/images/logo.png"
              alt=""
              class="w-[45px] h-[45px]"
            />
          </a>
        </div>
        <!--   sidebar-->
        <div class="menu">
          <div class="menu flex-col overflow-hidden py-4 text-white/10">
            <menu-item
              class="hover:bg-white/10 py-2 cursor-pointer"
              v-for="(item, index) in menuTree"
              :key="index"
              :class="{ active: isActived === index }"
              :label="item.label"
              :depth="0"
              :data="item.children1"
              :to="item.to"
              :icon="item.icon"
              :smallLabel="item.smallLabel"
              :permission="item.permission"
              v-on:click="
                menuParentClick(index, item.label), (isActived = index)
              "
              @dblclick="showMenuChil = !showMenuChil"
            />
          </div>
        </div>
        <!--   main-->
      </div>
    </div>
    <div class="w-screen absolute">
      <div
        class="menuChil px-4 py-6 h-screen"
        :class="checkClass(showMenuChil)"
      >
        <div class="px-5">
          <div class="grid grid-cols-4 gap-1 items-center text-white text-lg">
            <div class="col-span-3">
              <div class="items-center pl-2">{{ titleSubmenu }}</div>
            </div>
            <div class="text-right cursor-pointer">
              <i class="far fa-times" @click="submenuClose"></i>
            </div>
          </div>
        </div>
        <div v-bind:class="getClass()">
          <div class="">
            <div class="justify-start">
              <div class="item-container flex-2 py-6 text-white">
                <div
                  v-if="checkArray(menuTree[menuParentIndex]?.children1) != ''"
                  class="items-center pl-2 py-4 text-lg text-zinc-400"
                >
                  {{ checkArray(menuTree[menuParentIndex]?.children1) }}
                </div>
                <sub-menu-item
                  class="hover:bg-[#403934] flex-column w-60 rounded-sm"
                  v-for="(item, index) in menuTree[menuParentIndex].children1"
                  :key="index"
                  :label="item.label"
                  :icon="item.icon"
                  :depth="0"
                  :smallLabel="item.smallLabel"
                  :to="item.to"
                ></sub-menu-item>
              </div>
            </div>
          </div>
          <div
            v-if="checkArray(menuTree[menuParentIndex]?.children2) != ''"
            class=""
          >
            <div class="justify-start">
              <div class="item-container flex-2 py-6 text-white">
                <div
                  v-if="checkArray(menuTree[menuParentIndex]?.children2) != ''"
                  class="items-center pl-2 py-4 text-lg text-zinc-400"
                >
                  {{ checkArray(menuTree[menuParentIndex]?.children2) }}
                </div>
                <sub-menu-item
                  class="hover:bg-[#403934] flex-column w-60 rounded-sm"
                  v-for="(item, index) in menuTree[menuParentIndex].children2"
                  :key="index"
                  :label="item.label"
                  :icon="item.icon"
                  :depth="0"
                  :smallLabel="item.smallLabel"
                  :to="item.to"
                ></sub-menu-item>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue'
  import { toggleSidebar } from './state'
  import { collapsed } from './state'
  import { sidebarWidth } from './state'
  import MenuItem from './MenuItem.vue'
  import SubMenuItem from './SubMenuItem.vue'
  import { useRouter } from 'vue-router'
  // import { LOGO_CTY } from "@/constants/ApiUrl";
  export default {
    components: {
      MenuItem,
      SubMenuItem,
    },
    setup() {
      const router = useRouter()
      const showMenu = ref(false)
      const showMenuChil = ref(false)
      const isActived = ref(false)
      const menuParentIndex = ref(0)
      const titleSubmenu = ref('')
      const titleSubmenuGroup = ref('')
      const logo = ref('')
      const toggleShowMenu = () => (showMenu.value = !showMenu.value)
      const toggleShowMenuChil = () =>
        (showMenuChil.value = !showMenuChil.value)
      const handleToSocial = () => {
        router.push({ path: '/', name: '' })
      }
      const checkClass = (index) => {
        if (index == true) {
          return ' Show'
        } else {
          return ' '
        }
      }
      const checkClassActive = (index) => {
        if (index == true) {
          return ' active'
        } else {
          return ' '
        }
      }
      const ShowSubmenu = (index) => {
        if (index != '') {
          return ' grid grid-cols-2 gap-4 px-4'
        } else {
          return ' grid grid-cols-1 gap-4 px-4'
        }
      }

      const menuParentClick = (index, title) => {
        showMenuChil.value = false
        menuParentIndex.value = index
        showMenuChil.value = true
        titleSubmenu.value = title
      }
      const submenuClose = () => {
        showMenuChil.value = false
      }
      const checkArray = (arr) => {
        if (arr != null) {
          if (arr[0] != undefined) {
            return arr[0].submenuGroup
          } else {
            return ''
          }
        } else {
          return ''
        }
      }

      return {
        showMenu,
        showMenuChil,
        submenuClose,
        checkArray,
        ShowSubmenu,
        titleSubmenu,
        titleSubmenuGroup,
        isActived,
        menuParentIndex,
        checkClass,
        checkClassActive,
        logo,
        toggleShowMenu,
        toggleSidebar,
        collapsed,
        sidebarWidth,
        handleToSocial,
        menuParentClick,
      }
    },
    methods: {
      getClass() {
        if (
          this.checkArray(this.menuTree[this.menuParentIndex]?.children2) != ''
        ) {
          return ' grid grid-cols-2 gap-4 pl-5'
        } else {
          return ' grid grid-cols-1 gap-0 pl-5'
        }
      },
    },
    data() {
      return {
        menuTree: [
          {
            label: 'TỔNG QUÁT',
            icon: 'fal fa-tachometer-alt',
            to: '/',
            permission: [''],
            smallLabel: 'DASHBOARD',
            children1: [],
          },
          {
            label: 'BÁN HÀNG',
            icon: 'fal fa-usd-circle',
            to: '/sales-list',
            permission: [''],
            smallLabel: 'BÁN HÀNG',
            children1: [
              // {
              //   icon: '',
              //   label: 'Quản lý đơn hàng ',
              //   to: '/sales-list',
              //   permission: [''],
              //   submenuGroup: '',
              // },
              // {
              //   icon: '',
              //   label: 'Hóa đơn',
              //   to: '/',
              //   permission: [''],
              //   submenuGroup: '',
              // },
              // {
              //   icon: '',
              //   label: 'Hóa đơn vận chuyển',
              //   to: '/',
              //   permission: [''],
              // },
              // {
              //   icon: '',
              //   label: 'Công nợ',
              //   to: '/',
              //   permission: [''],
              // },
            ],
          },
          {
            label: 'SẢN PHẨM',
            icon: 'fab fa-product-hunt',
            to: '/products-list',
            permission: [''],
            smallLabel: 'SẢN PHẨM',
            children1: [
              {
                icon: '',
                label: 'Quản lý sản phẩm',
                to: '/products-list',
                submenuGroup: '',
                permission: [''],
              },
              {
                icon: '',
                label: 'Điều chỉnh giá',
                to: '/price-adjust',
                submenuGroup: '',
                permission: [''],
              },
              {
                icon: '',
                label: 'Ngành hàng',
                to: '/category-list',
                submenuGroup: '',
                permission: [''],
              },
              {
                icon: '',
                label: 'Đơn vị tính',
                to: '/list-product-unit',
                submenuGroup: '',
                permission: [''],
              },
              {
                icon: '',
                label: 'Thông số',
                to: '/list-specification',
                submenuGroup: '',
                permission: [''],
              },
              {
                icon: '',
                label: 'Thuế',
                to: '/list-tax',
                submenuGroup: '',
                permission: [''],
              },
              {
                icon: '',
                label: 'Tiền tệ',
                to: '/list-currency',
                submenuGroup: '',
                permission: [''],
              },
              // {
              //   icon: '',
              //   label: 'Bảng kích cỡ thông số',
              //   to: '/list-product-unit',
              //   submenuGroup: '',
              //   permission: [''],
              // },
            ],
          },
          {
            label: 'KHÁCH HÀNG',
            icon: 'fal fa-users',
            to: '/3',
            submenuGroup: '',
            permission: [''],
            smallLabel: 'KHÁCH HÀNG',
            children1: [
              {
                icon: '',
                label: 'Danh sách thông tin khách hàng',
                to: '/list-customer-profile',
                submenuGroup: '',
                permission: [''],
              },
              {
                icon: '',
                label: 'Danh sách tài khoản khách hàng',
                to: '/list-customer-account',
                submenuGroup: '',
                permission: [''],
              },
              {
                icon: '',
                label: 'Danh sách nhóm tài khoản',
                to: '/list-group-customer',
                submenuGroup: '',
                permission: [''],
              },
            ],
          },
          {
            label: 'TIẾP THỊ',
            icon: 'fal fa-bullhorn',
            to: '/4',
            submenuGroup: '',
            permission: [''],
            smallLabel: 'TIẾP THỊ',
            children1: [
              // {
              //   icon: '',
              //   label: 'Mã giảm giá',
              //   to: '/asset-suppliers',
              //   submenuGroup: '',
              //   permission: [''],
              // },
              // {
              //   icon: '',
              //   label: 'Chiến dịch khuyến mại',
              //   to: '/asset-groups',
              //   submenuGroup: '',
              //   permission: [''],
              // },
              // {
              //   icon: '',
              //   label: 'Quảng cáo',
              //   to: '/',
              //   permission: [''],
              // },
              // {
              //   icon: '',
              //   label: 'Kết nối',
              //   to: '/',
              //   permission: [''],
              // },
            ],
          },
          {
            label: 'NỘI DUNG',
            icon: 'fal fa-clipboard-list-check',
            to: '/5',
            permission: [''],
            smallLabel: 'NỘI DUNG',
            children1: [
              // {
              //   icon: '',
              //   label: 'Danh sách nội dung',
              //   to: '/',
              //   permission: [''],
              //   submenuGroup: '',
              // },
              // {
              //   icon: '',
              //   label: 'Tạo nội dung',
              //   to: '/',
              //   permission: [''],
              //   submenuGroup: '',
              // },
              // {
              //   icon: '',
              //   label: 'Sửa nội dung',
              //   to: '/',
              //   permission: [''],
              //   submenuGroup: '',
              // },
              // {
              //   icon: '',
              //   label: 'Xóa nội dung',
              //   to: '/',
              //   permission: [''],
              //   submenuGroup: '',
              // },
              // {
              //   icon: '',
              //   label: 'Xem trước',
              //   to: '/',
              //   permission: [''],
              //   submenuGroup: '',
              // },
            ],
          },
          {
            label: 'BÁO CÁO',
            icon: 'fal fa-chart-bar',
            to: '/',
            permission: [''],
            smallLabel: 'BÁO CÁO',
          },
          {
            label: 'CỬA HÀNG',
            icon: 'fal fa-warehouse',
            to: '/',
            permission: [''],
            smallLabel: 'CỬA HÀNG',
            children1: [
              {
                icon: '',
                label: 'Danh mục sản phẩm',
                to: '/list-inventory',
                submenuGroup: 'Sản phẩm',
                permission: [''],
              },
              // {
              //   icon: '',
              //   label: 'Loại sản phẩm',
              //   to: '/asset-groups',
              //   submenuGroup: 'Sản phẩm',
              //   permission: [''],
              // },
              // {
              //   icon: '',
              //   label: 'Đơn vị tính',
              //   to: '/asset-groups',
              //   submenuGroup: 'Sản phẩm',
              //   permission: [''],
              // },
              {
                icon: '',
                label: 'Thông số',
                to: '/list-product-unit',
                submenuGroup: 'Sản phẩm',
                permission: [''],
              },
              {
                icon: '',
                label: 'Bảng kích cỡ thông số',
                to: '/list-specification',
                submenuGroup: 'Sản phẩm',
                permission: [''],
              },
              {
                icon: '',
                label: 'Thuộc tính sản phẩm',
                to: '/list-attribute-product',
                submenuGroup: 'Sản phẩm',
                permission: [''],
              },
              {
                icon: '',
                label: 'Nhóm thuộc tính sản phẩm',
                to: '/list-attribute-group',
                submenuGroup: 'Sản phẩm',
                permission: [''],
              },
              // {
              //   icon: '',
              //   label: 'Tiền tệ',
              //   to: '/asset-groups',
              //   submenuGroup: 'Sản phẩm',
              //   permission: [''],
              // },
              // {
              //   icon: '',
              //   label: 'Thuế',
              //   to: '/asset-groups',
              //   submenuGroup: 'Sản phẩm',
              //   permission: [''],
              // },
              // {
              //   icon: '',
              //   label: 'Nguồn hàng',
              //   to: '/asset-groups',
              //   submenuGroup: 'Sản phẩm',
              //   permission: [''],
              // },
              // {
              //   icon: '',
              //   label: 'Kho hàng',
              //   to: '/asset-groups',
              //   submenuGroup: 'Sản phẩm',
              //   permission: [''],
              // },
              // {
              //   icon: '',
              //   label: 'Cài đặt sản phẩm',
              //   to: '/asset-groups',
              //   submenuGroup: 'Sản phẩm',
              //   permission: [''],
              // },
            ],
            children2: [
              // {
              //   icon: '',
              //   label: 'Nhóm khách hàng',
              //   to: '/list-inventory',
              //   submenuGroup: 'Khách hàng',
              //   permission: [''],
              // },
              // {
              //   icon: '',
              //   label: 'Cài đặt khách hàng',
              //   to: '/asset-groups',
              //   submenuGroup: 'Khách hàng',
              //   permission: [''],
              // },
              {
                icon: '',
                label: 'Cài đặt kho',
                to: '/list-inventory',
                submenuGroup: 'Kho',
                permission: [''],
              },
              {
                icon: '',
                label: 'Cài đặt nhóm kho',
                to: '/list-group-inventory',
                submenuGroup: 'Kho',
                permission: [''],
              },
            ],
          },
          {
            label: 'CÀI ĐẶT',
            icon: 'fal fa-cogs',
            to: '/setting-admin',
            permission: [''],
            smallLabel: 'CÀI ĐẶT',
            children1: [
              {
                icon: '',
                label: 'Người dùng',
                to: '/list-user',
                permission: [''],
                submenuGroup: 'Hệ thống',
              },
              {
                icon: '',
                label: 'Nhóm người dùng',
                to: '/group-admin-view',
                permission: [''],
                submenuGroup: 'Hệ thống',
              },
              // {
              //   icon: '',
              //   label: 'Phân quyền website',
              //   to: '',
              //   permission: [''],
              //   submenuGroup: 'Hệ thống',
              // },
              // {
              //   icon: '',
              //   label: 'Phân quyền kho',
              //   to: '',
              //   permission: [''],
              //   submenuGroup: 'Hệ thống',
              // },
              // {
              //   icon: '',
              //   label: 'Lịch sử hoạt động',
              //   to: '/',
              //   permission: [''],
              //   submenuGroup: 'Hệ thống',
              // },
              {
                icon: '',
                label: 'Danh mục website',
                to: '/list-web',
                permission: [''],
                submenuGroup: 'Hệ thống',
              },
              // {
              //   icon: '',
              //   label: 'Tên miền',
              //   to: '/',
              //   permission: [''],
              //   submenuGroup: 'Hệ thống',
              // },
            ],
            children2: [
              {
                icon: '',
                label: 'Đơn hàng',
                to: '/setting-order',
                permission: [''],
                submenuGroup: 'Bán hàng',
              },
              {
                icon: '',
                label: 'Phương thức thanh toán',
                to: '/setting-payment',
                permission: [''],
                submenuGroup: 'Bán hàng',
              },
              {
                icon: '',
                label: 'Sản phẩm',
                to: '/setting-product',
                permission: [''],
                submenuGroup: 'Bán hàng',
              },
              {
                icon: '',
                label: 'Khách hàng',
                to: '/setting-customer',
                permission: [''],
                submenuGroup: 'Bán hàng',
              },
              {
                icon: '',
                label: 'Tiếp thị',
                to: '/setting-discount',
                permission: [''],
                submenuGroup: 'Bán hàng',
              },
            ],
          },
        ],
      }
    },
  }
</script>
<style>
  .menu {
    z-index: 10;
  }
  .menuChil {
    background-color: #474347;
    /* box-shadow: 0 0 3px #000;
    left: 100%;
    padding: 2rem 0 0;
    position: relative;
    top: 0;
    transform: translateX(-100%);
    transition-duration: 100s;
    transition-property: transform, visibility;
    transition-timing-function: ease-in-out; */
    box-shadow: 1px 0 3px #ded8d8;
    transform: translateX(-150%);
    transition: all 0.7s;
    z-index: -1;
    position: absolute;
    padding-left: 90px;
    font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.36;
    color: aquamarine;
  }
  .menuChil.Show {
    transform: translateX(0);
  }
  .active {
    background-color: rgb(255 255 255/0.2);
  }
</style>
