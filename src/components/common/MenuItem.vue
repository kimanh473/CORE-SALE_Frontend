<script>
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import { collapsed } from "./state";
// import { FormatRole } from "@/constants/FormatAll";
// import { useUserProfile } from "@/store/modules/user/userProfile";
import { storeToRefs } from "pinia";
export default {
  name: "MenuItem",
  props: {
    to: { type: String, required: true },
    label: { type: String, required: true },
    smallLabel: { type: String },
    icon: { type: String },
    depth: { type: Number, required: true },
    data: { type: Array },
    permission: { type: Array },
  },
  setup(props) {
    const route = useRoute();
    // const isActive = computed(() => route.path == props.to);
    const showChildren = ref(true);
    const isActive = ref(true);
    // const profile = useUserProfile();
    // const { userProfile } = storeToRefs(profile);
    // if (props.data) {
    //   if (props.data.find((item) => item.to == route.path)) {
    //     showChildren.value = true;
    //   } else {
    //     showChildren.value = false;
    //   }
    // }
    // const checkRoute = (index) => {
    //   if (index == route.path) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // };
    const checkActive = (index) => {
      if (index == true) {
        return ' active';
      } else {
        return '';
      }
    };
    const toggleShowChildren = () => {
      // showChildren.value = !showChildren.value;
      // checkActive(isActive);
    };
    // const checkRole = (index) => {
    //   for (let i = 0; i < index.length; i++) {
    //     if (FormatRole(index[i], userProfile.value) == true) {
    //       return true;
    //     }
    //   }
    // };
    const checkCenter = (index) => {
      if (index == true) {
        return " justify-center";
      } else {
        return "pl-4";
      }
    };
    return {
      isActive,
      collapsed,
      showChildren,
      // checkRoute,
      // userProfile,
      // checkRole,
      toggleShowChildren,
      checkCenter,
    };
  },
};
</script>
<template>
  <div
    class="menu-item flex-row"
  >
    <div class="flex-row items-center py-2">
        <div class="flex justify-center items-center " style="color: var(--color-text-menu)">
          <div class="flex flex-col items-center justify-center">
            <div class="flex justify-center items-center" v-if="icon">
              <i
                style="
                  font-size: 19px;               
                  height: 30px;
                  text-align: left;               
                "
                class="flex items-center"
                :class="icon"
              ></i>
            </div>
            <div
              v-if="collapsed"
              style="
                font-size: 11px;
                text-align: left;
                white-space: nowrap;
                margin-top: 8px;              
              "
            >
              {{ label }}
            </div>
          </div>
          <div v-if="!collapsed" style="" class="flex-nowrap text-left ml-3">
            {{ label }}
          </div>
        </div>
    </div>
    <div class="item-container flex-2 ml-8" v-if="showChildren">
      <menu-item
        class="hover:bg-white/20 flex-column border-l-2"
        v-for="(item, index) in data"
        :key="index"
        :label="item.label"
        :icon="item.icon"
        :depth="depth + 1"
        :data="item.children"
        :to="item.to"
        v-show="!collapsed"
      />
    </div>
  </div>
</template>

<style>
 /* .active {
    background-color: red;
  } */
</style>
