
const routes = [
  {
    path: '/',
    component: () => import('pages/MainPage.vue'),
    children: [
      { path: '', comments: () => import('pages/IndexPage.vue') },
      { path: 'send', comments: () => import('pages/MainPageSecond.vue') },
      { path: 'home', comments: () => import('pages/MainHome.vue') },
      { path: 'my', comments: () => import('pages/MainMy.vue') },
      
    ]
  },
  {
    // path: '/',
    // component: () => import('../layouts/MainLayout.vue'),

    path: "/sms",
    component: () => import("pages/MainSms.vue"),
  },
  {
    path: "/home",
    component: () => import("pages/MainHome.vue"),
  },
  {
    path: "/setting",
    component: () => import("pages/MainSetting.vue"),
  },
  {
    path: "/my",
    component: () => import("pages/MainMy.vue"),
  },
  {
    path: "/addtexnik",
    component: () => import("pages/MainAddTexnik.vue"),
  },
  {
    path: "/send",
    component: () => import("pages/MainPageSecond.vue"),
  },
  {
    path: "/zakaz",
    component: () => import("pages/MainZakaz.vue"),
  },
  {
    path: "/addchek",
    component: () => import("pages/MainAddChek.vue"),
  },
  {
    path: "/chat",
    component: () => import("pages/MyChats.vue"),
  },
  {
    path: "/person",
    component: () => import("pages/MainPerson.vue"),
  },
  {
    path: "/profile",
    component: () => import("pages/MainProfil.vue"),
  },
  {
    path: "/order",
    component: () => import("pages/MyOrder.vue"),
  },
  {
    path: "/setting",
    component: () => import("pages/MainSetting.vue"),
  },
  {
    path: "/viz",
    component: () => import("pages/MenuViz.vue"),
  },
  {
    path: "/chek",
    component: () => import("pages/MainChek.vue"),
  },
  {
    path: "/shildik",
    component: () => import("pages/MainShildik.vue"),
  },
  {
    path: "/about",
    component: () => import("pages/MasterAbout.vue"),
  },
  {
    path: "/master",
    component: () => import("pages/MainMaster2.vue"),
  },




  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/",
    component: () => import("../pages/MainPage.vue"),
  },
];

export default routes;
