import ajax from "./ajax";

export const getAllProducts = () => ajax.get("products");

// export const deleteProdict = (productId) =>
//   ajax.delete(`products/ ${productId}`);

// export const getSearchedProducts = (value) =>
//   ajax.get(`products/search?q=${value}`);

// export const getProductsCategories = () => ajax.get("prodcts/categories");
