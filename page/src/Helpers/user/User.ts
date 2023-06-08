import ajax from "../ajax";
import { isUserAuthenticated } from "./isUserAuth";

type LoginFormData = {
  email: string;
  password: string;
};
type PersonalInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

const { userKey } = isUserAuthenticated();

export const registerNewUser = (user: UserItem) =>
  ajax.post("register", {
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
    email: user.email,
    password: user.password,
  });
export const userLogin = (user: LoginFormData) =>
  ajax.post("login", {
    email: user.email,
    password: user.password,
  });

export const getUserInfo = () =>
  ajax.get("me", {
    headers: {
      Authorization: userKey,
    },
  });

export const editPersonalInfo = (userPersonalInfo: PersonalInfo) =>
  ajax.post("/user", userPersonalInfo, {
    headers: {
      Authorization: userKey,
    },
  });

// const key = localStorage.getItem("token");
// export const getUserInfo = () =>
//   ajax.get("/me", {
//     headers: {
//       Authorization:
//         "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxY2FhMWI2Mi0zYWEwLTQ0MjAtYjU1Ni1kNTU1MmEwMDExMTEiLCJpc0FkbWluIjpmYWxzZSwiZXhwIjoxNjg1NzQxNDYyfQ.cgJVddu2eiz56O-h9sHgZBxUIj9TX8Fy9Ga329LwOOkmrr00eVypDqDa6FCOhqw6gt0CUPz_BbsjwAr4IjPcqw",
//     },
//   });
