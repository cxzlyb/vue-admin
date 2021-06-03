import Layout from "@/layout";
export default [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login"),
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: "/",
    name: "Home",
    component: Layout,
    redirect: "home",
    meta: {
      title: 'home',
      icon: 'dashboard'
    },
    children: [
      {
        path: "home",
        component: () => import("@/views/Home"),
        name: "home1",
        meta: {
          title: "主页2"
        }
      },
      {
        path: "home2",
        name: "home2",
        component: () => import("@/views/Home"),
        meta: {
          title: "主页3"
        },
        redirect: '/home2/detail',
        children: [
          {
            path: "detail",
            name: 'home about us',
            component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
            meta: {
              title: '关于我们2',
              icon: 'user'
            }
          },
          {
            path: "detail2",
            name: 'home about us2',
            component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
            meta: {
              title: '关于我们3',
              icon: 'user'
            }
          }
        ]
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: Layout,
    redirect: "/about/detail",
    alwaysShow: true,
    meta: {
      title: 'about',
      icon: 'people'
    },
    children: [
      {
        path: "detail",
        name: 'about us',
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
        meta: {
          title: '关于我们',
          icon: 'user'
        }
      }
    ]
  }
];
