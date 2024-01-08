import { parseCookies } from "nookies";

export const hasAuthenticationCookie = (context: any) => {
  const getCookies = (context: any) => {
    return parseCookies(context);
  };

  const cookies = getCookies(context);
  return !!cookies["medium_login_session"];
};
