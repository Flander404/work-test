const routes = [
  {
    // path: '/',
    // component: () => import('../layouts/MainLayout.vue'),

    path: "/about",
    component: () => import("layouts/MainSms.vue"),
  },
  {
    path: "/home",
    component: () => import("layouts/MainHome.vue"),
  },
  {
    path: "/my",
    component: () => import("layouts/MainMy.vue"),
  },
  {
    path: "/addtexnik",
    component: () => import("layouts/MainAddTexnik.vue"),
  },
  {
    path: "/zakaz",
    component: () => import("layouts/MainZakaz.vue"),
  },
  {
    path: "/chek",
    component: () => import("layouts/MainAddChek.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
  },
];

export default routes;
