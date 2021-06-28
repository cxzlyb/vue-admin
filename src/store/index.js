import Vue from "vue";
import Vuex from "vuex";
import getters from "@/store/getters";
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);
const files = require.context("./modules", false, /\.js$/);
const modules = {};
const a = 1;
files.keys().forEach(key => {
  const name = require("path").basename(key, ".js");
  modules[name] = files(key).default || files(key);
  modules[name].namespaced = true; // 开启命名空间
});
export default new Vuex.Store({
  modules,
  getters,
  plugins: [createPersistedState()]
});
