import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

Vue.use(ElementUI);

const apps = [{
        name: 'balm-login', //应用名字
        entry: '//localhost:10002', //默认加载这个html，解析里面的js 动态的执行 （子应用必须支持跨域）
        container: '#balm-login', //容器名
        activeRule: '/balm-login', //激活的路径
        props: {
            a: '嘻嘻哈哈'
        }
    },
    {
        name: 'balm-ui',
        entry: '//localhost:10001',
        container: '#balm-ui',
        activeRule: '/balm-ui'
    },

]
registerMicroApps(apps); //注册应用
start({
    prefetch: false //取消预加载
});
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')