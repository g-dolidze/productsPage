import jwtDecode from "jwt-decode";

type UserToken = {
  exp: number;
  isAdmin: boolean;
  userId: string;
};
export const isUserAuthenticated = () => {
  const key = localStorage.getItem("token");
  if (!key) return false;
  const userToken: UserToken = jwtDecode(key);

  return Date.now() / 1000 < userToken.exp;
};
export const logOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
