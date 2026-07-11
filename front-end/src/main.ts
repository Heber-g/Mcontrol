import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.ts'

//createApp(App).mount('#app')

const app = createApp(App)

app.use(router)

app.mount('#app')
//app.use(router);
//app.mount('#app');
