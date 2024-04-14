const hrCommitteeComp = () =>
  import(/* webpackChunkName: "hrCommittee" */ "./index");

export const hrCommittee = [
  {
    path: "/hr-committee",
    name: "hrCommittee",
    component: hrCommitteeComp,
    meta: {
      title: "HR Committee",
      bgColorGray: true,
      acceptedRoles: "ALL"
    }
  },
];
