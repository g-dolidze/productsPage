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

export const registerNewUser = (user: any) =>
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

export const editPersonalInfo = (values: PersonalInfo) =>
  ajax.post("/user", values, {
    headers: {
      Authorization: userKey,
    },
  });
