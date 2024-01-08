import { hasAuthenticationCookie } from "@/utils/HelperFunction";

const getServerSidePropsPrivate = (context: any) => {
  const isAuthenticated = hasAuthenticationCookie(context);

  context.res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  if (!isAuthenticated) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  return { props: {} };
};

const getServerSidePropsPublic = (context: any) => {
  const isAuthenticated = hasAuthenticationCookie(context);

  if (isAuthenticated) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  return { props: {} };
};

export { getServerSidePropsPrivate, getServerSidePropsPublic };
