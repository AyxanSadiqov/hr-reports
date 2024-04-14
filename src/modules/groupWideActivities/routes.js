const groupWideActivitiesComp = () =>
  import(/* webpackChunkName: "groupWideActivities" */ "./index");

export const groupWideActivities = [
  {
    path: "/group-wide-activities",
    name: "groupWideActivities",
    component: groupWideActivitiesComp,
    meta: {
      title: "Group wide activities",
      bgColorGray: true,
      acceptedRoles: "ALL"
    }
  },
];
