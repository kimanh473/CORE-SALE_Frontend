import { createApp } from 'vue'
import './style.css'
import './assets/style/tailwind.css'
import './assets/style/global.css'
import "./assets/plugins/fontawesome/css/all.css";
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue';
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
// @ts-ignore
import vClickOutside from "click-outside-vue3"
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//import component
import LoadingOverlay from "./components/loading/LoadingOverlay.vue";
import ModalView from './components/modal/ModalView.vue';
/* add icons to the library */
const store = createPinia()
createApp(App)
    .use(router)
    .use(store)
    .use(Antd)
    .use(vClickOutside)
    .use(Toast)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('loading-overlay', LoadingOverlay)
    .component('modal-view', ModalView)
    .mount('#app')
