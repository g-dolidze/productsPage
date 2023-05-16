import ajax from "./ajax";

export const getAllProducts = () =>
  ajax.post("products", {
    keyword: " ",
    page_size: 30,
    page_number: 0,
  });
export const getSearchedProducts = (searchvalue: string) =>
  ajax.post("products", {
    keyword: searchvalue,
    page_size: 30,
    page_number: 0,
  });

// export const deleteProdict = (productId) =>
//   ajax.delete(`products/ ${productId}`);

// export const getProductsCategories = () => ajax.get("prodcts/categories");
