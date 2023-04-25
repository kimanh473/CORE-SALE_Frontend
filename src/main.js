import { createApp } from 'vue'
import App from './App.vue'
// import css
import './assets/css/app.css'

// import router
import router from './router'

//import antd
import Antd from 'ant-design-vue';
// import fontawesome
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(fas);

const app = createApp(App)
  app.use(router)
  app.use(Antd)
  app.use('fa',FontAwesomeIcon)
  app.mount('#app')
