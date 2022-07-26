import { createApp, VueElement } from 'vue'
import './style.css'
import App from './App.vue'
// import less from 'less'
// import router from './router'
import { initRouter } from './router';


const app =createApp(App);
// app.use(router);
//路由封装到index.ts文件的方法里,防止别的地方调用
initRouter(app);
app.mount('#app');
