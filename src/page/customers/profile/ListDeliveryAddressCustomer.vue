<Transition name="slide-up">
<div v-show="isChangePermission == true">
  <a-tabs
      v-model:activeKey="activeKey"
      animated
      style="padding-left: 15px"
  >
    <a-tab-pane key="1" tab="Phân quyền nhóm người dùng"
    ><div class="w-full inner">
      //
    </div
    ></a-tab-pane>
    <a-tab-pane key="2" tab="Phân quyền website">
      <div class="flex">
        //
      </div>
    </a-tab-pane>
    <a-tab-pane key="3" tab="Phân quyền kho">
      <div class="flex">
        //
      </div
    ></a-tab-pane>
  </a-tabs>
</div>
</Transition>