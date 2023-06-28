<script>
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import { collapsed } from "./state";
// import { FormatRole } from "@/constants/FormatAll";
// import { useUserProfile } from "@/store/modules/user/userProfile";
import { storeToRefs } from "pinia";
export default {
  name: "SubMenuItem",
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
    const isActive = computed(() => route.path == props.to);
    const showChildren = ref(true);
    // const profile = useUserProfile();
    // const { userProfile } = storeToRefs(profile);
    // if (props.data) {
    //   if (props.data.find((item) => item.to == route.path)) {
    //     showChildren.value = true;
    //   } else {
    //     showChildren.value = false;
    //   }
    // }
    const checkRoute = (index) => {
      if (index == route.path) {
        return true;
      } else {
        return false;
      }
    };
    const toggleShowChildren = () => {
      showChildren.value = !showChildren.value;
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
        return "";
      } else {
        return "pl-4";
      }
    };
    return {
      isActive,
      collapsed,
      showChildren,
      checkRoute,
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
    <div class="flex-row">
      <router-link
        :to="to"
        class="flex items-center py-3"
      >
        <div class="flex items-center text-[var(--color-text-submenu)]">
          <div class="flex flex-col items-center">
            <div class="flex items-center" v-if="icon">
              <i
                style="
                  font-size: 54px;
                  width: 25px;
                  height: 25px;
                  text-align: left;
                  padding-top: 3px;
                "
                class="flex items-center pl-1"
                :class="icon"
              ></i>
            </div>
            <div
              v-if="collapsed"
              class="flex-nowrap text-left pl-2 text-[15px]"
            >
              {{ label }}
            </div>
          </div>
          <div v-if="!collapsed" style="" class="flex-nowrap text-left py-4">
            {{ label }}
          </div>
        </div>
      </router-link>
    </div>
    <div class="item-container flex-2 ml-8" v-if="showChildren">
      <menu-item
        class="hover: bg-red-500 text-white flex-column border-l-2 just"
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

<style></style>
