const allReportsComp = () =>
  import(/* webpackChunkName: "allReports" */ "./index");

export const allReports = [
  {
    path: "/all-reports",
    name: "allReports",
    component: allReportsComp,
    meta: {
      title: "All reports",
      bgColorGray: true,
      acceptedRoles: "ALL"
    }
  },
];
