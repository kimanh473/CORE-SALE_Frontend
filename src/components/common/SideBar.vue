<template>
  <div class="flex flex-nowrap">
    <div
      class="sidebarChange format-scroll h-screen"
      :style="{ width: sidebarWidth }"
      style="background-color: #4a4542"
    >
      <div class="flex-column w-full" style="background-color: #4a4542">
        <div
          class="flex justify-between text-white items-center pt-4"
          :class="{ isToogle: collapsed }"
        >
          <a
            href=""
            class="flex items-center px-6 space-x-2 text-white"
            @click.prevent="handleToSocial"
            v-show="collapsed === true"
          >
            <img
              src="../../assets/images/logo.png"
              alt=""
              class="w-[35px] h-[35px]"
            />
          </a>
        </div>
        <!--   sidebar-->
        <div class="menu">
          <div class="menu flex-col overflow-hidden py-4 text-white/10">
            <menu-item
              class="hover:bg-white/20 text-white/10 py-2 cursor-pointer"
              v-for="(item, index) in menuTree"
              :key="index"
              :label="item.label"
              :depth="0"
              :data="item.children"
              :to="item.to"
              :icon="item.icon"
              :smallLabel="item.smallLabel"
              :permission="item.permission"
              v-on:click="menuParentClick(index, item.label)"
              @dblclick="showMenuChil = !showMenuChil"
            />
          </div>
        </div>
        <!--   main-->
      </div>
    </div>
    <div class="overflow-visible">
      <section
        x-show=""
        class="menuChil w-72 px-4 py-6 h-screen"
        :class="checkClass(showMenuChil)"
      >
        <div class="pt-4">
          <div class="grid grid-cols-4 gap-1 items-center text-white text-lg">
            <div class="col-span-3">
              <div class="items-center pl-2">{{ titleSubmenu }}</div>
            </div>
            <div class="text-right cursor-pointer">
              <i class="far fa-times" @click="submenuClose"></i>
            </div>
          </div>
        </div>
        <div class="flex-column w-full" style="background-color: #4a4542"></div>
        <div class="justify-start">
          <div class="item-container flex-2 py-4 text-white">
            <sub-menu-item
              class="hover:bg-white/10 text-white flex-column just"
              v-for="(item, index) in menuTree[menuParentIndex].children"
              :key="index"
              :label="item.label"
              :icon="item.icon"
              :depth="0"
              :smallLabel="item.smallLabel"
              :to="item.to"
            ></sub-menu-item>
          </div>
        </div>
      </section>
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
      const menuParentClick = (index, title) => {
        showMenuChil.value = false
        menuParentIndex.value = index
        showMenuChil.value = true
        titleSubmenu.value = title
      }
      const submenuClose = () => {
        showMenuChil.value = false
      }
      return {
        showMenu,
        showMenuChil,
        submenuClose,
        titleSubmenu,
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
    data() {
      return {
        menuTree: [
          {
            label: 'DASHBOARD',
            icon: 'fal fa-tachometer-alt',
            to: '/',
            permission: [''],
            smallLabel: 'DASHBOARD',
          },
          {
            label: 'BÁN HÀNG',
            icon: 'fal fa-usd-circle',
            to: '/sales-list',
            permission: [''],
            smallLabel: 'BÁN HÀNG',
            children: [
              {
                icon: '',
                label: 'Quản lý đơn hàng ',
                to: '/sales-list',
                permission: [''],
              },
              {
                icon: '',
                label: 'Hóa đơn',
                to: '/',
                permission: [''],
              },
              {
                icon: '',
                label: 'Hóa đơn vận chuyển',
                to: '/',
                permission: [''],
              },
              {
                icon: '',
                label: 'Công nợ',
                to: '/',
                permission: [''],
              },
            ],
          },
          {
            label: 'SẢN PHẨM',
            icon: 'fab fa-product-hunt',
            to: '/products-list',
            permission: [''],
            smallLabel: 'SẢN PHẨM',
            children: [
              {
                icon: '',
                label: 'Quản lý sản phẩm',
                to: '/products-list',
                permission: [''],
              },
              {
                icon: '',
                label: 'Quản lý nghành hàng',
                to: '/asset-groups',
                permission: [''],
              },
            ],
          },
          {
            label: 'KHÁCH HÀNG',
            icon: 'fal fa-users',
            to: '/3',
            permission: [''],
            smallLabel: 'KHÁCH HÀNG',
          },

          {
            label: 'MARKETING',
            icon: 'fal fa-bullhorn',
            to: '/4',
            permission: [''],
            smallLabel: 'MARKETING',
            children: [
              {
                icon: '',
                label: 'Mã giảm giá',
                to: '/asset-suppliers',
                permission: [''],
              },
              {
                icon: '',
                label: 'Chiến dịch khuyến mại',
                to: '/asset-groups',
                permission: [''],
              },
              {
                icon: '',
                label: 'Quảng cáo',
                to: '/',
                permission: [''],
              },
              {
                icon: '',
                label: 'Kết nối',
                to: '/',
                permission: [''],
              },
            ],
          },
          {
            label: 'NỘI DUNG',
            icon: 'fal fa-clipboard-list-check',
            to: '/5',
            permission: [''],
            smallLabel: 'NỘI DUNG',
            children: [
              {
                icon: '',
                label: 'Danh sách nội dung',
                to: '/',
                permission: [''],
              },
              {
                icon: '',
                label: 'Tạo nội dung',
                to: '/',
                permission: [''],
              },
              {
                icon: '',
                label: 'Sửa nội dung',
                to: '/',
                permission: [''],
              },
              {
                icon: '',
                label: 'Xóa nội dung',
                to: '/',
                permission: [''],
              },
              {
                icon: '',
                label: 'Xem trước',
                to: '/',
                permission: [''],
              },
            ],
          },
          {
            label: 'BÁO CÁO',
            icon: 'fal fa-chart-bar',
            to: '/6',
            permission: [''],
            smallLabel: 'BÁO CÁO',
          },
          {
            label: 'CỬA HÀNG',
            icon: 'fal fa-warehouse',
            to: '/7',
            permission: [''],
            smallLabel: 'CỬA HÀNG',
            children: [
              {
                icon: '',
                label: 'Sản phẩm',
                to: '/list-inventory',
                permission: [''],
              },
              {
                icon: '',
                label: 'Khách hàng',
                to: '/list-category',
                permission: [''],
              },
              {
                icon: '',
                label: 'Bán hàng',
                to: '',
                permission: [''],
              },
              {
                icon: '',
                label: 'Marketing',
                to: '/',
                permission: [''],
              },
              {
                icon: '',
                label: 'Giỏ hàng',
                to: '/',
                permission: [''],
              },
              {
                icon: '',
                label: 'Cài đặt gian hàng',
                to: '/',
                permission: [''],
              },
              {
                icon: '',
                label: 'Cài đặt kho',
                to: '/list-inventory',
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
            children: [
              {
                icon: '',
                label: 'Người dùng',
                to: '/',
                permission: [''],
              },
              {
                icon: '',
                label: 'Nhóm người dùng',
                to: '/group-admin-view',
                permission: [''],
              },
              {
                icon: '',
                label: 'Phân quyền website',
                to: '',
                permission: [''],
              },
              {
                icon: '',
                label: 'Phân quyền kho',
                to: '',
                permission: [''],
              },
              {
                icon: '',
                label: 'Lịch sử hoạt động',
                to: '/',
                permission: [''],
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
    background-color: #524d49;
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
  }
  .menuChil.Show {
    transform: translateX(0);
  }
</style>
