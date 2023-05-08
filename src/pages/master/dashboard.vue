<template>
  <div class="w-screen h-screen flex">
    <!-- Side bar -->
    <div class="w-[400px] bg-gray-200 text-white overflow-y-auto h-[100vh]" v-show="showSide">
      <div class="h-[100px] bg-gray-800 flex justify-start items-center ">
        <div class="px-[20px]">
          <a href="#" class="router-link-active">
            <img src="https://vuely.theironnetwork.org/static/img/site-logo.png" width="100" height="30">
          </a>
        </div>
      </div>
      <div class="h-[50px] bg-gray-800 flex justify-start  items-center ">
        <div class="px-[20px]">
          <img src="https://vuely.theironnetwork.org/static/avatars/user-13.jpg" height="40px" width="40px"
               style="border-radius: 20px">
        </div>
        <div class="px-[1px]">
          <span>Nguyen Nam</span>
        </div>
        <div class="px-[20px]">
          <button type="button" class="ma-0 v-btn v-btn--flat v-btn--icon v-btn--round theme--dark v-size--default">
            ...
          </button>
        </div>
      </div>
      <div class="h-[50px] bg-gray-800 flex justify-start items-center">
        <div class="px-[20px]" style="font-size: 12px">
          <span>General</span>
        </div>
      </div>
      <div class="container bg-gray-800 py-[20px]">
        <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">
          <div class=" flex flex-col justify-between space-y-[10px]">
            <div @click="toggleshowDashBoard()">
              <div
                  class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                <svg class=" mr-2 h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                </svg>
                <!--               <a href="/cryto"></a>-->
                DashBoard
                <span class="sidebar-label">new</span>
              </div>
            </div>
            <div v-if="showDashBoard" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/ecomerce"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                E-Commerce
              </router-link>

              <router-link to="/cryto"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Cryto
                <span class="sidebar-label">new</span>
              </router-link>

              <router-link to="/"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                CRM
                <span class="sidebar-label">new</span>
              </router-link>

              <router-link to="/Web"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Web Analytics
              </router-link>

              <router-link to="/magazine"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Magazine
              </router-link>
              <router-link to="/new"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                News
              </router-link>
              <router-link to="/widget"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Widgets
              </router-link>
              <router-link to="/saas"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                SAAS
                <span class="sidebar-label">new</span>
              </router-link>
            </div>
            <div @click="toggleshowTable()"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
              </svg>
              Bảng
              <span class="sidebar-label">new</span>
            </div>

            <div v-if="showTable" class=" flex flex-col justify-between space-y-[10px]">

              <router-link :to="{path:'warehouse-group-list'}"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                Nhóm Kho
              </router-link>

              <router-link :to="{path:'warehouse-list'}"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                 Kho
              </router-link>

              <router-link :to="{path:'category-list'}"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
               Danh mục sản phẩm
              </router-link>

              <router-link to="/#"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                Sản phẩm
              </router-link>
              <router-link :to="{path:'careservice-list'}"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                Dịch vụ chăm sóc
              </router-link>

              <router-link :to="{path:'subsystem-list'}"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                Phân hệ
              </router-link>
              <router-link to="/#"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                Tài khoản
              </router-link>

              <router-link :to="{path:'tax-list'}"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                Thuế
              </router-link>
            </div>
            <div @click="toggleshowCryto()"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
              </svg>
              Quản lý
              <span class="sidebar-label">new</span>
            </div>
            <div v-if="showCryto" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/market"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                Vai trò
                <span class="sidebar-label">new</span>
              </router-link>

              <router-link to="/wallet"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Quyền
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/crm"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Nhóm người dùng
                <span class="sidebar-label">new</span>
              </router-link>
            </div>
            <div @click="toggleshowCrm()"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
              </svg>
              CRM
              <span class="sidebar-label">new</span>
            </div>
            <div v-if="showCrm" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/project"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                Projects
                <span class="sidebar-label">new</span>
              </router-link>

              <router-link to="/projectdetail"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Project Details
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/client "
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Clients
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/report "
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
                Reports
              </router-link>
            </div>

            <div @click="toggleshowCourses()"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                      clip-rule="evenodd"></path>
              </svg>
              Courses
            </div>

            <div v-if="showCourses" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/course"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                Courses
              </router-link>

              <router-link to="/courselist"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Courses Lists
              </router-link>
              <router-link to="/coursedetail "
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Courses Detail
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/signin "
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
                Sign In
              </router-link>
              <router-link to="/payment "
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
                Payment
              </router-link>
            </div>


            <div @click="toggleshowWidgets()"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                      clip-rule="evenodd"></path>
              </svg>
              Widgets
            </div>
            <div v-if="showWidgets" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/user"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                Users
              </router-link>

              <router-link to="/chart"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Charts
              </router-link>

            </div>

            <div @click="toggleshowEComerce()"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
              </svg>
              E-Commerce
              <span class="sidebar-label">new</span>
            </div>
            <div v-if="showEComerce" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/shopwith"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                ShopWithAlgolia
              </router-link>

              <router-link to="/shop"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Shop
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/productdetail"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Product Detail
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/addproduct"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Add Product
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/editproduct"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Edit Product
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/editdetail"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Edit Detail
                <span class="sidebar-label">new</span>
              </router-link>

              <router-link to="/cart"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Cart
              </router-link>
              <router-link to="/checkout"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Check out
              </router-link>

              <router-link to="/card"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Cards
              </router-link>
            </div>


            <div @click="toggleshowPage()"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
              </svg>
              Pages
            </div>
            <div v-if="showPage" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/blog"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                Blog
              </router-link>

              <router-link to="/gallery"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Gallery
              </router-link>
              <router-link to="/pricing1"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Pricing 1
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/pricing2"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Pricing 2
              </router-link>
              <router-link to="/blank"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Blank
                <span class="sidebar-label">new</span>
              </router-link>
            </div>

            <div @click="toggleshowSession()"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
              </svg>
              Session
            </div>
            <div v-if="showSession" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/signup"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                Sign Up
              </router-link>

              <router-link to="/login"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Login
              </router-link>
              <router-link to="/lock"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Lock Screen
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/forgot-password"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Forgot Password
              </router-link>
              <router-link to="/reset-password "
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Reset Password
                <span class="sidebar-label">new</span>
              </router-link>
            </div>
            <div class="h-[10px] flex justify-start  items-center ">
              <div class="px-[10px]" style="font-size: 12px">
                <span>Module</span>
              </div>
            </div>
            <router-link to="/inbox"
                         class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
              </svg>
              Inbox
            </router-link>
            <router-link to="/chat"
                         class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
              </svg>
              Chat
            </router-link>
            <div class="h-[10px] flex justify-start  items-center ">
              <div class="px-[10px]" style="font-size: 12px">
                <span>Components</span>
              </div>
            </div>

            <div @click="toggleshowUI()"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg class="mr-2 h-5 w-5 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                   stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6-6a6 6 0 0 1 -8 -8l3.5 3.5"/>
              </svg>
              UI Elements
              <span class="sidebar-label">new</span>
            </div>
            <div v-if="showUI" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/app"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                App Bars
                <span class="sidebar-label">new</span>
              </router-link>

              <router-link to="/banner "
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Banners
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/crm"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                List Item Groups
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/widget"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Slide Groups
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/overlays"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Overlays
                <span class="sidebar-label">new</span>
              </router-link>
            </div>
            <div @click="toggleshowTree()"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
              </svg>
              Treeview
            </div>
            <div v-if="showTree" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/ecomerce"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                E-Commerce
              </router-link>

              <router-link to="/cryto"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Cryto
              </router-link>
              <router-link to="/crm"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                CRM
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/widget"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Widgets
              </router-link>
              <router-link to="/saas"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                SAAS
                <span class="sidebar-label">new</span>
              </router-link>
            </div>

            <div @click="toggleshowTime"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
              </svg>
              Timelines
            </div>
            <div v-if="showTime" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/ecomerce"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                E-Commerce
              </router-link>

              <router-link to="/cryto"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Cryto
              </router-link>
              <router-link to="/crm"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                CRM
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/widget"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Widgets
              </router-link>
              <router-link to="/saas"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                SAAS
                <span class="sidebar-label">new</span>
              </router-link>
            </div>

            <div @click="toggleshowForm"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
              </svg>
              Forms
            </div>
            <div v-if="showForm" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/ecomerce"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                E-Commerce
              </router-link>

              <router-link to="/cryto"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Cryto
              </router-link>
              <router-link to="/crm"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                CRM
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/widget"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Widgets
              </router-link>
              <router-link to="/saas"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                SAAS
                <span class="sidebar-label">new</span>
              </router-link>
            </div>

            <div @click="toggleshowChart()"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
              </svg>
              Charts
            </div>
            <div v-if="showChart" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/ecomerce"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                E-Commerce
              </router-link>

              <router-link to="/cryto"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Cryto
              </router-link>
              <router-link to="/crm"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                CRM
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/widget"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Widgets
              </router-link>
              <router-link to="/saas"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                SAAS
                <span class="sidebar-label">new</span>
              </router-link>
            </div>
            <div @click="toggleshowIcon()"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
              </svg>
              Icons
            </div>
            <div v-if="showIcon" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/ecomerce"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                E-Commerce
              </router-link>

              <router-link to="/cryto"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Cryto
              </router-link>
              <router-link to="/crm"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                CRM
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/widget"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Widgets
              </router-link>
              <router-link to="/saas"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                SAAS
                <span class="sidebar-label">new</span>
              </router-link>
            </div>

            <div @click="toggleshowMap()"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
              </svg>
              Maps
            </div>
            <div v-if="showMap" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/ecomerce"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                E-Commerce
              </router-link>

              <router-link to="/cryto"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Cryto
              </router-link>
              <router-link to="/crm"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                CRM
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/widget"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Widgets
              </router-link>
              <router-link to="/saas"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                SAAS
                <span class="sidebar-label">new</span>
              </router-link>
            </div>
            <div class="h-[10px] flex justify-start  items-center ">
              <div class="px-[10px]" style="font-size: 12px">
                <span>Applications</span>
              </div>
            </div>
            <div @click="toggleshowUser()"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
              </svg>
              Users
            </div>
            <div v-if="showUser" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/ecomerce"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                E-Commerce
              </router-link>

              <router-link to="/cryto"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Cryto
              </router-link>
              <router-link to="/crm"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                CRM
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/widget"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Widgets
              </router-link>
              <router-link to="/saas"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                SAAS
                <span class="sidebar-label">new</span>
              </router-link>
            </div>
            <div @click="toggleshowCalender()"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
              </svg>
              Calenders
            </div>
            <div v-if="showCalender" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/ecomerce"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                E-Commerce
              </router-link>

              <router-link to="/cryto"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Cryto
              </router-link>
              <router-link to="/crm"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                CRM
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/widget"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Widgets
              </router-link>
              <router-link to="/saas"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                SAAS
                <span class="sidebar-label">new</span>
              </router-link>
            </div>
            <div class="h-[10px] flex justify-start  items-center ">
              <div class="px-[10px]" style="font-size: 12px">
                <span>Features</span>
              </div>
            </div>
            <div @click="toggleshowEditor()"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
              </svg>
              Editor
            </div>
            <div v-if="showEditor" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/ecomerce"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                E-Commerce
              </router-link>

              <router-link to="/cryto"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Cryto
              </router-link>
              <router-link to="/crm"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                CRM
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/widget"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Widgets
              </router-link>
              <router-link to="/saas"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                SAAS
                <span class="sidebar-label">new</span>
              </router-link>
            </div>
            <div @click="toggleshowDrag()"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
              </svg>
              DragAndDrop
            </div>
            <div v-if="showDrag" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/ecomerce"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                E-Commerce
              </router-link>

              <router-link to="/cryto"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Cryto
              </router-link>
              <router-link to="/crm"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                CRM
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/widget"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Widgets
              </router-link>
              <router-link to="/saas"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                SAAS
                <span class="sidebar-label">new</span>
              </router-link>
            </div>
            <div class="h-[10px] flex justify-start  items-center ">
              <div class="px-[10px]" style="font-size: 12px">
                <span>Extensions</span>
              </div>
            </div>
            <div @click="toggleshowImage()"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
              </svg>
              ImageCropper
            </div>
            <div v-if="showImage" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/ecomerce"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                E-Commerce
              </router-link>

              <router-link to="/cryto"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Cryto
              </router-link>
              <router-link to="/crm"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                CRM
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/widget"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Widgets
              </router-link>
              <router-link to="/saas"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                SAAS
                <span class="sidebar-label">new</span>
              </router-link>
            </div>
            <div @click="toggleshowVideo()"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
              </svg>
              Video Player
            </div>
            <div v-if="showVideo" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/ecomerce"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                E-Commerce
              </router-link>

              <router-link to="/cryto"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Cryto
              </router-link>
              <router-link to="/crm"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                CRM
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/widget"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Widgets
              </router-link>
              <router-link to="/saas"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                SAAS
                <span class="sidebar-label">new</span>
              </router-link>
            </div>
            <div @click="toggleshowDropzone()"
                 class="inline-flex relative items-center py-[10px] px-[30px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
              </svg>
              Dropzone
            </div>
            <div v-if="showDropzone" class=" flex flex-col justify-between space-y-[10px]">

              <router-link to="/ecomerce"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">

                E-Commerce
              </router-link>

              <router-link to="/cryto"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Cryto
              </router-link>
              <router-link to="/crm"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                CRM
                <span class="sidebar-label">new</span>
              </router-link>
              <router-link to="/widget"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                Widgets
              </router-link>
              <router-link to="/saas"
                           class="inline-flex relative items-center py-[10px] px-[50px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">

                SAAS
                <span class="sidebar-label">new</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-full bg-gray-400 ">
      <div class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b ">
        <!-- Hambuger menu -->
        <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class=" w-[25px] h-[25px]">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
          </svg>
        </div>

        <button @click="toggleshowMenu()" class="mx-10 w-[30px]">
          <svg class="w-[25px] h-[25px] text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
          </svg>

        </button>

        <div v-if="showmenu" role="menu" class="v-menu__content ">
          <div class="dropdown-content w-[321px] mt-60 ml-2">
            <div class="flex border-[2px] justify-between bg-indigo-400">
              <span class="white--text font-medium my-2">Quick Links</span>
              <span class="v-badge warning">NEW</span>
            </div>
            <div class="flex border-[2px] justify-between">
              <div>

                <div class="v-list-item v-list-item--link theme--light flex w">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                  </svg>

                  <span>Gallery</span>
                </div>
                <div class="v-list-item v-list-item--link theme--light"><i
                    class="mr-3 ti-layout error--text"></i><span>Tables</span></div>
                <div class="v-list-item v-list-item--link theme--light"><i
                    class="mr-3 ti-email success--text"></i><span>Inbox</span></div>
              </div>

              <div>
                <div class="v-list-item v-list-item--link theme--light"><i
                    class="mr-3 ti-gallery primary--text"></i><span>Gallery</span></div>
                <div class="v-list-item v-list-item--link theme--light"><i
                    class="mr-3 ti-layout error--text"></i><span>Tables</span></div>
                <div class="v-list-item v-list-item--link theme--light"><i
                    class="mr-3 ti-email success--text"></i><span>Inbox</span></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Search bar -->

        <div class="w-[calc(100%-30px)] flex">
          <div class="w-[calc(100%-200px)] flex justify-center ">
            <!-- Search bar -->
            <form class="flex items-center w-[500px]">
              <label for="voice-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor"
                       viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"></path>
                  </svg>
                </div>
                <input type="text" id="voice-search"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Search..." required>
                <router-link to="/" class="flex absolute inset-y-0 right-0 items-center pr-3">
                  <svg aria-hidden="true"
                       class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                       fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                          clip-rule="evenodd"></path>
                  </svg>
                </router-link>
              </div>
            </form>
          </div>

          <button class="mx-10 w-[30px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                  d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/>
            </svg>

          </button>

          <!-- User login -->
          <div class="w-[200px] ">
            <div class="flex items-center justify-start space-x-4" @click="toggleDrop">
              <img class="w-10 h-10 rounded-full border-2 border-gray-50"
                   src="https://vuely.theironnetwork.org/static/avatars/user-13.jpg"
                   alt="">
              <div class="font-semibold dark:text-white text-left">
                <div>NguyenNam</div>
                <div class="text-xs text-gray-500 dark:text-gray-400">Admin</div>
              </div>
            </div>
            <!-- Drop down -->
            <div v-show="showDropDown"
                 class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                 role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1 text-left" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" tabindex="-1"
                   id="menu-item-0">Account settings</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" tabindex="-1"
                   id="menu-item-1">Support</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" tabindex="-1"
                   id="menu-item-2">License</a>
                <form method="POST" action="#" role="none">
                  <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                          tabindex="-1" id="menu-item-3">Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 h-[95vh] w-full  overflow-y-auto">
        <div class="rounded-md  ">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <!-- Main  -->
  </div>
</template>
<script>
import { defineComponent} from "vue";
import { storeToRefs } from 'pinia'
import {usemenu} from "@/stores/usemenu.js";

export default {
  setup() {
    const store = usemenu();
    const { selectedKeys,openKeys } = store;

    return {
      ...storeToRefs(store)
    }
  },
  data() {
    return {
      showDropDown: false,
      showSide: true,
      showDashBoard: false,
      showCryto: false,
      showCrm: false,
      showCourses: false,
      showWidgets: false,
      showEComerce: false,
      showPage: false,
      showSession: false,
      showUI: false,
      showTree: false,
      showTime: false,
      showForm: false,
      showChart: false,
      showIcon: false,
      showTable: false,
      showMap: false,
      showUser: false,
      showCalender: false,
      showEditor: false,
      showDrag: false,
      showImage: false,
      showVideo: false,
      showDropzone: false,
      showmenu: false
    }
  },
  methods: {
    // hide show side bar
    toggleSideBar() {
      this.showSide = !this.showSide

    },
    togglemodul() {
      this.showmodule = !this.showmodule
    },

    toggleshowDashBoard() {
      this.showDashBoard = !this.showDashBoard
    },
    toggleshowCryto() {
      this.showCryto = !this.showCryto
    },
    toggleshowCrm() {
      this.showCrm = !this.showCrm
    },
    toggleshowCourses() {
      this.showCourses = !this.showCourses
    },
    toggleshowWidgets() {
      this.showWidgets = !this.showWidgets
    },
    toggleshowEComerce() {
      this.showEComerce = !this.showEComerce
    },
    toggleshowPage() {
      this.showPage = !this.showPage
    },
    toggleshowSession() {
      this.showSession = !this.showSession
    },
    toggleshowUI() {
      this.showUI = !this.showUI
    },
    toggleshowTree() {
      this.showTree = !this.showTree
    },
    toggleshowTime() {
      this.showTime = !this.showTime
    },
    toggleshowChart() {
      this.showChart = !this.showChart
    },
    toggleshowForm() {
      this.showForm = !this.showForm
    },
    toggleshowIcon() {
      this.showIcon = !this.showIcon
    },
    toggleshowTable() {
      this.showTable = !this.showTable
    },
    toggleshowMap() {
      this.showMap = !this.showMap
    },
    toggleshowUser() {
      this.showUser = !this.showUser
    },
    toggleshowCalender() {
      this.showCalender = !this.showCalender
    },
    toggleshowEditor() {
      this.showEditor = !this.showEditor
    },
    toggleshowDrag() {
      this.showDrag = !this.showDrag
    },
    toggleshowImage() {
      this.showImage = !this.showImage
    },
    toggleshowVideo() {
      this.showVideo = !this.showVideo
    },
    toggleshowDropzone() {
      this.showDropzone = !this.showDropzone
    },
    toggleshowMenu() {
      this.showmenu = !this.showmenu
    },
    // toggle user
    toggleDrop() {
      this.showDropDown = !this.showDropDown
    }
  }

}

</script>

<style>

</style>
