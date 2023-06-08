import jwtDecode from "jwt-decode";

type UserType = {
  exp: number;
  isAdmin: boolean;
  userId: string;
};
export type AuthenticationResult = {
  isUser: boolean;
  isAdmin: boolean;
  userKey?: string;
};
export const isUserAuthenticated = (): AuthenticationResult => {
  const userKey = localStorage.getItem("token");
  if (!userKey) {
    return { isUser: false, isAdmin: false };
  }
  const userObject: UserType = jwtDecode(userKey);
  // console.log(userObject);
  if (Date.now() / 1000 > userObject.exp) {
    localStorage.removeItem("token");
    localStorage.removeItem("User");
    return { isUser: false, isAdmin: false };
  }

  return { isUser: true, isAdmin: userObject.isAdmin, userKey };
};

// export const isUserAuthenticated = () => {
//   const userKey = localStorage.getItem("AccessToken");
//   if (!userKey) {
//     return { isAdmin: false, isUser: false };
//   }
//   const userToken: UserToken = jwtDecode(userKey);
//   if (userToken.isAdmin && Date.now() / 1000 < userToken.exp) {
//     return { isAdmin: true, isUser: false };
//   }
//   if (!userToken.isAdmin && Date.now() / 1000 < userToken.exp) {
//     // console.log(userToken.isAdmin);
//     return { isAdmin: false, isUser: true };
//   }
// };
