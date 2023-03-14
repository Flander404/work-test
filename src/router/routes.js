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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
  },
];

export default routes;
