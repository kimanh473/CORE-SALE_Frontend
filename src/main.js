import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
// import css
import './assets/css/app.css'

// import router
import router from './router/index.js'
//import axios
import axios from "axios";

window.axios = axios;
//import antd

import {
    Pagination,
    Checkbox,
    Input,
    Select,
    Avatar,
    Table,
    Card,
    Menu,
    List,
    Drawer,
    Button,
    message
} from 'ant-design-vue';

// import fontawesome
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(fas);
const pinia = createPinia()
const app = createApp(App)
app.use(pinia);
app.use(router),
    app.use(Pagination),
    app.use(Checkbox),
    app.use(Input),
    app.use(Select),
    app.use(Avatar),
    app.use(Table),
    app.use(Card),
    app.use(Menu),
    app.use(List),
    app.use(Drawer),
    app.use(Button),
    app.use('fa', FontAwesomeIcon)
app.mount('#app')
app.config.globalProperties.$message = message;

