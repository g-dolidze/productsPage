import ajax from "./ajax";

export const getAllProducts = (range: number) =>
  ajax.post("products", {
    keyword: "",
    page_size: range,
    page_number: 0,
  });

export const getSearchedProducts = (searchvalue: string, range: number) =>
  ajax.post("products", {
    keyword: searchvalue,
    page_size: range,
    page_number: 0,
  });

export const registerNewUser = (user) =>
  ajax.post("register", {
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
    email: user.email,
    password: user.password,
  });
export const userLogin = (user) =>
  ajax.post("login", {
    email: user.email,
    password: user.password,
  });
