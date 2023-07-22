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

export const getBransFromApi = () => ajax.get("brands");

export const getBrandProducts = (
  brandkind: string,
  range: number,
  brandName: string
) =>
  ajax.post("products", {
    keyword: brandkind,
    page_size: range,
    page_number: 0,
    filter: { brand: brandName },
  });
export const getSimilarProducts = (
  brandkind: string,
  range: number,
  brandName: string
) =>
  ajax.post("products", {
    page_size: range,
    page_number: 0,
    filter: { brand: brandName, title: brandkind },
  });
