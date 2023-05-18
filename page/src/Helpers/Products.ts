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

// export const deleteProdict = (productId) =>
//   ajax.delete(`products/ ${productId}`);

// export const getProductsCategories = () => ajax.get("prodcts/categories");
