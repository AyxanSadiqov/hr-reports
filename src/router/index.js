import Vue from 'vue'
import VueRouter from "vue-router";
import { appSettings } from "@/services/appSettings/index";
import defaultLayout from "../layouts/default.vue";
import home from "../modules/home/home";
import errorLayout from "../layouts/404.vue";
import { userService } from "@/services/user/index";
import { allReports } from '@/modules/allReports/routes';
import { signIn } from '@/modules/signIn/routes';
import { managementDashboard } from '@/modules/managementDashboard/routes';
import { hrCommittee } from '@/modules/hrCommittee/routes';
import { sbReports } from '@/modules/sbReports/routes';
import { groupWideActivities } from '@/modules/groupWideActivities/routes';

Vue.use(VueRouter)

const routes = [
  ...signIn,
  {
    path: "",
    component: defaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: home,
        meta: {
          acceptedRoles: "ALL",
        },
        beforeEnter: (to, from, next) => {
          if ("ALL".includes(userService.userRole())) {
            next({ name: "allReports" });
            return;
          } else {
            next({ name: "signIn" });
            return;
          }
        },
      },
      ...allReports,
      ...managementDashboard,
      ...hrCommittee,
      ...sbReports,
      ...groupWideActivities
    ],
  },
  {
    path: "/404",
    name: "404 Error",
    component: errorLayout,
    meta: {
      acceptedRoles: "ALL",
      notRequiresAuth: true
    },
  },
  {
    path: "*",
    redirect: "/404",
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from) {
    if (to.name != from.name) return { x: 0, y: 0 };
  },
})

router.beforeEach(async (to, from, next) => {
  let documentTitle = `${process.env.VUE_APP_TITLE}`;
  if (to.meta.title) {
    documentTitle = `${to.meta.title}`;
  }
  document.title = documentTitle;

  // Arka plan rengi (varsayilan beyaz)
  if (to.meta.bgColorGray) appSettings.bgColorGray(true);
  else appSettings.bgColorGray(false);

  if (to.meta.notRequiresAuth) {
    next();
    return;
  }

  let hrEmail = localStorage.hrEmail
  if (hrEmail && !userService.isAuthenticated()) {
    userService.pullUserRole(localStorage.hrEmail);
  } else if (
    !userService.isAuthenticated()
  )
    next({ name: "signIn" });
  //Yetkilere göre router ayarı
  if (
    to.meta.acceptedRoles.includes(userService.userRole()) ||
    to.meta.acceptedRoles == "ALL"
  ) {
    next();
  } else {
    next({ name: "404 Error" });
  }
})

export default router
