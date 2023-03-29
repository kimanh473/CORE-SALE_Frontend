import { createApp } from 'vue'
import App from './App.vue'

// import css
import './assets/css/app.css'

// import router
import router from './router'

//import antd
import Antd from 'ant-design-vue';

const app = createApp(App).use(Antd)
  app.use(router)
  app.mount('#app')
