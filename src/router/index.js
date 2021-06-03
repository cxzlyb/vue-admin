import Vue from "vue";
import VueRouter from "vue-router";
import constantRoutes from "./constant";

Vue.use(VueRouter);

/**
 * 默认route children的长度大于1时将会出现子菜单,长度小于时不会出现子菜单(除非alwaysShow设为true)
 *
 * hidden 默认false 如果设置为true则不出现在菜单列表中
 * name 必填 路由的name
 * redirect 选填 若设为noRedirect 则在面包屑中不可以点击跳转
 * alwaysShow 为true时将会作为父菜单显示
 * meta:{
    title 需要在菜单和面包屑中展示的必填
    noCache 默认false 如果设为true 则页面将被缓存
    affix 默认false 如果设为true 则将固定在tags-view中
    breadcrumb 默认为true 如果设为false 将不会再面包屑中展示
    activeMenu 匹配到当前路由，菜单高亮的item,
    icon svg的name icon将在菜单栏显示
  }
 */

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});
const router = createRouter();
export function resetRouter () {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}
const files = require.context("./modules", false, /\.js$/);
const asyncRoutes = [];
files.keys().forEach(key => {
  const route = files(key).default || files(key);
  asyncRoutes.push(...route);
});
export { constantRoutes, asyncRoutes };
export default router;
