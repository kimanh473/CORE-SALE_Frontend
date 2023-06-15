<template>
  <div class="flex flex-nowrap">
    <div
      class="sidebarChange format-scroll h-screen"
      :style="{ width: sidebarWidth }"
      style="background-color: #373330"
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
              class="hover:bg-white/20 text-white/10 py-2"
              :class="checkClassActive(showMenuChil)"
              v-for="(item, index) in menuTree"
              :key="index"
              :label="item.label"
              :depth="0"
              :data="item.children"
              :to="item.to"
              :icon="item.icon"
              :smallLabel="item.smallLabel"
              :permission="item.permission"
              v-on:click="showMenuChil = !showMenuChil"
            />
          </div>
        </div>
        <!--   main-->
      </div>
    </div>
    <div class=" overflow-visible">
      <section x-show="" class="menuChil w-64 px-4 py-6 h-screen" :class="checkClass(showMenuChil)">
        <div class="">
          <h2 class="text-xl text-white">SẢN PHẨM</h2>
        </div>
        <div class="flex-column w-full" style="background-color: #4a4542"></div>
        <div class="justify-start">
          <div class="item-container flex-2 py-4 text-white">
            <sub-menu-item
              class="hover:bg-white/10 text-white flex-column just"
              v-for="(item, index) in menuTree[1].children"
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
      const logo = ref('')
      const toggleShowMenu = () => (showMenu.value = !showMenu.value)
      const toggleShowMenuChil = () =>
        (showMenuChil.value = !showMenuChil.value)
      const handleToSocial = () => {
        router.push({ path: '/', name: '' })
      }
      const checkClass = (index) => {
      if (index == true) {
        return " Show";
      } else {
        return " ";
      }
      
    };
    const checkClassActive = (index) => {
      if (index == true) {
        return " active";
      } else {
        return " ";
      }
      
    };
      return {
        showMenu,
        showMenuChil,
        checkClass,
        checkClassActive,
        logo,
        toggleShowMenu,
        toggleSidebar,
        collapsed,
        sidebarWidth,
        handleToSocial,
      }
    },
    data() {
      return {
        menuTree: [
          {
            label: 'DASHBOARD',
            icon: 'fal fa-tachometer-alt',
            to: '/',
            permission: ['ASSET_ASSET'],
            smallLabel: 'DASHBOARD',
            children: [
              {
                icon: '',
                label: 'Người dùng',
                to: '/',
                permission: ['ASSET_ASSET'],
              },
              {
                icon: '',
                label: 'Phân quyền',
                to: '',
                permission: ['ASSET_ASSET'],
              },
              {
                icon: '',
                label: 'Lịch sử hoạt động',
                to: '/',
                permission: ['ASSET_ASSET'],
              },
            ],
          },
          {
            label: 'BÁN HÀNG',
            icon: 'fal fa-usd-circle',
            to: '/sales-list',
            permission: ['ASSET_ASSET'],
            smallLabel: 'BÁN HÀNG',
            children: [
              {
                icon: '',
                label: 'Quản lý đơn hàng ',
                to: '/',
                permission: ['ASSET_ASSET'],
              },
              {
                icon: '',
                label: 'Hóa đơn',
                to: '/',
                permission: ['ASSET_ASSET'],
              },
              {
                icon: '',
                label: 'Hóa đơn vận chuyển',
                to: '/',
                permission: ['ASSET_ASSET'],
              },
              {
                icon: '',
                label: 'Công nợ',
                to: '/',
                permission: ['ASSET_ASSET'],
              },
            ],
          },
          {
            label: 'SẢN PHẨM',
            icon: 'fab fa-product-hunt',
            to: '/products-list',
            permission: ['ASSET_ASSET'],
            smallLabel: 'SẢN PHẨM',
          },
          {
            label: 'KHÁCH HÀNG',
            icon: 'fal fa-users',
            to: '/',
            permission: ['ASSET_ASSET'],
            smallLabel: 'KHÁCH HÀNG',
            children: [
              {
                icon: '',
                label: 'Nhà cung cấp',
                to: '/asset-suppliers',
                permission: ['ASSET_ASSET'],
              },
              {
                icon: '',
                label: 'Nhóm tài sản',
                to: '/asset-groups',
                permission: ['ASSET_ASSET'],
              },
              {
                icon: '',
                label: 'Nguồn gốc',
                to: '/',
                permission: ['ASSET_ASSET'],
              },
              {
                icon: '',
                label: 'Vị trí',
                to: '/',
                permission: ['ASSET_ASSET'],
              },
            ],
          },
          
          {
            label: 'MARKETING',
            icon: 'fal fa-bullhorn',
            to: '/',
            permission: ['ASSET_ASSET'],
            smallLabel: 'MARKETING',
          },
          {
            label: 'NỘI DUNG',
            icon: 'fal fa-clipboard-list-check',
            to: '/',
            permission: ['ASSET_ASSET'],
            smallLabel: 'NỘI DUNG',
          },
          {
            label: 'BÁO CÁO',
            icon: 'fal fa-chart-bar',
            to: '/',
            permission: ['ASSET_ASSET'],
            smallLabel: 'BÁO CÁO',
          },
          {
            label: 'CỬA HÀNG',
            icon: 'fal fa-warehouse',
            to: '/',
            permission: ['ASSET_ASSET'],
            smallLabel: 'CỬA HÀNG',
          },
          {
            label: 'CÀI ĐẶT',
            icon: 'fal fa-cogs',
            to: '/setting-admin',
            permission: ['ASSET_ASSET'],
            smallLabel: 'CÀI ĐẶT',
            children: [
              {
                icon: '',
                label: 'Người dùng',
                to: '/',
                permission: ['ASSET_ASSET'],
              },
              {
                icon: '',
                label: 'Phân quyền',
                to: '',
                permission: ['ASSET_ASSET'],
              },
              {
                icon: '',
                label: 'Lịch sử hoạt động',
                to: '/',
                permission: ['ASSET_ASSET'],
              },
            ],
          },
        ],
        children: [
          {
            icon: '',
            label: 'Tất cả',
            to: '/',
            permission: ['ASSET_ASSET'],
            smallLabel: 'Tất cả',
          },
          {
            icon: '',
            label: 'Cấp phát',
            to: '',
            permission: ['ASSET_ASSET'],
          },
          {
            icon: '',
            label: 'Thu hồi',
            to: '/',
            permission: ['ASSET_ASSET'],
          },
          {
            icon: '',
            label: 'Điều chuyển',
            to: '/',
            permission: ['ASSET_ASSET'],
          },
          {
            icon: '',
            label: 'Báo hỏng',
            to: '/',
            permission: ['ASSET_ASSET'],
          },
          {
            icon: '',
            label: 'Báo mất',
            to: '/',
            permission: ['ASSET_ASSET'],
          },
          {
            icon: '',
            label: 'Hủy tài sản',
            to: '/',
            permission: ['ASSET_ASSET'],
          },
          {
            icon: '',
            label: 'Thanh lý',
            to: '/',
            permission: ['ASSET_ASSET'],
          },
          {
            icon: '',
            label: 'Sửa chữa/nâng cấp',
            to: '/',
            permission: ['ASSET_ASSET'],
          },
          {
            icon: '',
            label: 'Hoàn thành sửa chữa',
            to: '/',
            permission: ['ASSET_ASSET'],
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
  .menu.active {
    background-color: white;
  }
</style>
