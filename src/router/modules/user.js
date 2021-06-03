import Layout from "@/layout";
export default [
  {
    path: "/about",
    name: "About",
    component: Layout,
    redirect: "/about/detail",
    alwaysShow: true,
    meta: {
      title: 'about',
      icon: 'user'
    },
    children: [
      {
        path: "detail",
        name: 'about us',
        component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue"),
        meta: {
          title: '关于我们',
          icon: 'user'
        }
      }
    ]
  }
];
