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

// export const registerNewUser = (firstName, lastName, email, password) =>
//   ajax.post("register", {
//     firstName: "",
//     lastName: "",
//     phoneNumber: "",
//     email: "",
//     password: "",
//   });
