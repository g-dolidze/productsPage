import { number, string } from "yup";
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

export const getBrandProducts = (brandkind: string, brandName: string) =>
  ajax.post("products", {
    keyword: brandkind,
    page_size: 20,
    page_number: 0,
    filter: { brand: brandName },
  });
