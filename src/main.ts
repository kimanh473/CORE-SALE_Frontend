import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue';
const store = createPinia()
createApp(App).use(router).use(store).use(Antd).mount('#app')
