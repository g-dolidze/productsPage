import jwtDecode from "jwt-decode";

type UserToken = {
  exp: number;
  isAdmin: boolean;
  userId: string;
};

export const isUserAuthenticated = () => {
  const key = localStorage.getItem("token");
  if (!key) {
    return { isAdmin: false, isUser: false };
  }
  const userToken: UserToken = jwtDecode(key);
  if (userToken.isAdmin && Date.now() / 1000 < userToken.exp) {
    return { isAdmin: true, isUser: false };
  }
  if (!userToken.isAdmin && Date.now() / 1000 < userToken.exp) {
    console.log(userToken.isAdmin);
    return { isAdmin: false, isUser: true };
  }
};
