import ajax from "./ajax";

export const getAllProducts = () =>
  ajax.post("products", {
    keyword: "",
    page_size: 30,
    page_number: 0,
  });

// export const deleteProdict = (productId) =>
//   ajax.delete(`products/ ${productId}`);

export const getTvItems = () =>
  ajax.post("products", {
    keyword: `TV`,
    page_size: 30,
    page_number: 0,
  });

// export const getProductsCategories = () => ajax.get("prodcts/categories");
