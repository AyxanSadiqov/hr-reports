const managementDashboardComp = () =>
  import(/* webpackChunkName: "managementDashboard" */ "./index");

export const managementDashboard = [
  {
    path: "/management-dashboard",
    name: "managementDashboard",
    component: managementDashboardComp,
    meta: {
      title: "Management dashboard",
      bgColorGray: true,
      acceptedRoles: "ALL"
    }
  },
];
