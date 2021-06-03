import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'normalize.css';
import ElementUI from "element-ui";
import './styles/element-variables.scss';
import "@/assets/scss/element-variables.scss";
import '@/styles/index.scss';
import Request from "@/utils/request";
import "./icons";
import './permission';

Vue.config.productionTip = false;
Vue.prototype.$request = Request;
Vue.use(ElementUI, { size: 'small' });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
