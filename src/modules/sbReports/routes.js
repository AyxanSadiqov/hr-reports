const sbReportsComp = () =>
  import(/* webpackChunkName: "sbReports" */ "./index");

export const sbReports = [
  {
    path: "/sb-reports",
    name: "sbReports",
    component: sbReportsComp,
    meta: {
      title: "Management dashboard",
      bgColorGray: true,
      acceptedRoles: "ALL"
    }
  },
];
