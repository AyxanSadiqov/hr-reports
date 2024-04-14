const signInComp = () =>
  import(/* webpackChunkName: "signIn" */ "./index");

export const signIn = [
  {
    path: "/sign-in",
    name: "signIn",
    component: signInComp,
    meta: {
      title: "Sign in",
      bgColorGray: true,
      notRequiresAuth: true,
    }
  },
];
