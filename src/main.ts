import { createApp } from 'vue'
import './style.css'
import "./assets/plugins/fontawesome/css/all.css";
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue';
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
// @ts-ignore
import vClickOutside from "click-outside-vue3"
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
const store = createPinia()
createApp(App)
    .use(router)
    .use(store)
    .use(Antd)
    .use(vClickOutside)
    .use(Toast)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
